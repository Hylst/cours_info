# Mémo Python - Guide Complet 2026

Guide pratique Python avec 18 modules interactifs couvrant les fondamentaux aux concepts avancés.

[![Python](https://img.shields.io/badge/Python-3.10+-3776ab?logo=python&logoColor=white)](https://www.python.org/)
[![License](https://img.shields.io/badge/License-Educational-green)](.)

## 📚 Modules

Le cours est organisé en 18 modules progressifs :

| Module | Sujet | Description |
|--------|-------|-------------|
| **00** | Introduction | Histoire, philosophie, écosystème Python |
| **01** | Variables & Types | Typage dynamique, type hints, opérateurs |
| **02** | Structures de contrôle | if/elif/else, boucles, match/case |
| **03** | Fonctions | def, lambda, *args/**kwargs, décorateurs |
| **04** | Collections | list, dict, tuple, set, comprehensions |
| **05** | POO | Classes, héritage, méthodes magiques |
| **06** | Exceptions | try/except/else/finally, gestion d'erreurs |
| **07** | Fichiers | Lecture/écriture, modes, context managers |
| **08** | Modules | import, packages, \_\_name\_\_ |
| **09** | Strings | Méthodes, f-strings, formatting |
| **10** | Regex | Patterns, groupes, search/match |
| **11** | Générateurs | yield, expressions génératrices |
| **12** | Async | async/await, asyncio, event loop |
| **13** | Tests | unittest, pytest, TDD |
| **14** | Référence | Built-ins, idiomes Python |
| **15** | Data Science | NumPy, Pandas, Matplotlib |
| **16** | Écosystème | pip, venv, Poetry, uv |
| **17** | Web Dev | Flask, FastAPI, Django |
| **Quiz** | Évaluation | Quiz interactif auto-corrigé |

## ✨ Caractéristiques

-  **Interactif** : Démos visuelles pour comprendre les concepts (timelines, memory visualizers, etc.)
- 🎯 **Exemples concrets** : Code snippets avec syntaxe colorée
- 📱 **Responsive** : Navigation adaptée mobile/desktop
- 🧠 **Quiz intégré** : Testez vos connaissances
- 🎨 **Design moderne** : Dark theme avec couleurs Python officielles (#3776ab, #ffd43b)

## 🚀 Utilisation Locale

### Prérequis
- Navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Aucune configuration requise (site statique HTML/CSS/JS)

### Installation
```bash
# Cloner ou télécharger le répertoire
cd Cours_Memos/Docker/python/

# Ouvrir dans le navigateur
# Double-cliquer sur index.html
# OU utiliser un serveur local:
python -m http.server 8000
# Puis visiter http://localhost:8000
```

## 🐳 Docker Deployment (nginx Alpine)

Le site est conçu pour être déployé sur nginx statique avec Coolify.

### Structure de déploiement
```
/var/www/html/cours/docker/python/
├── index.html
├── style.css
├── script.js
├── side-nav.css
├── quiz_python.json
└── img/
    ├── python_icon.webp
    ├── python_share.webp
    └── *.svg (diagrams)
```

### Dockerfile (nginx:alpine)
```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html/cours/docker/python/
EXPOSE 80
```

### Configuration nginx
Les assets partagés sont dans `../../assets/` (quiz engine, styles communs).

## 📖 Structure du Projet

Voir [structure.md](structure.md) pour une documentation détaillée de l'architecture.

## 🤝 Contribution

Ce projet est éducatif et personnel. Suggestions bienvenues via issues ou PR.

## 👤 Auteur

**Geoffroy Streit**  
🌐 [hylst.fr](https://hylst.fr)  
📧 Contact via formulaire sur hylst.fr

*Créé avec passion pour partager la connaissance et faciliter l'apprentissage de Python.*

## 📝 Changelog

Voir [changelog.md](changelog.md) pour l'historique des versions.

## 📄 License

**Usage Éducatif** - Contenu libre pour apprentissage personnel et formation.

---

**Note technique** : Ce site est 100% statique (HTML/CSS/JS vanilla) pour garantir:
- ✅ Performance maximale
- ✅ Compatibilité universelle
- ✅ Hébergement simple (nginx statique)
- ✅ Aucune dépendance serveur
