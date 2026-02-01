# Structure du Projet

```
node_js/
├── assets/                  # Ressources statiques
│   ├── css/                 # Styles partagés et spécifiques
│   ├── img/                 # Images, icônes
│   └── js/                  # Scripts (Quiz engine, etc.)
├── src/                     # Code Source Modulaire
│   ├── layouts.html         # Squelette principal
│   ├── partials/            # Fragments réutilisables (header, footer)
│   └── sections/            # Contenu par chapitre (01_runtime.html, ...)
├── build.js                 # Script de compilation (HTML Assembler)
├── index.html               # [GÉNÉRÉ] Point d'entrée du site final
├── style.css                # Style spécifique au mémo Node
├── script.js                # Logique spécifique (Démos, Menu)
├── quiz_node.json           # Données du quiz
└── readme.md                # Documentation principale
```

## Flux de Travail
1. Modification des contenus dans `src/sections/`.
2. Modification du style dans `style.css`.
3. Exécution de `node build.js`.
4. Test sur `index.html`.
5. Comit & Push.
