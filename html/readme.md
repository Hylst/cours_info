# Mémo HTML5 - Guide Complet et Interactif

Guide pratique HTML5 avec 85+ balises, exemples visuels interactifs et quiz pédagogique.

## 🎯 Objectif

Ce site web statique est conçu comme un aide-mémoire complet et visuel pour apprendre et réviser le HTML5. Il couvre toutes les balises essentielles avec des exemples concrets, des démos interactives et un quiz pour valider ses connaissances.

## 📚 Contenu

- **11 sections thématiques** : Structure, Métadonnées, Texte, Liens, Médias, Listes & Tableaux, Formulaires, Sémantique, Accessibilité, Multimédia & Responsive, SEO & Performance
- **85+ balises HTML** documentées avec définitions et exemples
- **Quiz interactif** : 10 questions aléatoires pour tester ses connaissances
- **Démos pratiques** : 
  - Formulaire thématique "Bureau des Quêtes" (Heroic Fantasy)
  - Simulateur responsive design
  - Galerie multimédia
- **Tooltips interactifs** sur toutes les balises de la section Référence

## 🛠️ Technologies

- **HTML5** : Structure sémantique moderne
- **CSS3** : Design system avec variables CSS, dark theme élégant
- **JavaScript Vanilla** : Logique interactive (quiz, responsive simulator)
- **Fonts** : Outfit (texte), JetBrains Mono (code)

## 📁 Structure des fichiers

```
html/
├── index.html          # Page principale (2051 lignes)
├── style.css           # Styles personnalisés (546 lignes)
├── script.js           # Logique interactive (responsive demo, quiz init)
├── quiz_html.json      # Questions du quiz (34 KB)
├── assets/
│   ├── css/
│   │   └── quiz-style.css
│   ├── js/
│   │   └── quiz-engine.js
│   └── img/
│       ├── responsive-desktop.png
│       ├── responsive-tablet.png
│       └── responsive-mobile.png
├── readme.md           # Ce fichier
├── about.md            # À propos du projet
├── structure.md        # Architecture technique
└── changelog.md        # Historique des versions
```

## 🚀 Déploiement

### Déploiement local

Ouvrir directement `index.html` dans un navigateur.

### Déploiement sur serveur statique (Docker + Nginx)

Ce site est conçu pour être hébergé sur un container Docker avec Nginx (Alpine), géré par Coolify, aux côtés d'autres sites de cours.

**Configuration Nginx recommandée** :

```nginx
server {
    listen 80;
    server_name [DOMAINE];
    root /usr/share/nginx/html/html;
    index index.html;
    
    location / {
        try_files $uri $uri/ =404;
    }
    
    # Cache des assets
    location ~* \.(css|js|jpg|jpeg|png|webp|gif|svg|ico)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

**Dockerfile** :

```dockerfile
FROM nginx:alpine
COPY ./html /usr/share/nginx/html/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 👤 Auteur

**Geoffroy Streit** - Apprenant Web Dev, Data, IA, ML, IT

Créé avec l'assistance d'une IA pour consolider ma mémoire avec un cours concis, graphique et structuré, mais aussi pour le plaisir de partager la connaissance et faciliter l'apprentissage des autres.

## 📄 Licence

Usage éducatif libre. Partage et réutilisation encouragés avec mention de l'auteur.

## 🔗 Liens utiles

- [MDN Web Docs - HTML](https://developer.mozilla.org/fr/docs/Web/HTML)
- [W3C HTML Validator](https://validator.w3.org/)
- [Can I Use](https://caniuse.com/) - Compatibilité navigateurs

## 📝 Contribuer

Suggestions et corrections bienvenues ! Ce projet fait partie d'une collection de mémos techniques sur le développement Web, conteneurisée avec Docker pour un accès facile et unifié.
