# context for developer agent

Ce document sert de base pour toute nouvelle session de développement sur le projet **Cours Memos**.

## 🚀 Vue d'ensemble
Le projet est un écosystème de sites web mémo (Hylst) destinés à l'apprentissage de diverses technologies (PHP, JS, Docker, DevOps, etc.). Il s'agit d'une architecture de sites statiques optimisés pour le SEO et l'interactivité légère.

### Stack Technique
- **Frontend**: HTML5, Vanilla CSS (CSS Variables), Vanilla JavaScript.
- **Colorisation**: Prism.js pour les blocs de code.
- **Assets**: Fichiers WebP et SVG pour la performance.
- **Infrastructure**: Déploiement via Docker/Nginx sur Coolify.
- **Structure**: Chaque cours a son répertoire racine (ex: `/javascript/`, `/php/`).

## 🛠 Dernières Modifications Majeures (Février 2026)

### 1. Cours PHP
- **Responsive design**: Implémentation d'un menu "sandwich" pour mobile.
- **Fichiers clés**: 
    - `php/assets/css/main.css` (contenant les media queries responsives).
    - `php/assets/js/app.js` (fonction `initMobileMenu`).
- **Correction**: Assurez-vous de modifier `main.css` et non un fichier CSS à la racine qui pourrait ne pas être lié.

### 2. Cours JavaScript ES6+
- **Architecture modulaire**: Utilise un `layout.js` pour injecter le header/footer dynamiquement.
- **Module 02 (Types)**: 
    - Interactivité cliquable sur les cartes de type.
    - Schéma animé interactif expliquant la **Stack vs Heap** (Pile vs Tas) avec une démo de mutation d'objet.
- **Module 03 (Opérateurs)**: 
    - Contenu enrichi (x2) : Arithmétique avancée, Ternaire, Bitwise.
    - Logic Playground amélioré.
- **Prism.js**: Intégré dans les modules 02 et 03 pour la syntaxe HTML/JS.

### 3. Assets Globaux
- Nettoyage et uniformisation des **favicons** et **images sociales (OG Image)** pour l'ensemble des 16 répertoires :
    `HTML, CSS, JAVASCRIPT, REACT, NODE_JS, PHP, JAVA, NETWORK, PYTHON, PYTHON_WEB, PYTHON_DATA, DEVOPS, DOCKER, DATA AUTOMATION, CYBERSECURITY, EMBEDDED`.
- Script de vérification `fix_assets.ps1` disponible à la racine pour automatiser ces tâches.

## 📁 Structure du Projet (Exemple JS)
- `/javascript/index.html` : Page d'accueil du cours.
- `/javascript/modules/` : Fichiers HTML des chapitres.
- `/javascript/assets/js/modules/` : Scripts spécifiques à chaque chapitre (ex: `02_types.js`).
- `/assets/img/icons/` : Zone de stockage centralisée des icônes 3D (`.webp`).

## ⚠️ Points d'attention pour la suite
1. **Prism.js** : Doit être chargé (`prism.css` dans le head, `prism.js` avant la fermeture du body) pour chaque nouveau chapitre enrichi.
2. **Interactivité** : Favoriser les analogies pédagogiques et les démos interactives (comme pour la Stack/Heap).
3. **SEO** : Toujours vérifier les balises Meta (Description, OG Image) dans `index.html` et les fichiers de modules.
4. **Consistency** : Garder le style visuel "premium" (Glassmorphism, dégradés, polices Outfit & JetBrains Mono).

## 🎯 Prochaines étapes suggérées
- Continuer l'enrichissement (x2) des modules JavaScript restants (04 onwards).
- Ajouter des quiz interactifs basés sur le `quiz-engine.js` existant.
- Vérifier la cohérence du menu responsive sur les autres cours (Python, DevOps, etc.).
