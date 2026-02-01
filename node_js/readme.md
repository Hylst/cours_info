# Mémo Node.js

Ce projet est un guide interactif et synthétique pour apprendre et se remémorer les concepts clés de Node.js (Runtime, Modules, Event Loop, Express, Streams, etc.).
Il est conçu pour être hébergé statiquement (Docker/Nginx).

## 🚀 Installation & Build

Ce projet utilise une architecture **modulaire** avec une étape de build locale pour générer le fichier HTML unique de production.

### Pré-requis
- Node.js installé.

### Commandes

1. **Installer les dépendances** (Aucune dépendance externe requise pour le build, script natif).
   ```bash
   # Aucun npm install nécessaire pour le build basique
   ```

2. **Générer le site**
   ```bash
   node build.js
   ```
   Cela va :
   - Lire les fichiers dans `src/` (layout, partials, sections).
   - Assembler le tout.
   - Créer/Écraser `index.html` à la racine.

3. **Développement**
   Modifiez les fichiers dans `src/` et relancez `node build.js` pour voir les changements.

## 🛠 Structure

- `src/` : Code source (HTML fragmenté).
- `assets/` : Images, CSS, JS.
- `index.html` : Fichier généré (Ne pas modifier directement, il sera écrasé).
- `build.js` : Script de génération.

## 🐳 Déploiement

Le site est statique. Il suffit de servir le dossier racine avec Nginx, Apache ou tout serveur statique.
Un `Dockerfile` (basé sur `nginx:alpine`) est recommandé pour le déploiement.

---
*Créé par Geoffroy Streit pour Hylst.*
