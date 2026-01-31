# Changelog - Mémo CSS3

Toutes les modifications notables de ce projet sont documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/lang/fr/).

## [1.0.1] - 2026-01-31

### ✅ Corrigé
- **Date obsolète** : Mise à jour du title de "Guide 2025" vers "Guide 2026"
- **Erreur HTML structure** : Suppression des balises de fermeture en double `</div></section>` en fin de Section 11 (ligne ~2023)
- **Paragraphe manquant** : Ajout du paragraphe introductif de la Section 10 (Architecture CSS)
- **Typo responsive** : Correction "tablets Tablette" → "Tablette" dans le simulateur de breakpoints
- **Quiz duplication** : Suppression du code d'initialisation du quiz en double (module ES6 redondant)

### ➕ Ajouté
- **SEO complet** : Ajout des meta tags manquants
  - `og:url` : https://hylst.fr/css/
  - `og:image` : https://hylst.fr/css/assets/og-image.png (1200x630px)
  - `og:image:width` et `og:image:height`
  - `twitter:image` : https://hylst.fr/css/assets/og-image.png
  - `<link rel="icon">` : assets/favicon.svg
  - `<link rel="canonical">` : URL absolue https://hylst.fr/css/
- **Assets visuels** :
  - `assets/favicon.svg` : Icône personnalisée CSS3
  - `assets/og-image.png` : Image de partage réseaux sociaux
- **Documentation** :
  - `readme.md` : Description projet, installation, structure, technologies
  - `about.md` : Contexte éducatif, objectifs pédagogiques, approche didactique
  - `structure.md` : Architecture détaillée des 13 sections, design system, navigation
  - `changelog.md` : Ce fichier

### 🔧 Amélioré
- **Canonical URL** : Passage de relatif `index.html` vers absolu `https://hylst.fr/css/`
- **Meta descriptions** : Optimisation pour meilleur CTR sur réseaux sociaux

---

## [1.0.0] - 2026-01-31

### 🎉 Version Initiale

#### Contenu
- **13 sections complètes** couvrant CSS3 de A à Z
  1. Syntaxe CSS
  2. Sélecteurs
  3. Box Model
  4. Texte & Couleurs
  5. Flexbox
  6. Grid
  7. Animations & Transitions
  8. Responsive Design
  9. Variables CSS
  10. Architecture CSS
  11. CSS Moderne (:has(), :is(), nesting)
  12. Référence Rapide (150+ propriétés)
  13. Galerie de Démos (50+ effets visuels)

#### Fonctionnalités
- **20+ démos interactives** :
  - Playgrounds Flexbox, Grid, Animations, Variables
  - Simulateurs (responsive breakpoints, filtres, timing functions)
  - Comparaisons visuelles (units, display, position)
- **Quiz intégré** : 10 questions aléatoires par session
- **Navigation optimisée** : Header sticky + TOC numérotée cliquable
- **Design moderne** : Dark theme avec gradients CSS blue

#### Technique
- HTML5 sémantique : 2660 lignes
- CSS3 moderne : 437 lignes avec custom properties
- JavaScript vanilla : Quiz engine (8 KB)
- 100% statique : Compatible Docker nginx

#### SEO & Accessibilité
- Meta tags Open Graph et Twitter
- Structure h1-h6 hiérarchique
- Navigation au clavier
- Smooth scroll

#### Hébergement
- Déployé sur https://hylst.fr/css/
- Docker container (nginx:alpine)
- Géré via Coolify sur VPS Hostinger

---

## Roadmap Future (Non planifié)

### Idées d'Améliorations
- [ ] Mode clair/sombre toggle manuel (en plus de prefers-color-scheme)
- [ ] Recherche full-text dans les propriétés
- [ ] Export PDF du mémo
- [ ] Bookmarking des sections favorites (localStorage)
- [ ] Plus de questions de quiz (actuellement ~40+)
- [ ] Traduction anglaise (i18n)
- [ ] Menu hamburger mobile responsive (actuellement caché)
- [ ] PWA avec service worker pour consultation offline
- [ ] Section "Cas pratiques" avec layouts complets reproduits
- [ ] Section "Compatibilité navigateurs" avec Can I Use integration

---

## Contributeurs

- **Geoffroy Streit** - Créateur et mainteneur principal
- **Assistance IA** - Accél ération développement et génération de contenu

---

## Licence

© 2026 Geoffroy Streit - Usage éducatif et personnel

---

Pour toute suggestion ou signalement de bug, contactez Geoffroy Streit via hylst.fr
