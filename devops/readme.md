# Mémo DevOps Expert

> Guide complet DevOps : Culture CALMS, CI/CD, Docker, Kubernetes, IaC, Observabilité, SRE

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
![Version](https://img.shields.io/badge/version-1.0. 0-green.svg)

## 📖 À propos

Site web éducatif statique proposant un cours complet sur DevOps,  couvrant 11 modules allant de la culture DevOps aux pratiques SRE avancées. Conçu pour l'apprentissage interactif avec exemples concrets, analogies, et quiz intégré.

## 🚀 Modules

- **Module 00** : Réseaux & Cloud Essentiels
- **Module 01** : Culture DevOps & CALMS
- **Module 02** : Git Maîtrisé
- **Module 03** : Continuous Integration (CI)
- **Module 04** : Continuous Delivery (CD)
- **Module 05** : Docker Deep Dive
- **Module 06** : Kubernetes Avancé  
- **Module 07** : Infrastructure as Code (IaC)
- **Module 08** : Observabilité
- **Module 09** : DevSecOps
- **Module 10** : SRE & Reliability

## 🎯 Fonctionnalités

- ✅ **Responsive** : Menu hamburger adaptatif mobile/desktop
- ✅ **Interactif** : Tooltips vocabulaire, simulateur de déploiement, calculateur SLO
- ✅ **Quiz** : 115 questions pour tester vos connaissances
- ✅ **SEO optimisé** : Meta tags Open Graph, Twitter Cards, structured data
- ✅ **Pédagogie** : Analogies, cas d'étude, exemples concrets

## 🛠️ Stack Technique

- **Frontend** : HTML5, CSS3 (Variables CSS), Vanilla JavaScript
- **Fonts** : JetBrains Mono, Outfit (Google Fonts)
- **Quiz Engine** : Module JS custom
- **Assets** : WebP (optimisé), SVG (scalable)

## 📦 Installation & Déploiement

### Prérequis
- Serveur web statique (Nginx, Apache, Coolify)
- Aucun build nécessaire (site statique pur)

### Déploiement local
```bash
# Cloner le repo (ou copier les fichiers)
cd devops/

# Servir avec Python (pour tests)
python -m http.server 8000

# Ou avec Node.js
npx serve .
```

### Déploiement Docker (Nginx Alpine)
```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
```

### Déploiement Coolify
1. Créer une nouvelle application statique
2. Pointer vers le dossier `devops/`
3. Coolify gère automatiquement le container nginx

## 📁 Structure

```
devops/
├── index.html              # Page principale (tous les modules)
├── style.css               # Styles (responsive, dark theme)
├── script.js               # Logique interactive
├── quiz_devops.json        # Questions du quiz (115q)
├── icon.svg                # Favicon SVG  
├── icon.webp               # Favicon WebP (512x512)
├── social-share.webp       # Image partage social (1200x630)
├── readme.md               # Ce fichier
├── about.md                # Détails du projet
├── structure.md            # Architecture technique
└── changelog.md            # Historique des versions
```

## 🎨 Design System

### Couleurs
- **Primary** : `#68a063` (Vert DevOps)
- **Primary Bright** : `#83cd29`
- **Background** : `#222222`
- **Card** : `#303030`
- **Text** : `#f0f0f0`

### Responsive Breakpoints
- **Mobile** : ≤ 768px (menu hamburger)
- **Tablet** : 769px - 1024px
- **Desktop** : > 1024px

## 👤 Auteur

**Geoffroy Streit**  
Apprenant Web Dev, Data, IA, ML, IT  
Domaine : [hylst.fr](https://hylst.fr)

## 📄 Licence

MIT © 2025 Geoffroy Streit

## 🤝 Contribution

Ce projet est à but éducatif et de partage de connaissances. Les suggestions d'amélioration sont bienvenues !

## 📊 Statistiques

- **Lignes de code** : ~3000 (HTML) + 1500 (CSS) + 200 (JS)
- **Modules** : 11
- **Questions quiz** : 115
- **Temps de lecture** : ~10h
- **Niveau** : Intermédiaire à Avancé

## 🔗 Liens

- [Live Demo](https://hylst.fr/devops/)
- [Autres cours](https://hylst.fr/)

---

*Créé avec ❤️ pour faciliter l'apprentissage DevOps*
