# Mémo Réseaux - Guide Interactif 2026

Un cours interactif et visuel sur les fondamentaux des réseaux informatiques, conçu pour les développeurs, administrateurs système et étudiants.

## 📚 Table des Matières

1. [Présentation](#présentation)
2. [Technologies](#technologies)
3. [Structure](#structure)
4. [Installation](#installation)
5. [Déploiement](#déploiement)
6. [Auteur](#auteur)

## 🎯 Présentation

Ce mémo interactif couvre les concepts essentiels des réseaux modernes :

### Contenu Pédagogique (17 Sections)

- **Fondamentaux** : Modèle OSI (7 couches), TCP/IP (4 couches), Encapsulation
- **Protocoles** : TCP vs UDP, DNS, DHCP, HTTP/HTTPS, Ports Standards
- **Adressage** : IPv4/IPv6, CIDR, Sous-réseaux, NAT
- **Infrastructure** : Routeurs, Switchs, Câblage (Cuivre/Fibre), Wi-Fi
- **Sécurité** : Firewalls, VPN, CIA Triad, DMZ
- **Cloud & Moderne** : Docker Networks, SDN, Edge Computing, 5G
- **Pratique** : Outils de diagnostic (ping, tracert, Wireshark)

### Features

- ✅ **Quiz Interactif** : 165 questions pour valider vos connaissances
- ✅ **Diagrammes SVG Animés** : Visualisation des flux (OSI, DNS, DHCP, TLS)
- ✅ **Exemples de Code** : Syntaxe colorée pour les commandes et configurations
- ✅ **Navigation Rapide** : Menu sticky avec liens d'ancrage
- ✅ **Design Moderne** : Interface sombre, responsive, accessibilité

## 🛠️ Technologies

- **HTML5** - Structure sémantique
- **CSS3** - Design system avec custom properties  
- **Vanilla JavaScript** - Quiz engine modulaire
- **SVG** - Illustrations vectorielles animées
- **Google Fonts** - Typographie (Outfit, JetBrains Mono)

## 📂 Structure

```
networks/
├── index.html              # Page principale (1656 lignes)
├── style.css               # Styles personnalisés  
├── script.js               # Utilitaires JS
├── quiz_networks.json      # Base de données du quiz (165 questions)
├── img/                    # Assets visuels
│   ├── *.svg              # Diagrammes animés (13 fichiers)
│   ├── favicon.ico        # Icône du site
│   └── og-image.png       # Image de partage social
├── readme.md              # Ce fichier
├── about.md               # Documentation pédagogique
├── structure.md           # Architecture technique
└── changelog.md           # Historique des versions
```

## 🚀 Installation

### Développement Local

```bash
# 1. Cloner le dépôt (ou naviguer vers le dossier)
cd C:\0CODE\AntiGravity\Cours_Memos\Docker\networks

# 2. Lancer un serveur HTTP local
# Option A : Python 3
python -m http.server 8080

# Option B : Node.js (http-server)
npx http-server -p 8080

# Option C : PHP
php -S localhost:8080

# 3. Ouvrir dans le navigateur
start http://localhost:8080
```

### Servir depuis le répertoire parent

Si vous servez depuis `Docker/` (parent directory) :

```bash
cd C:\0CODE\AntiGravity\Cours_Memos\Docker
python -m http.server 8080

# Accès : http://localhost:8080/networks/
```

## 🐳 Déploiement

### Docker + Nginx (Alpine)

Ce site est conçu pour être hébergé sur un container Docker Nginx statique géré par **Coolify**.

#### Dockerfile Exemple

```dockerfile
FROM nginx:alpine

# Copier les fichiers statiques
COPY networks/ /usr/share/nginx/html/networks/

# Copier la configuration Nginx personnalisée (facultatif)
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

#### nginx.conf Minimal

```nginx
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }

    # Cache des assets statiques
    location ~* \.(css|js|jpg|png|svg|ico|woff2)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}
```

#### Déploiement Coolify

1. Créer un nouveau service "Static Site"
2. Pointer vers le dossier `networks/`
3. Coolify build et déploie automatiquement
4. Accessible via : `https://votre-domaine.com/networks/`

### Hébergement Multi-Sites

Ce site fait partie d'un projet éducatif plus large. Structure recommandée :

```
/var/www/cours/
├── index.html          # Page d'accueil générale
├── networks/           # Ce cours (réseaux)
├── php/                # Cours PHP
├── java/               # Cours Java
└── assets/             # Resources partagées
    ├── css/
    │   └── quiz-style.css
    └── js/
        └── quiz-engine.js
```

## 👤 Auteur

**Geoffroy Streit**  
Apprenant Web Dev, Data, IA, ML  
Passionné par le partage de connaissances et la synthèse interactive

---

## 📝 Licence

Ce projet éducatif est créé pour faciliter l'apprentissage et le partage des connaissances.  
Utilisation libre pour l'éducation non-commerciale.

---

## 🔗 Liens Utiles

- [Modèle OSI (Wikipedia)](https://fr.wikipedia.org/wiki/Mod%C3%A8le_OSI)
- [RFC TCP/IP](https://www.rfc-editor.org/)
- [Cisco Networking Academy](https://www.netacad.com/)
- [Wireshark](https://www.wireshark.org/)

---

**Version**: 1.0.0  
**Dernière mise à jour**: Janvier 2026
