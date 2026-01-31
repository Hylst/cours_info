# 📝 Changelog

Toutes les modifications notables de ce projet sont documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/lang/fr/).

## [1.1.0] - 2026-02-01

### ✨ Added

- **Navigation Mobile Responsive** : Ajout d'un menu hamburger pour mobile et tablette
  - Bouton hamburger animé avec transformation en X
  - Navigation slide-in depuis la droite
  - Fermeture auto au clic sur lien ou touche ESC
  - Prévention du scroll body quand menu ouvert
  - Module JavaScript `mobile_nav.js` pour gérer les interactions

- **Assets Visuels Optimisés**
  - Icône/Logo Python Data 512x512 (WebP)
  - Image sociale Open Graph/Twitter 1200x630 (WebP)
  - Conversion PNG -> WebP effectuée (gain de poids > 80%)
  - Design fusionnant symboles Python, Data et IA
  - Palette cohérente bleu/orange sur fond sombre

- **Mentions Légales** : Ajout d'un lien vers la page des mentions légales dans le pied de page (footer)

- **Documentation Complète**
  - `readme.md` : Guide utilisateur avec instructions déploiement
  - `about.md` : Présentation de l'auteur et du projet hylst.fr
  - `structure.md` : Documentation technique de l'architecture
  - `changelog.md` : Ce fichier

- **SEO Amélioré**
  - Meta keywords enrichis (IA, ML, Deep Learning, GenAI, LLM, etc.)
  - Balises Open Graph complètes avec images
  - Twitter Card avec image sociale
  - Favicon PNG configuré
  - Meta tags additionnels (language, revisit-after, rating)

- **Accessibilité**
  - Attributs `aria-label` et `aria-expanded` sur menu hamburger
  - Attribut `role="navigation"` sur élément nav
  - Fermeture du menu au clavier (ESC)

### 🔧 Changed

- **Année** : Mise à jour 2025 → 2026 dans le titre et le CSS
- **Canonical URL** : Changé de relatif à absolu `https://hylst.fr/cours/docker/python_data/index.html`
- **CSS Variables** : Ajout de `--card-bg-hover` et `--text-bright` pour cohérence sémantique
- **Responsive Breakpoint** : Menu mobile actif jusqu'à 768px au lieu de `display:none`

### 🐛 Fixed

- **Quiz Scripts** : Suppression de la duplication de chargement `quiz-engine.js`
  - Gardé uniquement le script simple avec `window.load`
  - Supprimé la version `type="module"` et le double chargement

### 🗑️ Removed

- Couleurs hardcodées remplacées par variables CSS (conformité règles strictes)

---

## [1.0.0] - 2025-01-XX

### ✨ Initial Release

- Site web mémo Python Data Science complet
- 11 sections pédagogiques :
  - 00 - Écosystème Data (Jupyter, Anaconda, Colab)
  - 01 - Numpy (Calculs matriciels, Broadcasting)
  - 02 - Acquisition (SQL, API, Web Scraping)
  - 03 - Pandas (DataFrames, Manipulation)
  - 04 - Visualisation (Matplotlib, Seaborn)
  - 05 - Machine Learning (Scikit-Learn)
  - 06 - Deep Learning (Keras, PyTorch)
  - 07 - Mise en Production (MLOps, Streamlit, FastAPI)
  - 08 - NLP & Texte (spaCy, NLTK)
  - 09 - GenAI & LLMs (OpenAI, RAG, Prompt Engineering)
  - 10 - Référence Rapide (Cheat sheet)

- **Interactivité**
  - 10 modules JavaScript pour visualisations dynamiques
  - Système de quiz avec 100 questions
  - Sections expandables `<details>` pour explications

- **Design**
  - Thème Data Science bleu/orange sci-fi
  - Design system avec variables CSS
  - Syntax highlighting Python
  - Responsive (desktop optimisé)

- **Features**
  - Sidebar navigation (desktop)
  - Table des matières interactive
  - Back-to-top button
  - Code examples avec syntax coloring
  - SVG illustrations (Broadcasting, ML Pipeline, Pandas Joins)

---

## 🔮 À Venir (Roadmap)

### [1.2.0] - Prévision Mars 2026

- [x] Conversion images PNG → WebP pour optimisation (effectué)
- [ ] Mode sombre/clair toggle
- [ ] Recherche dans le contenu
- [ ] Génération PDF du mémo
- [ ] Exercices interactifs par section

### [2.0.0] - Prévision Q2 2026

- [ ] Projets complets end-to-end
- [ ] Notebooks Jupyter téléchargeables
- [ ] Vidéos tutoriels intégrées
- [ ] API backend pour quiz persistant
- [ ] Système de progression utilisateur

---

## 📌 Convention de Nommage des Versions

- **Major** (X.0.0) : Changements breaking, refonte complète
- **Minor** (1.X.0) : Nouvelles fonctionnalités, ajouts de sections
- **Patch** (1.0.X) : Bug fixes, corrections mineures, améliorations

## 🏷️ Tags Git Recommandés

```bash
# Créer un tag pour la version actuelle
git tag -a v1.1.0 -m "Version 1.1.0 - Navigation mobile responsive"

# Pousser le tag vers remote
git push origin v1.1.0
```

---

<p align="center">
  <em>Changelog maintenu par Geoffroy Streit</em><br>
  <strong>hylst.fr | Février 2026</strong>
</p>
