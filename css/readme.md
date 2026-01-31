# Mémo CSS3 - Guide Interactif

<function_calls>
<invoke name="write_to_file">
<parameter name="CodeContent"># Mémo CSS3 - Guide Interactif

## 📖 Description

Site web éducatif interactif présentant un guide complet sur CSS3 avec plus de 150 propriétés CSS documentées et illustrées par des démos visuelles.

### Caractéristiques principales

- **13 sections structurées** : Syntaxe, Sélecteurs, Box Model, Texte, Flexbox, Grid, Animations, Responsive, Variables, Architecture, CSS Moderne, Référence, Galerie de Démos
- **Démos interactives** : Playgrounds pour Flexbox, Grid, Animations, Variables CSS
- **Quiz intégré** : Système de quiz avec 10 questions aléatoires par session
- **Design moderne** : Dark theme avec gradients, navigation sticky, responsive
- **SEO optimisé** : Meta tags complets pour partage sur réseaux sociaux

## 🚀 Installation et Utilisation

### Prérequis
- Aucune dépendance (site 100% statique)
- Serveur web (nginx, Apache) ou simplement un navigateur

### Utilisation locale

```bash
# Ouvrir directement dans le navigateur
open index.html
# ou
start index.html  # Windows
```

### Déploiement Docker (nginx)

```bash
# Depuis le répertoire parent contenant le dossier css/
docker run -d -p 8080:80 \
  -v "$(pwd):/usr/share/nginx/html:ro" \
  nginx:alpine

# Accéder à http://localhost:8080/css/
```

### Déploiement sur Coolify

Le site est conçu pour être déployé sur un VPS via Coolify avec d'autres sites de cours dans la même structure :

```
/usr/share/nginx/html/
├── html/          # Cours HTML
├── css/           # Cours CSS (ce projet)
├── php/           # Cours PHP
├── networks/      # Cours Réseaux
└── ...
```

## 📁 Structure du Projet

```
css/
├── index.html              # Page principale (2660 lignes)
├── cours-css-style.css     # Stylesheet principal
├── quiz_css.json           # Questions de quiz
├── assets/
│   ├── favicon.svg         # Icône du site
│   ├── og-image.png        # Image pour réseaux sociaux
│   ├── bg_demo.png         # Image de démo background
│   ├── css/
│   │   └── quiz-style.css  # Styles du quiz
│   └── js/
│       └── quiz-engine.js  # Moteur de quiz
├── readme.md               # Ce fichier
├── about.md                # Contexte éducatif
├── structure.md            # Architecture détaillée
└── changelog.md            # Historique des versions
```

## 💻 Technologies Utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Variables custom properties, Flexbox, Grid, Animations
- **JavaScript Vanilla** : Quiz engine, démos interactives
- **Polices** : Google Fonts (Outfit, JetBrains Mono)

## 🎯 Sections du Guide

1. **Syntaxe CSS** - Structure de base, unités, intégration
2. **Sélecteurs** - Sélecteurs de base, combinateurs, pseudo-classes
3. **Box Model** - Dimensions, spacing, display, position
4. **Texte & Couleurs** - Typographie, couleurs, backgrounds
5. **Flexbox** - Mise en page flexible unidimensionnelle
6. **Grid** - Grilles bidimensionnelles
7. **Animations & Transitions** - Mouvement et effets
8. **Responsive Design** - Media queries, container queries
9. **Variables CSS** - Custom properties, fonctions de calcul
10. **Architecture CSS** - BEM, organisation, theming
11. **CSS Moderne** - :has(), :is(), :where(), nesting, propriétés logiques
12. **Référence** - 150+ propriétés avec tooltips interactifs
13. **Galerie Démos** - 50+ démos visuelles (borders, shadows, gradients, transforms, filters, etc.)

## 🏫 Usage Éducatif

Ce mémo est conçu pour :
- **Étudiants** en développement web
- **Développeurs** souhaitant réviser les concepts CSS
- **Formateurs** comme support de cours
- **Auto-apprentissage** grâce aux démos interactives

## 🤝 Contribution

Ce projet est personnel et éducatif. Pour toute suggestion ou correction :
- Créer une issue sur le repository
- Contacter : Geoffroy Streit

## 📜 Licence

© 2026 Geoffroy Streit - Usage éducatif et personnel

## 🌐 Hébergement

- **Domaine** : https://hylst.fr/css/
- **Hébergeur** : Hostinger VPS
- **Conteneurisation** : Docker (nginx:alpine)
- **Gestionnaire** : Coolify

## 📞 Contact

- **Auteur** : Geoffroy Streit
- **Domaine** : hylst.fr
- **Projet** : Partage de ressources éducatives en développement Web, Data, IA, ML, IT

---

*Créé avec passion pour faciliter l'apprentissage du CSS et partager la connaissance.*
