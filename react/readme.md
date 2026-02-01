# React.js Memo (2025 Edition)

## Description
Un guide synthétique, interactif et modulaire pour apprendre et réviser les bases essentielles de React.js de manière moderne (Hooks, Functional Components, JSX).

Ce projet a été conçu pour être :
- **Simple** : Concentré sur l'essentiel.
- **Modulaire** : Une structure claire pour chaque concept.
- **Interactif** : Des démonstrations en temps réel (Virtual DOM, State, Effects).
- **Responsive** : Accessible sur mobile et desktop.

## Structure
Le site est structuré comme une Single Page Application (SPA) simulée en Multi-Page Application (MPA) statique pour simplifier l'hébergement et le SEO.
- **Dashboard** : `index.html`
- **Modules** : `modules/` (12 chapitres + Quiz)
- **Navigation** : Gérée dynamiquement par `js/nav.js`

## Technologies
- **HTML5** / **CSS3** (Variables CSS, Flexbox, Grid)
- **JavaScript (ES6+)**
- **Pas de framework (Vanilla JS)** pour simuler React dans les démos.
- **Docker / Nginx** : Prêt pour le déploiement sur Coolify/VPS.

## Installation / Hébergement
1. Cloner le repo :
   ```bash
   git clone https://github.com/votre-user/react-memo.git
   ```
2. Ouvrir `index.html` dans votr navigateur.
3. Déploiement Docker :
   Utiliser l'image `nginx:alpine` et monter le volume :
   `./react:/usr/share/nginx/html`

## Auteur
Créé par **Geoffroy Streit** (Hylst).
Apprenant passionné Web Dev, Data, IA.
Site personnel : [hylst.fr](https://hylst.fr)

## Licence
MIT License - Partage libre avec attribution.
