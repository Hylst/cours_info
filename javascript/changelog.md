# Changelog - Mémo JavaScript

Toutes les modifications notables de ce projet sont documentées dans ce fichier.

Le format s'inspire de [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),  
et ce projet adhère au [Semantic Versioning](https://semver.org/lang/fr/).

---

## [1.0.0] - 2026-01-31

### ✨ Ajouté
- **Documentation complète** : `readme.md`, `about.md`, `structure.md`, `changelog.md`
- **Navigation responsive** : Menu hamburger pour mobile et tablettes
- **Optimisations SEO** :
  - Meta descriptions sur toutes les pages
  - Balises Open Graph (og:title, og:description, og:image, og:url)
  - Twitter Card tags
  - Favicon personnalisé (SVG + PNG)
- **Assets visuels** :
  - `favicon.svg` et déclinaisons PNG (16, 32, 192, 512px)
  - `js-hero.webp` : Illustration hero pour la page d'accueil
  - `js-og-image.webp` : Image Open Graph (1200x630px) pour partages sociaux
- **Accessibilité** :
  - ARIA labels sur les boutons du menu mobile
  - Navigation au clavier fonctionnelle
  - Contraste vérifié (conforme WCAG AA)

### 🔧 Modifié
- **`layout.js`** : Amélioration du header avec menu responsive complet
- **`style.css`** : Ajout des styles pour le menu hamburger et amélioration des media queries
- **Tous les fichiers HTML** : Ajout des meta tags SEO et référence au favicon
- **Menu de navigation** : Ajout de liens vers tous les modules principaux

### 🐛 Corrigé
- Uniformisation des chemins relatifs dans les modules
- Validation HTML5 (retrait de balises obsolètes)
- Correction de l'affichage du menu sur tablettes (zone intermédiaire 768-1024px)

---

## [0.9.0] - 2026-01-29

### ✨ Ajouté
- **Module 18 : Cheatsheets** : Extension majeure avec tableaux de référence complets
  - Structures de données avancées (Maps, Sets, WeakMap, WeakSet)
  - Expressions régulières (regex patterns, méthodes)
  - Erreurs et débogage (try/catch, types d'erreurs)
  - APIs du navigateur (BOM: window, navigator, location)
  - Fetch API et requêtes réseau
  - Timers (setTimeout, setInterval, requestAnimationFrame)
  - Features ES+ (Generators, Proxies, Symbols, BigInt)
- **Navigation tabs horizontale** dans le module Cheatsheets pour meilleure UX

### 🔧 Modifié
- **Module 14, 15, 16** : Enrichissement avec exemples avancés et cas pratiques
- **Module 12** : Ajout d'exemples Fetch avec gestion d'erreurs réseau

---

## [0.8.0] - 2026-01-27

### ✨ Ajouté
- **Quiz interactif complet** : 100 questions QCM sur tous les modules
- **Moteur de quiz** (`quiz-engine.js`) :
  - Sélection aléatoire de 10 questions
  - Validation instantanée avec explications
  - Système de score et progression
  - Filtrage par thème (optionnel)

### 🐛 Corrigé
- Affichage du quiz qui ne s'affichait pas complètement en bas de page
- Chemins des assets CSS/JS du quiz après refactorisation

---

## [0.7.0] - 2026-01-26

### ✨ Ajouté
- **Prism.js** : Coloration syntaxique automatique pour tous les blocs de code
- **18 modules complets** (finalisation de tous les modules de 01 à 18)
- **Design System consolidé** : Variables CSS documentées et appliquées partout

### 🔧 Modifié
- Refactorisation du `index.html` monolithique en **architecture modulaire MPA**
- Extraction de `layout.js` pour injection Header/Footer dynamique
- Séparation des scripts JS par module dans `/assets/js/modules/`

### 🐛 Corrigé
- Fuites de scope avec `var` dans les démos (remplacé par `let/const`)
- Incohérences de nommage d'IDs entre modules

---

## [0.6.0] - 2026-01-25

### ✨ Ajouté
- **Module 11 : Asynchrone** (Event Loop, Callbacks, Timers)
- **Module 12 : Fetch & API** (Requêtes HTTP, REST)
- **Module 13 : Storage** (localStorage, sessionStorage)

### 🔧 Modifié
- Amélioration des démos interactives avec feedback visuel
- Optimisation des transitions CSS (fluidité améliorée)

---

## [0.5.0] - 2026-01-20

### ✨ Ajouté
- **Module 09 : DOM** (Sélection, manipulation HTML)
- **Module 10 : Events** (click, input, load, propagation)
- **Système de navigation** : Boutons Précédent/Suivant entre modules

### 🔧 Modifié
- Design des blocs `<details>` avec indicateur visuel (+/×)
- Amélioration du responsive (grilles adaptatives)

---

## [0.4.0] - 2026-01-15

### ✨ Ajouté
- **Module 06 : Fonctions** (Arrow, callbacks)
- **Module 07 : Arrays** (map, filter, reduce)
- **Module 08 : Objects** (Propriétés, destructuring)

---

## [0.3.0] - 2026-01-10

### ✨ Ajouté
- **Module 04 : Conditions** (if/else, switch, ternaire)
- **Module 05 : Boucles** (for, while, for...of)

### 🔧 Modifié
- Uniformisation du pattern de présentation des modules

---

## [0.2.0] - 2026-01-05

### ✨ Ajouté
- **Module 01 : Variables** (let, const, var, portée, TDZ)
- **Module 02 : Types** (Primitifs, Objets, typeof)
- **Module 03 : Opérateurs** (Arithmétique, logique, comparaison)
- **Design System** : Palette de couleurs JavaScript (jaune, cyan, dark)

---

## [0.1.0] - 2026-01-01

### ✨ Ajouté
- Initialisation du projet
- Structure HTML de base (`index.html` monolithique)
- Feuille de style globale (`style.css`)
- Header et Footer statiques

---

## Légende des Types de Modifications

- ✨ **Ajouté** : Nouvelles fonctionnalités
- 🔧 **Modifié** : Changements dans les fonctionnalités existantes
- 🐛 **Corrigé** : Corrections de bugs
- 🗑️ **Supprimé** : Fonctionnalités retirées
- 🔒 **Sécurité** : Correctifs de sécurité
- 📝 **Documentation** : Modifications de la documentation uniquement

---

*Pour toute question ou suggestion, contactez [Geoffroy Streit](https://hylst.fr)*
