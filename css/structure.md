# Structure du Mémo CSS3

## 📐 Architecture du Contenu

### Vue d'Ensemble

Le site est organisé en **13 sections principales** suivant une progression pédagogique logique, depuis les fondamentaux jusqu'aux fonctionnalités CSS modernes.

**Progression** : Bases → Layout → Interactivité → Architecture → Avancé → Référence

---

## 🗂️ Sections Détaillées

### Section 01 : Syntaxe CSS
**Objectif** : Comprendre la structure de base du CSS

**Contenu** :
- Anatomie d'une règle CSS (sélecteur, propriété, valeur)
- 3 méthodes d'intégration (externe, interne, inline)
- Unités CSS (px, %, em, rem, vw/vh, fr)
- Démo interactive des unités

**Concepts clés** : `selector { property: value; }`, box-sizing, unités relatives vs absolues

---

### Section 02 : Sélecteurs
**Objectif** : Maîtriser le ciblage précis des éléments HTML

**Contenu** :
- Sélecteurs de base (élément, classe, ID, universel)
- Combinateurs (descendant, enfant direct `>`, frère adjacent `+`, frères généraux `~`)
- Pseudo-classes (:hover, :focus, :first-child, :nth-child, :not)
- Pseudo-éléments (::before, ::after, ::first-letter, ::selection, ::placeholder)
- Spécificité et cascade

**Démos** :
- Démo interactive de sélecteurs avec highlight
- Démo :focus et :checked
- Démo ::before/::after pour contenu décoratif
- Playground nth-child

**Concepts clés** : Spécificité (0-0-0 → 1-0-0-0), cascade, combinateurs

---

### Section 03 : Box Model
**Objectif** : Comprendre comment les éléments occupent l'espace

**Contenu** :
- Modèle de boîte (content, padding, border, margin)
- box-sizing: border-box vs content-box
- Display (block, inline, inline-block, none)
- Position (static, relative, absolute, fixed, sticky)
- z-index et contextes d'empilement

**Démos** :
- Visualisation interactive du box model multicouche
- Comparaison display: block vs inline vs inline-block
- Système de position avec absolute + transform pour centrage

**Concepts clés** : margin collapse, position relative (référence pour absolute), inset

---

### Section 04 : Texte & Couleurs
**Objectif** : Styliser le texte et gérer les couleurs

**Contenu** :
- **Typographie** : font-family, font-size, font-weight, line-height, letter-spacing, text-align
- **Couleurs** : Hex, RGB, RGBA, HSL, currentColor
- **Fonds** : background-color, background-image, background-size (cover/contain), background-position, background-attachment
- **Dégradés** : linear-gradient, radial-gradient, conic-gradient

**Démos** :
- Playground typographie (sliders pour taille, graisse, espacement, interligne)
- Démo formats couleurs (RGB, HSL, RGBA)
- Démo dégradés (linear, radial, conic)
- Démo background (cover vs contain vs repeat)

**Concepts clés** : clamp() pour typographie fluide, HSL pour manipulation couleur

---

### Section 05 : Flexbox
**Objectif** : Maîtriser la mise en page flexible unidimensionnelle

**Contenu** :
- **Conteneur** : display: flex, flex-direction, justify-content, align-items, flex-wrap, gap
- **Items** : flex (flex-grow, flex-shrink, flex-basis), align-self, order
- Astuces : margin: auto dans flex, centrage parfait

**Démos** :
- **Playground Flexbox** : Contrôles pour flex-direction, justify-content, align-items avec visualisation en temps réel
- Démo flex-wrap + gap

**Concepts clés** : Axes principal (main) vs secondaire (cross), flex: 1 shorthand

---

### Section 06 : CSS Grid
**Objectif** : Créer des layouts complexes bidimensionnels

**Contenu** :
- **Conteneur** : display: grid, grid-template-columns, grid-template-rows, gap, grid-auto-flow
- **Items** : grid-column, grid-row, grid-area
- **Template Areas** : Nommage de zones avec grid-template-areas
- **Sizing** : repeat(), fr, minmax(), auto-fit vs auto-fill, min-content vs max-content
- Alignement : justify-content, align-content, place-items

**Démos** :
- **Playground Grid** : Contrôles pour grid-template-columns et gap
- Démo grid-areas pour layout type (header/nav/main/footer)
- Démo min-content vs max-content
- Démo grid-auto-flow: dense

**Concepts clés** : fr unit, repeat(auto-fit, minmax()), grid-template-areas lisibilité

---

### Section 07 : Animations & Transitions
**Objectif** : Donner vie aux interfaces

**Contenu** :
- **Transitions** : transition (property, duration, timing-function, delay)
- **Timing Functions** : linear, ease, ease-in, ease-out, cubic-bezier()
- **Animations** : @keyframes, animation (name, duration, timing, iteration, direction, fill-mode)
- **Transform** : translate, rotate, scale, skew, transform-origin

**Démos** :
- **La Course des Courbes** : Visualisation interactive des timing functions (linear, ease-out, ease-in, cubic-bezier)
- **Animation Studio** : Boutons pour déclencher spin, bounce, shake + contrôle pause
- **Playground Transform** : Démo hover sur transformations (scale, rotate, skew, translate, combo)

