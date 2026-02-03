# Structure du Projet

L'architecture suit une logique modulaire statique.

```text
cybersecurity/
├── index.html              # Page d'accueil (Landing Page)
├── readme.md               # Documentation générale
├── assets/                 # Ressources statiques
│   ├── css/
│   │   ├── style.css       # Styles globaux
│   │   └── quiz-style.css  # Styles spécifiques au Quiz
│   ├── js/
│   │   ├── layout.js       # Injection Nav/Footer & Gestion Menu
│   │   ├── script.js       # Logique interactive (Terminal, Vocabulaire)
│   │   └── quiz-engine.js  # Moteur du Quiz
│   └── img/                # Images & Icones
├── components/             # Fragments HTML réutilisables
│   ├── nav.html            # Barre de navigation
│   └── footer.html         # Pied de page
└── modules/                # Pages de contenu
    ├── m00_fundamentals.html
    ├── m01_web_attacks.html
    ├── m02_cryptography.html
    ├── m03_network.html
    ├── m04_auth_identity.html
    ├── m05_active_directory.html
    ├── m06_malware.html
    ├── m07_cloud_sec.html
    ├── m08_forensics.html
    ├── m09_tools.html
    └── quiz.html
```

## Fonctionnement du Layout

Le fichier `assets/js/layout.js` est chargé sur chaque page.
Il effectue un `fetch()` des fichiers `components/nav.html` et `components/footer.html` et les injecte dans les balises `<header>` et `<footer>`.
Il ajuste ensuite dynamiquement les liens (`href`) pour qu'ils fonctionnent (gestion des chemins relatifs `../`).
