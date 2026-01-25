import sys
import json
import os
import hashlib
import unicodedata
import re
import requests

# Configuration de l'API
DEEPSEEK_API_URL = "https://api.deepseek.com/v1/chat/completions"
DEFAULT_MODEL = "deepseek-chat"

def slugify(value):
    """Normalise les chaînes pour créer des slugs"""
    value = unicodedata.normalize('NFKD', value).encode('ascii', 'ignore').decode('ascii')
    value = re.sub(r'[^\w\s-]', '', value.lower())
    return re.sub(r'[-\s]+', '-', value).strip('-_')

def generate_id(filename):
    """Génère un ID unique à partir du nom de fichier"""
    base = os.path.splitext(filename)[0]
    clean_base = slugify(base)
    hash_part = hashlib.md5(filename.encode()).hexdigest()[:6]
    return f"remote-{clean_base}-{hash_part}"

def parse_list(value):
    """Convertit une chaîne CSV en liste nettoyée"""
    return [item.strip() for item in str(value).split(',') if item.strip()]

def generate_ai_content(api_key, prompt):
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }
    
    data = {
        "model": "deepseek-chat",
        "messages": [{"role": "user", "content": prompt}],
        "temperature": 0.7,
        "max_tokens": 400
    }

    try:
        response = requests.post(DEEPSEEK_API_URL, json=data, headers=headers)
        response.raise_for_status()
        return response.json()['choices'][0]['message']['content']
    except Exception as e:
        print(f"Erreur API: {str(e)}")
        return None
def build_ai_prompt(track_data, missing_fields):
    """Construit le prompt pour l'API d'IA"""
    context = f"""
    Titre: {track_data['title']}
    Album: {track_data['album']}
    Genres: {', '.join(track_data.get('genre', []))}
    Mots-clés existants: {', '.join(track_data.get('keywords', []))}
    Mood existant: {', '.join(track_data.get('mood', []))}
    Usage existant: {', '.join(track_data.get('usage', []))}
    Commentaire existant: {track_data.get('comment', 'Aucun')}
    """

    instructions = """
    Règles strictes :
    1. Mood: 3-5 adjectifs décrivant l'atmosphère
    2. Usage: 3-5 utilisations concrètes
    3. Comment: 1 phrase descriptive engageante
    4. Story: 1 phrase littéraire intrigante (15 mots max)
    5. Format JSON uniquement, sans commentaires
    """

    return f"{context}\n{instructions}\nGénère UNIQUEMENT un JSON avec: {', '.join(missing_fields)}"

def enhance_with_ai(api_key, track):
    """Améliore les métadonnées avec l'IA"""
    # Détection des champs manquants
    missing = []
    for field in ['mood', 'usage', 'comment', 'story']:
        current = track.get(field)
        if isinstance(current, list) and not current:
            missing.append(field)
        elif not current:
            missing.append(field)

    if not missing:
        return track

    print(f"\n⚡ Génération IA pour [ {track['title']} ]")
    print(f"Champs à compléter: {', '.join(missing)}")

    # Appel API
    try:
        response = requests.post(
            DEEPSEEK_API_URL,
            headers={"Authorization": f"Bearer {api_key}"},
            json={
                "model": DEFAULT_MODEL,
                "messages": [{"role": "user", "content": build_ai_prompt(track, missing)}],
                "temperature": 0.7
            },
            timeout=15
        )
        response.raise_for_status()
        ai_content = response.json()['choices'][0]['message']['content']
    except Exception as e:
        print(f"❌ Erreur API: {str(e)}")
        return track

    # Traitement de la réponse
    try:
        ai_clean = re.sub(r'```json|```', '', ai_content).strip()
        ai_data = json.loads(ai_clean)
        
        for field in missing:
            if field in ai_data:
                # Fusion des listes
                if isinstance(track[field], list):
                    existing = set(track[field])
                    new = set(ai_data[field]) if isinstance(ai_data[field], list) else {ai_data[field]}
                    track[field] = list(existing | new)
                else:
                    track[field] = ai_data[field]
                
                print(f"✅ {field.capitalize()} mis à jour")

    except json.JSONDecodeError:
        print(f"❌ Réponse IA invalide:\n{ai_content}")

    return track

