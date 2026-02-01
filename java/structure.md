# Structure du Projet

Ce document détaille l'organisation technique du Mémo Java.

## Arborescence

```
java/
├── index.html          # Coquille principale (SPA-like)
├── style.css           # Feuilles de style globales (Variables, Dark Theme)
├── script.js           # Orquestration (Loader, UI, Events)
├── favicon.svg         # Icône du site
├── java-social-share.webp # Image de partage réseaux sociaux
├── modules/            # Fragments HTML chargés dynamiquement
│   ├── intro.html
│   ├── c1_ecosystem.html
│   ├── ... (Chapitres 1 à 20)
│   └── quiz.html
├── assets/
│   ├── css/            # Styles spécifiques (ex: quiz)
│   └── js/             # Scripts spécifiques (ex: moteur de quiz)
├── quiz_java.json      # Base de données des questions
└── *.md                # Documentation (readme, about, structure, changelog)
```

## Modules Pédagogiques

Le contenu est découpé en fichiers HTML partiels injectés dans `index.html` via `fetch()`.
Liste des modules chargés :
1.  Intro
2.  Écosystème
3.  Types
4.  Flux
5.  Strings
6.  Méthodes
7.  Classes
8.  Héritage
9.  Interfaces
10. Records
11. Exceptions
12. Génériques
13. Collections
14. Streams
15. Optional
16. I/O
17. Threads
18. Time
19. Annotations
20. Build
21. Futures
22. Quiz

## Conventions

- **CSS** : Utilisation stricte de variables CSS (`--bg-background`, `--text-primary`, etc.) pour le theming.
- **JS** : Vanilla JS moderne (ES6+). Chargement asynchrone des modules.
- **HTML** : Sémantique, accessible.
