# Python Web Memo 🌐

Un mémo interactif et complet sur l'écosystème du développement Web en Python.

## 🚀 Démarrage Rapide

Le projet est livré sous forme de site statique généré.

### Consultation simple
Ouvrez simplement `index.html` dans votre navigateur favori.

### Développement & Build
Si vous souhaitez modifier le contenu ou le design, le projet utilise un script Python pour assembler les modules :

1. Assurez-vous d'avoir Python 3.x installé.
2. Modifiez les fichiers sources dans le dossier `src/content/` ou `src/parts/`.
3. Lancez la génération :
   ```powershell
   python build.py
   ```
4. Actualisez votre navigateur.

## 🛠 Technologies utilisées

- **Frontend** : HTML5, CSS3 (Custom Variables), Vanilla JavaScript.
- **Build System** : Python (Scripting personnalisé pour modularité statique).
- **Design System** : Thème sombre, typographie Inter, micro-animations.
- **Interaction** : Moteur de quiz embarqué, gestionnaire de copie de code.

## 📂 Organisation du code

- `src/` : Source du site (Layout, composants, modules de cours).
- `data/` : Données structurées (Quiz, structure du site).
- `build.py` : Le "cœur" qui assemble les fragments HTML en un fichier unique.
- `style.css` : Le système de design centralisé.

## 🐳 Déploiement

Le projet est conçu pour être facilement containerisé. Un exemple de `Dockerfile` est présent dans le mémo (Section 12) pour un déploiement via Nginx Alpine.

---
*Projet maintenu par Hylst.*
