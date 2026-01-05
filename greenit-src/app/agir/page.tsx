"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { RelatedLinks } from "@/components/related-links"
import {
  User,
  Building2,
  Landmark,
  Download,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Lightbulb,
  Clock,
  Zap,
  Wifi,
} from "lucide-react"

const audiences = [
  {
    id: "citoyens",
    title: "Citoyens",
    icon: User,
    color: "emerald",
    description: "Gestes simples pour réduire votre empreinte numérique au quotidien",
  },
  {
    id: "entreprises",
    title: "Entreprises",
    icon: Building2,
    color: "blue",
    description: "Stratégies Green IT pour votre organisation",
  },
  {
    id: "collectivites",
    title: "Collectivités",
    icon: Landmark,
    color: "teal",
    description: "Politiques publiques pour un numérique responsable",
  },
]

const citizenActions = [
  {
    category: "Achat",
    actions: [
      "Privilégier les appareils reconditionnés (impact réduit de 75%)",
      "Choisir des appareils réparables et évolutifs",
      "Vérifier les indices de réparabilité avant l'achat",
      "Éviter le suréquipement : n'achetez que ce dont vous avez besoin",
    ],
  },
  {
    category: "Usage",
    actions: [
      "Garder ses appareils le plus longtemps possible (minimum 5 ans)",
      "Éteindre complètement ses appareils la nuit",
      "Désactiver les notifications inutiles",
      "Limiter le streaming vidéo en haute définition",
      "Nettoyer régulièrement sa boîte mail et le cloud",
    ],
  },
  {
    category: "Gestion de l'énergie",
    actions: [
      "Activer le mode économie d'énergie sur tous vos appareils",
      "Débrancher les chargeurs quand ils ne sont pas utilisés",
      "Utiliser une multiprise avec interrupteur pour couper complètement l'alimentation",
      "Régler la luminosité de l'écran à 50% maximum",
      "Désactiver le Bluetooth et le Wi-Fi quand vous ne les utilisez pas",
      "Privilégier le Wi-Fi à la 4G/5G (consomme 20x moins d'énergie)",
      "Fermer les applications en arrière-plan",
    ],
  },
  {
    category: "Sobriété numérique",
    actions: [
      "Limiter le streaming vidéo : préférer 720p à 4K (économie de 80% de données)",
      "Télécharger plutôt que streamer pour les contenus regardés plusieurs fois",
      "Désactiver la lecture automatique des vidéos",
      "Supprimer les emails avec pièces jointes volumineuses",
      "Vider régulièrement le cache et les téléchargements",
      "Limiter le nombre d'onglets ouverts simultanément",
      "Utiliser des moteurs de recherche éco-responsables (Ecosia, Lilo)",
    ],
  },
  {
    category: "Réparation",
    actions: [
      "Faire réparer plutôt que remplacer",
      "Apprendre les gestes de maintenance de base",
      "Utiliser les Repair Cafés et ressourceries locales",
      "Remplacer la batterie plutôt que l'appareil entier",
    ],
  },
  {
    category: "Fin de vie",
    actions: [
      "Donner ou revendre les appareils fonctionnels",
      "Recycler dans les points de collecte agréés",
      "Ne jamais jeter à la poubelle",
      "Effacer ses données avant de donner un appareil",
    ],
  },
]

