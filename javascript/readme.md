# Mémo JavaScript - Guide Interactif ES6+

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-f7df1e?style=flat&logo=javascript&logoColor=323330)](https://developer.mozilla.org/fr/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Statut](https://img.shields.io/badge/Statut-Actif-success)](https://hylst.fr)

Guide interactif et modulaire pour maîtriser les fondamentaux de JavaScript moderne. Créé par **Geoffroy Streit** dans le cadre d'un projet éducatif de partage de ressources en développement Web.

## 🎯 Objectif

Fournir un **mémo synthétique et interactif** couvrant les concepts essentiels de JavaScript ES6+ avec :
- **18 modules thématiques** (Variables, Fonctions, DOM, Async, Classes, etc.)
- **Démos interactives** pour chaque concept
- **Quiz de validation** (100 questions)
- **Cheatsheets complètes** pour référence rapide

## 🚀 Démarrage Rapide

### Prérequis
- Navigateur moderne (Chrome, Firefox, Safari, Edge)
- Serveur HTTP local (Live Server, Python, Node.js) ou directement via Docker

### Installation Locale

```bash
# Cloner le dépôt (ou copier les fichiers)
cd javascript

# Option 1 : Live Server (VS Code Extension)
# Clic droit sur index.html > Open with Live Server

# Option 2 : Python
python -m http.server 8000

# Option 3 : Node.js (npx)
npx http-server -p 8000

# Accéder à http://localhost:8000
```

### Déploiement Docker (Production)

Le site est conçu pour être hébergé dans un container **Nginx Alpine** statique :

```dockerfile
# Dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

```bash
# Build et run
docker build -t memo-javascript .
docker run -d -p 80:80 memo-javascript
```

**Configuration Coolify** : Ce site fait partie d'un monorepo éducatif hébergé sur VPS (Hostinger) avec plusieurs cours (HTML, CSS, PHP, Réseaux).

## 📁 Structure du Projet

```
javascript/
├── index.html              # Page d'accueil avec liste des modules
├── quiz.html               # Page du quiz interactif
├── quiz_js.json            # Base de 100 questions QCM
├── readme.md               # Ce fichier
├── about.md                # Présentation détaillée
├── structure.md            # Architecture technique
├── changelog.md            # Historique des versions
├── assets/
│   ├── css/
│   │   ├── style.css       # Styles globaux + Design System
│   │   ├── prism.css       # Coloration syntaxique
│   │   ├── prism-overrides.css
│   │   └── quiz-style.css  # Styles du quiz
│   ├── js/
│   │   ├── layout.js       # Injection Header/Footer
│   │   ├── prism.js        # Highlight code
│   │   ├── quiz-engine.js  # Moteur du quiz
│   │   └── modules/        # Scripts spécifiques par module
│   └── images/             # Favicon, illustrations, OG images
└── modules/
    ├── 01_variables.html   # Les 18 modules de cours
    ├── 02_types.html
    ├── ...
    └── 18_cheatsheets.html
```

Voir [structure.md](structure.md) pour plus de détails.

## 🎨 Design System

Le site utilise un **Design System** basé sur des variables CSS sémantiques :

**Couleurs principales :**
- `--primary: #f7df1e` (Jaune JavaScript)
- `--accent: #00d4ff` (Cyan)
- `--bg: #0a0d12` (Fond sombre)

**Règle stricte :** Aucune couleur hardcodée. Utiliser exclusivement les variables pour garantir la cohérence visuelle.

## 📚 Modules Disponibles

| # | Module | Contenu |
|---|--------|---------|
| 01 | Variables | `let`, `const`, `var`, Portée, TDZ |
| 02 | Types | Primitifs, Objets, `typeof` |
| 03 | Opérateurs | Arithmétiques, Logiques, Comparaison |
| 04 | Conditions | `if/else`, `switch`, ternaire |
| 05 | Boucles | `for`, `while`, `for...of` |
| 06 | Fonctions | Arrow functions, callbacks |
| 07 | Arrays | `map`, `filter`, `reduce`, `find` |
| 08 | Objects | Propriétés, méthodes, destructuring |
| 09 | DOM | Sélection et manipulation HTML |
| 10 | Events | `click`, `input`, propagation |
| 11 | Asynchrone | Event Loop, Callbacks, Timers |
| 12 | Fetch & API | Requêtes HTTP, REST |
| 13 | Storage | `localStorage`, `sessionStorage` |
| 14 | Spread & Rest | Opérateur `...` |
| 15 | Classes | POO, héritage |
| 16 | Utilitaires | `Date`, `Math`, `JSON`, `Console` |
| 17 | Strings & Regex | Manipulation de texte |
| 18 | Cheatsheets | Tableaux de référence |

## 🧠 Quiz

Le quiz propose **100 questions** couvrant tous les modules. Caractéristiques :
- 10 questions aléatoires par session
- Validation instantanée avec explications
- Score et progression
- Données dans `quiz_js.json`

## 🛠️ Technologies

- **HTML5** : Structure sémantique
- **CSS3** : Design System, Flexbox, Grid, Variables CSS
- **Vanilla JavaScript (ES6+)** : Pas de framework, code pur
- **Prism.js** : Coloration syntaxique du code
- **Docker** : Déploiement via Nginx Alpine

## 🌐 Hébergement

- **Domaine** : [hylst.fr](https://hylst.fr)
- **Serveur** : VPS Hostinger
- **Orchestration** : Coolify (Docker containers)
- **Type** : Site 100% statique (pas de backend)

## 👨‍💻 Auteur

**Geoffroy Streit** - Apprenant Web Dev, Data, IA, ML, IT

Passionné par le partage de connaissances et la création de ressources éducatives interactives pour la communauté du développement web.

## 🤝 Contribution

Ce projet est ouvert aux suggestions et corrections ! Pour contribuer :
1. Vérifier le [design system](structure.md#design-system)
2. Respecter la structure modulaire
3. Tester sur mobile et desktop
4. Valider le HTML/CSS

## 📄 Licence

MIT License - Libre d'utilisation et de modification.

---

**Dernière mise à jour :** 31 janvier 2026  
**Version :** 1.0.0  
**Cours associés :** [HTML](../html) • [CSS](../css) • [PHP](../php) • [Réseaux](../networks)
