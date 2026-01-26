# Analyse et Guide Technique : Projet Mémo PHP

Ce document résume l'analyse de l'architecture du site "Mémo PHP" afin de guider toute intervention future (humaine ou IA) pour l'enrichissement de contenu ou la maintenance.

## 1. Architecture Globale
Le projet a évolué d'une page monolithique PHP vers une **Single Page Application (SPA) statique** moderne.

*   **Mode de déploiement** : Conteneur Docker Nginx (Alpine) statique. Pas de moteur PHP serveur.
*   **Point d'entrée** : `index.html` (et NON `index.php` qui est un fichier legacy/obsolète à ignorer).
*   **Routing** : Géré côté client par `assets/js/app.js` et `assets/js/router.js`.
*   **Contenu** : Les modules de cours sont des fragments HTML stockés dans le dossier `sections/`.

## 2. Structure des Dossiers (`php/`)

```
php/
├── index.html              # Point d'entrée PRINCIPAL (SPA Container)
├── index.php               # LEGACY - Ne pas modifier, sert de ref ou fallback temporaire
├── script.js               # LEGACY - Ne pas utiliser (voir assets/js/)
├── style.css               # LEGACY - Ne pas utiliser (voir assets/css/)
├── assets/
│   ├── css/
│   │   ├── variables.css   # Tokens de Design (Couleurs, sémantique)
│   │   ├── main.css        # Styles globaux et composants
│   │   └── quiz-style.css  # Styles spécifiques au Quiz
│   └── js/
│       ├── app.js          # Configuration des routes et init
│       ├── router.js       # Logique de navigation et chargement
│       └── quiz-engine.js  # Moteur de quiz
└── sections/               # CONTENU DU COURS (Fragments HTML)
    ├── 01_variables.html
    ├── 02_arrays.html
    ...
```

## 3. Règles Strictes de Design System

Le projet utilise un système de variables CSS sémantiques. **Il est INTERDIT d'utiliser des valeurs hexadécimales hardcodées** dans les fichiers HTML ou CSS.

### Variables Sémantiques (à utiliser impérativement)
Toutes les couleurs doivent provenir de `assets/css/variables.css`.

*   **Structure** : `var(--background)`, `var(--foreground)`
*   **Conteneurs** : `var(--card)`, `var(--card-foreground)`
*   **Action/Brand** : `var(--primary)`, `var(--primary-foreground)`, `var(--accent-base)`
*   **Bordures** : `var(--border)`
*   **Texte secondaire** : `var(--muted-foreground)`
*   **Syntaxe Code** : `var(--sh-keyword)`, `var(--sh-function)`, `var(--sh-string)`, etc.

> **Note** : Les opacités se gèrent via `color-mix` ou l'opacité CSS, mais la base doit rester une variable.

## 4. Structure d'un Module (`sections/xx_name.html`)

Chaque fichier dans `sections/` est un fragment HTML injecté dynamiquement. Il ne doit **PAS** contenir `<!DOCTYPE html>`, `<html>`, `<head>` ou `<body>`.

### Modèle de base
```html
<div class="sec-header">
    <div class="sec-num">XX</div>
    <div>
        <h2 class="sec-title">Titre du Module</h2>
        <p class="sec-sub">Sous-titre descriptif</p>
    </div>
</div>

<details>
    <summary>📖 Titre de la section déroulante</summary>
    <div>
        <p>Contenu explicatif...</p>
    </div>
</details>

<div class="code">
    <div class="code-head">
        <span class="dot r"></span><span class="dot y"></span><span class="dot g"></span>
        Titre du Fichier
    </div>
    <pre><span class="tag">&lt;?php</span>
<span class="c">// Commentaire</span>
<span class="var">$variable</span> = <span class="str">"Valeur"</span>;</pre>
</div>
```

### Éléments Interactifs
*   **Exemples Déroulants** : Utiliser la classe `.example-toggle` suivie d'un `.example-content`.
    ```html
    <div class="example-toggle">Voir l'exemple</div>
    <div class="example-content">
        <pre>Résultat de l'exécution...</pre>
    </div>
    ```
*   **Cartes de Référence** : Utiliser `.grid2` ou `.ref-grid` avec des `.ref-card`.

## 5. Procédure pour Ajouter/Modifier un Module

1.  **Création/Édition** : Modifier ou créer le fichier `.html` dans `sections/`.
2.  **Enregistrement (si nouveau)** : Ajouter l'entrée dans le tableau `routes` du fichier `assets/js/app.js`.
    ```javascript
    { path: 'slug-url', file: 'XX_filename.html', title: 'XX Titre' },
    ```
3.  **Vérification** : Tester via un serveur HTTP local (le fetch ne fonctionne pas en `file://`).

## 6. Syntaxe Highlighting
Le code PHP dans les blocs `<pre>` doit être coloré manuellement (ou via un outil) avec les classes CSS suivantes (définies dans `main.css`) :
*   `.kw` (Keyword)
*   `.fn` (Function)
*   `.str` (String)
*   `.num` (Number)
*   `.c` (Comment)
*   `.var` (Variable)
*   `.tag` (PHP tags)

---
*Généré par Antigravity - Analyse pour Maintenance et Enrichissement IA.*