def main(type_music=None, csv_path=None, api_key=None):
    """Point d'entrée principal du programme"""
    
    # Configuration interactive si besoin
    if not type_music:
        type_music = input("🎵 Type de musique (ex: 'soundchip'): ").strip()
    
    if not csv_path or not os.path.exists(csv_path):
        csv_path = input("📁 Chemin du fichier CSV: ").strip()
    
    if not api_key:
        api_key = input("🔑 Clé API Deepseek: ").strip()

    # Lecture du CSV
    print("\n📥 Lecture du fichier CSV...")
    try:
        with open(csv_path, 'r', encoding='utf-16') as f:
            raw = f.read().lstrip('\ufeff')  # Gestion du BOM
            lines = [line.strip() for line in raw.split('\n') if line.strip()]
    except Exception as e:
        print(f"❌ Erreur de lecture: {str(e)}")
        return

    # Validation des en-têtes
    headers = [h.strip().lower() for h in lines[0].split(';')]
    required = {'title', 'artist', 'album', 'year', 'genre', 'comment', 
               'filename', 'keywords', 'mood', 'usage', 'story', 'song', 'note'}
    
    if missing := required - set(headers):
        print(f"❌ Colonnes manquantes: {', '.join(missing)}")
        print(f"En-têtes détectés: {headers}")
        return

    # Conversion des entrées
    entries = []
    print("\n🔄 Conversion des données...")
    for line in lines[1:]:
        values = line.split(';')
        if len(values) != len(headers):
            print(f"⚠️ Ligne ignorée: {line[:50]}...")
            continue
            
        row = dict(zip(headers, values))
        try:
            entries.append({
                "id": generate_id(row['filename']),
                "title": row['title'],
                "artist": row['artist'],
                "album": row['album'],
                "genre": parse_list(row['genre']),
                "coverArt": f"/music/{type_music}/{os.path.splitext(row['filename'])[0]}.jpg",
                "audioSrc": f"/music/{type_music}/{row['filename']}",
                "fileName": row['filename'],
                "keywords": parse_list(row['keywords']),
                "year": row['year'],
                "comment": row.get('comment', ''),
                "lyrics": row.get('lyrics', ''),
                "mood": parse_list(row.get('mood', '')),
                "usage": parse_list(row.get('usage', '')),
                "story": row.get('story', ''),
                "song": int(row['song']) if row['song'].strip() else 0,
                "note": int(row['note']) if row['note'].strip() else 0
            })
        except KeyError as e:
            print(f"❌ Clé manquante: {e} dans: {line[:50]}...")
            continue

    # Amélioration IA
    if api_key != 'skip':
        print("\n🧠 Amélioration IA des métadonnées...")
        for i, entry in enumerate(entries):
            entries[i] = enhance_with_ai(api_key, entry)
            print(f"Progrès: {i+1}/{len(entries)}")

    # Écriture du JSON
    json_path = os.path.splitext(csv_path)[0] + ".json"
    try:
        with open(json_path, 'w', encoding='utf-8') as f:
            json_str = json.dumps(
                {type_music: entries},
                ensure_ascii=False,
                indent=2,
                separators=(',', ': ')
            )
            # Formatage des listes sur une ligne
            json_str = re.sub(
                r'(\"[a-z]+\": )\[\n\s+(.+?)\n\s+\]',
                r'\1[\2]',
                json_str
            )
            f.write(json_str)
    except Exception as e:
        print(f"❌ Erreur d'écriture: {str(e)}")
        return

    print(f"\n✅ Conversion réussie! {len(entries)} titres sauvegardés dans:")
    print(f"→ {os.path.abspath(json_path)}")

if __name__ == "__main__":
    try:
        main(*sys.argv[1:4])
    except Exception as e:
        print(f"""
⚠️ Utilisation:
python {sys.argv[0]} [type_music] [fichier.csv] [api_key]

Exemple:
python {sys.argv[0]} atari musique.csv sk-or-v1-1234
""")