const businessActions = [
  {
    category: "Stratégie",
    actions: [
      "Définir une politique Green IT avec objectifs mesurables",
      "Nommer un responsable numérique responsable",
      "Former les équipes aux bonnes pratiques",
      "Intégrer des critères environnementaux dans les achats",
    ],
  },
  {
    category: "Équipements",
    actions: [
      "Allonger la durée de vie du parc informatique (5-7 ans)",
      "Privilégier le reconditionné pour les renouvellements",
      "Mutualiser les équipements (imprimantes, serveurs)",
      "Optimiser le dimensionnement des serveurs",
    ],
  },
  {
    category: "Gestion énergétique",
    actions: [
      "Programmer l'extinction automatique des postes de travail hors horaires",
      "Mettre en veille les serveurs non critiques la nuit et le week-end",
      "Optimiser la climatisation des salles serveurs (température 24-26°C)",
      "Installer des capteurs de présence pour l'éclairage et la climatisation",
      "Mesurer et monitorer la consommation énergétique en temps réel",
      "Planifier les tâches intensives pendant les heures creuses",
    ],
  },
  {
    category: "Développement",
    actions: [
      "Pratiquer l'écoconception web et logicielle",
      "Optimiser les bases de données et requêtes",
      "Réduire le poids des pages web et applications",
      "Mesurer et monitorer la consommation énergétique",
    ],
  },
  {
    category: "Cloud & Data",
    actions: [
      "Choisir des hébergeurs avec énergies renouvelables",
      "Nettoyer régulièrement les données obsolètes",
      "Optimiser le stockage et la sauvegarde",
      "Privilégier les datacenters locaux (France/UE)",
    ],
  },
]

const collectivityActions = [
  {
    category: "Politique publique",
    actions: [
      "Adopter une charte numérique responsable",
      "Intégrer le Green IT dans les marchés publics",
      "Soutenir les filières de réemploi locales",
      "Sensibiliser les citoyens et agents",
    ],
  },
  {
    category: "Infrastructure",
    actions: [
      "Multiplier les points de collecte de DEEE",
      "Soutenir les ressourceries et Repair Cafés",
      "Créer des partenariats avec Emmaüs, Envie, etc.",
      "Faciliter l'accès au reconditionné pour tous",
    ],
  },
  {
    category: "Éducation",
    actions: [
      "Former les agents publics au numérique responsable",
      "Intégrer le Green IT dans les programmes scolaires",
      "Organiser des événements de sensibilisation",
      "Créer des guides pratiques pour les citoyens",
    ],
  },
  {
    category: "Exemplarité",
    actions: [
      "Allonger la durée de vie du parc informatique public",
      "Donner une seconde vie aux équipements réformés",
      "Mesurer et publier l'empreinte numérique",
      "Partager les bonnes pratiques avec d'autres collectivités",
    ],
  },
]

const practicalTips = [
  {
    title: "Astuces horaires",
    icon: Clock,
    color: "blue",
    tips: [
      "Planifiez vos téléchargements volumineux la nuit (heures creuses)",
      "Évitez le streaming HD entre 18h-20h (pic de consommation électrique)",
      "Rechargez vos appareils pendant les heures creuses (22h-6h)",
      "Programmez les sauvegardes cloud en dehors des heures de bureau",
    ],
  },
  {
    title: "Optimisation Wi-Fi",
    icon: Wifi,
    color: "teal",
    tips: [
      "Éteignez votre box internet la nuit (économie de 10€/an)",
      "Désactivez le Wi-Fi de la box si vous utilisez un câble Ethernet",
      "Placez votre box dans un endroit central pour optimiser la couverture",
      "Utilisez le Wi-Fi plutôt que la 4G/5G (20x moins énergivore)",
    ],
  },
  {
    title: "Gestes quotidiens",
    icon: Lightbulb,
    color: "emerald",
    tips: [
      "Fermez les onglets inutilisés (chaque onglet consomme de la RAM)",
      "Videz votre corbeille d'emails régulièrement",
      "Désabonnez-vous des newsletters non lues",
      "Utilisez des favoris plutôt que de rechercher à chaque fois",
      "Téléchargez vos playlists plutôt que de streamer en continu",
    ],
  },
  {
    title: "Paramètres d'économie",
    icon: Zap,
    color: "amber",
    tips: [
      "Activez le mode sombre (économie de 30% de batterie sur écran OLED)",
      "Réduisez le délai de mise en veille à 2-5 minutes",
      "Désactivez les animations et effets visuels inutiles",
      "Limitez les synchronisations automatiques au Wi-Fi uniquement",
    ],
  },
]

