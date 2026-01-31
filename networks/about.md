# À Propos du Mémo Réseaux

## 🎯 Objectifs Pédagogiques

Ce cours interactif a été conçu pour offrir une compréhension **pratique et immédiate** des concepts réseaux modernes. Il s'adresse à toute personne souhaitant maîtriser les fondamentaux de la communication informatique.

### Pour Qui ?

- **Développeurs Web/App** : Comprendre comment vos applications communiquent sur le réseau
- **Administrateurs Système** : Consolider les bases pour mieux diagnostiquer les problèmes
- **Étudiants en Informatique** : Support de révision visuel et synthétique
- **Reconversion IT** : Apprendre les concepts essentiels rapidement
- **Curieux** : Découvrir comment fonctionne réellement Internet

## 📖 Contenu Détaillé

### Section 1 : Modèle OSI (7 Couches)

Le modèle théorique de référence des télécommunications :

- Compréhension des 7 couches (Physique → Application)
- Analogie de la Poste pour l'encapsulation
- Différences entre OSI et TCP/IP
- Échelles de réseaux (PAN, LAN, MAN, WAN, GAN)

**Livrables** : Diagramme OSI animé, table des couches, exemple d'encapsulation

---

### Section 2 : Protocoles Clés (TCP/IP Suite)

Les langages de la communication réseau :

- TCP vs UDP (Fiabilité vs Vitesse)
- Services d'infrastructure (DNS, DHCP, NAT, ARP)
- Ports standards (HTTP:80, HTTPS:443, SSH:22, etc.)
- TLS Handshake pour HTTPS

**Diagramme** : TLS Handshake visuel, table des ports

---

### Section 3 : Adressage IP (IPv4)

Décodage de l'identité réseau :

- Format 32 bits (4 octets)
- CIDR et masques de sous-réseau (/24, /16, /8)
- Classes d'IP privées (RFC 1918) : 10.x, 172.16.x, 192.168.x
- Table de conversion CIDR (/32 → /0)

**Aide-mémoire** : Tableau CIDR détaillé

---

### Section 4 : Matériel Réseau

Les équipements physiques du réseau :

- Hub (Couche 1) : Répétiteur bête
- Switch (Couche 2) : Commutateur intelligent (MAC)
- Routeur (Couche 3) : Interconnexion de réseaux (IP)
- Firewall, Access Point
- Câblage : Cuivre (Cat5e/6/7) vs Fibre Optique (Monomode/Multimode)

**Diagramme** : Топologie réseau complète, illustration câblage

---

### Section 5 : IPv6 (Le Futur)

La nouvelle génération d'adressage :

- Format 128 bits (8 blocs hexadécimaux)
- Règles de simplification (suppression des zéros initiaux, `::`)
- Types d'adresses (Unicast Global, Link-Local, Unique Local, Loopback)
- Avantages : Plus de NAT, SLAAC, IPSec intégré

---

### Section 6 : Sécurité Réseau

Protéger l'intégrité, la confidentialité et la disponibilité :

- CIA Triad (Confidentialité, Intégrité, Disponibilité)
- Attaques courantes (DDoS, MitM, Phishing, Ransomware, ARP Spoofing)
- VPN (Site-to-Site, Remote Access)
- Zones réseau (LAN, WAN, DMZ)

**Diagramme** : Architecture DMZ avec 2 firewalls

---

### Section 7 : Wi-Fi & Sans-Fil

Technologies de connexion sans fil :

- Standards IEEE 802.11 (Wi-Fi 4/5/6/7)
- Fréquences (2.4 GHz vs 5 GHz vs 6 GHz)
- Canaux Wi-Fi (chevauchement 2.4 GHz, clarté 5 GHz)
- Sécurité : WEP (obsolète), WPA2 (standard), WPA3 (futur)

**Diagramme** : Canaux Wi-Fi 2.4 vs 5 GHz

---

### Section 8 : TCP/IP Model (Pratique)

Le modèle utilisé en production :

- 4 couches (Application, Transport, Internet, Accès Réseau)
- Encapsulation détaillée (Data → Segment → Paquet → Trame → Bits)
- Analogie du colis postal
- Comparaison avec OSI

**Diagrammes** : Encapsulation statique + animation

---

### Section 9 : Outils & Diagnostic

Compétence n°1 de l'admin réseau :

- Commandes essentielles : `ping`, `ipconfig/ifconfig`, `nslookup`, `tracert/traceroute`, `netstat`
- Wireshark (analyseur de paquets)
- SNMP (monitoring des équipements)

---

### Section 10 : Cloud Architecture

