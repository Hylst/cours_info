# Analyse du Projet Mémo JavaScript et Plan de Modularisation

Ce document résume l'analyse technique du projet "Mémo JavaScript" pour faciliter l'intervention d'IA de développement (Antigravity/Cursor) et préparer la modularisation demandée.

## 1. Vue d'ensemble Technique

- **Type**: Site statique (HTML5 / CSS3 / Vanilla JS).
- **Hébergement cible**: Container Docker Nginx (Alpine) via Coolify.
- **Contexte**: Fait partie d'un monorepo éducatif (partage de ressources Web Dev).
- **Structure actuelle**:
  - `index.html`: Monolithe contenant 18 sections de cours.
  - `style.css`: Styles globaux + Design System.
  - `script.js`: Logique interactive pour toutes les sections (Démos).
  - `quiz_js.json`: Banque de 100 questions QCM (fonctionnalité à intégrer).

## 2. Règles de Design et UI (STRICTES)

Le projet utilise un **Design System** basé sur des variables CSS.
**RÈGLE D'OR**: Aucune couleur hardcodée (hex/rgb) n'est autorisée dans les composants HTML/CSS. Utiliser les variables sémantiques.

### Palette Sémantique (`:root`)
- **Fonds**: `--bg` (Body), `--bg2` (Details/Cards), `--card` (Éléments UI).
- **Texte**: `--text` (Principal), `--muted` (Secondaire), `--dim` (Tertiaire).
- **Accents**: 
  - `--primary` (#f7df1e - Jaune JS)
  - `--secondary` (#323330 - Foncé)
  - `--accent` (#00d4ff - Cyan)
- **Status**: `--green` (Succès/Valid), `--red` (Erreur/Danger), `--orange` (Warning), `--purple`, `--pink` (Syntaxe).
- **Bordures**: `--border`.

## 3. Analyse du Contenu (Modules Identifiés)

Le contenu actuel est divisé en sections (ID `#s1` à `#s18`). Chaque section suit le pattern :
`Header` -> `Details (Info)` -> `Code (Syntaxe)` -> `Demo (Interactif)`.

**Liste des Modules (à extraire) :**
1.  **Variables** (`let`, `const`, `var`)
2.  **Types** (Primitifs, Objects)
3.  **Opérateurs** (Arithmétique, Logique, Comparaison)
4.  **Conditions** (`if`, `switch`, ternaire)
5.  **Boucles** (`for`, `while`, `map`)
6.  **Fonctions** (Fléchées, Callbacks)
7.  **Arrays** (Manipulations, HOF)
8.  **Objects** (Méthodes, Destructuring)
9.  **DOM** (Sélection, Manipulation)
10. **Events** (Listeners, Propagation)
11. **Async** (Promises, Async/Await)
12. **Storage** (Local/SessionStorage)
13. **Spread/Rest** (Opérateurs `...`)
14. **Classes** (POO)
15. **Fetch API** (Requêtes HTTP)
16. **Date** (Manipulation dates) - *Note: Section conjointe avec Math dans le menu, séparée dans le code? À vérifier.*
17. **Math** (Méthodes mathématiques)
18. **String Methods** (Manipulation de chaînes)
19. **Quiz** (Non implémenté visuellement, données dans `quiz_js.json`)

## 4. Stratégie de Modularisation

Pour respecter la contrainte "Site Statique" (Pas de SSR/PHP) tout en facilitant la maintenance :

### A. Structure de Fichiers Proposée
Transformer le monolithe en **Multi-Page Application (MPA)** simple.
Chaque module devient une page autonome, partageant le layout via JS (ou duplication propre si JS interdit pour layout, mais JS préféré ici pour "apprendre JS avec JS").

```text
/javascript
  /assets
    /css
      style.css      (Global + Layout)
      prism.css      (Optimisation syntaxe futur)
    /js
      layout.js      (Injecte Header/Nav/Footer)
      quiz.js        (Moteur du quiz)
  /modules
    01_variables.html
    02_types.html
    ...
    19_quiz.html
  index.html         (Table des matières / Landing)
  quiz_js.json       (Data)
```

### B. Navigation & Layout Communs
Créer un script `layout.js` inclus dans chaque page module qui :
1.  Injecte le `<header>` (Nav) et le `<footer>`.
2.  Gère la classe `.active` dans le menu.
3.  Ajoute un bouton "Retour au sommaire" ou "Module suivant".

### C. Refactoring JS
- Eclater `script.js` :
  - Soit un fichier JS par module (`assets/js/modules/01_variables.js`).
  - Soit garder un `main.js` mais avec des vérifications d'existence d'éléments (`if (document.getElementById('demo-var')) ...`) pour ne pas faire d'erreurs sur les pages où le module est absent.
  - *Recommandation* : Un petit script spécifique par module est plus propre pour l'apprentissage.

## 5. Enrichissements Suggérés (Task List)

1.  **Intégration Quiz** : Créer une page dédiée qui charge `quiz_js.json` et propose un QCM interactif (10 questions aléatoires ou par thème).
2.  **Amélioration Code** : Remplacer les blocks `pre` manuels par une lib légère (Prism.js ou Highlight.js) pour une meilleure lisibilité sans tout styliser à la main (les classes `.kw`, `.fn` actuelles sont laborieuses à maintenir).
3.  **Search Bar** : Ajouter une barre de recherche en JS pur sur l'index pour filtrer les modules.

## 6. Protocole pour l'IA (Avant modification)

1.  **Lire** `style.css` pour connaître les variables.
2.  **Vérifier** si le fichier cible est un module ou l'index.
3.  **Ne jamais** casser le `<div class="container">` qui centre le contenu.
4.  **Conserver** la structure `Details summary` pour les explications théoriques (accordeon).

---
*Généré par Antigravity - Analyse Préliminaire*
