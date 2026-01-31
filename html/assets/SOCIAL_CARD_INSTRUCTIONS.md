# Instructions pour créer la Social Card

## Spécifications

### Fichier : `html-social-card.webp`
- **Format** : WebP (optimisé pour le web)
- **Dimensions** : 1200x630px (ratio 1.91:1)
- **Usage** : Open Graph (Facebook, LinkedIn, Twitter)
- **Qualité** : 85-90%

## Design

### Disposition
```
┌─────────────────────────────────────────────────┐
│                                                 │
│    [ICON </>]         MÉMO HTML5                │
│    (gauche)           85+ balises | Exemples    │
│                       visuels | Quiz            │
│                                                  │
│                       par Geoffroy Streit        │
└─────────────────────────────────────────────────┘
```

### Éléments

1. **Icône gauche** (300x300px zone)
   - Symbole `</>` en grand
   - Dégradé orange : `#e44d26` → `#f06529`
   - Effet glow/ombre subtile

2. **Titre principal** (droite)
   - Texte : "Mémo HTML5"
   - Font : Outfit Bold, 96px
   - Couleur : `#f0e6ff` (blanc cassé)
   - Position : Aligné à gauche du texte

3. **Sous-titre**
   - Texte : "85+ balises | Exemples visuels | Quiz"
   - Font : Outfit Regular, 36px
   - Couleur : `#a89cc8` (gris clair)
   - Séparateurs : pipes `|`

4. **Signature**
   - Texte : "par Geoffroy Streit"
   - Font : Outfit Regular, 24px
   - Couleur : `#6b5f87` (gris atténué)
   - Position : Bas droite

### Arrière-plan
- **Dégradé** : `#0f0a1a` (haut gauche) → `#1a1230` (bas droit)
- **Texture** : Grille de points subtile ou motif tech (10% opacité)
- **Effet** : Vignette douce sur les bords

## Outils recommandés

1. **Figma** : https://www.figma.com
   - Template 1200x630px
   - Export WebP

2. **Canva Pro** : https://www.canva.com
   - Template "Facebook Cover"
   - Redimensionner à 1200x630

3. **Photoshop / GIMP**
   - Créer nouveau 1200x630
   - Export WebP via plugin

## Conversion JPG/PNG → WebP

Si création en PNG :
```bash
# Avec cwebp (Google WebP tools)
cwebp -q 85 html-social-card.png -o html-social-card.webp
```

Ou en ligne : https://squoosh.app/

## Placement

1. Sauvegarder dans `d:\0CODE\AntiGravity\Cours_Memos\Docker\html\assets\html-social-card.webp`
2. Les références sont déjà ajoutées dans `index.html` :
   - ligne 24 : `og:image`
   - ligne 32 : `twitter:image`

## Test

Vérifier le rendu avec :
- **Twitter** : https://cards-dev.twitter.com/validator
- **Facebook** : https://developers.facebook.com/tools/debug/
- **LinkedIn** : Partager en privé et vérifier la preview
- **Open Graph** : https://www.opengraph.xyz/

---

**Note** : L'outil de génération d'images a atteint son quota. Ce fichier doit être créé manuellement. Adapter les URLs dans `index.html` (lignes 20,24,32) avec votre domaine réel avant déploiement.