**Concepts clés** : animation-play-state: paused, cubic-bezier() custom, transform ne change pas le layout

---

### Section 08 : Responsive Design
**Objectif** : Créer des designs adaptatifs

**Contenu** :
- **Media Queries** : @media (min-width), mobile-first approach
- **Container Queries** : @container (révolution contextualist)
- **Unités fluides** : clamp(), min(), max(), vw, vh, dvh
- **Aspect Ratio** : aspect-ratio maintien proportions

**Démos** :
- **Simulateur Breakpoints** : Boutons Mobile/Tablette/Desktop qui redimensionnent un composant
- Démo aspect-ratio

**Concepts clés** : Mobile-first (styles de base pour mobile, puis min-width pour desktop), dvh vs vh

---

### Section 09 : Variables CSS
**Objectif** : Utiliser les custom properties natives

**Contenu** :
- Déclaration : --nom-variable dans :root ou sélecteur
- Portée globale vs locale
- Utilisation : var(--nom-variable, fallback)
- Calculs dynamiques : calc(), clamp(), min(), max()
- Modification via JavaScript : element.style.setProperty()
- **Filtres** : filter, backdrop-filter (glassmorphism)

**Démos** :
- **Customiseur de Thème** : Sliders pour couleur, border-radius, opacité avec preview en temps réel
- **Visualiseur clamp()** : Slider pour redimensionner container et voir font-size s'adapter
- **Studio de Filtres** : Boutons pour appliquer blur, sepia, hue-rotate sur image

**Concepts clés** : Variables dynamiques (contrairement à SASS), cascade, backdrop-filter

---

### Section 10 : Architecture CSS
**Objectif** : Organiser un projet CSS professionnel

**Contenu** :
- **BEM** (Block Element Modifier) : .block__element--modifier
- **Pattern 7-1** : Organisation en dossiers (base/, components/, layout/, pages/, themes/, utils/)
- **Theming** : Dark mode avec prefers-color-scheme
- **Nesting natif** : & pour référence au parent

**Démos** :
- **BEM Interactif** : Card avec boutons pour toggle --featured et --dark, montrant la modularité

**Concepts clés** : BEM évite conflits, nesting natif élimine besoin de SASS

---

### Section 11 : CSS Moderne
**Objectif** : Découvrir les dernières fonctionnalités CSS

**Contenu** :
- **:has()** : Sélecteur parent (révolutionnaire !)
- **:is() vs :where()** : Groupement avec spécificité différente
- **Nesting natif** : Écrire du CSS imbriqué sans préprocesseur
- **Propriétés logiques** : margin-block, margin-inline, inset (internationalisation)

**Démos** :
- **Démo :has()** : Checkboxes qui changent le style du parent conteneur
- **Démo Inline/Block Axis** : Visualisation des axes logiques

**Concepts clés** : :has() permet parent selector, :where() spécificité 0, propriétés logiques pour RTL/LTR

---

### Section 12 : Référence Rapide
**Objectif** : Accès rapide aux propriétés essentielles

**Contenu** : 150+ propriétés organisées par catégories
- **Box Model & Layout** : width, height, margin, padding, border, opacity, overflow, position
- **Flexbox & Grid** : display: flex/grid, justify-content, grid-template-columns, place-items
- **Typographie** : font-family, font-size, line-height, text-align
- **Couleurs & Fond** : color, background, linear-gradient, accent-color
- **Animations** : transform, transition, @keyframes, filter, backdrop-filter
- **Interactivité** : cursor, pointer-events, user-select, scroll-behavior
- **Logique** : var(), calc(), min-inline-size

**Format** : Cards avec tooltips au survol montrant description + exemple de code

**Concepts clés** : Tooltips interactifs pour apprentissage contextuel

---

### Section 13 : Galerie de Démos
**Objectif** : Visualiser 50+ effets CSS en action

**Contenu** : Démos visuelles organisées par thème
- **Borders** : border-radius variations (0, 8px, 16px, 50%, asymétriques)
- **Border Styles** : solid, dashed, dotted, double, groove, ridge
- **Box-Shadow** : subtle, elevated, glow, inset, offset
- **Gradients** : linear, radial, conic, hard stop
- **Transform** : scale, rotate, skewX, translateY, combo (au hover)
- **Filters** : blur, brightness, contrast, grayscale, sepia, saturate, hue-rotate, invert, drop-shadow
- **Animations** : bounce, spin, shake, fade, grow (en boucle infinie)
- **Cursors** : default, pointer, text, move, not-allowed, wait, crosshair, grab, zoom-in, col-resize
- **Text Effects** : text-shadow, gradient text, text-stroke, letter-spacing, word-spacing, ellipsis
- **Aspect-Ratio** : 1:1, 16:9, 4:3, 21:9
- **Overflow** : hidden, auto, scroll
- **Object-Fit** : cover, contain, fill
- **Mix-Blend-Mode** : multiply, screen, overlay, difference
- **Outline** : outline vs border, outline-offset
- **Clip-Path** : circle, triangle, diamond, hexagon, cross
- **Backdrop-Filter** : glassmorphism effect
- **Writing-Mode** : horizontal-tb, vertical-rl, vertical-lr

