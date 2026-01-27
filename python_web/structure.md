# Structure du Projet: Python Web Memo

Ce document détaille l'organisation des fichiers et la logique de construction du site.

## 🌳 Arborescence

```text
/python_web
├── data/                       # Données structurées (JSON)
│   ├── quiz_web.json           # Banque de questions pour le quiz principal
│   └── site_structure.json     # Définition de l'ordre des sections et de la nav
├── src/                        # Fragments sources (HTML)
│   ├── layout.html             # Structure de base avec placeholders ({{CONTENT}})
│   ├── content/                # Contenu pédagogique par module
│   │   ├── 00_panorama.html
│   │   ├── 01_env.html
│   │   └── ...
│   └── parts/                  # Composants réutilisables
│       ├── header.html
│       ├── footer.html
│       └── ...
├── build.py                    # Script de génération statique
├── index.html                  # FICHIER GÉNÉRÉ (Ne pas modifier directement)
├── style.css                   # Styles globaux et variables CSS
├── script.js                   # Logique frontend (interaction, copie)
└── changelog.md                # Historique des évolutions
```

## ⚙️ Logique de Build (`build.py`)

Le script `build.py` effectue les actions suivantes :
1. **Validation** : Vérifie l'intégrité des fichiers JSON et la présence de tous les fragments de contenu.
2. **Assemblage** :
   - Lit `site_structure.json` pour connaître l'ordre des modules.
   - Génère dynamiquement le `header` et la `Table des Matières` (TOC).
   - Concatène tous les fichiers de `src/content/`.
3. **Injection** : Remplace les variables de type `{{NAME}}` dans `layout.html` par le contenu généré.
4. **Output** : Écrit le résultat final dans `index.html` à la racine.

## 🎨 Design System

Le design est piloté par des variables CSS définies au début de `style.css`. 
**Règle d'or** : Jamais de couleurs hardcodées. Utilisez toujours `--primary`, `--bg`, `--card`, etc., pour assurer la cohérence et faciliter les changements de thèmes futurs.