export default function AgirPage() {
  const [selectedAudience, setSelectedAudience] = useState("citoyens")
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})

  const toggleCheck = (id: string) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const getActionsForAudience = () => {
    switch (selectedAudience) {
      case "citoyens":
        return citizenActions
      case "entreprises":
        return businessActions
      case "collectivites":
        return collectivityActions
      default:
        return citizenActions
    }
  }

  const actions = getActionsForAudience()
  const totalActions = actions.reduce((sum, cat) => sum + cat.actions.length, 0)
  const checkedCount = Object.values(checkedItems).filter(Boolean).length
  const progress = Math.round((checkedCount / totalActions) * 100)

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 lg:text-5xl">
            Comment agir pour un numérique responsable
          </h1>
          <p className="text-pretty text-lg text-slate-600 dark:text-slate-300 lg:text-xl">
            Des actions concrètes et efficaces adaptées à votre situation : citoyen, entreprise ou collectivité.
          </p>
        </div>
      </section>

      {/* Audience Selection */}
      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-slate-900 dark:text-slate-100">Je suis...</h2>
          <div className="mb-12 grid gap-6 md:grid-cols-3">
            {audiences.map((audience) => {
              const Icon = audience.icon
              const isSelected = selectedAudience === audience.id
              return (
                <Card
                  key={audience.id}
                  className={`group cursor-pointer border-2 p-6 transition-all hover:shadow-lg ${isSelected
                    ? `border-${audience.color}-500 bg-${audience.color}-50 dark:bg-${audience.color}-900/20 dark:border-${audience.color}-400`
                    : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-600"
                    }`}
                  onClick={() => {
                    setSelectedAudience(audience.id)
                    setCheckedItems({})
                  }}
                >
                  <div
                    className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-colors ${isSelected
                      ? `bg-${audience.color}-600 text-white`
                      : `bg-${audience.color}-100 text-${audience.color}-700 group-hover:bg-${audience.color}-600 group-hover:text-white`
                      }`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-slate-100">{audience.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{audience.description}</p>
                </Card>
              )
            })}
          </div>

          {/* Progress Bar */}
          {checkedCount > 0 && (
            <Card className="mb-8 border-2 border-emerald-500 bg-emerald-50 p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-emerald-700" />
                  <span className="font-semibold text-slate-900 dark:text-slate-100">
                    Votre progression : {checkedCount} / {totalActions} actions
                  </span>
                </div>
                <span className="text-2xl font-bold text-emerald-700">{progress}%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-emerald-200">
                <div
                  className="h-full rounded-full bg-emerald-600 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </Card>
          )}

          {/* Action Checklist */}
          <div className="space-y-8">
            {actions.map((category, catIndex) => (
              <Card key={catIndex} className="border-2 border-border bg-card text-card-foreground p-6 lg:p-8">
                <h3 className="mb-6 text-2xl font-bold">{category.category}</h3>
                <div className="space-y-4">
                  {category.actions.map((action, actionIndex) => {
                    const id = `${selectedAudience}-${catIndex}-${actionIndex}`
                    const isChecked = checkedItems[id] || false
                    return (
                      <div
                        key={actionIndex}
                        className={`flex items-start gap-4 rounded-lg border-2 p-4 transition-all ${isChecked
                          ? "border-primary bg-primary/10"
                          : "border-input bg-background/50 hover:border-accent"
                          }`}
                      >
                        <Checkbox
                          id={id}
                          checked={isChecked}
                          onCheckedChange={() => toggleCheck(id)}
                          className="mt-1"
                        />
                        <label
                          htmlFor={id}
                          className={`flex-1 cursor-pointer font-medium leading-relaxed ${isChecked ? "line-through text-muted-foreground" : "text-foreground"}`}
                        >
                          {action}
                        </label>
                      </div>
                    )
                  })}
                </div>
              </Card>
            ))}
          </div>

          {/* Practical Tips Section */}
          <div className="space-y-8">
            {practicalTips.map((tip, tipIndex) => (
              <Card key={tipIndex} className="border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 lg:p-8">
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-${tip.color}-600`}
                  >
                    <tip.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-slate-100">{tip.title}</h3>
                    <ul className="list-disc pl-6 text-sm text-slate-600 dark:text-slate-400">
                      {tip.tips.map((tipItem, itemIndex) => (
                        <li key={itemIndex}>{tipItem}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Download Section */}
          <Card className="mt-8 border-2 border-blue-500 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800 p-8">
            <div className="flex flex-col items-center gap-4 text-center lg:flex-row lg:text-left">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-600">
                <Download className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-slate-100">Télécharger le guide complet</h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Retrouvez toutes ces actions dans un guide PDF pratique à imprimer ou partager.
                </p>
              </div>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Download className="mr-2 h-5 w-5" />
                Télécharger le PDF
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Related Links Section */}
      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <RelatedLinks
            title="Aller plus loin"
            links={[
              {
                href: "/outils",
                label: "Outils interactifs",
                description: "Utilisez notre calculateur d'empreinte carbone et notre simulateur de sobriété",
              },
              {
                href: "/recyclage",
                label: "Recyclage & Réparation",
                description: "Trouvez les points de collecte et ateliers de réparation près de chez vous",
              },
              {
                href: "/developpement",
                label: "Développement éco-responsable",
                description: "Pour les développeurs : bonnes pratiques pour créer des applications plus vertes",
              },
            ]}
          />
        </div>
      </section>

      {/* Resources Section */}
      <section className="bg-slate-50 dark:bg-slate-900 px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 dark:text-slate-100 lg:text-4xl">Ressources et partenaires</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6">
              <h3 className="mb-3 text-lg font-bold text-slate-900 dark:text-slate-100">ADEME</h3>
              <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
                Guides pratiques et données sur l'impact environnemental du numérique
              </p>
              <a
                href="https://www.ademe.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300"
              >
                Visiter le site
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Card>

            <Card className="border-2 border-slate-200 p-6">
              <h3 className="mb-3 text-lg font-bold text-slate-900">GreenIT.fr</h3>
              <p className="mb-4 text-sm text-slate-600">
                Communauté et ressources sur l'écoconception et le numérique responsable
              </p>
              <a
                href="https://www.greenit.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-800"
              >
                Visiter le site
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Card>

            <Card className="border-2 border-slate-200 p-6">
              <h3 className="mb-3 text-lg font-bold text-slate-900">Ecosystem</h3>
              <p className="mb-4 text-sm text-slate-600">
                Éco-organisme pour le recyclage des équipements électriques et électroniques
              </p>
              <a
                href="https://www.ecosystem.eco"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-800"
              >
                Visiter le site
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Card>

            <Card className="border-2 border-slate-200 p-6">
              <h3 className="mb-3 text-lg font-bold text-slate-900">Réseau des Ressourceries</h3>
              <p className="mb-4 text-sm text-slate-600">
                Trouver une ressourcerie près de chez vous pour donner une seconde vie à vos appareils
              </p>
              <a
                href="https://www.ressourcerie.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-800"
              >
                Visiter le site
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Card>

            <Card className="border-2 border-slate-200 p-6">
              <h3 className="mb-3 text-lg font-bold text-slate-900">Envie</h3>
              <p className="mb-4 text-sm text-slate-600">
                Entreprise solidaire spécialisée dans le reconditionnement d'équipements électroménagers
              </p>
              <a
                href="https://www.envie.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-800"
              >
                Visiter le site
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Card>

            <Card className="border-2 border-slate-200 p-6">
              <h3 className="mb-3 text-lg font-bold text-slate-900">Zero Waste France</h3>
              <p className="mb-4 text-sm text-slate-600">
                Association pour la réduction des déchets et l'économie circulaire
              </p>
              <a
                href="https://www.zerowastefrance.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-800"
              >
                Visiter le site
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-slate-100 lg:text-4xl">Prêt à calculer votre impact ?</h2>
          <p className="mb-8 text-lg text-slate-600 dark:text-slate-300">
            Utilisez notre calculateur d'empreinte numérique pour mesurer votre impact et suivre vos progrès.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Calculer mon empreinte
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Voir les points de collecte
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
