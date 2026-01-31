# Instructions pour créer le favicon HTML

## Spécifications

### Fichier 1 : `html-icon.svg`
- **Format** : SVG (vectoriel, évolutif)
- **Dimensions** : 512x512px (viewBox)
- **Design** : Symbole `</>` (angle brackets avec slash)
- **Couleurs** : Dégradé orange HTML5
  - Début : `#e44d26`
  - Fin : `#f06529`
- **Fond** : Dark purple `#201840`
- **Style** : Minimaliste, géométrique, moderne

### Fichier 2 : `html-icon-180.png`
- **Format** : PNG
- **Dimensions** : 180x180px
- **Contenu** : Export raster du SVG ci-dessus
- **Usage** : Apple Touch Icon (iOS)

## Outils recommandés

1. **Figma / Adobe Illustrator** : Créer le SVG
2. **SVGOMG** (https://jakearchibald.github.io/svgomg/) : Optimiser le SVG
3. **Export PNG** : Depuis Figma/Illustrator à 180x180px

## Code SVG de base

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#e44d26;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f06529;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Fond -->
  <rect width="512" height="512" fill="#201840" rx="64"/>
  
  <!-- Symbole </> centré -->
  <g fill="url(#grad)" stroke-width="32" stroke="url(#grad)">
    <!-- Angle gauche < -->
    <path d="M 200,160 L 120,256 L 200,352" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    
    <!-- Slash / -->
    <line x1="256" y1="352" x2="256" y2="160" stroke-linecap="round"/>
    
    <!-- Angle droit > -->
    <path d="M 312,160 L 392,256 L 312,352" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
</svg>
```

## Placement

1. Sauvegarder `html-icon.svg` dans `d:\0CODE\AntiGravity\Cours_Memos\Docker\html\assets\`
2. Exporter et sauvegarder `html-icon-180.png` au même endroit
3. Les références sont déjà ajoutées dans `index.html` (lignes 15-16)

---

**Note** : L'outil de génération d'images a atteint son quota. Ces fichiers doivent être créés manuellement.
