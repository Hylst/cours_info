# Changelog
Toutes les modifications notables apportées au projet **Hylst Books & Reader** sont documentées dans ce fichier.

## [1.1.12] - 2026-03-03
### Corrigé
- **Animations d'ambiance** : Correction définitive de la visibilité des effets en forçant la transparence des conteneurs de texte et en boostant l'opacité et le contraste des calques d'animation. Le z-index a été réorganisé pour garantir que l'ambiance soit toujours visible sous le texte.
- **Temps de lecture** : Déplacé à l'intérieur de la barre de navigation inférieure (au centre, à gauche du compteur de chapitre) pour éviter tout chevauchement avec les boutons de saut de page.
- **Nettoyage UI** : Suppression de l'ancien indicateur flottant et des badges redondants en haut de page.

## [1.1.11] - 2026-03-03
### Corrigé
- **Animations d'ambiance** : Correction du problème de z-index qui rendait les animations invisibles. Elles sont maintenant visibles dans tous les modes (Sépia, Clair, Sombre).
- **Temps de lecture** : Déplacement de l'indicateur en bas à droite de l'écran (visible uniquement au clic/touch) pour plus de discrétion et d'utilité.

### Ajouté
- **Indicateurs paramétrables** : Nouveaux réglages pour activer/désactiver l'affichage du temps restant et du pourcentage de progression dans le slider.
- **Slider pourcentage** : Affichage dynamique du pourcentage de lecture au niveau du curseur de défilement.

## [1.1.10] - 2026-03-03
### Corrigé
- **Lecture (layout)** : Correction du rendu du mode lecture perturbé par la couche d’ambiance (empilement/z-index stabilisé, affichage de contenu restauré).
- **Mode Sombre** : Effet allégé pour éviter le voile trop dense et améliorer le confort visuel.
- **Mode Clair** : Effet rendu visible avec halos très subtils et particules discrètes.

### Modifié
- **Mode Sépia** : Remplacement des bandes trop marquées par des nappes lumineuses douces et lentes, mieux intégrées au style littéraire.
- **Animations ambiantes** : Particules moins nombreuses, plus lentes, plus légères GPU/CPU, dérive réduite pour un mouvement plus naturel.
- **Transitions d’ambiance** : Opacités et amplitudes ajustées pour des animations progressives, qualitatives et non intrusives.

### À faire
- Ajouter un réglage utilisateur “Intensité ambiance” global (faible/moyen/élevé).
- Ajouter un preset “Lecture longue” qui réduit automatiquement l’animation.

## [1.1.9] - 2026-03-03
### Ajouté
- **Animations par thème** : Nouveau réglage dans les modals de paramètres pour activer/désactiver indépendamment les animations de fond en Sépia, Clair et Sombre.
- **Ambiance différenciée** : Trois identités visuelles distinctes selon le thème (onde chaleureuse en Sépia, halo clair en mode Clair, aura + scintillement en mode Sombre).

### Modifié
- **Bloc Continuer/Reprendre** : Refonte complète du composant avec hiérarchie typographique, meilleure lisibilité du titre, troncature élégante et CTA premium.
- **Paramètres UI** : Boutons de thème harmonisés avec icônes du design system (sans emoji), cohérence renforcée avec les tokens existants.
- **Ambiance en lecture** : Les animations de fond sont désormais visibles dans ReaderView et non uniquement dans les écrans bibliothèque/modals.

### Corrigé
- **Visibilité Sépia** : Intensité et contraste ajustés pour rendre l’ambiance perceptible sans nuire au confort de lecture.
- **Persistance settings** : Normalisation des préférences d’animation par thème dans les settings sauvegardés.
- **Cache** : Bump cache-busting vers `v1.1.9` et Service Worker `hylst-reader-v9` pour forcer la prise en compte des nouveaux styles.

### À faire
- Ajuster un slider de densité des effets pour un contrôle fin de l’intensité visuelle.
- Ajouter un preset “Mode minimal” (animations ultra-subtiles) pour les longues sessions de lecture.

## [1.1.0] - 2026-03-03
### Ajouté
- **Bibliothèque Musicale** : Accès direct aux compositions de Geoffroy Streit.
- **Lecteur Audio** : Contrôles avancés (Play/Pause, Loop, Mini-bar header, animations de vagues).
- **Menu Settings** : Personnalisation de l'expérience de lecture (taille police, thèmes, alignement).
- **Import Header** : Bouton d'accès rapide à l'importation de dossiers HML.

### Modifié
- **UI Redesign** : Passage à une largeur de modal de 1100px pour la musique.
- **Organisation** : Séparation claire entre la "Bibliothèque Hylst" et "Vos autres lectures".
- **Documentation** : Mise à jour complète de `README.md`, `resume.md` et `about.md`.

