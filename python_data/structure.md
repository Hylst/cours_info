# 📐 Structure Technique - Python Data Science

Documentation complète de l'architecture du site web mémo Python Data Science.

## 📁 Arborescence des Fichiers

```
python_data/
│
├── 📄 index.html                    # Page principale (1404 lignes)
├── 🎨 style.css                     # Styles globaux (765 lignes)
├── 📊 quiz_data.json                # 100 questions de quiz
│
├── 📚 Documentation
│   ├── readme.md                    # Guide utilisateur
│   ├── about.md                     # À propos de l'auteur
│   ├── structure.md                 # Ce fichier
│   └── changelog.md                 # Historique des versions
│
├── 🖼️ img/                          # Assets visuels
│   ├── python-data-icon.webp        # Icône/Favicon 512x512
│   ├── python-data-social.webp      # Image Open Graph 1200x630
│   ├── broadcasting.svg            # Illustration Numpy
│   ├── ml_pipeline.svg             # Pipeline ML
│   └── pandas_joins.svg            # Jointures Pandas
│
└── 📦 assets/
    └── js/
        ├── app_init.js             # Initialisation globale
        ├── main.js                 # Script principal
        └── modules/                # Modules fonctionnels (13 fichiers)
            ├── nav.js              # Navigation sidebar
            ├── mobile_nav.js       # Menu hamburger mobile
            ├── utils.js            # Fonctions utilitaires
            ├── ecosystem.js        # Section 00 - Écosystème
            ├── numpy_viz.js        # Section 01 - Visualisation Numpy
            ├── numpy_performance.js # Section 01 - Performance Numpy
            ├── acquisition.js      # Section 02 - Acquisition data
            ├── pandas_lab.js       # Section 03 - Lab Pandas
            ├── machine_learning.js # Section 05 - ML algorithms
            ├── deep_learning.js    # Section 06 - DL visualizations
            ├── mlops.js            # Section 07 - MLOps pipeline
            ├── nlp.js              # Section 08 - NLP techniques
            └── genai.js            # Section 09 - GenAI & RAG
```

## 🎨 Architecture CSS

### Design System - Variables Sémantiques

Le design utilise un système de variables CSS strictement sémantiques (pas de couleurs hardcodées) :

```css
:root {
    /* Couleurs principales */
    --primary: #3b82f6;        /* Bleu vibrant */
    --secondary: #f97316;      /* Orange peps */
    --accent: #60a5fa;         /* Bleu clair */
    
    /* Backgrounds */
    --bg: #0f172a;             /* Bleu nuit très sombre */
    --bg2: #1e293b;            /* Bleu nuit plus clair */
    --card: #1e293b;           /* Cartes */
    --card-bg-hover: rgba(30, 41, 59, 0.5);  /* Hover effect */
    
    /* Textes */
    --text: #f1f5f9;           /* Texte principal */
    --text-bright: #f1f5f9;    /* Texte highlighted */
    --muted: #94a3b8;          /* Texte secondaire */
    --dim: #64748b;            /* Texte tertiaire */
    
    /* Bordures */
    --border: #334155;
    
    /* Couleurs thématiques */
    --green: #10b981;
    --purple: #a855f7;
    --pink: #ec4899;
    --yellow: #eab308;
    --red: #ef4444;
    
    /* Layout */
    --sidebar-width: 250px;
}
```

### Composants CSS Principaux

| Composant | Description | Lignes CSS |
|-----------|-------------|-----------|
| **Header** | Sticky navbar avec logo et navigation | 200-260 |
| **Hamburger** | Menu mobile responsive | 257-289 |
| **Hero** | Section d'accueil avec gradient | 291-313 |
| **TOC** | Table des matières en grid | 314-360 |
| **Side Nav** | Navigation latérale desktop | 41-117 |
| **Sections** | Blocs de contenu numérotés | 361-410 |
| **Code Blocks** | Syntax highlighting Python | 445-540 |
| **Details** | Sections expandables | 632-681 |
| **Tables** | Tableaux de référence | 590-630 |
| **Footer** | Pied de page avec infos | 704-716 |
| **Responsive** | Media queries mobile | 718-765 |

### Responsive Breakpoints

```css
/* Mobile First */
@media (max-width: 768px) {
    /* Hamburger menu visible */
    /* Navigation slide-in */
    /* Grilles simplifiées */
}

@media (min-width: 1400px) {
    /* Sidebar navigation visible */
    /* Layout optimisé pour grand écran */
}
```

## ⚙️ Modules JavaScript

### Architecture Modulaire

Chaque module JavaScript est autonome et s'initialise automatiquement au chargement de la page :

```javascript
(function() {
    'use strict';
    
    function initModule() {
        // Logique du module
    }
    
    // Auto-initialisation
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initModule);
    } else {
        initModule();
    }
})();
```

### Modules par Section

#### 1. `mobile_nav.js` - Navigation Mobile
**Responsabilités** :
- Toggle hamburger menu
- Slide animation de la navigation
- Fermeture auto au clic sur lien
- Fermeture avec ESC
- Gestion du scroll body

**Events** :
- Click hamburger button
- Click nav links
- Window resize
- Keydown ESC

