# Automation / Low Code / No Code - Mémo 2025

Ce projet est un site mémo statique dédié à l'écosystème de l'automatisation, des agents IA et du "Vibe Coding". Il sert de support de cours et de référence rapide pour les Product Builders.

## 🛠️ Stack Technique

*   **Architecture** : Site Statique (HTML/CSS/JS)
*   **Build System** : Script Python (`build.py`) pour l'assemblage modulaire.
*   **Déploiement** : Docker / Nginx (via Coolify).
*   **Design** : CSS avec variables, Dark Mode natif.

## 🚀 Utilisation

Le site est construit à partir de modules fragmentés pour faciliter la maintenance. Ne modifiez **pas** `index.html` directement.

1.  Modifiez les fichiers dans `modules/` ou `partials/`.
2.  Lancez le script de build :
    ```bash
    python build.py
    ```
3.  Le fichier `index.html` sera régénéré.

## 📂 Organisation

Voir [STRUCTURE.md](./STRUCTURE.md) pour les détails.

## 📝 Auteur

Créé par **Geoffroy Streit** (Voir [ABOUT.md](./ABOUT.md)).
