# Analyse du Projet : Mémo Python Web

> **Document généré par IA** pour faciliter la maintenance et l'enrichissement futur du projet.
> **Date** : 27 Janvier 2026

## 1. Vue d'ensemble
Site web **statique** (HTML/CSS/JS) servant de mémo / support de cours autour du développement Web en Python, prévu pour un déploiement **Docker Nginx (Alpine)** via **Coolify** parmi d'autres sites statiques au niveau du dossier parent.

- **Type** : SPA simulée via ancres (`#sX`), navigation locale.
- **Stack** : HTML5, CSS3 (variables), Vanilla JS.
- **Dépendances externes** : Google Fonts, `../../assets/js/quiz-engine.js`, `../../assets/css/quiz-style.css`.
- **Entrée principale** : `index.html` contient la totalité du contenu pédagogique.

## 2. Structure des fichiers
```text
/python_web
├── index.html            # Point d'entrée unique, contenu et structure.
├── style.css             # Design system + styles globaux.
├── script.js             # Interactions UI (copie de code).
├── quiz_web.json         # Questions utilisées par le quiz.
└── quiz_python_web.json  # Variante quasi identique, non référencée.
```

## 3. Architecture HTML (index.html)
Le document est séquentiel, chaque chapitre correspond à une section `#sX`.

### 3.1. Sections globales
- **Header** : logo, navigation ancrée (`#s0`, `#s2`, `#s5`, `#s7`, `#s12`).
- **Hero** : titre + accroche.
- **Intro** : bloc d’ouverture avec styles inline.
- **TOC** : table des matières en grille, pointe vers toutes les sections `#s0` à `#s13`.
- **Quiz** : section finale avec conteneur `#quiz-app`.
- **Footer** : signature et contexte.

### 3.2. Sections pédagogiques (chapitres)
- **s0 — Panorama Web** : rôle de Python côté serveur, WSGI/ASGI, cartes comparatives Flask/Django/FastAPI.
- **s1 — Environnement** : venv, pip, structure de base, commandes de setup.
- **s2 — Flask** : Application Factory, Blueprints, structure pro, exemple de `create_app`.
- **s3 — SQLAlchemy** : modèle `User`, CRUD basique, ORM.
- **s4 — Django** : Class-Based Views, pagination.
- **s5 — FastAPI** : Pydantic, typed routes, dependency injection.
- **s6 — API REST** : grille de codes HTTP 200/201/401/403/404/500.
- **s7 — Sécurité** : hashing (Passlib), JWT (PyJWT/Jose), règles d’or.
- **s8 — Async & WebSockets** : principes WS, exemple FastAPI.
- **s9 — Background Tasks** : BackgroundTasks vs Celery/Redis, exemples.
- **s10 — Tests** : Pytest + TestClient, tests API.
- **s11 — Serveurs App** : Gunicorn (WSGI), Uvicorn (ASGI).
- **s12 — Docker** : Dockerfile Python + Gunicorn.
- **s13 — Référence** : tableau des libs clés (frameworks, serveurs, clients HTTP, validation, sécurité, tests, tâches).

### 3.3. Conventions de balisage
- **En-têtes de section** : `.sec-header` + `.sec-num` + `.sec-title` + `.sec-sub`.
- **Blocs de code** : `.code` > `.code-head` + `pre` avec coloration manuelle via `<span class="kw|fn|str|num|c|...">`.
- **Détails** : `details/summary` pour l’approfondissement.
- **Grilles** : `.grid2`, `.grid3`, `.ref-grid`.
- **Cartes** : `.framework-card`, `.ref-card`.
- **Alertes** : `.tip`, `.info`, `.warning`.

## 4. Design System (style.css)
Le style est un thème sombre vert/turquoise basé sur des variables CSS.

### 4.1. Variables clés
- **Fond & texte** : `--bg`, `--bg2`, `--card`, `--text`, `--muted`, `--dim`, `--border`.
- **Couleurs identitaires** : `--primary`, `--secondary`, `--accent`.
- **Couleurs utilitaires** : `--red`, `--blue`, `--orange`, `--purple`, `--yellow`, `--green`, `--pink`.

### 4.2. Composants stylés
- **Navigation** : sticky + blur, hover sur liens.
- **TOC** : cartes `.toc-item` interactives.
- **Code** : `.code`, `.code-head`, `.dot` + syntax highlighting manuel.
- **Demos** : `.demo` et `.demo-output`.
- **Tables** : stylées pour la référence.
- **Details** : ouvertures animées.
- **Cartes frameworks** : badges `.badge.flask|django|fastapi`.

## 5. Logique JavaScript
### 5.1. script.js
- Ajoute un bouton “Copier” dans chaque `.code-head`.
- `copyCode` copie le texte du bloc `pre` associé.

### 5.2. Quiz
- Chargement via `../../assets/js/quiz-engine.js`.
- Initialisation appelée deux fois (module + script classique), avec garde `!document.querySelector('.quiz-intro')`.
- Fichier de données utilisé : `quiz_web.json`.

## 6. Données de quiz
- **quiz_web.json** : 100 questions, structure `{ meta, questions[] }`.
- **quiz_python_web.json** : doublon partiel, non référencé dans `index.html`.

## 7. Points d’attention pour l’enrichissement
1. **Structure HTML** : respecter `.container > .sec-header > contenu`.
2. **Coloration code** : manuelle, copier les `<span>` existants pour garder le style.
3. **TOC + nav** : ajouter une section implique la TOC (et parfois la nav).
4. **Styles inline** : l’intro utilise `--card-bg`, `--border-color`, `--text-color` alors que les variables réelles sont `--card`, `--border`, `--text`.
5. **Couleurs hardcodées** : présence de `#fff`, `#0a0f0d` ou `rgba(...)` en CSS et de couleurs inline dans l’HTML.
6. **Quiz** : double import + double init, à stabiliser si refactor.
7. **Contrainte statique** : aucun build requis aujourd’hui, tout doit tourner en navigateur.

## 8. Plan de refactorisation / modularisation (proposé)
### Phase A — Nettoyage ciblé
- Harmoniser les variables CSS utilisées dans l’HTML (remplacer `--card-bg`, `--border-color`, `--text-color` par les variables existantes).
- Réduire les couleurs hardcodées restantes au profit des variables du design system.
- Standardiser la structure des sections (`#sX`) et le placement des sous-blocs.

### Phase B — Modularisation “low-tech”
Objectif : garder un site statique, tout en découplant le contenu.

Structure proposée :
```text
/src
├── layout.html
├── parts
│   ├── header.html
│   ├── toc.html
│   └── footer.html
└── content
    ├── 00_panorama.html
    ├── 01_env.html
    ├── 02_flask.html
    └── ...
build.py
```
Principe : `build.py` concatène les fragments pour générer `index.html` (tout reste statique côté déploiement).

### Phase C — Enrichissement guidé
- Ajouter un nouveau module = créer un fichier `content/XX_titre.html`.
- Ajouter l’entrée dans la TOC.
- Rebuild local pour générer `index.html`.

### Phase D — Quiz
- Regrouper les JSON dans un dossier `data/`.
- Ajouter une validation JSON simple avant build.

---
**Note IA / dev** : pour enrichir rapidement sans casser le design, réutiliser `.grid2`, `.grid3`, `.code`, `.ref-card`, `.tip`, et conserver la hiérarchie `.container > .sec-header > contenu`.
