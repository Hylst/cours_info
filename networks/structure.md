# Structure Technique - Mémo Réseaux

## 📐 Architecture Globale

Ce site est une **Single Page Application (SPA) statique** construite en HTML/CSS/JS vanilla, sans framework. L'architecture privilégie la simplicité, la performance et la portabilité.

## 🗂️ Organisation des Fichiers

```
networks/
├── index.html              # Document principal (1656 lignes)
├── style.css               # Styles personnalisés (402 lignes)
├── script.js               # Utilitaires JavaScript (21 lignes)
├── quiz_networks.json      # Base de données quiz (1988 lignes, 165 questions)
│
├── img/                    # Assets visuels
│   ├── osi_animated.svg          # Animation modèle OSI
│   ├── osi_model.svg             # Schéma statique OSI
│   ├── tcp_ip_stack.svg          # Stack TCP/IP
│   ├── encapsulation.svg         # Vue d'ensemble encapsulation
│   ├── encapsulation_detailed.svg
│   ├── tcp_ip_encapsulation_anim.svg
│   ├── tls_handshake.svg         # Négociation TLS/SSL
│   ├── dns_flow.svg              # Résolution DNS étape par étape
│   ├── dhcp_dora.svg             # Processus DHCP (DORA)
│   ├── topology.svg              # Topologie réseau complète
│   ├── network_zones.svg         # Architecture DMZ
│   ├── cabling.svg               # Types de câbles
│   ├── wifi_channels.svg         # Canaux Wi-Fi 2.4 vs 5 GHz
│   ├── favicon.ico               # Icône du site
│   └── og-image.png              # Image de partage social (1200×630)
│
└── docs/                   # Documentation (vous êtes ici)
    ├── readme.md          # Guide utilisateur
    ├── about.md           # Objectifs pédagogiques
    ├── structure.md       # Architecture technique (ce fichier)
    └── changelog.md       # Historique des versions
```

## 🎨 Design System (CSS)

### Custom Properties (Variables CSS)

Le fichier `style.css` utilise un design system cohérent via `:root` (lignes 6-26) :

```css
:root {
    /* Couleurs principales */
    --primary: #68a063;
    --primary-bright: #83cd29;
    --secondary: #303030;
    --accent: #ffffff;

    /* Arrière-plans */
    --bg: #222222;       /* Fond principal */
    --bg2: #2b2b2b;      /* Fond secondaire */
    --card: #303030;     /* Cartes/conteneurs */

    /* Texte */
    --text: #f0f0f0;     /* Texte principal */
    --muted: #a0a0a0;    /* Texte atténué */
    --border: #444444;   /* Bordures */

    /* Syntax Highlighting (Code) */
    --kw: #c792ea;       /* Mots-clés (purple) */
    --fn: #82aaff;       /* Fonctions (blue) */
    --str: #c3e88d;      /* Chaînes (green) */
    --num: #f78c6c;      /* Nombres (orange) */
    --c: #546e7a;        /* Commentaires (gray) */
    --var: #ffcb6b;      /* Variables (yellow) */
}
```

### Typographie

- **Titres & Corps** : `Outfit` (Google Fonts) – Sans-serif moderne, très lisible
- **Code** : `JetBrains Mono` – Monospace optimisé pour les développeurs

Chargé via :
```html
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Composants Réutilisables

#### 1. Header Sticky (Lignes 52-108)
- Position `sticky` avec blur backdrop
- Logo avec icône encadrée (`NET`)
- Navigation horizontale avec effet hover

#### 2. Hero Section (Lignes 110-131)
- Titre principal avec effet glow (`text-shadow`)
- Fond gradient radial subtil
- Responsive adapté mobile

#### 3. Section Structure (Lignes 193-232)
- Numéro de section (badge coloré)
- Titre + sous-titre sémantiques
- Espacement vertical automatique

#### 4. Blocs de Code (Lignes 278-348)
- En-tête avec style VS Code (`.code-head`)
- Syntaxe colorée via spans (`.kw`, `.fn`, `.str`, `.num`, `.c`, `.var`)
- Scrollable horizontalement sur overflow

#### 5. Info Boxes (Lignes 357-379)
- Bordure gauche colorée (`.info`)
- Fond semi-transparent
- Variants : `.tip` (vert), `.warning` (orange)

#### 6. Grille Responsive (Ligne 351-355)
```css
.grid2 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 16px;
}
```
Adaptation automatique selon la largeur d'écran.

## 🧩 Structure HTML

### Sections Principales

Chaque section suit ce pattern :

```html
<section id="sX">
  <div class="container">
    <div class="sec-header">
      <div class="sec-num">0X</div>
      <div>
        <h2 class="sec-title">Titre</h2>
        <p class="sec-sub">Sous-titre</p>
      </div>
    </div>

    <!-- Contenu : paragraphes, grilles, code, images -->

  </div>