### Corrigé
- Bug de disparition du bouton Settings.
- Problème de filtrage des livres importés (`isImported` property).

## [1.1.1] - 2026-03-03
### Modifié
- **Cartes livres** : Grille élargie pour éviter les cards trop étroites.
- **Modals** : Refonte des styles pour restaurer hiérarchie et lisibilité.
- **Bibliothèque musicale** : Harmonisation des classes CSS avec le rendu réel.

### Corrigé
- Scroll vertical restauré dans la bibliothèque.
- Dégradations visuelles sur About, Settings et Music.
- Bouton pause parasite retiré de la bibliothèque musicale.

### À faire
- Vérifier le responsive sur vieux mobiles après ce correctif.

## [1.1.2] - 2026-03-03
### Modifié
- **Cards livres** : Hauteurs normalisées via conteneur couverture.
- **Layout** : Chaîne de hauteur corrigée pour le scroll bibliothèque.

### Corrigé
- Erreur `idb` non défini lors du chargement.
- État audio stabilisé si un flux distant échoue.

## [1.1.3] - 2026-03-03
### Modifié
- **Cards bibliothèque** : Hauteur réduite et densité visuelle ajustée.
- **Section À venir** : Texte enrichi en deux paragraphes.
- **Mini player** : Ouverture par clic sur la miniature/titre + aperçu au survol.

### Corrigé
- Indicateur loop rendu visuel et durable via alternance d’icônes.

## [1.1.8] - 2026-03-03
### Ajouté
- **Ambiance Visuelle** : Effet de grain de papier animé et poussière flottante discrète dans les modes Sépia et Sombre pour une immersion renforcée.
- **Mode Immersion** : Bouton plein écran dans le lecteur pour masquer l'interface du navigateur.
- **Temps de lecture dynamique** : Affichage du temps restant estimé pour finir le chapitre, mis à jour en temps réel selon votre progression.

### Modifié
- **About Modal** : Refonte complète du design. Le modal est plus large (1100px), mieux structuré et responsive. Correction des problèmes de troncature de texte.
- **Icônes** : Ajout des icônes Maximize/Minimize pour le mode plein écran.

## [1.1.7] - 2026-03-03
### Corrigé
- **Crash AboutModal** : Correction de l'erreur React #130 causée par l'utilisation d'icônes non définies. Ajout de 10 nouvelles icônes au set global.

### Modifié
- **Documentation** : Mise à jour de `about.md` et `README.md` avec les nouvelles fonctionnalités.
- **Git** : Nettoyage du fichier `.gitignore` pour une meilleure gestion du repo.

### Suggestions & À venir (Backlog)
- **Import/Export** : Permettre l'exportation d'un livre (config + chapitres) au format ZIP pour partage.
- **Lecture** : Indicateur de temps de lecture restant pour le chapitre en cours.
- **Ambiance** : Ajout d'animations de fond discrètes (particules, dégradés animés) liées au thème.

## [1.1.6] - 2026-03-03
### Ajouté
- **Raccourcis Clavier** : Support complet pour la navigation (Espace pour scroller, Flèches pour changer de chapitre, Home/End pour sauter en haut/bas).
- **Redesign Modal About** : Nouvelle interface en onglets (À propos, Fonctions, Créateur, Astuces) avec un design plus moderne, interactif et informatif.

### Modifié
- **Recherche** : Suppression de la fonction de recherche intégrée au profit de la recherche native du navigateur (`Ctrl + F`), plus performante et universelle.
- **UI** : Amélioration de la fluidité des animations et des transitions de vue.

## [1.1.5] - 2026-03-03
### Modifié
- **Navigation** : Barre de navigation de chapitre (Précédent/Suivant) désormais fixe en bas de page, fusionnée avec les boutons de saut (Haut/Bas) pour une meilleure accessibilité.
- **Recherche** : Cliquer sur un résultat de recherche dans le chapitre en cours fait défiler la page jusqu'à l'occurrence avec un effet de surbrillance temporaire.

### Corrigé
- **Images chapitres** : Correction des liens brisés vers les couvertures de chapitres (réécriture dynamique des chemins relatifs).

## [1.1.4] - 2026-03-03
### Modifié
- **Settings** : Mise en page recentrée et cartes de réglages stylisées.
- **À venir** : Paragraphes enrichis en blocs avec effets et gradients.
- **Book Home** : Mise en page lisible et scrollable.
- **Typographie** : Normalisation des titres et paragraphes du lecteur.

### Corrigé
- **Lecteur** : Réactivation du scroll et des contrôles au tap.
- **Dropcap** : La capitale initiale n’agrandit plus tout le paragraphe.

## [1.0.0] - 2026-02
- Version initiale : Liseuse PWA, support HML, stockage IndexedDB, Mode Lecteur premium.
