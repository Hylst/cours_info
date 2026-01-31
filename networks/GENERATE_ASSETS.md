# Instructions pour Génération d'Assets Visuels

## Contexte

En raison d'une limitation de quota API pour la génération d'images, les assets visuels suivants doivent être créés manuellement ou ultérieurement.

## Assets Requis

### 1. Favicon (`img/favicon.ico`)

**Spécifications:**
- Format: ICO (multi-résolution: 16x16, 32x32, 48x48)
- Design: Icône de réseau minimaliste
- Couleurs: 
  - Vert primaire: `#83cd29`
  - Vert secondaire: `#68a063`
  - Fond sombre: `#303030`
- Concept: 3-4 nœuds connectés formant une topologie réseau simple
- Style: Géométrique, moderne, haute lisibilité à petite taille

**Outils suggérés:**
- [Favicon.io](https://favicon.io/) - Générateur en ligne
- [RealFaviconGenerator](https://realfavicongenerator.net/) - Multi-plateformes
- Photoshop/Illustrator - Design custom
- [GIMP](https://www.gimp.org/) - Alternative gratuite

**Commande Figma/Design:**
```
Créer un carré 512x512px
- Fond: #303030
- 4 cercles verts (#83cd29) de 60px
- Positionner en losange
- Lignes de connexion (#68a063, 8px d'épaisseur)
- Exporter en ICO multi-résolution
```

---

### 2. Image de Partage Social (`img/og-image.png`)

**Spécifications:**
- Dimensions: 1200 x 630 pixels (ratio Open Graph standard)
- Format: PNG (optimisé pour le web, <300 KB)
- Résolution: 72 DPI

**Contenu:**

**Zone Gauche (40%):**
- Titre: "Mémo Réseaux"
  - Police: Outfit Bold, 72px
  - Couleur: `#83cd29`
- Sous-titre: "Guide Interactif 2026"
  - Police: Outfit Regular, 36px
  - Couleur: `#f0f0f0`
- Tags: "OSI • TCP/IP • DNS • DHCP"
  - Police: Outfit Light, 24px
  - Couleur: `#a0a0a0`

**Zone Droite (60%):**
- Visualisation réseau abstraite
  - Diagramme OSI stylisé (7 couches empilées)
  - Flux de données (paquets) avec flèches
  - Nœuds interconnectés en arrière-plan
  - Palette: Vert (#83cd29, #68a063) + accents bleus (#82aaff)

**Fond:**
- Couleur de base: `#222222`
- Grille subtile: `#303030` (opacity 30%)
- Gradient radial depuis le centre (effet glow doux)

**Outils suggérés:**
- [Canva](https://www.canva.com/) - Template "LinkedIn Post" ou "Facebook Post"
- [Figma](https://www.figma.com/) - Design professionnel
- Photoshop - Contrôle total
- [Pixlr](https://pixlr.com/) - Alternative gratuite en ligne

**Template Canva (recherche):**
```
Rechercher: "Tech Course Social Media"
Filtrer: 1200x630
Adapter avec couleurs et texte du projet
```

---

## Vérification Après Génération

### Favicon

```bash
# Tester la validité
file img/favicon.ico
# Doit afficher: "MS Windows icon resource, 3 icons, 16x16, 32x32, 48x48"

# Vérifier visuellement
start img/favicon.ico  # Windows
open img/favicon.ico   # macOS
xdg-open img/favicon.ico  # Linux
```

### Image OG

```bash
# Vérifier les dimensions
identify img/og-image.png
# Doit afficher: "img/og-image.png PNG 1200x630"

# Vérifier le poids
ls -lh img/og-image.png
# Doit être < 500 KB (idéalement < 300 KB)
```

### Test de Partage Social

Une fois les images générées et en place:

1. **Facebook Debugger**
   - [https://developers.facebook.com/tools/debug/](https://developers.facebook.com/tools/debug/)
   - Entrer: `https://hylst.fr/cours/networks/`
   - Cliquer "Scrape Again" pour forcer un rafraîchissement
   - Vérifier que l'image s'affiche

2. **Twitter Card Validator**
   - [https://cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator)
   - Entrer l'URL
   - Vérifier la preview

3. **LinkedIn Post Inspector**
   - [https://www.linkedin.com/post-inspector/](https://www.linkedin.com/post-inspector/)
   - Entrer l'URL
   - S'assurer que l'image et les meta tags sont bien lus

---

## Optimisation d'Images

Si le poids est trop élevé:

```bash
# Optimiser le PNG (sans perte visible)
pngquant img/og-image.png --quality=85-95 --output img/og-image-optimized.png

# Ou avec TinyPNG (en ligne)
# https://tinypng.com/
```

---

## Liens de Référence

- Meta Tags: `<head>` dans `index.html` (lignes 12-26)
- Chemins définis:
  - Favicon: `img/favicon.ico` (ligne 25)
  - OG Image: `img/og-image.png` (lignes 15, 23)

---

**Note**: Une fois generées, placer les images dans `d:\0CODE\AntiGravity\Cours_Memos\Docker\networks\img\`