</section>
```

### Navigation par Ancres

Le menu utilise des liens d'ancrage (`href="#sX"`) pour un scroll fluide (`scroll-behavior: smooth`).

### Images SVG

Les diagrammes sont :
- **Inline** pour les animations complexes (manipulation DOM)
- **Externes** pour les illustrations statiques (performance)

Exemple :
```html
<img src="img/dns_flow.svg" alt="Schéma Résolution DNS" 
     style="width:100%; border-radius:8px;">
```

## 🎮 Quiz Interactif

### Architecture

Le quiz est un module autonome :

```
assets/js/quiz-engine.js  → Engine réutilisable (logique)
assets/css/quiz-style.css → Styles du quiz
networks/quiz_networks.json → Données spécifiques
```

### Chargement

Module ES6 chargé dynamiquement :

```html
<script type="module">
    import '../../assets/js/quiz-engine.js';
    document.addEventListener('DOMContentLoaded', () => {
        new window.QuizEngine({
            containerId: 'quiz-app',
            jsonPath: 'quiz_networks.json',
            questionsPerSession: 10
        });
    });
</script>
```

### Format JSON

```json
{
  "meta": {
    "title": "Quiz Réseaux - 100 Questions",
    "total": 165
  },
  "questions": [
    {
      "id": 1,
      "question": "Que signifie OSI ?",
      "options": ["Open Systems Interconnection", "...", "...", "..."],
      "answer": 0,
      "explanation": "Le modèle de référence en 7 couches."
    }
  ]
}
```

## 📱 Responsive Design

### Breakpoints

| Largeur | Ajustements |
|---------|------------|
| **≤ 768px** | Menu masqué (hamburger requis), sections en colonne unique |
| **> 768px** | Menu horizontal, grilles 2 colonnes |

### Media Queries (Lignes 390-402)

```css
@media (max-width: 768px) {
    .hero h1 {
        font-size: 2rem;  /* Réduit de 2.8rem */
    }

    nav {
        display: none;  /* ⚠️ À améliorer avec hamburger */
    }

    .sec-header {
        flex-direction: column;
    }
}
```

## 🚀 Performance

### Optimisations

1. **Pas de dépendances JS lourdes** : Vanilla JS pur
2. **SVG vectoriels** : Petite taille, netteté infinie
3. **CSS custom properties** : Thème dynamique sans duplication
4. **Lazy loading potentiel** : Images `loading="lazy"` (à ajouter)

### Taille des fichiers

- `index.html` : ~82 KB (beaucoup de contenu textuel)
- `style.css` : ~7 KB
- `script.js` : ~646 bytes
- `quiz_networks.json` : ~65 KB (165 questions)
- **Total sans images** : ~155 KB
- **Total avec SVG** : ~500 KB (estimation)

### Cache Strategy (Nginx)

```nginx
location ~* \.(css|js|svg|ico|woff2)$ {
    expires 30d;
    add_header Cache-Control "public, immutable";
}
```

## 🛠️ Dépendances Externes

### Assets Partagés (Relatif au parent `Docker/`)

```
../../assets/css/quiz-style.css
../../assets/js/quiz-engine.js
```

Ces fichiers sont **réutilisés** par tous les cours (`php/`, `java/`, etc.).

### Google Fonts

Chargé depuis CDN (non bloquant, `display=swap`).

## 🔗 Intégration Multi-Cours

Ce site fait partie d'un écosystème de cours :

```
Docker/
├── index.html       → Page d'accueil globale
├── networks/        → Ce cours
├── php/
├── java/
└── assets/          → Resources partagées
```

Permet de mutualiser :
- Style du quiz
- Engine JavaScript
- Éventuellement header/footer communs

## 🧪 Tests & Validation

### Validation HTML

```bash
npx html-validate index.html
```

### Accessibilité (a11y)

```bash
npx pa11y http://localhost:8080/networks/
```

### Lighthouse (Performance, SEO, Best Practices)

Lancer depuis Chrome DevTools > Lighthouse

Cibles :
- Performance : > 90
- Accessibility : > 95
- Best Practices : 100
- SEO : > 90

## 🔮 Évolutions Futures

### Techniques

- [ ] PWA (Service Worker, manifest.json)
- [ ] Dark/Light mode toggle
- [ ] Recherche full-text (Lunr.js ou Fuse.js)
- [ ] Export PDF dynamique (jsPDF)
- [ ] i18n (anglais, espagnol)

### Contenu

- [ ] Labs interactifs (simulateur Packet Tracer)
- [ ] Exercices de calcul CIDR
- [ ] Flashcards SRS (Spaced Repetition)

---

**Dernière mise à jour** : Janvier 2026  
**Version** : 1.0.0
