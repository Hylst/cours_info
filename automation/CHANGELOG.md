# Changelog

## [2025-02-02] - Modularisation Complète

### ✨ Added
*   **Système de Build Python** : Passage d'un fichier unique à une génération statique.
*   **Menu Mobile** : Ajout d'un bouton hamburger et d'un menu responsive.
*   **Assets Custom** : Nouvel icône et Social Card générés par IA (Style Cyber/Network).
*   **Modules** : Séparation du contenu en 11 fichiers distincts + Quiz.
*   **Docs** : Ajout de `README.md`, `STRUCTURE.md`, `ABOUT.md`.

### ♻️ Changed
*   **Nav** : Le menu de navigation est maintenant un partial (`partials/nav.html`) et supporte le mobile.
*   **Footer** : Séparation du footer et du module Quiz.
*   **SEO** : Mise à jour des balises OpenGraph et Favicon dans `head.html`.

### 🐛 Fixed
*   Correction de la structure monolithique difficile à maintenir.