#### 2. `nav.js` - Navigation Sidebar
**Responsabilités** :
- Highlighting du lien actif selon scroll
- Smooth scroll vers sections
- Gestion de l'état actif

#### 3. `ecosystem.js` - Section 00
**Visualisation** : Lifecycle du projet Data Science
- Cards Jupyter / Anaconda / Colab
- Diagramme interactif du workflow

#### 4. `numpy_viz.js` - Section 01
**Visualisation** : Dimensions Numpy
- Grille interactive pour montrer shape
- Reshape dynamique
- Broadcasting illustration

#### 5. `numpy_performance.js` - Section 01
**Démonstration** : Course de performance
- Animation Numpy vs Python loops
- Graphique de comparaison temps

#### 6. `pandas_lab.js` - Section 03
**Interaction** : Manipulation DataFrame
- Table interactive éditable
- Filtres dynamiques
- Opérations temps réel

#### 7. `acquisition.js` - Section 02
**Visualisation** : Pipeline ETL
- Diagramme flux de données
- Cards méthodes d'acquisition
- Vigilances RGPD

#### 8. `machine_learning.js` - Section 05
**Interaction** : Sélecteur d'algorithmes
- Cards algorithmes ML
- Flowchart décisionnel
- Workflow train/test

#### 9. `deep_learning.js` - Section 06
**Visualisation** : Réseau de neurones
- Architecture neurones
- Fonctions d'activation animées

#### 10. `mlops.js` - Section 07
**Visualisation** : Pipeline déploiement
- Workflow CI/CD
- Tools comparison

#### 11. `nlp.js` - Section 08
**Visualisation** : Pipeline NLP
- Étapes tokenisation
- Techniques NLP cards

#### 12. `genai.js` - Section 09
**Visualisation** : Prompt Engineering & RAG
- Pattern prompts
- Architecture RAG

## 🧩 Système de Quiz

### Structure JSON

```json
{
    "meta": {
        "title": "Quiz Python Data Expert - 100 Questions",
        "total": 100
    },
    "questions": [
        {
            "id": 1,
            "question": "...",
            "options": ["A", "B", "C", "D"],
            "answer": 0,
            "explanation": "..."
        }
    ]
}
```

### Quiz Engine

Situé dans `../../assets/js/quiz-engine.js` (partagé entre tous les cours).

**Fonctionnalités** :
- Sélection aléatoire de N questions
- Scoring en temps réel
- Explications détaillées
- Historique des réponses
- Persistance localStorage (optionnelle)

## 📦 Dépendances

### Externes (CDN)

```html
<!-- Fonts -->
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">

<!-- Quiz CSS (partagé) -->
<link rel="stylesheet" href="../../assets/css/quiz-style.css">

<!-- Quiz Engine (partagé) -->
<script src="../../assets/js/quiz-engine.js"></script>
```

### Internes

Tous les modules JavaScript sont auto-hébergés pour fonctionner en mode `file://` local.

## 🐳 Configuration Docker/Nginx

### Dockerfile Minimal

```dockerfile
FROM nginx:alpine

# Copier les fichiers du site
COPY python_data/ /usr/share/nginx/html/cours/docker/python_data/

# Copier la configuration nginx (optionnel)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

### nginx.conf Optimisé

```nginx
server {
    listen 80;
    server_name hylst.fr;
    root /usr/share/nginx/html/cours/docker/python_data;
    index index.html;

    # Sécurité
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Cache stratégique
    location ~* \.(webp|svg|js|css|json)$ {
        expires 7d;
        add_header Cache-Control "public, immutable";
    }

    location ~* \.html$ {
        expires -1;
        add_header Cache-Control "no-cache, no-store, must-revalidate";
    }

    # Compression
    gzip on;
    gzip_vary on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml image/svg+xml;
    gzip_min_length 1000;

    # Logs
    access_log /var/log/nginx/python_data_access.log;
    error_log /var/log/nginx/python_data_error.log warn;
}
```

## 🔧 Maintenance

### Ajouter une Nouvelle Section

1. **HTML** : Ajouter `<section id="sXX">` dans `index.html`
2. **TOC** : Ajouter lien dans `.toc-grid` et `.side-nav-links`
3. **CSS** : Styles auto-hérités, rien à modifier
4. **JS** : Créer `assets/js/modules/nouvelle_section.js` si interactif
5. **Quiz** : Ajouter questions dans `quiz_data.json`

### Modifier les Couleurs

Éditer les variables CSS dans `:root` (lignes 7-31 de `style.css`).

### Mettre à Jour le Quiz

Éditer `quiz_data.json` - Format strict à respecter pour éviter erreurs.

## 📊 Métriques

- **HTML** : 1 fichier, 1404 lignes
- **CSS** : 1 fichier, 765 lignes
- **JavaScript** : 14 fichiers, ~2000 lignes total
- **Images** : 5 fichiers (3 SVG, 2 WebP)
- **Quiz** : 100 questions
- **Sections** : 11 modules pédagogiques
- **Poids total** : ~500 KB (sans cache)

---

<p align="center">
  <em>Documentation mise à jour : Février 2026</em><br>
  <strong>Geoffroy Streit | hylst.fr</strong>
</p>
