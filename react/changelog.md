# Changelog

## [1.0.0] - 2026-02-01
### Ajouté
- **Modularité** : Refonte complète de l'application en Multi-Page Application (MPA).
  - Création du dossier `modules/` avec 13 fichiers HTML distincts.
  - Transformation de `index.html` en Dashboard.
- **Navigation** :
  - Création de `js/nav.js` pour l'injection dynamique du Header et de la Sidebar.
  - Sidebar latérale (TOC) pour navigation rapide entre les chapitres.
  - Menu Burger responsive pour mobile.
- **Assets** :
  - Génération d'une icône personnalisée (Favicon) et d'une Social Card (OpenGraph) en WebP.
- **Documentation** :
  - `readme.md`, `about.md`, `structure.md`.
- **UI/UX** :
  - Amélioration du responsive.
  - Uniformisation des headers de section.

### Corrigé
- Ajustement des chemins relatifs (`../../assets`) pour supporter la structure modulaire.
- Suppression du contenu dupliqué dans `index.html`.
