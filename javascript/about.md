# À Propos du Mémo JavaScript

## 🎓 Vision Pédagogique

Ce site web est conçu comme un **outil d'apprentissage interactif** pour maîtriser JavaScript moderne (ES6+). L'approche privilégie :

- **La synthèse** : Chaque module condense l'essentiel en une page unique
- **L'interactivité** : Démos live pour expérimenter immédiatement
- **La progression** : Structure modulaire du niveau débutant à avancé
- **La référence rapide** : Cheatsheets pour consultation express

## 🎯 Public Cible

Ce mémo s'adresse à :
- **Débutants** souhaitant découvrir JavaScript de manière structurée
- **Développeurs** cherchant une référence rapide et claire
- **Apprenants en reconversion** (bootcamps, formations Web Dev)
- **Étudiants** en informatique ou autodidactes

## 🧩 Méthodologie

Chaque module suit un pattern cohérent :

1. **Introduction** : Contexte et utilité du concept
2. **Syntaxe** : Code annoté avec coloration Prism.js
3. **Explications** : Blocs dépliables (`<details>`) pour approfondir
4. **Démo Interactive** : Exemples cliquables pour tester en direct
5. **Bonnes Pratiques** : Tips et warnings pour éviter les erreurs

### Pourquoi Vanilla JS ?

Le choix du **JavaScript pur** (sans framework) est délibéré :
- Comprendre les fondations avant React/Vue/Angular
- Apprendre la manipulation directe du DOM
- Maîtriser les patterns natifs (Promises, async/await, etc.)
- Développer une logique de résolution de problèmes

## 🏗️ Genèse du Projet

Ce site fait partie d'un **écosystème de cours** hébergé sur [hylst.fr](https://hylst.fr), créé par **Geoffroy Streit** dans le cadre de son apprentissage en développement web.

### Cours associés
- **HTML** : Structures sémantiques, formulaires, accessibilité
- **CSS** : Flexbox, Grid, animations, responsive design
- **PHP** : Backend, POO, bases de données
- **Réseaux** : Protocoles TCP/IP, DNS, DHCP, routage
- *(À venir)* : SQL, Docker, Git, Green IT

### Philosophie

> "Apprendre en créant, partager en synthétisant."

L'objectif n'est pas de remplacer la documentation officielle (MDN), mais de proposer :
- Un **parcours guidé** pour éviter la surcharge d'informations
- Des **exemples concrets** plutôt que théoriques
- Une **expérience utilisateur soignée** (design moderne, responsive)

## 🎨 Design et Expérience Utilisateur

### Identité Visuelle
Le design s'inspire de l'univers JavaScript :
- **Jaune #f7df1e** : Couleur emblématique du logo JS
- **Cyan #00d4ff** : Accent moderne et technologique
- **Fond sombre** : Confort de lecture, ambiance "code editor"

### Accessibilité
- Contraste élevé pour la lisibilité
- Navigation au clavier fonctionnelle
- Responsive design (mobile-first)
- Polices optimisées (Outfit pour UI, JetBrains Mono pour code)

## 🔧 Aspects Techniques

### Architecture
- **Multi-Page Application (MPA)** : Chaque module est autonome
- **Layout dynamique** : Header/Footer injectés via `layout.js`
- **Design System** : Variables CSS pour cohérence visuelle
- **Performance** : Site 100% statique, pas de base de données

### Hébergement
Déployé sur un **VPS Hostinger** via **Docker** (Nginx Alpine), géré par **Coolify**. Cette stack garantit :
- Haute disponibilité
- Scalabilité horizontale (si trafic croissant)
- Isolation des applications (containers séparés par cours)

## 🌱 Évolutions Futures

- [ ] Ajout de modules avancés (Modules ES, Web Workers, WebAssembly)
- [ ] Système de progression sauvegardé (localStorage)
- [ ] Mode sombre/clair personnalisable
- [ ] Traduction anglaise
- [ ] API pour récupérer les snippets de code
- [ ] Intégration d'un éditeur in-browser (type CodePen)

## 💬 Contact & Feedback

**Créateur :** Geoffroy Streit  
**Domaine :** [hylst.fr](https://hylst.fr)  
**GitHub :** [Hylst/cours_info](https://github.com/Hylst/cours_info) *(à vérifier si repo public)*

Pour toute question, suggestion ou correction, n'hésitez pas à me contacter via le site principal.

---

## 🙏 Remerciements

- **MDN Web Docs** : Référence incontournable
- **JavaScript.info** : Tutoriels de qualité
- **Prism.js** : Outil de coloration syntaxique
- La communauté dev pour les retours et encouragements

---

*Dernière mise à jour : 31 janvier 2026*
