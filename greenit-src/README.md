# Le Green IT en clair

Site web éducatif français sur le numérique responsable et l'écologie numérique.

## 📖 À propos

**Le Green IT en clair** est un projet personnel créé par Geoffroy Streit, développeur et passionné soucieux de l'environnement. Ce site vise à sensibiliser et éduquer sur les enjeux environnementaux du numérique à travers du contenu pédagogique, des outils interactifs et des ressources pratiques.

### Mission
Rendre accessibles et compréhensibles les concepts du Green IT pour permettre à chacun (citoyens, entreprises, collectivités, développeurs) d'agir concrètement pour réduire l'impact environnemental du numérique.

### Valeurs
- **Pédagogie** : Ton positif et jamais culpabilisant
- **Transparence** : Sources citées, méthodologie claire
- **Accessibilité** : Contenu pour tous les niveaux
- **Action** : Guides pratiques et outils concrets

## 🚀 Fonctionnalités

### Pages principales
- **Comprendre** : Cycle de vie du numérique expliqué simplement
- **Chiffres & Données** : Visualisations interactives des impacts
- **Cas pratiques** : Études détaillées avec simulateurs
- **Comment agir** : Guides personnalisés par profil
- **Développement** : Bonnes pratiques pour développeurs
- **Réglementation** : Cadre légal français et européen

### Outils interactifs
- Calculateur d'empreinte carbone numérique
- Simulateur de sobriété sur 5 ans
- Quiz gamifié sur le Green IT
- Carte des points de collecte en France

### Ressources
- 8 fiches pratiques téléchargeables
- Glossaire technique avec recherche
- FAQ avec 24 questions/réponses
- Flux RSS des actualités Green IT
- Liens vers organismes et associations

## 🛠️ Technologies

### Framework & Langages
- **Next.js 16.0.0** (App Router)
- **React 19.2.0**
- **TypeScript 5**
- **Tailwind CSS 4.1.9**

### UI & Composants
- **Radix UI** pour l'accessibilité
- **Recharts** pour les graphiques
- **Lucide React** pour les icônes
- **next-themes** pour le mode sombre

### Performance
- Images WebP optimisées
- Lazy loading progressif
- Open Graph & SEO optimisés
- Score Lighthouse 90+

## 📦 Installation

```bash
# Cloner le repository
git clone [URL_DU_REPO]

# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build production
npm run build
npm start
```

## 🖼️ Conversion d'images

Le site utilise exclusivement des images au format **WebP** pour optimiser les performances. Deux scripts sont disponibles pour convertir les images JPG/JPEG en WebP :

### Script Node.js (recommandé)
```bash
# Convertir toutes les images JPG en WebP
npm run convert-images
```

### Script Python (alternatif)
```bash
# Installer Pillow
pip install Pillow

# Exécuter le script
python3 scripts/convert-images-to-webp.py
```

**Note** : Les images converties sont placées dans `/public/` avec une qualité de 90% pour un équilibre optimal entre taille et qualité.

## 📂 Structure du projet

```
/app                    # Pages Next.js (App Router)
  /page.tsx            # Page d'accueil
  /comprendre          # Section cycle de vie
  /chiffres            # Visualisations de données
  /agir                # Guides d'action
  /developpement       # Pour développeurs
  /outils              # Outils interactifs
  /actualites          # Actualités Green IT
  /mythes              # Mythes vs Réalités
  /faq                 # Questions fréquentes
  
/components            # Composants réutilisables
  /navigation.tsx      # Menu principal
  /breadcrumb.tsx      # Fil d'Ariane
  /footer.tsx          # Pied de page
  /animated-*.tsx      # Infographies SVG animées
  
/public                # Fichiers statiques
  /*.webp              # Images optimisées
  
/app/globals.css       # Styles globaux + design tokens
```

## 🎨 Design System

### Couleurs
- **Primaire** : Vert émeraude (écologie)
- **Secondaire** : Bleu sarcelle (technologie)
- **Accent** : Orange chaleureux (action)
- **Neutres** : Beige, gris, blancs

### Typographie
- **Titres** : Poppins (600, 700)
- **Corps** : Inter (400, 500)
- **Code** : Geist Mono

## 📊 Sources des données

Toutes les données proviennent de sources fiables et récentes :
- **ADEME** : Agence de l'environnement et de la maîtrise de l'énergie
- **GreenIT.fr** : Référence française du numérique responsable
- **Ecosystem** : Éco-organisme pour le recyclage
- **ONU** : Rapports sur les e-déchets mondiaux
- **Arcep** : Autorité de régulation des communications
- **The Shift Project** : Think tank de la transition carbone

## ⚠️ Avertissement

Ce site est un projet personnel en développement continu. Les données peuvent évoluer, contenir des erreurs ou des biais d'interprétation. Des erreurs humaines et d'IA sont possibles. Utilisez ces informations comme point de départ et vérifiez toujours auprès des sources officielles pour des décisions importantes.

## 📧 Contact

**Auteur** : Geoffroy Streit  
**Email** : geoffroy.streit@gmail.com  
**Type** : Projet personnel éducatif

## 📜 Licence

Projet personnel à but éducatif et non commercial.

## 🙏 Remerciements

Merci aux organisations suivantes pour leurs travaux et ressources :
- ADEME pour leurs études approfondies
- GreenIT.fr pour leur expertise
- Ecosystem pour leurs données de recyclage
- La communauté open source pour les outils utilisés

---

**Version** : 1.0.0  
**Dernière mise à jour** : 5 janvier 2026