L'ordinateur de quelqu'un d'autre :

- Modèles de service : IaaS, PaaS, SaaS
- Concepts clés : Load Balancer, Auto-Scaling, CDN, Serverless
- Proxy Inverse (Nginx)
- VPC (Virtual Private Cloud)

---

### Section 11 : DNS & DHCP (Services d'Infrastructure)

Les piliers invisibles :

- **DNS** : Annuaire du web (domaine → IP)
  - Résolution récursive (Recursive, Root, TLD, Authoritative)
- **DHCP** : Distributeur automatique d'IP
  - Processus DORA (Discover, Offer, Request, Acknowledge)

**Diagrammes** : Flux DNS détaillé, DHCP DORA

---

### Section 12 : Routage

Comment les paquets trouvent leur chemin :

- Table de routage (Destination, Gateway, Interface)
- Routage Statique (manuel)
- Routage Dynamique (OSPF interne, BGP externe)
- Route par défaut (0.0.0.0/0)

**Exemple** : Table de routage simplifiée commentée

---

### Section 13 : VLAN & Virtualisation

Segmentation logique :

- VLAN (Virtual LAN) : Découper un switch physique
- Sécurité : Isolation des domaines de broadcast
- Trunking (802.1Q) : Faire passer plusieurs VLANs sur un câble

---

### Section 14 : Réseau Docker

Virtualisation de réseau pour conteneurs :

- Drivers : Bridge (défaut, NAT), Host (performance), Overlay (multi-hôtes)
- Commandes : `docker network ls`, `docker network inspect`, Port Mapping (`-p 8080:80`)

---

### Section 15 : Infrastructure Internet

Le réseau physique mondial :

- FAI (Tier 1, 2, 3)
- IXP (Internet Exchange Point) : Peering direct
- Boucle Locale : FTTH, ADSL/VDSL, 4G/5G
- Câbles sous-marins (99% du trafic intercontinental)

---

### Section 16 : Tendances & Futur

Technologies émergentes :

- **SDN** (Software Defined Networking) : Contrôleur centralisé
- **Edge Computing** : Traitement à la source (IoT, 5G)
- **5G** : Network Slicing (tranches virtuelles garanties)

---

### Section 17 : HTTP en Profondeur

Le protocole du Web :

- Anatomie d'une requête (Ligne de requête, Headers, Body)
- Méthodes CRUD (GET, POST, PUT, PATCH, DELETE)
- Headers importants (Host, User-Agent, Authorization, Content-Type)
- Codes de statut (2xx, 3xx, 4xx, 5xx)
- Évolution : HTTP/1.1 vs HTTP/2 vs HTTP/3 (QUIC)

---

### Quiz Interactif

**165 questions variées** couvrant l'ensemble du cours :

- Choix multiples
- Explications détaillées
- Session aléatoire (10 questions par défaut)
- Score et correction immédiate

## 🎨 Philosophie de Design

### Approche Visuelle

- **Schémas SVG Animés** : Visualisation des flux abstraits (encapsulation, DNS, DHCP, TLS)
- **Analogies Concrètes** : Poste, Restaurant, GPS pour expliquer les concepts
- **Code Coloré** : Syntaxe highlight pour les commandes et configurations

### Principe de Synthèse

- **Concision** : Chaque section va à l'essentiel sans diluer
- **Hiérarchie Claire** : Numérotation visuelle (01, 02...), titres explicites
- **Navigation Rapide** : Menu sticky avec ancres, scroll smooth

### Accessibilité

- Contraste WCAG AA (texte clair sur fond sombre)
- Tailles de police adaptatives
- Pas de dépendances JS lourdes
- Responsive design mobile-first

## 🧠 Pédagogie Active

### Apprendre en Faisant

- Quiz interactif pour auto-évaluation
- Exemples de commandes à tester localement
- Tables de routage et configurations réalistes

### Répétition Espacée

- Structure modulaire pour révisions ciblées
- Analogies répétées pour ancrer les concepts
- Quiz randomisé pour pratique continue

## 🚀 Feuille de Route (à venir)

- [ ] Exercices pratiques par section
- [ ] Labs interactifs (simulateur Docker Network)
- [ ] Certification en fin de cours
- [ ] Version PDF exportable
- [ ] Mode Flashcards pour révisions rapides
- [ ] Traduction anglaise

---

## 📧 Contact & Feedback

**Geoffroy Streit**  
Suggestions d'amélioration, questions ou correction d'erreurs bienvenues !

---

**Ce cours est en évolution constante.**  
Dernière mise à jour : Janvier 2026
