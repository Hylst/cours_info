# Changelog - Le Green IT en clair

Toutes les modifications notables de ce projet seront documentées dans ce fichier.

## [1.0.0] - 2025-01-04

### Ajouté
- **Page d'accueil** avec quiz interactif et 3 parcours utilisateur personnalisés
- **Section Comprendre** : Cycle de vie du numérique avec visualisation interactive en 5 étapes
- **Section Chiffres & Données** : Graphiques interactifs (e-déchets, CO2, recyclage, carte de France)
- **Cas pratiques** : Études détaillées smartphone, ordinateur portable, datacenter avec simulateurs
- **Guide d'action** : 3 guides pour citoyens, entreprises et collectivités avec checklists interactives
- **Page Datacenters** : Explication PUE, simulateur d'efficacité énergétique, bonnes pratiques
- **Page Recyclage** : Carte interactive des points de collecte en France, acteurs du recyclage
- **Page Développement** : Bonnes pratiques pour développeurs (algo, langages, ML, médias, CDN)
- **Outils interactifs** : Calculateur d'empreinte carbone, simulateur de sobriété, quiz gamifié
- **Page Réglementation** : Lois françaises et européennes (AGEC, REEN, DEEE, CSRD)
- **Page Problématiques** : 6 problématiques majeures, tendances 2025, solutions actuelles et futures
- **Page Perspectives** : 3 scénarios 2040, énergies renouvelables, opportunités et risques
- **Page Actualités** : 12 articles d'actualités Green IT 2025 avec système de filtrage
- **Page Par où commencer** : Guide d'orientation selon 4 profils utilisateurs
- **Page Mythes vs Réalités** : 12 idées reçues déconstruites avec sources
- **Page Flux RSS** : Agrégateur d'actualités des principales sources françaises Green IT
- **Page FAQ** : 24 questions organisées en 6 catégories thématiques
- **Fiches pratiques** : 8 fiches téléchargeables (gestes quotidiens, achat responsable, réparation, etc.)
- **Navigation améliorée** : Menu dropdown thématique, fil d'Ariane, recherche globale
- **Mode sombre** : Toggle accessible dans la navigation
- **Glossaire enrichi** : 15 termes techniques avec recherche et filtres

### Composants visuels
- **Infographies SVG animées** : Cycle de vie, flux de données, barres d'impact, croissance e-déchets
- **Comparaisons d'échelle** : Équivalents CO2 en trajets et arbres
- **Analogies visuelles** : 70kg de matières, 15 000 km parcourus
- **Graphique interactif** : Comparaison énergétique des langages de programmation

### Performance & Accessibilité
- Conversion de toutes les images en WebP (réduction 25-35%)
- Lazy loading progressif sur toutes les images
- Attributs alt descriptifs pour l'accessibilité
- Transcriptions textuelles pour les contenus visuels complexes
- Open Graph tags pour le partage social
- Structured data pour le SEO

### Sécurité
- Mise à jour Next.js 16.0.0
- Mise à jour React 19.2.0
- Correction des vulnérabilités CVE

### Design
- Palette éco-responsable (verts, bleus, beiges)
- Typographie : Geist + Geist Mono
- Design tokens sémantiques
- Mode sombre complet
- Responsive mobile-first

## [1.1.0] - 2026-01-04

### Ajouté - Phase "Upgrade & Polish" 🌿
- **PWA (Progressive Web App)** : Support hors-ligne complet, manifest.json, service worker et bouton d'installation intégré.
- **Cartographie Interactive** : Remplacement des placeholders par une carte **Leaflet / OpenStreetMap** réelle sur les pages recyclage et chiffres.
- **Exports PDF** : Génération dynamique de rapports pour l'Audit IT, le Simulateur Entreprise et un Guide du Recyclage premium.
- **Référencement (SEO)** : Ajout d'un `sitemap.xml` dynamique, fichier `robots.txt` et méta-données optimisées.
- **Performance** : Conversion massive de toutes les images en **WebP** et chargement optimisé des polices.
- **Déploiement Docker** : Création d'un Dockerfile multi-étapes et d'une configuration Nginx optimisée pour Coolify.

### Ajouté - Outils Interactifs Avancés
- **Quiz Green IT avancé** : 100 questions en 10 catégories, 4 modes de jeu, système de certification.
- **Calculateur d'empreinte de site web** : Analyse d'URL avec métriques CO2, poids page, recommandations.
- **Comparateur Cloud éco-responsable** : 8 fournisseurs comparés, scores de durabilité.
- **Audit de parc informatique** : Inventaire 7 types d'équipements, score éco-efficacité A-E.
- **Simulateur entreprise** : Projection ROI sur 5 ans, 3 scénarios, graphiques interactifs.

### Corrigé
- Liens d'images cassés sur la page d'accueil (hero, e-waste).
- Erreur TypeScript dans les métadonnées (`authors.email`).
- Références OpenGraph corrigées.

## Versions à venir

### [1.2.0] - Prévu Q1 2025
- Système de compte utilisateur et progression
- Newsletter et alertes personnalisées
- Section Success Stories avec témoignages d'entreprises
- Cartographie interactive avec géolocalisation

### [1.3.0] - Prévu Q2 2025
- Forum communautaire
- Parcours de formation certifiant
- Bibliothèque de templates téléchargeables
- Webinaires et replays vidéo
- Espace jeunesse/éducation

---

**Auteur** : Geoffroy Streit (geoffroy.streit@gmail.com)  
**Licence** : Projet personnel éducatif  
**Site** : Le Green IT en clair
