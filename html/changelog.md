# Changelog - Mémo HTML5

Toutes les modifications notables de ce projet seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/lang/fr/).

## [Non publié]

### À venir
- Menu burger mobile responsive
- Favicon personnalisé SVG + PNG
- Image social card pour Open Graph (1200x630)
- Conversion images responsive en WebP
- Correction structure HTML (section s10 imbriquée)
- Optimisations SEO (og:image, URL canonique absolue)

---

## [1.0.0] - 2025-01-31

### ✨ Ajouté
- **11 sections pédagogiques** couvrant l'intégralité du HTML5
  - 01 - Structure de base (DOCTYPE, html, head, body)
  - 02 - Métadonnées (meta, link, title)
  - 03 - Texte & Formatage (h1-h6, strong, em, mark, etc.)
  - 04 - Liens & Navigation (a, ancres, download)
  - 05 - Images & Médias (img, picture, video, audio, canvas, SVG)
  - 06 - Listes & Tableaux (ul, ol, dl, table)
  - 07 - Formulaires (input, select, textarea, validation)
  - 07b - Cas pratique : Formulaire "Bureau des Quêtes" (thème Heroic Fantasy)
  - 08 - HTML5 Sémantique (header, nav, main, article, aside, footer)
  - 09 - Accessibilité (A11y) : alt, label, ARIA, contraste
  - 09b - Multimédia & Responsive (picture, srcset, Art Direction)
  - 10 - SEO & Performance (Open Graph, lazy loading, preload)
  - 11 - Référence Complète (85+ balises avec tooltips)

- **Quiz interactif**
  - Moteur de quiz JavaScript (`quiz-engine.js`)
  - 10 questions aléatoires par session
  - Feedback immédiat avec explications
  - Score final et possibilité de recommencer

- **Démos interactives**
  - Simulateur responsive design (slider 300-1200px)
  - Galerie multimédia (image, audio, iframe YouTube)
  - Formulaire thématique complet avec tous les types d'input
  - Tooltips sur 85+ balises de la section Référence

- **Design System**
  - Variables CSS pour palette cohérente (orange HTML5 + dark theme)
  - Typographie : Outfit (texte) + JetBrains Mono (code)
  - Blocs de code stylisés (apparence IDE)
  - Grilles responsives (TOC, références, démos)
  - Smooth scroll pour navigation par ancres

- **Table des matières (TOC)**
  - 11 cartes cliquables en grille responsive
  - Numérotation visuelle (badges colorés)

- **Accordéons pédagogiques**
  - Explications détaillées avec `<details>/<summary>`
  - Sections : Viewport, Robots, Favicon, Canonical, Open Graph, etc.

- **Documentation**
  - `readme.md` : Vue d'ensemble, déploiement, structure
  - `about.md` : Objectif pédagogique, méthodologie, philosophy
  - `structure.md` : Architecture technique complète
  - `changelog.md` : Ce fichier

### 🎨 Style
- Palette inspirée HTML5 (orange #e44d26, #f06529)
- Dark theme moderne confortable pour les yeux
- Transitions et animations subtiles
- Responsive mobile, tablette, desktop

### 📦 Assets
- Images responsive (PNG) : desktop, tablet, mobile
- Quiz data (JSON) : 34 KB de questions
- Fonts Google : Outfit, JetBrains Mono

### ⚙️ Technique
- HTML5 sémantique pur (2051 lignes)
- CSS3 avec variables (546 lignes)
- JavaScript Vanilla (89 lignes + moteur quiz)
- Aucune dépendance npm/framework
- 100% statique (compatible hébergement Nginx)

### 📝 Contenu
- **85+ balises HTML** documentées
- **Exemples de code** avec coloration syntaxique
- **Définitions concises** dans tooltips
- **Cas d'usage pratiques** pour chaque balise
- **Bonnes pratiques SEO, A11y, Performance**

---

## Notes de version

### Format du numéro de version : [MAJOR.MINOR.PATCH]
- **MAJOR** : Changements incompatibles (refonte complète)
- **MINOR** : Nouvelles fonctionnalités rétrocompatibles
- **PATCH** : Corrections de bugs

### Catégories de changements
- ✨ **Ajouté** : Nouvelles fonctionnalités
- 🔄 **Modifié** : Changements sur fonctionnalités existantes
- ❌ **Supprimé** : Fonctionnalités retirées
- 🐛 **Corrigé** : Corrections de bugs
- 🔒 **Sécurité** : Vulnérabilités corrigées
- 🎨 **Style** : Changements visuels/design
- 📦 **Dépendances** : Mise à jour de bibliothèques
- ⚙️ **Technique** : Refactoring, optimisations
