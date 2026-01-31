# Structure du Projet - Mémo Python

## 📁 Arborescence

```
python/
├── index.html              # Page principale (2327 lignes)
├── style.css               # Styles principaux (1333 lignes)
├── script.js               # Interactions UI (565 lignes)
├── side-nav.css            # Navigation latérale (42 lignes)
├── quiz_python.json        # Questions quiz (37+ KB)
├── img/                    # Assets visuels
│   ├── python_icon.webp    # Icône site (512x512)
│   ├── python_share.webp   # Image partage social (1200x630)
│   ├── data_science_plot.svg
│   ├── decorators.svg
│   ├── dynamic_typing.svg
│   ├── event_loop.svg
│   ├── list_comp.svg
│   ├── memory_mutable.svg
│   └── mro.svg
├── readme.md               # Ce fichier
├── about.md                # À propos du projet
├── structure.md            # Documentation architecture
└── changelog.md            # Historique versions
```

## 🏗️ Architecture HTML

### Structure Globale
```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <!-- Meta tags SEO -->
    <!-- Open Graph & Twitter -->
    <!-- JSON-LD structured data -->
    <!-- Fonts & Stylesheets -->
  </head>
  <body>
    <!-- Header (sticky) -->
    <!-- Mobile Menu Overlay -->
    <!-- Hero Section -->
    <!-- TOC (Table of Contents) -->
    <!-- 18 Module Sections -->
    <!-- Quiz Section -->
    <!-- Footer -->
    <!-- Scripts -->
  </body>
</html>
```

### Sections (Modules)
Chaque module suit la structure :
```html
<section id="sX">
  <div class="container">
    <div class="sec-header">
      <div class="sec-num">XX</div>
      <div>
        <h2 class="sec-title">Titre</h2>
        <p class="sec-sub">Description</p>
      </div>
    </div>
    <!-- Contenu: <details>, .code, .demo, .interactive-box, etc. -->
  </div>
</section>
```

## 🎨 Architecture CSS

### Organisation
```css
/* 1. Variables CSS (Design System) */
:root { --primary, --secondary, --accent, ... }

/* 2. Reset & Base */
*, html, body { ... }

/* 3. Layout Components */
.container, header, nav, .hero, .toc, section, footer

/* 4. UI Components */
.code, .demo, .tip, .info, .warning, .interactive-box

/* 5. Responsive Navigation */
.hamburger-btn, .mobile-menu-overlay, .mobile-menu-nav

/* 6. Utilities */
.grid2, .toc-grid, .ref-grid, .practice-grid

/* 7. Media Queries */
@media (max-width: 768px) { ... }
@media (min-width: 769px) { ... }
@media (min-width: 1200px) { ... }
```

### Design System (Variables CSS)
```css
--primary: #3776ab;    /* Python Blue */
--secondary: #ffd43b;  /* Python Yellow */
--accent: #4b8bbe;
--bg: #0c1117;         /* Background dark */
--card: #151d27;
--text: #e8f4ff;
--muted: #8ba4c7;
--dim: #5a7094;
--border: #1e2d3d;
/* + couleurs sémantiques: green, purple, pink, orange, red */
```

**Règle critique** : JAMAIS de couleurs hardcodées. Toujours utiliser les variables CSS.

## ⚙️ Architecture JavaScript

### Modules Fonctionnels

```javascript
// 1. Helpers
function copyCode(btn) { ... }

// 2. Interactive Demos (Modules spécifiques)
function updateTimeline(index) { ... }      // Module 00
function setMemory(type) { ... }             // Module 01
function toggleLogic(key) { ... }            // Module 02
function addCollectionItem() { ... }         // Module 04
function generateClass() { ... }             // Module 05
function triggerError(isError) { ... }       // Module 06
function setFileMode(mode) { ... }           // Module 07
function updateFormat() { ... }              // Module 09
function transformString(action) { ... }     // Module 09
function testRegex() { ... }                 // Module 10
function nextYield() { ... }                 // Module 11
function runSync/runAsync() { ... }          // Module 12
function visualizeArgs() { ... }             // Module 03

// 3. DOMContentLoaded Init
document.addEventListener('DOMContentLoaded', () => {
  // Copy buttons
  // Side nav generation
  // Scroll spy
  // Back-to-top
  // Mobile menu toggle
});
```

### Pas de Frameworks
- **Vanilla JS pur** : querySelector, addEventListener, classList
- **ES6+ moderne** : arrow functions, template literals, destructuring
- **Zero dépendance** : Pas de jQuery, React, Vue, etc.

