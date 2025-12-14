**CONTEXTE DU PROJET :**
Je développe un cours "Mémo Java Expert" sous forme de site web statique ultra-rapide (HTML/CSS/JS natif). Ce n'est pas un tutoriel pour grands débutants, mais une "antisèche technique" dense et moderne pour développeurs, couvrant de Java 10 à Java 21+.

**STRUCTURE DES FICHIERS (NE PAS MODIFIER) :**
- `java/index.html` : L'intégralité du contenu en une seule page avec navigation sticky (`#c1` à `#c20`).
- `java/style.css` : Thème "Java Dark" (Fond bleu nuit `#0d1117`, Accents Orange `#f89820`).
- `java/script.js` : Gère uniquement les boutons de copie de code et les `details/summary`.

**PHILOSOPHIE & TON :**
- **Ton :** Direct, technique, concis. Pas de "Bonjour les amis", pas de "Guide Ultime". On va droit au but.
- **Format :** Utilisation massive de `<table>` pour les références (méthodes, types) et de blocs de code `<pre>` pour la syntaxe.
- **Moderne :** On privilégie TOUJOURS la syntaxe moderne (ex: `var`, `switch` expression, `Records`, `List.of`). Le vieux Java (Java 5-7) n'est mentionné que pour contraste.

**ÉTAT D'AVANCEMENT :**
- Les 20 chapitres sont structurellement en place.
- Une passe "V2 Enrichment" a été faite sur les **Chapitres 0 à 5** et **12 (Collections)** pour ajouter des tableaux exhaustifs (Primitifs, Méthodes String, Méthodes List/Map).
- Les sections POO (6-10) et Avancé (16-20) sont présentes mais mériteraient une densification similaire (plus de tableaux récapitulatifs).

**CONSIGNES POUR LA SUITE :**
1. **Ne casse jamais le CSS existant.** Le design est calé.
2. **Garde le format HTML pur.** Pas de framework JS, pas de build process.
3. Si tu dois enrichir la **POO (Chap 6-10)** : Ajoute des tableaux comparatifs (ex: Abstract Class vs Interface).
4. Si tu dois enrichir la partie **Avancé (Chap 16-20)** : Ajoute des exemples concrets pour les `Virtual Threads` ou l'API `Time`.
5. **Règle d'or :** Si tu ajoutes du code, il doit être copiable et fonctionnel.

**TA PREMIÈRE TÂCHE :**
Analyse `java/index.html` et propose une densification du chapitre **[INSÉRER NUMÉRO CHAPITRE ICI]** en suivant le modèle des chapitres 2 et 4 (Tableaux de référence + Code concis).
