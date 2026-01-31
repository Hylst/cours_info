# Architecture Technique - Mémo HTML5

## Vue d'ensemble

Site web statique mono-page (SPA light) de 2051 lignes HTML, organisé en 11 sections pédagogiques avec navigation par ancres.

## Structure HTML

### Header Sticky
```html
<header> <!-- Position: sticky, top: 0 -->
  <div class="container header-content">
    <div class="logo">
      <div class="logo-icon">&lt;/&gt;</div>HTML
    </div>
    <nav>
      <a href="#s1">Base</a>
      <a href="#s3">Texte</a>
      <a href="#s5">Médias</a>
      <a href="#s7">Forms</a>
      <a href="#s9">Référence</a>
    </nav>
  </div>
</header>
```

### Hero Section
Titre principal avec dégradé CSS `-webkit-background-clip: text`.

### Table des matières (TOC)
Grille responsive de 11 cartes cliquables :
```html
<div class="toc-grid">
  <a href="#s1" class="toc-item">
    <span class="toc-num">01</span>Structure
  </a>
  <!-- ... -->
</div>
```

### Sections de contenu (1-11)

Chaque section suit la structure :
```html
<section id="s{N}">
  <div class="container">
    <div class="sec-header">
      <div class="sec-num">{N}</div>
      <div>
        <h2 class="sec-title">Titre</h2>
        <p class="sec-sub">Sous-titre</p>
      </div>
    </div>
    
    <!-- Contenu pédagogique -->
    <p>Introduction...</p>
    
    <!-- Exemples de code -->
    <div class="code">
      <div class="code-head">
        <span class="dot r"></span>
        <span class="dot y"></span>
        <span class="dot g"></span>
        Nom fichier
      </div>
      <pre><!-- Code coloré --></pre>
    </div>
    
    <!-- Démos visuelles -->
    <div class="demo">
      <div class="demo-title">Titre démo</div>
      <!-- Rendu HTML en direct -->
    </div>
    
    <!-- Explications détaillées (accordéons) -->
    <details class="info-details">
      <summary>Titre</summary>
      <div>Contenu...</div>
    </details>
  </div>
</section>
```

### Section Quiz
```html
<section id="quiz-section" class="quiz-container">
  <div class="container">
    <h2>Testez vos connaissances</h2>
    <div id="quiz-app"></div> <!-- Injecté par JS -->
  </div>
</section>
```

### Footer
```html
<footer>
  <p><strong>Mémo HTML5</strong> • 85+ balises • 2025</p>
  <p>Créé par Geoffroy Streit, assisté par IA</p>
</footer>
```

## Système de Design CSS

### Variables CSS (`:root`)

```css
:root {
  /* Palette HTML5 (Orange/Feu) */
  --primary: #e44d26;    /* Orange HTML5 */
  --secondary: #f06529;  /* Orange clair */
  
  /* Fond dark theme */
  --bg: #0f0a1a;        /* Fond principal */
  --bg2: #1a1230;       /* Fond secondaire */
  --card: #201840;      /* Cartes */
  
  /* Texte */
  --text: #f0e6ff;      /* Texte principal */
  --muted: #a89cc8;     /* Texte atténué */
  --dim: #6b5f87;       /* Texte très atténué */
  
  /* Autres */
  --border: #2d2250;    /* Bordures */
  --green: #10b981;     /* Tips, validations */
  --purple: #a855f7;    /* Accents */
}
```

### Composants clés

#### 1. Blocs de code
- **Apparence** : Simulateur de fenêtre IDE (dots rouge/jaune/vert)
- **Coloration syntaxique** : Manuelle via classes `.t`, `.a`, `.v`, `.c`
- **Font** : `JetBrains Mono`

#### 2. Démos visuelles (`.demo`)
- Fond `var(--card)`
- Rendu HTML en direct
- Formulaires stylisés (inputs, selects, buttons)

#### 3. Tooltips (`.tt-wrap`, `.tt-box`)
- Position absolute au survol
- Transition smooth
- Flèche CSS avec `::after`
- Utilisés dans la section Référence (85+ balises)

