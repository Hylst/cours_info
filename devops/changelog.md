# Changelog - Mémo DevOps Expert

Toutes les modifications notables apportées à ce projet seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/lang/fr/).

---

## [1.0.0] - 2026-02-01

### ✨ Ajouté

#### SEO & Meta Tags
- Ajout de meta tags Open Graph pour le partage sur réseaux sociaux (Facebook, LinkedIn)
- Ajout de meta tags Twitter Cards pour aperçus enrichis sur Twitter/X
- Ajout de favicon multi-format (SVG + WebP 512x512)
- Ajout de structured data JSON-LD (schema.org/Course)
- Ajout de canonical URL (`https://hylst.fr/devops/`)
- Ajout de meta description optimisée

#### Navigation Responsive
- Implémentation du menu hamburger pour mobile (≤768px)
- Animation slide-in pour le menu mobile depuis la droite
- Overlay semi-transparent lors de l'ouverture du menu mobile
- Fermeture automatique du menu sur :
  - Clic sur un lien de navigation
  - Clic en dehors du menu (overlay)
  - Appui sur touche Échap (Escape)
- Scroll lock du body quand le menu est ouvert
- Animation croix (X) du bouton hamburger quand actif

#### Navigation - Modules Manquants
- Ajout du lien "CD" (#m4) dans la navigation top
- Ajout du lien "Observ." (#m8) dans la navigation top
- Ajout du lien "SecOps" (#m9) dans la navigation top
- Séparation "CI/CD" → "CI" + "CD" pour plus de clarté

#### Assets Visuels
- Création d'une icône DevOps personnalisée (gears DEV/OPS formant symbole infini)
- Création d'une image de partage social (1200x630px) avec éléments CI/CD, Docker, K8s, monitoring
- Conversion des assets en WebP optimisé (qualité 90%)
- Création d'une version SVG de l'icône (scalable)

#### Documentation
- Création de `readme.md` : Vue d'ensemble, installation, déploiement
- Création de `about.md` : Philosophie, objectifs, méthodologie
- Création de `structure.md` : Architecture technique complète
- Création de `changelog.md` : Historique des versions (ce fichier)

### 🔧 Corrigé

#### HTML
- **Ligne 520** : Correction de la balise `</p>` malformée (`./p>` → `</p>`)

#### CSS
- Ajout de styles responsive pour mobile (media queries @768px)
- Ajout de styles pour hamburger menu button (3 barres animées)
- Ajout de styles pour navigation mobile (slide-in, overlay)
- Ajout de styles pour l'animation de transformation hamburger → croix

#### JavaScript
- Ajout de la logique de toggle du menu hamburger
- Ajout de la gestion des événements (click, keydown)
- Ajout de la gestion du scroll lock (classe `menu-open` sur body)

### 📝 Modifié

#### SEO
- Amélioration de la meta description (plus détaillée)
- Ajout de meta theme-color pour Android
- Ajout de apple-touch-icon pour iOS

#### Structure HTML
- Ajout de l'ID `nav-menu` sur la balise `<nav>` pour ciblage JS
- Ajout du bouton hamburger dans le header (avant `<nav>`)

### 🎨 Améliorations UI/UX
- Navigation plus intuitive sur mobile (11 links → menu hamburger)
- Meilleure expérience tactile (overlay + fermeture au tap)
- Feedback visuel (animation hamburger → X)
- Accessibilité améliorée (aria-label sur button hamburger)

### 📊 Statistiques Version 1.0.0
- **Fichiers modifiés** : 3 (index.html, style.css, script.js)
- **Fichiers créés** : 7 (readme, about, structure, changelog, icon.svg, icon.webp, social-share.webp)
- **Lignes CSS ajoutées** : ~100 (responsive navigation)
- **Lignes JS ajoutées** : ~45 (mobile menu logic)
- **Lignes HTML ajoutées** : ~30 (meta tags + hamburger button)

---

## [0.9.0] - 2025-XX-XX (État Initial)

### Fonctionnalités Initiales
- 11 modules DevOps complets (Réseaux, Culture, Git, CI, CD, Docker, K8s, IaC, Observabilité, DevSecOps, SRE)
- Quiz interactif avec 115 questions
- Système de vocabulaire avec tooltips cliquables
- Simulateur de déploiement (Rolling, Blue/Green, Canary)
- Calculateur SLO (Service Level Objective)
- Design dark mode avec thème vert DevOps (#68a063)
- Navigation sticky avec liens vers modules
- Table des matières (TOC) avec cards cliquables
- Cas d'étude réels (Netflix, Google, etc.)
- Analogies pédagogiques
- Exemples de code avec syntax highlighting

---

## Format
Le changelog suit le format suivant :

### Catégories de Changements
- **✨ Ajouté** : Nouvelles fonctionnalités
- **🔧 Corrigé** : Corrections de bugs
- **📝 Modifié** : Changements de fonctionnalités existantes
- **🗑️ Supprimé** : Fonctionnalités retirées
- **🔒 Sécurité** : Corrections de vulnérabilités
- **⚡ Performance** : Optimisations de performance
- **📚 Documentation** : Mises à jour de documentation

---

## Liens
- [Comparer v0.9.0...v1.0.0] - À venir (si Git mis en place)
- [Live Demo](https://hylst.fr/devops/)

---

*Généré avec ❤️ pour un partage transparent des évolutions*