## 🧩 Composants UI Principaux

### 1. Code Blocks (`.code`)
Structure :
```html
<div class="code">
  <div class="code-head">
    <span class="dot r"></span>
    <span class="dot y"></span>
    <span class="dot g"></span>
    Titre
    <button class="copy-btn">📋 Copier</button>
  </div>
  <pre>
    <span class="kw">def</span> <span class="fn">hello</span>():
        <span class="str">"Hello"</span>
  </pre>
</div>
```

Classes syntax highlighting :
- `.kw` : keywords (def, class, if, for)
- `.fn` : functions
- `.str` : strings
- `.num` : numbers
- `.c` : comments
- `.var` : variables
- `.cls` : classes
- `.dec` : decorators
- `.prop` : properties
- `.op` : operators

### 2. Interactive Boxes (`.interactive-box`)
Contiennent :
- Titre (`.interactive-title`)
- Inputs/buttons pour interaction
- Outputs dynamiques (DOM manipulation)

### 3. Info Boxes
- `.tip` : Conseils (vert)
- `.info` : Informations (bleu)
- `.warning` : Avertissements (rouge)

### 4. Mobile Navigation
- `.hamburger-btn` : Bouton menu (3 lines)
- `.mobile-menu-overlay` : Full-screen overlay
- `.mobile-menu-nav` : Liste liens modules
- Animation : `transform: translateX(-100%)` → `translateX(0)`

## 📊 Assets & Ressources

### Images SVG (Diagrammes)
- `decorators.svg` : Pattern décorateur (Module 03)
- `dynamic_typing.svg` : Typage dynamique (Module 01)
- `event_loop.svg` : Event loop async (Module 12)
- `list_comp.svg` : List comprehension syntax (Module 04)
- `memory_mutable.svg` : Mutabilité mémoire (Module 01)
- `mro.svg` : Method Resolution Order (Module 05)
- `data_science_plot.svg` : Exemple plot (Module 15)

### Images WebP
- `python_icon.webp` : Favicon & branding
- `python_share.webp` : Open Graph social sharing

### Assets Externes (Shared)
```
../../assets/
├── css/
│   └── quiz-style.css      # Styles quiz commun
└── js/
    ├── quiz-engine.js       # Moteur quiz réutilisable
    └── quiz-data.js         # (optionnel)
```

## 🔄 Data Flow

### Quiz Loading
```
1. HTML charge quiz_python.json via quiz-engine.js
2. QuizEngine() initialize avec containerId + data
3. Génération dynamique questions → DOM
4. User interactions → score tracking → résultats
```

### Side Navigation Scroll Spy
```
1. DOMContentLoaded → génère .side-nav depuis sections[id]
2. window.scroll listener → calcule section active (fromTop + offset)
3. Update .active class → highlight nav correspondant
```

### Mobile Menu
```
1. hamburger-btn click → toggle .active sur menu + btn
2. mobile-menu-item click → smooth scroll + close menu (300ms delay)
3. mobile-menu-close / outside click → remove .active
4. body overflow: hidden (menu ouvert) / '' (fermé)
```

## 🔐 Conventions de Code

### Naming
- **Classes CSS** : kebab-case (`.sec-header`, `.mobile-menu-overlay`)
- **IDs** : kebab-case (`#s1`, `#hamburger-btn`, `#demo-args`)
- **Fonctions JS** : camelCase (`updateTimeline`, `visualizeArgs`)
- **Variables CSS** : kebab-case (`--primary`, `--bg2`)

### Indentation
- HTML : 4 espaces
- CSS : 4 espaces
- JS : 4 espaces

### Commentaires
- Sections CSS : `/* === SECTION === */`
- Modules JS : `// Descriptif fonctionnel`
- HTML : `<!-- Séparation claire modules -->`

## 🚀 Performance

### Optimisations
- **CSS vanilla** : Pas de frameworks lourds (Tailwind, Bootstrap)
- **Minimal JS** : ~565 lignes, pas de librairies
- **WebP images** : Compression optimale vs PNG/JPG
- **SVG diagrams** : Vectoriel léger, scalable
- **No build step** : Déploiement direct

### Chargement
1. HTML parse
2. CSS/Fonts load (async)
3. JS defer/async
4. Images lazy (native)
5. Quiz engine on-demand

---

**Next Steps** : Voir [changelog.md](changelog.md) pour évolutions futures.
