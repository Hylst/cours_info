# Python Web Memo 🌐

Un mémo interactif et complet sur l'écosystème du développement Web en Python.

## 🚀 Démarrage Rapide

Le projet est livré sous forme de site statique généré et optimisé.

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

## ✨ Fonctionnalités

- **Navigation Responsive** : Menu hamburger automatique sur mobile avec accès à tous les 14 modules
- **Design System** : Variables CSS pour un thème cohérent et personnalisable
- **Quiz Interactif** : Testez vos connaissances sur l'ensemble de l'écosystème Python Web
- **Code Copyable** : Boutons de copie intégrés sur tous les blocs de code
- **Diagrammes Mermaid** : Visualisations des architectures et flux
- **SEO Optimisé** : Meta tags Open Graph, structured data JSON-LD

## 🛠 Technologies utilisées

- **Frontend** : HTML5, CSS3 (Custom Variables), Vanilla JavaScript
- **Build System** : Python (Scripting personnalisé pour modularité statique)
- **Design System** : Thème sombre moderne, typographie Outfit & JetBrains Mono
- **Interaction** : Moteur de quiz embarqué, navigation responsive, gestionnaire de copie de code
- **Optimisation** : Images WebP, SVG pour les icônes, minimalisme performant

## 📂 Organisation du code

- `src/` : Source du site (Layout, composants, modules de cours)
- `data/` : Données structurées (Quiz, structure du site)
- `assets/` : Ressources statiques (images, CSS, JS)
  - `img/` : Icônes SVG personnalisées, images sociales WebP optimisées
  - `css/` : Styles du quiz
  - `js/` : Moteur de quiz
- `build.py` : Le "cœur" qui assemble les fragments HTML en un fichier unique
- `style.css` : Le système de design centralisé
- `script.js` : Interactions UI (copie de code, menu hamburger)

## 🐳 Déploiement Docker

Le projet est conçu pour être facilement containerisé avec Nginx Alpine.

### Exemple de Dockerfile

```dockerfile
FROM nginx:alpine
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY assets/ /usr/share/nginx/html/assets/
COPY data/ /usr/share/nginx/html/data/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Déploiement avec Coolify

Le site est optimisé pour un déploiement via Coolify sur un VPS Hostinger :
1. Poussez le code sur votre repository Git
2. Configurez Coolify pour pointer vers le repository
3. Utilisez le Dockerfile fourni ou la configuration Nginx statique
4. Déployez sur votre domaine (ex: hylst.fr/python_web/)

## 📱 Responsive Design

Le site est entièrement responsive avec :
- **Desktop** : Navigation horizontale complète (8 liens principaux)
- **Mobile** : Menu hamburger avec accès aux 14 modules complets
- **Tablette** : Adaptation fluide de la grille et de la navigation

## 🎨 Assets Personnalisés

- **Favicon** : Icône SVG moderne générée manuellement
- **Logo** : Serpent Python stylisé + globe web
- **Image sociale** : Cover 1200x630 WebP optimisé pour partages réseaux sociaux

---

**Auteur** : Geoffroy Streit  
**Domaine** : [hylst.fr](https://hylst.fr)  
**Année** : 2026  
*Projet éducatif open-source pour l'apprentissage du développement Web Python.*