**Format** : Grids de composants visuels, certains interactifs au hover

**Concepts clés** : Visualisation pour mémoire visuelle, hover pour interactivité

---

## 🎮 Système de Quiz

**Emplacement** : Section finale après la galerie

**Fonctionnalités** :
- 10 questions aléatoires par session (tirage depuis quiz_css.json)
- Choix multiples avec feedback immédiat
- Score final avec pourcentage
- Bouton pour recommencer

**Format JSON** : quiz_css.json (42 KB)
```json
{
  "questions": [
    {
      "question": "Quelle propriété...",
      "options": ["A", "B", "C", "D"],
      "correct": 0
    }
  ]
}
```

**Engine** : assets/js/quiz-engine.js (vanilla JavaScript, 8 KB)

---

## 🎨 Design System

### Variables CSS (Palette Couleurs)

```css
:root {
    --primary: #264de4;      /* CSS Blue */
    --secondary: #2965f1;    /* Blue variant */
    --accent: #00d4ff;       /* Cyan */
    --bg: #0a0f1a;           /* Dark background */
    --bg2: #0f1829;          /* Lighter dark */
    --card: #141e33;         /* Card background */
    --text: #e8f0ff;         /* Light text */
    --muted: #8ba3c7;        /* Muted text */
    --dim: #5a7094;          /* Dimmed text */
    --border: #1e3a5f;       /* Border color */
    --green: #10b981;
    --purple: #a855f7;
    --pink: #ec4899;
    --orange: #f59e0b;
    --red: #ef4444;
}
```

### Typographie

- **Titres** : Outfit (300, 400, 500, 600, 700)
- **Code** : JetBrains Mono (400, 500)
- **Corps** : Outfit 400, line-height 1.7

### Composants Réutilisables

- `.container` : max-width 1100px, padding responsive
- `.code` : Blocs de code avec header macOS-style (dots rouge/jaune/vert)
- `.demo` : Boîtes de démonstration avec fond card
- `.tip` / `.info` : Callouts avec bordure gauche colorée
- `.toc-grid` : Grille auto-fit pour table des matières
- `.ref-grid` : Grille pour cartes de référence

---

## 📱 Responsive Breakpoints

```css
@media (max-width: 768px) {
    # Mobile
    - Hero h1 : 2rem (au lieu de 2.8rem)
    - Navigation : hamburger menu (au lieu de liens)
    - TOC : 2 colonnes (au lieu de auto-fit)
}
```

**Stratégie** : Mobile-first avec progressive enhancement

---

## 🔗 Navigation

### Header Sticky
- Logo CSS3 avec icône gradient
- Liens rapides : Syntaxe, Flexbox, Grid, Anim, Référence

### Table des Matières (TOC)
- 13 cartes cliquables numérotées (01-13)
- Grid auto-fit responsive
- Effet hover avec translateX

### Liens Internes
- IDs de section : #s1, #s2, ... #s13
- Scroll smooth (défini dans `:root`)
- Liens de retour implicites via navigation sticky

---

## 📊 Métriques du Contenu

- **Fichier principal** : 2660 lignes HTML
- **Stylesheet** : 437 lignes CSS
- **Sections** : 13
- **Démos interactives** : ~20 playgrounds/simulateurs
- **Démos visuelles** : 50+ dans la galerie
- **Propriétés référencées** : 150+
- **Questions de quiz** : Données dans quiz_css.json (nombreuses)

---

## 🏗️ Architecture Fichiers

```
css/
├── index.html (2660 lignes)
│   └── Structure : head (SEO) + body (13 sections + quiz + footer)
├── cours-css-style.css (437 lignes)
│   └── Variables + Layout + Composants + Responsive
├── quiz_css.json (42 KB)
│   └── Questions format JSON
├── assets/
│   ├── favicon.svg
│   ├── og-image.png (1200x630, social sharing)
│   ├── bg_demo.png (demo backgrounds)
│   ├── css/
│   │   └── quiz-style.css (4.4 KB)
│   └── js/
│       └── quiz-engine.js (8 KB)
├── readme.md
├── about.md
├── structure.md (ce fichier)
└── changelog.md
```

---

## 🎯 Cohérence avec les Autres Cours

Le site CSS3 fait partie d'un écosystème de memos de cours :
- **HTML** : `/html/`
- **CSS** : `/css/` (ce projet)
- **PHP** : `/php/`
- **Networks** : `/networks/`

**Éléments communs** :
- Design dark theme cohérent
- Navigation sticky similaire
- Structure en sections numérotées
- Quiz intégré
- Footer avec crédits Geoffroy Streit

**Différenciation** :
- Palette de couleurs spécifique à chaque langage (CSS = Blue)
- Contenus et démos adaptés au sujet

---

*Cette structure est conçue pour une progression pédagogique optimale et une navigation intuitive.*