#### 4. Grilles responsives
- `.toc-grid` : `repeat(auto-fit, minmax(200px, 1fr))`
- `.grid2` : `repeat(auto-fit, minmax(300px, 1fr))`
- `.ref-grid` : `repeat(auto-fit, minmax(280px, 1fr))`

### Responsive Design

```css
@media(max-width:768px) {
  .hero h1 { font-size: 1.8rem; }
  nav { display: none; } /* ⚠️ Menu caché sur mobile */
  .sec-header { flex-direction: column; }
}
```

**⚠️ Point d'amélioration** : Le menu doit être remplacé par un menu burger mobile.

## JavaScript

### Fichier `script.js`

#### 1. Simulateur Responsive Design
```javascript
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('resp-slider');
  
  slider.addEventListener('input', (e) => {
    const width = e.target.value;
    container.style.width = width + 'px';
    
    // Change l'image selon le breakpoint
    if (width < 600) {
      // Mobile
      imgMobile.style.display = 'block';
      imgTablet.style.display = 'none';
      imgDesktop.style.display = 'none';
    } else if (width < 900) {
      // Tablet
      // ...
    } else {
      // Desktop
      // ...
    }
  });
});
```

#### 2. Initialisation du Quiz
```javascript
const initQuiz = () => {
  if (window.QuizEngine) {
    new window.QuizEngine({
      containerId: 'quiz-app',
      jsonPath: 'quiz_html.json',
      questionsPerSession: 10
    });
  }
};
```

### Moteur de Quiz (`assets/js/quiz-engine.js`)
- Gère l'affichage des questions
- Sélection aléatoire de 10 questions
- Feedback immédiat (correct/incorrect)
- Score final

### Données du Quiz (`quiz_html.json`)
- Format JSON avec 34 KB de questions
- Structure : `{ questions: [ { question, options, correct, explanation } ] }`

## Organisation des Assets

```
assets/
├── css/
│   └── quiz-style.css        # Styles du moteur de quiz
├── js/
│   └── quiz-engine.js        # Logique du quiz
└── img/
    ├── responsive-desktop.png  # Démo responsive (Desktop)
    ├── responsive-tablet.png   # Démo responsive (Tablet)
    └── responsive-mobile.png   # Démo responsive (Mobile)
```

## Points d'amélioration identifiés

### 🔴 Critiques
1. **Menu mobile** : Masqué sur mobile (`display: none`), pas de menu burger
2. **Images non optimisées** : PNG au lieu de WebP
3. **Favicon manquant** : Aucun favicon défini
4. **Images social** : Pas d'og:image ni twitter:image

### 🟡 Moyens
1. **Structure HTML** : Section 10 imbriquée dans section 9b (ligne 1386)
2. **TOC incomplète** : Section 9b non listée
3. **URL canonique** : Relative au lieu d'absolue

### 🟢 Mineurs
1. **Meta keywords obsolète** : Peut être supprimé (ligne 10-11)
2. **Navigation limitée** : 5 liens au lieu de 11 sections

## Dépendances externes

- **Fonts Google** :
  - `Outfit` (300, 400, 500, 600, 700)
  - `JetBrains Mono` (400, 500)

```html
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

## Performance

- **Chargement différé** : `loading="lazy"` sur images/iframes
- **Smooth scroll** : `html { scroll-behavior: smooth; }`
- **Optimisations CSS** : Variables pour éviter répétitions
- **Pas de framework** : Vanilla JS uniquement (légèreté)

## Compatibilité

- **HTML5** : Toutes balises standard W3C
- **CSS3** : Variables, Grid, Flexbox
- **JavaScript ES6+** : Arrow functions, const/let, template literals
- **Navigateurs** : Chrome, Firefox, Safari, Edge (modernes)

---

**Version** : 1.0  
**Dernière mise à jour** : 2025  
**Maintenabilité** : ⭐⭐⭐⭐⭐ (Code clean, variables CSS, commentaires clairs)
