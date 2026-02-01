# Structure du Projet

Ce projet suit une architecture hybride **MPA (Multi-Page Application) Statique** avec une injection dynamique d'interface pour la maintenabilité.

## Arborescence
```
react/
├── index.html              # Dashboard / Table des matières
├── readme.md               # Documentation générale
├── about.md                # Informations auteur
├── structure.md            # Ce fichier
├── changelog.md            # Historique des versions
├── style.css               # Styles globaux (Thème + Layout)
├── script.js               # Démos interactives (utilisé par les modules)
├── assets/
│   └── img/
│       ├── react-icon-custom.webp  # Favicon
│       └── react-social-card.webp  # OpenGraph Image
├── js/
│   └── nav.js              # Script d'injection Header/Sidebar
└── modules/                # Contenu pédagogique (1 fichier = 1 chaptire)
    ├── 01_jsx.html
    ├── 02_components.html
    ├── ...
    └── quiz.html
```

## Fonctionnement Technique

### 1. Modularité
Chaque chapitre du cours est un fichier HTML autonome (`modules/XX_name.html`).
Cela permet :
- Un référencement (SEO) optimal page par page.
- Une lecture du code source simplifiée pour les débutants.
- Une maintenance facile (pas de build complex type Webpack/Vite pour ce projet éducatif simple).

### 2. Navigation Unifiée (`nav.js`)
Pour éviter de dupliquer le menu et le header sur les 13 fichiers, le script `js/nav.js` :
- Détecte la page active.
- Injecte le HTML du `<header>` (Menu Responsive).
- Injecte le HTML de la `<aside>` (Sidebar de navigation).
- Gère la classe `.active` sur les liens correspondants.

### 3. Styles
- **Variables CSS** : Utilisation intensive de `:root`pour faciliter le theming (mode sombre par défaut).
- **Responsive** : Breakpoints pour transformer la Sidebar latérale en menu burger sur mobile.

### 4. Quiz
Le Quiz est un module Javascript indépendant (`quiz-engine.js` chargé via le parent `assets`) configuré par un fichier JSON `quiz_react.json`.
