import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { SheetContent } from "@/components/sheet-content"

const sheets: Record<string, any> = {
  "gestes-quotidiens": {
    title: "7 gestes quotidiens pour un numérique sobre",
    subtitle: "Actions simples à mettre en place dès aujourd'hui",
    target: "Citoyens",
    duration: "5 minutes de lecture",
    impact: "Réduction de 30% de votre empreinte numérique",
    sections: [
      {
        title: "1. Garder ses appareils plus longtemps",
        content:
          "La fabrication représente 75% de l'impact. Garder un smartphone 4 ans au lieu de 2 divise son impact par 2.",
        tips: [
          "Objectif : minimum 5 ans pour un smartphone, 7 ans pour un ordinateur",
          "Changez la batterie plutôt que l'appareil (50-80€)",
          "Utilisez une coque de protection",
        ],
      },
      {
        title: "2. Éteindre complètement la nuit",
        content: "Un appareil en veille consomme encore 5-10W. Sur un an, c'est 40-80 kWh gaspillés.",
        tips: [
          "Éteignez votre box internet la nuit (économie de 65 kWh/an)",
          "Débranchez les chargeurs (ils consomment même sans appareil)",
          "Utilisez une multiprise avec interrupteur",
        ],
      },
      {
        title: "3. Limiter le streaming vidéo HD",
        content: "1h de streaming en 4K = 6,5 Go de données transférées = 370g de CO₂. En 720p : seulement 50g de CO₂.",
        tips: [
          "Privilégiez la qualité standard (720p) plutôt que HD/4K",
          "Téléchargez les contenus regardés plusieurs fois",
          "Désactivez la lecture automatique",
        ],
      },
      {
        title: "4. Nettoyer régulièrement ses données",
        content: "Chaque Go stocké dans le cloud émet 15g de CO₂/an. La moyenne française est de 50 Go inutiles.",
        tips: [
          "Supprimez les emails avec pièces jointes volumineuses",
          "Videz le dossier Téléchargements et la corbeille",
          "Triez vos photos et vidéos en cloud",
        ],
      },
      {
        title: "5. Privilégier le Wi-Fi à la 4G/5G",
        content: "La 4G/5G consomme 20x plus d'énergie que le Wi-Fi pour transférer la même quantité de données.",
        tips: [
          "Activez le Wi-Fi dès que disponible",
          "Désactivez les données mobiles à la maison",
          "Téléchargez les contenus en Wi-Fi avant de partir",
        ],
      },
      {
        title: "6. Régler la luminosité à 50%",
        content: "L'écran représente 30-50% de la consommation d'un smartphone. Réduire la luminosité économise 20%.",
        tips: [
          "Activez l'ajustement automatique",
          "Utilisez le mode sombre (économie de 15% sur écrans OLED)",
          "Activez le mode économie d'énergie",
        ],
      },
      {
        title: "7. Acheter reconditionné",
        content:
          "Un appareil reconditionné a un impact 75% inférieur au neuf. En France, 2,5 millions d'appareils reconditionnés vendus en 2024.",
        tips: [
          "Vérifiez la garantie (minimum 6 mois)",
          "Privilégiez les acteurs certifiés (BackMarket, Recommerce, etc.)",
          "Consultez l'indice de réparabilité avant l'achat",
        ],
      },
    ],
    resources: [
      "Calculateur d'empreinte : /outils#calculateur",
      "Guide du reconditionné : /ressources",
      "Points de collecte : /recyclage",
    ],
  },
  "achat-responsable": {
    title: "Guide d'achat responsable",
    subtitle: "Comment choisir un appareil avec moins d'impact",
    target: "Citoyens",
    duration: "10 minutes de lecture",
    impact: "75% d'économie d'impact vs un appareil neuf",
    image: "/comparison-chart-new-vs-refurbished-vs-repaire.webp",
    date: "5 Mars 2025",
    sections: [
      {
        title: "Évaluer le besoin réel",
        content:
          "80% des fonctionnalités d'un smartphone ne sont jamais utilisées. Définir son besoin évite le suréquipement.",
        tips: [
          "Listez vos usages principaux (appels, navigation, photos...)",
          "Évitez les modèles flagship si vous n'utilisez pas les fonctions avancées",
          "Privilégiez un modèle adapté plutôt que le plus puissant",
        ],
      },
      {
        title: "Prioriser le reconditionné",
        content:
          "Impact réduit de 75%, prix -30 à -70%, garantie légale de conformité. Le marché représente 2,5 milliards € en 2024.",
        tips: [
          "Grade A : comme neuf, très légers défauts esthétiques",
          "Grade B : bon état, quelques rayures visibles",
          "Grade C : état correct, usure visible mais 100% fonctionnel",
        ],
      },
      {
        title: "Vérifier l'indice de réparabilité",
        content:
          "Obligatoire en France depuis 2021. Note sur 10 indiquant la facilité de réparation (disponibilité pièces, documentation, prix).",
        tips: [
          "Visez minimum 7/10 pour un appareil durable",
          "Consultez sur quefaire.fr ou sur l'étiquette en magasin",
          "Critères : démontage, pièces détachées, prix des réparations",
        ],
      },
      {
        title: "Privilégier la durabilité",
        content: "Cherchez des appareils conçus pour durer : batterie remplaçable, mises à jour longues, robustesse.",
        tips: [
          "Fairphone : smartphone modulaire réparable à 100%",
          "Apple : support iOS pendant 5-6 ans",
          "Samsung : 4 ans de mises à jour Android garanties",
        ],
      },
      {
        title: "Comparer l'impact environnemental",
        content: "Certains fabricants communiquent l'empreinte carbone. Un smartphone moyen émet 50-80 kg CO₂.",
        tips: [
          "Cherchez les labels environnementaux (TCO, EPEAT, Blue Angel)",
          "Privilégiez les marques transparentes sur leur chaîne d'approvisionnement",
          "Évitez les emballages excessifs",
        ],
      },
    ],
    resources: [
      "Comparateur d'appareils : /outils",
      "Indice de réparabilité : quefaire.fr",
      "Acteurs du reconditionné : /recyclage",
    ],
  },
  "ecoconception-web": {
    title: "Écoconception web et logicielle",
    subtitle: "Bonnes pratiques pour développeurs responsables",
    target: "Développeurs",
    duration: "15 minutes de lecture",
    impact: "Sites 3-5x plus légers, temps de chargement -60%",
    image: "/clean-efficient-code-on-screen-with-green-energy-s.webp",
    date: "15 Mars 2025",
    sections: [
      {
        title: "Optimiser les algorithmes",
        content: "Un algorithme inefficace peut consommer 100x plus d'énergie. La complexité compte : O(n) vs O(n²).",
        tips: [
          "Utilisez les structures de données adaptées (Map vs Array)",
          "Évitez les boucles imbriquées quand possible",
          "Préférez les méthodes natives (filter, map) aux boucles for",
          "Mettez en cache les résultats coûteux",
        ],
      },
      {
        title: "Choisir les bons langages",
        content: "C consomme 57x moins que Python. Pour le web : Rust, Go, Java, puis Node.js, PHP, Python.",
        tips: [
          "Frontend : JavaScript natif > frameworks lourds",
          "Backend : Rust, Go pour haute performance",
          "Évitez les dépendances npm inutiles (attention au poids)",
        ],
      },
      {
        title: "Minimiser les transferts de données",
        content: "Chaque Mo transféré émet 20g CO₂. Le site web moyen fait 2,5 Mo, l'optimal est < 500 Ko.",
        tips: [
          "Compressez les images (WebP, AVIF plutôt que JPG/PNG)",
          "Minifiez CSS, JS, HTML en production",
          "Activez la compression Gzip/Brotli",
          "Lazy loading pour images et vidéos",
        ],
      },
      {
        title: "Optimiser les médias",
        content: "Les images représentent 50% du poids des pages. Optimisation = gain immédiat.",
        tips: [
          "Format moderne : WebP (-30%), AVIF (-50% vs JPG)",
          "Responsive images avec srcset",
          "Dimensionnez correctement (pas de 4000px pour afficher 400px)",
          "Préférez SVG pour icônes et logos",
        ],
      },
      {
        title: "Utiliser un CDN efficace",
        content: "CDN réduit la distance données-utilisateur et permet la mise en cache distribuée.",
        tips: [
          "Cloudflare, Vercel Edge : datacenters mondiaux",
          "Cache-Control headers optimisés",
          "Invalidation de cache intelligente",
        ],
      },
      {
        title: "Optimiser la base de données",
        content: "Requêtes inefficaces = serveur surchargé = énergie gaspillée.",
        tips: [
          "Indexez les colonnes fréquemment filtrées",
          "Évitez SELECT * : ne récupérez que ce qui est nécessaire",
          "Utilisez la pagination plutôt que tout charger",
          "Mettez en cache les requêtes coûteuses (Redis)",
        ],
      },
      {
        title: "Machine Learning responsable",
        content: "Entraîner GPT-3 émet 500 tonnes CO₂. L'inférence représente 90% de l'impact sur la durée.",
        tips: [
          "Utilisez des modèles pré-entraînés quand possible",
          "Optimisez les hyperparamètres (early stopping)",
          "Quantization des modèles pour réduire la taille",
          "Edge computing : inférence locale plutôt que cloud",
        ],
      },
    ],
    resources: [
      "Checklist développeur : /developpement",
      "Outils de mesure : GreenFrame, EcoIndex",
      "Guides ADEME : ecoresponsable.numerique.gouv.fr",
    ],
  },
  "reparer-prolonger": {
    title: "Réparer et prolonger la vie de ses appareils",
    subtitle: "Gestes d'entretien et adresses utiles pour faire durer son matériel",
    target: "Citoyens",
    duration: "8 minutes de lecture",
    impact: "Réduction de 50% de l'impact écologique annuel",
    image: "/person-repairing-smartphone-with-tools.webp",
    date: "20 Mars 2025",
    sections: [
      {
        title: "1. Pourquoi réparer plutôt que changer ?",
        content:
          "La fabrication concentre 75% à 80% de l'impact environnemental d'un smartphone ou d'un ordinateur. Prolonger leur durée de vie est le geste écologique n°1.",
        tips: [
          "Doubler la durée de vie divise l'impact par 2",
          "Économie financière importante (réparer coûte moins cher que remplacer)",
          "Réduction drastique des déchets électroniques (DEEE)",
        ],
      },
      {
        title: "2. L'entretien préventif : la base",
        content: "Un matériel bien entretenu tombe moins souvent en panne et garde ses performances.",
        tips: [
          "Nettoyez ports de charge et grilles de ventilation (bombes air sec)",
          "Installez une coque et une protection d'écran de qualité",
          "Ne bouchez pas les aérations de votre ordinateur",
        ],
      },
      {
        title: "3. Préserver sa batterie",
        content: "La batterie est le composant d'usure principal. Quelques réflexes simples prolongent sa chimie.",
        tips: [
          "Maintenez la charge entre 20% et 80% le plus souvent possible",
          "Évitez les températures extrêmes (froid gel ou plein soleil)",
          "Privilégiez la charge lente (5W-10W) la nuit plutôt que la charge rapide",
        ],
      },
      {
        title: "4. Nettoyage logiciel",
        content: "Un appareil lent n'est pas forcément mort. Un bon nettoyage peut lui redonner une seconde jeunesse.",
        tips: [
          "Désinstallez les applications non utilisées",
          "Videz le cache et les fichiers temporaires",
          "Réinitialisez l'appareil (sauvegardez vos données avant !) si les lenteurs persistent",
        ],
      },
      {
        title: "5. Oser réparer soi-même",
        content: "Changer une batterie ou un écran est souvent accessible avec un peu de patience et les bons outils.",
        tips: [
          "Consultez les tutoriels pas à pas sur iFixit.com",
          "Utilisez des kits d'outils adaptés (tournevis précision, ventouse)",
          "Organisez votre plan de travail (vis minuscules !)",
        ],
      },
      {
        title: "6. Faire appel aux experts",
        content: "Si la réparation vous semble trop complexe, de nombreuses solutions existent.",
        tips: [
          "Les Repair Cafés : réparer gratuitement et apprendre avec des bénévoles",
          "Le label 'Répar'Acteurs' pour trouver un artisan de confiance",
          "Le Bonus Réparation : aide de l'État déduite directement de la facture",
        ],
      },
    ],
    resources: [
      "Tutoriels : iFixit.com",
      "Annuaire : annuaire-reparation.fr",
      "Bonus : ecosystem.eco",
    ],
  },
  "green-it-entreprise": {
    title: "Démarche Green IT en entreprise",
    subtitle: "Plan d'action complet pour une stratégie numérique responsable",
    target: "Entreprises",
    duration: "20 minutes de lecture",
    impact: "Réduction de 40% à 60% de l'empreinte carbone IT",
    image: "/images/fiches/green-it-entreprise.webp",
    date: "25 Mars 2025",
    sections: [
      {
        title: "1. Mesurer pour agir : le diagnostic initial",
        content: "On ne pilote que ce que l'on mesure. Commencez par réaliser un inventaire précis et un bilan carbone de votre parc informatique.",
        tips: [
          "Réalisez un inventaire matériel exhaustif (postes, écrans, serveurs, smartphones)",
          "Calculez l'empreinte carbone via des outils (Greenly, EcoLearn, WeGreenIT)",
          "Identifiez les postes les plus énergivores (souvent le parc utilisateur et le cloud)",
        ],
      },
      {
        title: "2. Une politique d'achats responsables",
        content: "L'impact se joue dès l'achat. Privilégiez le matériel durable, réparable et si possible reconditionné.",
        tips: [
          "Intégrez des critères environnementaux (TCO, EPEAT) dans les appels d'offres",
          "Achetez reconditionné pour les flottes mobiles (impact réduit de 80%)",
          "Louez plutôt d'achetez pour favoriser l'économie de la fonctionnalité (Device as a Service)",
        ],
      },
      {
        title: "3. Allonger la durée de vie du matériel",
        content: "Passer de 3 à 5 ans d'usage pour un ordinateur professionnel réduit son empreinte annuelle de 40%.",
        tips: [
          "Boostez les PC lents (ajout de RAM, passage au SSD) plutôt que de les remplacer",
          "Assurez une maintenance préventive régulière (dépoussiérage des unités centrales)",
          "Gérez un stock tampon pour les réparations internes",
        ],
      },
      {
        title: "4. Sobriété des usages et sensibilisation",
        content: "La technologie n'est rien sans les hommes. Formez vos collaborateurs aux bonnes pratiques.",
        tips: [
          "Organisez des ateliers 'Fresque du Numérique' pour sensibiliser",
          "Encouragez les réunions audio plutôt que vidéo (consommation ÷ 20)",
          "Mettez en place une politique d'extinction automatique des postes la nuit",
        ],
      },
      {
        title: "5. Rationaliser le Cloud et les données",
        content: "Le stockage et les services cloud sont une source majeure de consommation énergétique invisible.",
        tips: [
          "Définissez des règles de rétention pour les e-mails et fichiers",
          "Favorisez le stockage 'froid' (bande, disque) pour les archives",
          "Éteignez les environnements de test/recette le week-end (FinOps)",
        ],
      },
      {
        title: "6. Gérer la fin de vie (3R)",
        content: "Rien ne doit finir à la poubelle. Visez le Réemploi, la Réutilisation, puis le Recyclage.",
        tips: [
          "Proposez le rachat du matériel aux salariés ou faites des dons à des associations",
          "Travaillez avec des brokers certifiés pour le reconditionnement",
          "Assurez le recyclage aux normes DEEE pour le matériel non récupérable",
        ],
      },
    ],
    resources: [
      "Institut du Numérique Responsable (INR) : label-nr.fr",
      "Club Green IT : greenit.fr",
      "Référentiel : gr491.org",
    ],
  },
  "recyclage-mode-emploi": {
    title: "Mode d'emploi du recyclage électronique",
    subtitle: "Où et comment recycler vos appareils en toute responsabilité",
    target: "Tous publics",
    duration: "5 minutes de lecture",
    impact: "Taux de recyclage de 85% des matériaux",
    image: "/images/recycling-electronics.webp",
    date: "30 Mars 2025",
    sections: [
      {
        title: "1. Pourquoi recycler ses appareils électroniques ?",
        content:
          "Un smartphone contient 70 matériaux différents dont des métaux rares (or, argent, cuivre, terres rares). Le recyclage permet de les récupérer et d'éviter la pollution.",
        tips: [
          "Évite 20 kg de CO₂ par appareil recyclé correctement",
          "Récupère jusqu'à 85% des matériaux pour fabriquer de nouveaux produits",
          "Empêche les substances toxiques (plomb, mercure) de polluer les sols",
        ],
      },
      {
        title: "2. Quels appareils peuvent être recyclés ?",
        content: "Tout équipement électrique ou électronique dispose du logo 'poubelle barrée' et DOIT être recyclé.",
        tips: [
          "Petits appareils : smartphones, tablettes, claviers, souris, câbles",
          "Gros appareils : ordinateurs, écrans, imprimantes, consoles",
          "Même cassés ou hors d'usage, ils sont recyclables !",
        ],
      },
      {
        title: "3. Où déposer vos appareils ?",
        content: "Plusieurs solutions gratuites et légales s'offrent à vous, partout en France.",
        tips: [
          "Déchetteries : toutes acceptent les DEEE gratuitement",
          "Magasins (obligation 1 pour 1) : reprise gratuite à l'achat d'un équivalent",
          "Points de collecte Ecosystem : 15 000 bornes en France (carte sur ecosystem.eco)",
        ],
      },
      {
        title: "4. Préparer son appareil avant recyclage",
        content: "Quelques gestes simples pour protéger vos données et faciliter le traitement.",
        tips: [
          "Sauvegardez vos données importantes ailleurs",
          "Réinitialisez l'appareil aux paramètres d'usine (effacement complet)",
          "Retirez la carte SIM et la carte mémoire",
        ],
      },
      {
        title: "5. Le parcours de recyclage",
        content: "Après la collecte, les appareils suivent un processus de valorisation strict et contrôlé.",
        tips: [
          "Tri : séparation par type (écrans, ordinateurs, petits appareils)",
          "Démantèlement : extraction manuelle des composants dangereux",
          "Broyage et séparation : récupération des métaux, plastiques et terres rares",
        ],
      },
      {
        title: "6. Attention aux filières illégales",
        content: "Certains collecteurs peu scrupuleux exportent vers l'Afrique ou l'Asie sans traiter correctement les déchets.",
        tips: [
          "Évitez les collecteurs non certifiés qui proposent de 'racheter' vos vieux appareils",
          "Privilégiez les éco-organismes agréés (Ecosystem, Ecologic)",
          "En cas de doute, déposez en déchetterie municipale",
        ],
      },
    ],
    resources: [
      "Carte des points : ecosystem.eco/fr/localiser",
      "Guide ADEME : ademe.fr",
      "Annuaire recyclage : jerecyclemesdeee.fr",
    ],
  },
  "datacenters-verts": {
    title: "Datacenters et cloud responsable",
    subtitle: "Choisir ses hébergeurs et optimiser ses infrastructures",
    target: "DSI & Développeurs",
    duration: "10 minutes de lecture",
    impact: "Réduction de 30% à 50% des émissions liées à l'hébergement",
    image: "/modern-green-datacenter-with-solar-panels.webp",
    date: "5 Avril 2025",
    sections: [
      {
        title: "1. Les 3 critères pour choisir un hébergeur vert",
        content: " Ne vous fiez pas seulement au marketing. Exigez des chiffres précis.",
        tips: [
          "Le PUE (Power Usage Effectiveness) : visez un indice inférieur à 1.3 (Moyenne 1.6)",
          "Le mix énergétique : privilégiez les énergies renouvelables et bas carbone (France = 50g CO2/kWh vs Allemagne = 350g)",
          "Le Water Usage Effectiveness (WUE) : demandez la consommation d'eau pour le refroidissement",
        ],
      },
      {
        title: "2. Adapter l'architecture logicielle",
        content: "Un code optimisé consomme moins de ressources serveur.",
        tips: [
          "Privilégiez les architectures Serverless ou FaaS (Function as a Service) pour ne consommer que lors de l'exécution",
          "Adaptez la taille des instances (Right-sizing) à la charge réelle",
          "Utilisez la mise en cache (CDN, Redis) pour limiter les requêtes en base de données",
        ],
      },
      {
        title: "3. La gestion responsable des données",
        content: "Stocker des données inutiles a un coût écologique permanent.",
        tips: [
          "Mettez en place des politiques de rétention (suppression automatique après X temps)",
          "Utilisez le stockage 'froid' (Glacier, Archive) pour les données peu consultées",
          "Compressez les images et les vidéos à la source",
        ],
      },
      {
        title: "4. Exemples d'innovations à surveiller",
        content: "Certains acteurs repensent totalement le concept de datacenter.",
        tips: [
          "Qarnot Computing : des radiateurs-serveurs qui chauffent gratuitement les habitations",
          "OVHcloud : refroidissement liquide (watercooling) industriel depuis 2003",
          "Scaleway : datacenters sans climatisation (adiabatic cooling)",
        ],
      },
      {
        title: "5. FinOps et GreenOps : l'alliance gagnante",
        content: "Réduire la facture cloud revient souvent à réduire l'empreinte carbone.",
        tips: [
          "Éteignez les environnements de staging (recette) la nuit et le week-end",
          "Utilisez des instances 'Spot' ou 'Preemptible' pour les calculs non critiques",
          "Monitorez votre empreinte carbone cloud (outils cloud native ou tiers)",
        ],
      },
    ],
    resources: [
      "Simulateur PUE : /datacenters",
      "Cloud Carbon Footprint : cloudcarbonfootprint.org",
      "Comparatif The Green Web Foundation : thegreenwebfoundation.org",
    ],
  },
  "collectivites-action": {
    title: "Plan d'action pour les collectivités",
    subtitle: "Politique numérique responsable territoriale et application de la loi REEN",
    target: "Élus & Agents territoriaux",
    duration: "15 minutes de lecture",
    impact: "Conformité légale et exemplarité publique",
    image: "/city-hall-with-sustainable-technology-infrastructu.webp",
    date: "12 Avril 2025",
    sections: [
      {
        title: "1. Le cadre légal : Comprendre la loi REEN",
        content: "La loi 'Réduire l'Empreinte Environnementale du Numérique' (REEN) de 2021 impose aux collectivités de +50 000 habitants d'avoir une stratégie numérique responsable.",
        tips: [
          "Objectif 1 : Faire prendre conscience de l'impact environnemental",
          "Objectif 2 : Limiter le renouvellement des terminaux",
          "Objectif 3 : Favoriser des usages numériques écologiquement vertueux",
        ],
      },
      {
        title: "2. Commande publique responsable",
        content: "Le levier principal des collectivités est l'achat. Intégrez l'économie circulaire dans vos marchés publics.",
        tips: [
          "Imposez une part de matériel reconditionné (ex: 20% des PC, 100% des téléphones)",
          "Utilisez des critères d'attribution pondérés sur l'indice de réparabilité",
          "Privilégiez les labels TCO Certified ou EPEAT Gold",
        ],
      },
      {
        title: "3. Gestion de la fin de vie et inclusion",
        content: "Vos anciens ordinateurs sont une ressource pour le territoire, pas un déchet.",
        tips: [
          "Donnez le matériel réformé à des associations locales pour réduire la fracture numérique",
          "Organisez des collectes de DEEE citoyens dans les mairies ou écoles",
          "Cartographiez les acteurs du réemploi (Ressourceries, FabLabs) sur votre territoire",
        ],
      },
      {
        title: "4. Éco-conception des services publics numériques",
        content: "Les sites et applications de la ville doivent être accessibles et légers.",
        tips: [
          "Auditez l'accessibilité (RGAA) et l'éco-conception (RGESN) de vos portails",
          "Simplifiez les parcours usagers (moins de clics = moins d'énergie)",
          "Formez les webmestres et communicants aux bonnes pratiques (images légères, vidéos limitées)",
        ],
      },
      {
        title: "5. Sensibiliser les agents et les citoyens",
        content: "La transformation passe par l'acculturation de tous les acteurs du territoire.",
        tips: [
          "Intégrez un module 'Numérique Responsable' dans le plan de formation des agents",
          "Organisez une 'Cyber CleanUp Week' annuelle dans les services",
          "Communiquez auprès des citoyens sur les gestes simples (box internet, streaming, 4G/5G)",
        ],
      },
      {
        title: "6. Mutualisation et Sobriété des infrastructures",
        content: "Évitez la multiplication des petits serveurs inefficaces dans les bâtiments publics.",
        tips: [
          "Mutualisez les datacenters entre communes ou intercommunalités",
          "Optez pour l'extinction des équipements (wifi, écrans d'accueil) la nuit",
          "Rénovez les salles serveurs existantes pour améliorer leur efficacité (Urbanisation, Confinement)",
        ],
      },
    ],
    resources: [
      "Texte de loi REEN : legifrance.gouv.fr",
      "Guide Achat Public Numérique Responsable : interministeriel",
      "Mission Interministérielle Numérique Éco-responsable : ecoresponsable.numerique.gouv.fr",
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(sheets).map((id) => ({
    id: id,
  }))
}

export default async function SheetDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const sheet = sheets[id]

  if (!sheet) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Card className="p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">Fiche non trouvée</h2>
          <Link href="/fiches-pratiques">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour aux fiches
            </Button>
          </Link>
        </Card>
      </div>
    )
  }

  return <SheetContent sheet={{ ...sheet, id }} />
}
