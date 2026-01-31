# Changelog - Mémo Python

Toutes les modifications notables de ce projet seront documentées dans ce fichier.

## [2.0.0] - 2026-02-01

### ✨ Ajouts Majeurs

#### Navigation & UX
- **Navigation mobile responsive** avec menu hamburger animé
  - Full-screen overlay avec 18 modules accessibles
  - Animation smooth slide-in depuis la gauche
  - Fermeture auto au clic sur lien
  - Prévention scroll background en overlay
- **Amélioration side navigation** : abaissement seuil de 1350px à 1200px
- Module "Référence" ajouté au menu top desktop

#### SEO & Meta
- **Favicon personnalisé** : `python_icon.webp` (512x512)
- **Image de partage social** : `python_share.webp` (1200x630)
- **Meta tags complets** : Open Graph + Twitter Cards
- **JSON-LD structured data** pour référencement moteurs
- **Meta description enrichie** : mention 18 modules + specializations

#### Fonctionnalités
- **visualizeArgs()** : Fonction manquante ajoutée pour démo *args/**kwargs (Module 03)
- Amélioration messages d'erreur quiz

#### Documentation  
- **readme.md** : Vue d'ensemble complète du projet
- **about.md** : Philosophie, objectifs, auteur
- **structure.md** : Architecture détaillée (HTML/CSS/JS)
- **changelog.md** : Ce fichier

### 🔄 Modifications

#### Contenu
- **Mise à jour année** : 2025 → 2026 partout (title, meta, timeline, quiz, footer)
- **Mise à jour version Python** : 3.12+ → 3.13+ (timeline, descriptions)
- **Correction footer** : "14 chapitres" → "18 modules"

#### Style & Design
- Refonte sections navigation (hamburger + mobile menu complet)
- Media queries améliorées pour responsive
- Ajout classes `.desktop-nav`, `.mobile-menu-*`
- Variables CSS strictement respectées (pas de hardcode)

#### Code
- `index.html` : +37 lignes (mobile menu structure)
- `style.css` : +120 lignes (hamburger + mobile styles)
- `script.js` : +44 lignes (mobile menu logic)
- `side-nav.css` : breakpoint modifié

### 🐛 Corrections

- **visualizeArgs()** : Fonction référencée mais inexistante → créée
- **URLs canoniques** : `index.html` → `https://hylst.fr/cours/docker/python/`
- **Responsive grids** : `.grid2` passe en single column mobile
- **Module count** : Affichage corrigé footer

### 📊 Statistiques

- **Lignes de code** : ~4200 (HTML: 2327, CSS: 1333, JS: 565)
- **Modules** : 18 complets + quiz
- **Assets** : 7 SVG + 2 WebP
- **Poids total** : ~210 KB (sans assets externes)

---

## [1.0.0] - 2025-12-XX (Estimation)

### 🎉 Version Initiale

- Création des 18 modules Python
- Design dark avec Python colors (#3776ab, #ffd43b)
- Side navigation auto-générée
- Back-to-top button
- Code copy buttons
- 12+ demos interactives
- Quiz intégré (37+ questions)
- Responsive basique (desktop/tablet)

---

## 🔮 Roadmap Future

### Version  2.1 (Prévu)
- [ ] Mode clair/sombre toggleable
- [ ] Recherche full-text dans modules
- [ ] Bookmark/favoris localStorage
- [ ] Export PDF de modules
- [ ] Progression tracker (localStorage)

### Version 2.2 (Idées)
- [ ] Mode offline (Service Worker PWA)
- [ ] Playground Python in-browser (Pyodide)
- [ ] Audio narration modules (accessibilité)
- [ ] Traduction EN (i18n)
- [ ] API REST pour quiz communautaire

### Optimisations Continues
- [ ] Lazy loading images natives
- [ ] Code splitting JS (modules)
- [ ] Critical CSS inline
- [ ] Preconnect fonts
- [ ] WebP fallback PNG automatique

---

## 📝 Notes de Version

### Politique Versioning
- **Major** (X.0.0) : Changements structurels, breaking changes
- **Minor** (x.X.0) : Nouvelles features, modules, contenu
- **Patch** (x.x.X) : Corrections bugs, typos, petites amélioration UX

### Support Navigateurs
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Compatibilité Mobile
- iOS Safari 14+
- Chrome Mobile 90+
- Samsung Internet 14+

---

**Dernière mise à jour** : 2026-02-01  
**Auteur** : Geoffroy Streit
