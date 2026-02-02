# Structure du Projet

L'architecture du site a été refondue pour passer d'une structure monolithique à une structure modulaire.

## 📁 Répertoires

*   **`modules/`** : Contient le cœur du contenu. Chaque section du site (`<section>`) est un fichier HTML séparé (ex: `01_ecosystem.html`, `02_ai.html`).
*   **`partials/`** : Contient les éléments structurels réutilisables (`head.html`, `nav.html`, `footer.html`).
*   **`assets/`** : Images, CSS, JS et icônes.

## ⚙️ Build System (`build.py`)

Le script Python lit la liste définie dans la variable `structure` et concatène les fichiers dans l'ordre pour produire `index.html`.

**Ordre d'assemblage actuel :**
1.  `partials/head.html` (Méta-tags, CSS)
2.  `partials/nav.html` (Menu responsive)
3.  `modules/intro_hero.html`
4.  `modules/01_ecosystem.html`
...
10. `modules/11_bonus.html`
11. `modules/quiz.html`
12. `partials/footer.html` (Scripts finaux + fermeture body)

## 🎨 CSS & JS

*   **`style.css`** : Styles globaux. Utilise des variables CSS pour le thème.
*   **`script.js`** : Logique interactive (Toasts, Menu Mobile).
