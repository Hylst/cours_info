# Plan de Refactorisation & Modularisation

## Objectif
Améliorer la maintenabilité du Mémo Python Web sans briser sa nature statique (compatible Docker/Nginx/Alpine), tout en facilitant l'enrichissement futur par des IA ou des humains.

## Phase 1 : Standardisation Immédiate (Cleaning)
**Action** : Nettoyage du code existant.
- [x] **Audit CSS** : Remplacer les couleurs hardcodées par des variables `:root` dédiées.
- [x] **Convention de Nommage** : S'assurer que chaque section `id="sX"` suit strictement le pattern :
    ```html
    <section id="sX">
        <div class="container">
            <div class="sec-header">...</div>
            <!-- Contenu -->
        </div>
    </section>
    ```

## Phase 2 : Modularisation "Low-Tech" (Build Script)
**Problème** : `index.html` est monolithique (>700 lignes). Ajouter un chapitre demande de scroller et de risquer de casser la structure.
**Solution** : Un script de build simple Python (`build.py`) qui génère `index.html`.

### Structure Proposée
```text
/src
├── layout.html       # Squelette (Head, Body, Scripts) avec placeholders {{HEAD}} {{CONTENT}}
├── parts
│   ├── head.html
│   ├── header.html
│   ├── hero.html
│   ├── intro.html
│   ├── toc.html
│   ├── quiz.html
│   ├── footer.html
│   └── scripts.html
└── content
    ├── 00_panorama.html # s0
    ├── 01_env.html      # s1
    └── ...
build.py              # Script : concatène tout -> index.html
```

### Avantages
1.  **Isolation** : Travailler sur le chapitre "Docker" (`12_docker.html`) sans voir le code de "Flask".
2.  **Sécurité** : Impossible de casser le layout global en éditant un chapitre.
3.  **Git** : Diffs plus lisibles.

## Phase 3 : Enrichissement de Contenu (Future)
Pour ajouter un module (ex: "Déploiement AWS") :
1.  Créer `/src/content/14_aws.html`.
2.  Ajouter l'entrée dans `/src/parts/toc.html`.
3.  Lancer `python build.py`.

## Phase 4 : Amélioration du Quiz
- [x] Déplacer `quiz_web.json` dans un dossier `data/` pour clarté.
- [x] Ajouter une validation JSON avant le build pour éviter les erreurs de syntaxe qui casseraient le JS.

## Recommandation Technique
Rester sur du **Python natif** pour le script de build (pas de Jinja2 lourd ou node_modules complexes nécessaires si c'est juste de la concaténation intelligente) pour garder le container Docker léger si on veut builder dans le container, ou builder en local.
Comme le site est hébergé en statique pur, le build se fait en local (ou CI/CD) et seul le `index.html` généré est déployé.
