# Mémo Java (SE + EE)

Ce projet est un guide interactif et moderne sur l'écosystème Java, conçu pour être statique, performant et facile à naviguer.

## 🚀 Fonctionnalités

- **Navigation Responsive** : Menu mobile type "hamburger" et sidebar TOC (Table des Matières) sur desktop large.
- **Design System** : Thème sombre soigné avec variables CSS (pas de couleurs hardcodées).
- **Contenu Modulaire** : Chargement dynamique des chapitres HTML pour une maintenance aisée.
- **Interactivité** : Quiz intégré, diagrammes Mermaid.js, et copie de code en un clic.
- **SEO Ready** : Balises Open Graph, Twitter Cards et URLs canoniques.

## 🛠️ Stack Technique

- **Frontend** : HTML5, CSS3, Vanilla JS
- **Déploiement** : Docker + Nginx (Alpine)
- **Hébergement** : VPS via Coolify
- **Dépendances** : 
  - [Mermaid.js](https://mermaid.js.org/) (Diagrammes)
  - [Google Fonts](https://fonts.google.com/) (Outfit & JetBrains Mono)

## 📂 Structure du Projet

- `index.html` : Point d'entrée, chargeur de modules.
- `style.css` : Styles globaux, variables, responsive.
- `script.js` : Logique UI (Menu, TOC, Scroll, Quiz).
- `modules/` : Contenu pédagogique (un fichier par chapitre).
- `assets/` : Ressources statiques (images, CSS/JS additionnels).

## 🐳 Déploiement Docker

Le site est conçu pour être servi par un simple serveur web statique.

```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
```

## 📝 Auteur

Créé par **Geoffroy Streit** (Hylst).
*Pour le partage de connaissances et la passion du code.*
