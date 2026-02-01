# Structure du Projet: Python Web Memo

Ce document détaille l'organisation des fichiers et la logique de construction du site.

## 🌳 Arborescence

```text
/python_web
├── data/                       # Données structurées (JSON)
│   ├── quiz_web.json           # Banque de questions pour le quiz principal
│   └── site_structure.json     # Définition de l'ordre des sections et de la nav
├── assets/                     # Ressources statiques
│   ├── css/
│   │   └── quiz-style.css      # Styles du quiz
│   ├── js/
│   │   ├── quiz-engine.js      # Moteur de quiz interactif
│   │   └── quiz-data-validator.js
│   └── img/                    # Images et icônes
│       ├── python-web-icon.svg # Icône principale (logo)
│       ├── favicon.svg         # Favicon SVG
│       ├── og-cover-social.webp# Image sociale 1200x630 (WebP optimisé)
│       └── og-cover.png        # Ancienne image (rétrocompatibilité)
├── src/                        # Fragments sources (HTML)
│   ├── layout.html             # Structure de base avec placeholders ({{CONTENT}})
│   ├── content/                # Contenu pédagogique par module
│   │   ├── 00_panorama.html
│   │   ├── 01_env.html
│   │   └── ...
│   └── parts/                  # Composants réutilisables
│       ├── header.html
│       ├── footer.html
│       └── ...
├── build.py                    # Script de génération statique
├── index.html                  # ⚠️ FICHIER GÉNÉRÉ (Ne pas modifier directement)
├── style.css                   # Styles globaux et variables CSS
├── script.js                   # Logique frontend (interaction, copie, menu hamburger)
├── readme.md                   # Documentation d'utilisation
├── about.md                    # À propos du projet
├── structure.md                # Ce fichier
└── changelog.md                # Historique des évolutions
```

## ⚙️ Logique de Build (`build.py`)

Le script `build.py` effectue les actions suivantes :
1. **Validation** : Vérifie l'intégrité des fichiers JSON et la présence de tous les fragments de contenu.
2. **Assemblage** :
   - Lit `site_structure.json` pour connaître l'ordre des modules.
   - Génère dynamiquement le `header` avec navigation responsive et la `Table des Matières` (TOC).
   - Concatène tous les fichiers de `src/content/`.
3. **Injection** : Remplace les variables de type `{{NAME}}` dans `layout.html` par le contenu généré.
4. **Output** : Écrit le résultat final dans `index.html` à la racine.

## 🎨 Design System

Le design est piloté par des variables CSS définies au début de `style.css`. 

**Règle d'or** : Jamais de couleurs hardcodées. Utilisez toujours `--primary`, `--bg`, `--card`, `--text`, `--muted`, etc., pour assurer la cohérence et faciliter les changements de thèmes futurs.

### Variables principales
- `--primary: #10b981` (vert émeraude)
- `--secondary: #06d6a0` (turquoise)
- `--bg: #0a0f0d` (noir profond)
- `--text: #e8fff4` (blanc verdâtre)
- Voir `style.css` lignes 7-45 pour la liste complète

## 📱 Navigation Responsive

Le site implémente une navigation adaptative :

### Desktop (>768px)
- Navigation horizontale `.nav-desktop` avec 8 liens principaux
- Logo avec icône SVG

### Mobile (≤768px)
- Bouton hamburger `.hamburger` (3 barres)
- Menu overlay `.nav-mobile` (slide de gauche)
- 15 liens complets (14 modules + quiz)
- Scroll-lock quand le menu est ouvert

## 🖼️ Ressources Visuelles

### Icônes
- **python-web-icon.svg** : Logo principal (serpent + globe + code)
- **favicon.svg** : Version simplifiée pour favicon

Toutes les icônes sont en **SVG** pour :
- Scalabilité parfaite
- Poids minimal
- Support du responsive

### Images Sociales
- **og-cover-social.webp** : Image de partage social (1200x630px)
  - Format WebP pour optimisation
  - Gradient vert/noir cohérent avec la charte
  - Texte lisible: "Python Web - Flask · Django · FastAPI"

## 🔧 Scripts JavaScript

### `script.js`
- **Copie de code** : Boutons automatiques sur chaque bloc `.code-head`
- **Menu hamburger** : Toggle `.active`, gestion du scroll-lock
- **Fermeture auto** : Click sur lien → ferme le menu mobile

### `quiz-engine.js`
- Moteur autonome du quiz
- Chargement dynamique depuis `data/quiz_web.json`
- Tracking des scores et progression

## 📊 Optimisation

- **Performance** : Site statique, pas de framework lourd
- **SEO** : Meta tags Open Graph, JSON-LD structured data
- **Images** : WebP + SVG uniquement
- **CSS** : Variables + minimalisme
- **JS** : Vanilla (pas de dépendances)

## 🐳 Déploiement

Le site est conçu pour être servi par **Nginx Alpine** dans un container Docker.

### Fichiers essentiels pour le déploiement
- `index.html` (généré)
- `style.css`
- `script.js`
- `assets/` (complet)
- `data/` (complet)

Taille totale optimisée: **~150KB** (hors images)
