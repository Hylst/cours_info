# Changelog

## [1.1.0] - 2026-02-04
### Premium Overhaul (Phases 1-4)
- **UI/UX Refonte Grpahique** :
    - Adoption d'un style "Glassmorphism" avec effets de flou et transparence.
    - Nouvelles cartes modules avec dégradés et iconographie.
    - Amélioration de la typographie et des animations de survol.
- **Enrichissement du Contenu (Deep Content)** :
    - **m00-m04 (Core)** : Ajout de résumés "TL;DR", visualisation de la Triade CIA, diagrammes de Handshake TCP et Tunnel VPN, comparatif Session vs JWT.
    - **m05-m09 (Advanced)** : Visualisation de la hiérarchie AD, Cyber Kill Chain, Modèle de responsabilité Cloud, et Pyramide de volatilité Forensics.
    - **Interactivité** : Widget "Caesar Cipher" fonctionnel, simulation de Code Diff (Secure vs Vulnerable).
- **Technique** :
    - Refonte complète de `script.js` et création de `quiz-engine.js` (ES6 Class).
    - Correction des imports de modules et des chemins relatifs.

## [1.0.0] - 2026-02-03
### Added
- **Modularisation** : Découpage du site "One-Page" en 10 modules distincts (+ Quiz).
- **Navigation** : Ajout d'une barre de navigation responsive injectée dynamiquement JS.
- **Design** : Création d'une Landing Page (Index) avec grille de cartes.
- **Documentation** : Ajout de Readme, Structure, About.
- **Assets** : Nouvel icône SVG.

### Changed
- Refonte de l'arborescence des fichiers.
- Amélioration de la compatibilité Mobile.

### Fixed
- Correction des liens d'ancrage qui sont devenus des liens vers des pages dédiées.
