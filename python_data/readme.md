# 📊 Python Data Science - Mémo Interactif

> Guide complet et synthétique pour maîtriser Python dans le domaine de la Data Science et de l'Intelligence Artificielle

[![Déployé sur](https://img.shields.io/badge/Déployé%20sur-hylst.fr-3b82f6)](https://hylst.fr/cours/docker/python_data/)
[![Docker](https://img.shields.io/badge/Docker-nginx%20alpine-0db7ed)](https://www.docker.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 🎯 Objectif

Ce site web est un **mémo interactif** conçu pour :
- Consolider rapidement les connaissances en Python Data Science
- Servir d'antisèche pour les projets professionnels
- Préparer efficacement les entretiens techniques
- Partager la connaissance de manière accessible et visuelle

## 📚 Contenu des 11 Sections

### 00 - Écosystème Data
Jupyter Lab, Anaconda, Google Colab - Les outils essentiels pour débuter

### 01 - Numpy : Le Socle
Tableaux multidimensionnels, calcul matriciel, broadcasting, performance

### 02 - Acquisition de Données
SQL, APIs REST, Web Scraping, formats de fichiers (CSV, Parquet, JSON)

### 03 - Pandas : L'Analyse
DataFrames, manipulation de données, nettoyage, agrégations, jointures

### 04 - Visualisation Pro
Matplotlib, Seaborn - Graphiques professionnels pour communiquer vos insights

### 05 - Machine Learning
Scikit-Learn, pipelines, validation croisée, métriques, GridSearch

### 06 - Deep Learning
Réseaux de neurones, Keras/TensorFlow, PyTorch, CNN, Transfer Learning

### 07 - Mise en Production
MLOps, persistance des modèles, Streamlit, FastAPI, Docker

### 08 - NLP & Traitement du Texte
spaCy, NLTK, tokenisation, embeddings, TF-IDF

### 09 - Generative AI & LLMs 🆕
OpenAI, LangChain, Prompt Engineering, RAG, Hugging Face

### 10 - Référence Rapide
Cheat sheet des commandes vitales pour une consultation ultra-rapide

## ✨ Fonctionnalités

- **🎨 Design moderne** : Interface Data Science avec thème bleu/orange sci-fi
- **📱 Responsive** : Navigation optimisée mobile, tablet et desktop
- **🧩 Interactif** : 10 modules JavaScript pour visualisations dynamiques
- **❓ Quiz** : 100 questions pour tester vos connaissances
- **📖 Explications contextuelles** : Sections `<details>` expandables
- **💻 Code examples** : Syntax highlighting Python professionnel
- **⚡ Performance** : Site statique ultra-rapide

## 🚀 Déploiement Docker/Nginx

Ce site est conçu pour être déployé sur un **container Docker nginx alpine** via **Coolify**.

### Configuration nginx recommandée

```nginx
server {
    listen 80;
    server_name hylst.fr;
    root /usr/share/nginx/html/cours/docker/python_data;
    index index.html;

    # Cache pour assets statiques
    location ~* \.(webp|svg|js|css|json)$ {
        expires 7d;
        add_header Cache-Control "public, immutable";
    }

    # Pas de cache pour HTML
    location ~* \.html$ {
        expires -1;
        add_header Cache-Control "no-cache, no-store, must-revalidate";
    }

    # Gzip
    gzip on;
    gzip_types text/css application/javascript application/json image/svg+xml;
}
```

### Build et déploiement

Aucune build step nécessaire - site 100% statique :
```bash
# Copier les fichiers dans le container
COPY . /usr/share/nginx/html/cours/docker/python_data/

# Démarrer nginx
nginx -g 'daemon off;'
```

## 🛠️ Technologies Utilisées

| Technologie | Usage |
|-------------|-------|
| **HTML5** | Structure sémantique |
| **CSS3** | Design system avec variables |
| **JavaScript Vanilla** | Modules interactifs (ES6) |
| **Fonts** | Outfit (UI) + JetBrains Mono (code) |
| **Quiz Engine** | Système de quiz personnalisé |
| **SVG** | Illustrations vectorielles |

## 📁 Structure du Projet

```
python_data/
├── index.html              # Page principale
├── style.css               # Styles globaux
├── quiz_data.json          # Questions du quiz (100)
├── assets/
│   └── js/
│       ├── app_init.js
│       ├── main.js
│       └── modules/        # 11 modules interactifs
├── img/
│   ├── python-data-icon.webp
│   ├── python-data-social.webp
│   └── *.svg               # Illustrations
├── readme.md               # Ce fichier
├── about.md                # À propos de l'auteur
├── structure.md            # Documentation technique
└── changelog.md            # Historique des versions
```

## 🤝 Contribution

Les contributions sont bienvenues ! Pour proposer des améliorations :

1. **Fork** le projet
2. **Créez une branche** : `git checkout -b feature/amelioration`
3. **Committez** : `git commit -m 'Add: nouvelle fonctionnalité'`
4. **Push** : `git push origin feature/amelioration`
5. **Pull Request** sur le repo principal

## 📖 Documentation Complémentaire

- [about.md](about.md) - Présentation de l'auteur et du projet hylst.fr
- [structure.md](structure.md) - Architecture technique détaillée
- [changelog.md](changelog.md) - Historique des modifications

## 📬 Contact

**Geoffroy Streit** - Apprenant Web Dev, Data, IA, ML, IT

- 🌐 Site web : [hylst.fr](https://hylst.fr)
- 📧 Email : contact@hylst.fr (à adapter)

## 📄 License

Ce projet est sous licence **MIT** - Vous êtes libre de l'utiliser, le modifier et le partager.

---

<p align="center">
  <em>Créé avec ❤️ par Geoffroy Streit | Hébergé sur container Docker nginx @ hylst.fr</em><br>
  <em>"Le goût du partage, le besoin de synthèse, l'amour de l'interactivité"</em>
</p>
