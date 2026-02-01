# Changelog

## 2026-02-01
### ✨ Améliorations Majeures
- **Corrections de base**:
  - Correction de l'année 2025 → 2026 dans le footer
  - Suppression des balises meta Open Graph en double
  - Correction de l'URL canonique (relative → absolue)
  
- **Navigation Responsive**:
  - Ajout d'un menu hamburger fonctionnel pour mobile
  - Navigation desktop enrichie (8 liens au lieu de 5)
  - Menu mobile complet avec accès aux 14 modules + quiz
  - Animation smooth du menu hamburger (transformation en X)
  - Scroll-lock lors de l'ouverture du menu mobile
  - Fermeture automatique au clic sur un lien
  
- **Ressources Visuelles Personnalisées**:
  - Création d'une icône SVG personnalisée (serpent Python + globe web)
  - Favicon SVG moderne et scalable
  - Image sociale optimisée WebP (1200x630px) pour réseaux sociaux
  - Remplacement de l'emoji par l'icône SVG dans le logo
  
- **SEO & Métadonnées**:
  - Meta tags Open Graph optimisés et consolidés
  - Meta tags Twitter Card mis à jour
  - Chemins d'images pointant vers les nouvelles ressources WebP
  - Dimensions d'image spécifiées pour og:image
  
- **Documentation Complète**:
  - `readme.md` : Enrichi avec fonctionnalités, responsive design, Dockerfile
  - `about.md` : Ajout auteur, contact, hébergement, fonctionnalités clés
  - `structure.md` : Documentation assets, navigation responsive, optimisation
  - Toutes les docs mises à jour avec infos 2026

### 🎨 Améliorations CSS
- Refactorisation des styles de navigation (`.nav-desktop`, `.nav-mobile`)
- Ajout styles hamburger menu avec animations
- Media queries améliorées pour mobile responsive
- Respect strict des variables CSS (pas de hardcoding)

### 🔧 Améliorations JavaScript
- Ajout logique togglehamburger menu
- Gestion du scroll-lock body
- Event listeners sur liens mobiles pour fermeture auto

## 2026-01-27
### Done
- Modularisation du site avec layout, parts et content.
- Ajout d’un build statique via build.py pour générer index.html.
- Nettoyage des styles avec variables CSS dédiées.
- Simplification de l’initialisation du quiz.
- Déplacement des données quiz dans data/.
- Validation JSON des quiz lors du build.
- Validation stricte du schéma des quiz.
- Centralisation de la navigation/TOC via data/site_structure.json.
- Correction du total dans quiz_python_web.json.
- Mise à jour du plan de refactorisation.
- Centralisation du mapping sections ↔ fichiers HTML dans data/site_structure.json.
- Plan complet d’enrichissement par module documenté.
- Enrichissement majeur du module 00 (Panorama Web).
- Enrichissement majeur du module 01 (Environnement & Tooling).
- Ajout de la documentation complète (`about.md`, `readme.md`, `structure.md`).
- Enrichissement majeur du module 02 (Flask).
- Enrichissement majeur du module 03 (SQLAlchemy).
- Enrichissement majeur du module 04 (Django).
- Enrichissement majeur du module 05 (FastAPI).
- Enrichissement majeur du module 06 (API REST).
- Enrichissement majeur du module 07 (Sécurité & Auth).
- Enrichissement majeur du module 08 (Async & WebSockets).
- Enrichissement majeur du module 09 (Background Tasks).
- Enrichissement majeur du module 10 (Tests & QA).
- Enrichissement majeur du module 11 (Serveurs App & Production).
- Enrichissement majeur du module 12 (Docker & Conteneurisation).
- Enrichissement majeur du module 13 (Toolkit & Références).

### To Do
- Compléter l'enrichissement du module 02 Flask.
- Continuer l'enrichissement des autres modules du plan (03, 04, 05...).
