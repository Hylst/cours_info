# Changelog - Mémo Réseaux

Toutes les modifications notables de ce projet seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/lang/fr/).

## [Non publié]

### À Venir
- Hamburger menu responsive pour mobile
- Labs interactifs (simulation Docker Network)
- Mode sombre/clair (toggle)
- Export PDF du cours
- Traduction anglaise

---

## [1.0.0] - 2026-01-31

### Ajouté ✨

#### Documentation
- **readme.md** : Guide complet d'installation et de déploiement
- **about.md** : Objectifs pédagogiques et contenu détaillé
- **structure.md** : Documentation technique de l'architecture
- **changelog.md** : Historique des versions (ce fichier)

#### Contenu Pédagogique (17 Sections)
- **Section 01** : Modèle OSI (7 couches) avec analogie de la Poste
- **Section 02** : Protocoles clés (TCP vs UDP, Ports standards, TLS)
- **Section 03** : Adressage IP (IPv4, CIDR, Classes privées)
- **Section 04** : Matériel réseau (Switch, Routeur, Câblage)
- **Section 05** : IPv6 (128 bits, Types d'adresses, SLAAC)
- **Section 06** : Sécurité (CIA Triad, VPN, DMZ, Firewall)
- **Section 07** : Wi-Fi (802.11, Canaux, WPA2/WPA3)
- **Section 08** : TCP/IP Model (Encapsulation pratique)
- **Section 09** : Outils de diagnostic (ping, tracert, Wireshark)
- **Section 10** : Cloud Architecture (IaaS/PaaS/SaaS, CDN, Load Balancer)
- **Section 11** : DNS & DHCP (Résolution de noms, Attribution d'IP)
- **Section 12** : Routage (Tables de routage, OSPF, BGP)
- **Section 13** : VLAN & Virtualisation (802.1Q, Trunking)
- **Section 14** : Réseau Docker (Bridge, Host, Overlay)
- **Section 15** : Infrastructure Internet (FAI Tiers, IXP, Boucle locale)
- **Section 16** : Tendances & Futur (SDN, Edge Computing, 5G)
- **Section 17** : HTTP en profondeur (Méthodes, Headers, Status codes, HTTP/2/3)

#### Quiz Interactif
- **165 questions** couvrant l'ensemble du cours
- Engine de quiz modulaire et réutilisable
- Randomisation et explications détaillées
- Score et correction immédiate

#### Assets Visuels
- **13 diagrammes SVG** (OSI animé, DNS flow, DHCP DORA, TLS handshake, etc.)
- Design sombre moderne avec syntax highlighting
- Navigation sticky avec smooth scroll

#### Fonctionnalités Techniques
- Single Page Application (SPA) statique
- Vanilla JS (pas de framework)
- Design system CSS avec custom properties
- Responsive design (mobile-first)
- Intégration Google Fonts (Outfit + JetBrains Mono)

### Corrigé 🐛

#### Layout
- **DHCP Block** : Correction de la structure HTML malformée (balises `</ul>` et `</div>` orphelines)
- **DNS Block** : Ajout de padding manquant
- **Routing Table Blocks** : Ajout de padding pour cohérence visuelle

#### SEO
- **Title** : Mise à jour de "Guide 2025" → "Guide 2026"
- **Meta description** : Ajout d'une description détaillée
- **Open Graph tags** : Ajout pour partage social (Facebook, LinkedIn)
- **Twitter Cards** : Ajout pour partage Twitter/X
- **Canonical URL** : Spécification de l'URL canonique

#### Responsive
- **Mobile Menu** : Implémentation d'un hamburger menu fonctionnel
- **Grid Layout** : Amélioration de la réactivité des grilles 2 colonnes
- **Typography** : Réduction de la taille des titres sur mobile

### Amélioré 🚀

#### Performance
- Optimisation du chargement des fonts (`display=swap`)
- Cache HTTP pour assets statiques (30 jours)
- Pas de dépendances JS lourdes

#### Accessibilité
- Contraste WCAG AA respecté
- Navigation au clavier supportée
- ARIA labels sur éléments interactifs

#### Contenu
- Analogies concrètes pour chaque concept abstrait
- Exemples de commandes testables localement
- Tables de référence rapide (CIDR, Ports, Status codes)

## [0.9.0] - 2026-01-15 (Pré-release)

### Ajouté
- Version initiale du cours
- Structure HTML complète
- Quiz avec 100 questions
- 8 diagrammes SVG de base

### Manquant
- Documentation projet
- Responsive menu mobile
- Optimisations SEO
- Certaines corrections de padding

---

## Guide des Types de Changement

- **Ajouté** : Nouvelles fonctionnalités
- **Modifié** : Changements de fonctionnalités existantes
- **Déprécié** : Fonctionnalités bientôt supprimées
- **Supprimé** : Fonctionnalités retirées
- **Corrigé** : Corrections de bugs
- **Sécurisé** : Corrections de vulnérabilités
- **Amélioré** : Performances, accessibilité, UX

---

## Références

- [Keep a Changelog](https://keepachangelog.com/fr/)
- [Semantic Versioning](https://semver.org/lang/fr/)
- [Conventional Commits](https://www.conventionalcommits.org/fr/)

---

**Mainteneur** : Geoffroy Streit  
**Projet** : Mémo Réseaux - Cours Interactif
