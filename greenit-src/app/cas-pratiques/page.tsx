"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import {
  Smartphone,
  Laptop,
  Server,
  TrendingDown,
  Wrench,
  ShoppingCart,
  Recycle,
  Plane,
  Car,
  TreePine,
} from "lucide-react"
import { ComparisonChart } from "@/components/comparison-chart"
import { ScaleComparison } from "@/components/scale-comparison"
import { RelatedLinks } from "@/components/related-links"

const caseStudies = [
  {
    id: "smartphone",
    title: "Le Smartphone",
    icon: Smartphone,
    color: "emerald",
    description: "L'appareil le plus personnel et le plus renouvelé",
    stats: {
      co2: "50 kg",
      water: "12 000 L",
      lifespan: "2-3 ans",
      metals: "50+",
    },
  },
  {
    id: "laptop",
    title: "L'Ordinateur Portable",
    icon: Laptop,
    color: "blue",
    description: "Un outil de travail essentiel mais énergivore à produire",
    stats: {
      co2: "156 kg",
      water: "20 000 L",
      lifespan: "4-5 ans",
      metals: "60+",
    },
  },
  {
    id: "datacenter",
    title: "Le Datacenter",
    icon: Server,
    color: "teal",
    description: "L'infrastructure invisible qui fait tourner le cloud",
    stats: {
      co2: "Plusieurs tonnes",
      water: "Millions de L",
      lifespan: "10-15 ans",
      servers: "1000+",
    },
  },
]

export default function CasPratiquesPage() {
  const [selectedCase, setSelectedCase] = useState("smartphone")
  const [lifespanYears, setLifespanYears] = useState([3])

  // Calculate impact reduction based on lifespan
  const calculateImpactReduction = (years: number) => {
    const baseYears = 2
    const reduction = ((years - baseYears) / years) * 100
    return Math.round(reduction)
  }

  const impactReduction = calculateImpactReduction(lifespanYears[0])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-emerald-50 to-blue-50 px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
            Cas pratiques et études détaillées
          </h1>
          <p className="text-pretty text-lg text-slate-600 lg:text-xl">
            Explorez l'impact environnemental concret de vos appareils du quotidien et découvrez comment faire les bons
            choix.
          </p>
        </div>
      </section>

      {/* Case Study Selection */}
      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-6 md:grid-cols-3">
            {caseStudies.map((study) => {
              const Icon = study.icon
              const isSelected = selectedCase === study.id
              return (
                <Card
                  key={study.id}
                  className={`group cursor-pointer border-2 p-6 transition-all hover:shadow-lg ${
                    isSelected
                      ? `border-${study.color}-500 bg-${study.color}-50`
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                  onClick={() => setSelectedCase(study.id)}
                >
                  <div
                    className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-colors ${
                      isSelected
                        ? `bg-${study.color}-600 text-white`
                        : `bg-${study.color}-100 text-${study.color}-700 group-hover:bg-${study.color}-600 group-hover:text-white`
                    }`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-slate-900">{study.title}</h3>
                  <p className="text-sm text-slate-600">{study.description}</p>
                </Card>
              )
            })}
          </div>

          {/* Smartphone Case Study */}
          {selectedCase === "smartphone" && (
            <div className="space-y-8">
              <Card className="border-2 border-emerald-500 p-8 lg:p-12">
                <div className="mb-8 flex items-start gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-emerald-100">
                    <Smartphone className="h-8 w-8 text-emerald-700" />
                  </div>
                  <div>
                    <h2 className="mb-2 text-3xl font-bold text-slate-900">Le Smartphone</h2>
                    <p className="text-lg text-slate-600">
                      Un concentré de technologie dans votre poche, mais à quel prix pour la planète ?
                    </p>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-xl bg-emerald-50 p-4">
                    <div className="mb-1 text-2xl font-bold text-emerald-700">50 kg</div>
                    <div className="text-sm text-slate-700">CO₂ émis lors de la fabrication</div>
                  </div>
                  <div className="rounded-xl bg-emerald-50 p-4">
                    <div className="mb-1 text-2xl font-bold text-emerald-700">12 000 L</div>
                    <div className="text-sm text-slate-700">d'eau consommée</div>
                  </div>
                  <div className="rounded-xl bg-emerald-50 p-4">
                    <div className="mb-1 text-2xl font-bold text-emerald-700">50+</div>
                    <div className="text-sm text-slate-700">métaux différents</div>
                  </div>
                  <div className="rounded-xl bg-emerald-50 p-4">
                    <div className="mb-1 text-2xl font-bold text-emerald-700">2-3 ans</div>
                    <div className="text-sm text-slate-700">durée de vie moyenne</div>
                  </div>
                </div>

                {/* Key Facts */}
                <div className="space-y-4">
                  <div className="rounded-xl bg-slate-50 p-6">
                    <h3 className="mb-3 font-semibold text-slate-900">Le saviez-vous ?</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex gap-2">
                        <span className="text-emerald-600">•</span>
                        <span>
                          <strong>75% de l'impact environnemental</strong> d'un smartphone provient de sa fabrication,
                          pas de son utilisation
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-emerald-600">•</span>
                        <span>
                          Il faut extraire <strong>70 kg de matières premières</strong> pour fabriquer un smartphone de
                          150g
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-emerald-600">•</span>
                        <span>
                          En France, <strong>88% des smartphones</strong> sont remplacés alors qu'ils fonctionnent
                          encore
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-emerald-600">•</span>
                        <span>
                          Garder son smartphone <strong>1 an de plus</strong> réduit son impact annuel de 25%
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <ScaleComparison
                type="co2"
                value={50}
                unit="kg CO₂"
                comparisons={[
                  {
                    icon: Plane,
                    label: "Vol en avion",
                    equivalent: "Paris-Marseille",
                    description: "Aller simple pour 1 passager",
                  },
                  {
                    icon: Car,
                    label: "Trajet en voiture",
                    equivalent: "300 km",
                    description: "En voiture thermique essence",
                  },
                  {
                    icon: TreePine,
                    label: "Compensation",
                    equivalent: "2,5 arbres",
                    description: "Nécessaires pour absorber le CO₂ en 1 an",
                  },
                ]}
              />

              <ComparisonChart
                title="Comparaison des choix d'achat"
                subtitle="Impact CO₂ selon votre décision"
                unit="kg CO₂"
                items={[
                  {
                    label: "Garder l'ancien (0 kg)",
                    value: 0,
                    color: "#10b981",
                    icon: Recycle,
                    description: "Le choix le plus écologique : pas de nouvel achat",
                  },
                  {
                    label: "Réparer l'ancien",
                    value: 5,
                    color: "#14b8a6",
                    icon: Wrench,
                    description: "Impact minimal : pièces de rechange uniquement",
                  },
                  {
                    label: "Acheter reconditionné",
                    value: 12,
                    color: "#3b82f6",
                    icon: Recycle,
                    description: "75% d'impact en moins qu'un neuf",
                  },
                  {
                    label: "Acheter neuf",
                    value: 50,
                    color: "#ef4444",
                    icon: ShoppingCart,
                    description: "Impact maximum : fabrication complète",
                  },
                ]}
              />

              {/* Repair vs Buy New */}
              <Card className="border-2 border-slate-200 p-8 lg:p-12">
                <h3 className="mb-6 text-2xl font-bold text-slate-900">Réparer ou racheter ?</h3>
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="rounded-xl border-2 border-emerald-500 bg-emerald-50 p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600">
                        <Wrench className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900">Réparer</h4>
                    </div>
                    <ul className="space-y-3 text-slate-700">
                      <li className="flex items-start gap-2">
                        <TrendingDown className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                        <span>
                          <strong>Impact réduit :</strong> Économise 50 kg de CO₂
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <TrendingDown className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                        <span>
                          <strong>Coût :</strong> 50-150€ selon la réparation
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <TrendingDown className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                        <span>
                          <strong>Durée :</strong> Prolonge la vie de 1-2 ans
                        </span>
                      </li>
                    </ul>
                    <div className="mt-6 rounded-lg bg-emerald-100 p-4">
                      <p className="text-sm font-semibold text-emerald-900">
                        Recommandé pour : écran cassé, batterie usée, problèmes logiciels
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border-2 border-slate-300 bg-slate-50 p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-600">
                        <ShoppingCart className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900">Racheter neuf</h4>
                    </div>
                    <ul className="space-y-3 text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-slate-400">•</span>
                        <span>
                          <strong>Impact élevé :</strong> 50 kg de CO₂ supplémentaires
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-slate-400">•</span>
                        <span>
                          <strong>Coût :</strong> 300-1200€ selon le modèle
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-slate-400">•</span>
                        <span>
                          <strong>Ressources :</strong> 70 kg de matières extraites
                        </span>
                      </li>
                    </ul>
                    <div className="mt-6 rounded-lg bg-amber-100 p-4">
                      <p className="text-sm font-semibold text-amber-900">
                        À considérer uniquement si : appareil irréparable ou obsolète
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-xl bg-blue-50 border-2 border-blue-200 p-6">
                  <h4 className="mb-2 flex items-center gap-2 font-semibold text-blue-900">
                    <Recycle className="h-5 w-5" />
                    Alternative recommandée : le reconditionné
                  </h4>
                  <p className="text-slate-700">
                    Un smartphone reconditionné réduit l'impact de <strong>75%</strong> par rapport au neuf, tout en
                    coûtant 30-50% moins cher. C'est le meilleur compromis entre performance et écologie.
                  </p>
                </div>
              </Card>

              {/* Interactive Lifespan Slider */}
              <Card className="border-2 border-slate-200 p-8 lg:p-12">
                <h3 className="mb-6 text-2xl font-bold text-slate-900">
                  Simulateur : Durée de vie vs Impact environnemental
                </h3>
                <p className="mb-8 text-slate-600">
                  Déplacez le curseur pour voir comment allonger la durée de vie de votre smartphone réduit son impact
                  annuel.
                </p>

                <div className="mb-8">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700">Durée de vie</span>
                    <span className="text-2xl font-bold text-emerald-700">{lifespanYears[0]} ans</span>
                  </div>
                  <Slider
                    value={lifespanYears}
                    onValueChange={setLifespanYears}
                    min={1}
                    max={7}
                    step={1}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>1 an</span>
                    <span>7 ans</span>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-xl bg-slate-50 p-6">
                    <div className="mb-2 text-sm font-medium text-slate-600">Impact CO₂ annuel</div>
                    <div className="mb-4 text-3xl font-bold text-slate-900">
                      {Math.round(50 / lifespanYears[0])} kg/an
                    </div>
                    <div className="h-4 overflow-hidden rounded-full bg-slate-200">
                      <div
                        className="h-full rounded-full bg-emerald-600 transition-all"
                        style={{ width: `${(50 / lifespanYears[0] / 50) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div className="rounded-xl bg-emerald-50 p-6">
                    <div className="mb-2 text-sm font-medium text-emerald-700">Réduction d'impact</div>
                    <div className="mb-4 text-3xl font-bold text-emerald-700">
                      {impactReduction > 0 ? `-${impactReduction}%` : "0%"}
                    </div>
                    <p className="text-sm text-slate-700">
                      {lifespanYears[0] <= 2
                        ? "Essayez de garder votre appareil plus longtemps !"
                        : lifespanYears[0] <= 4
                          ? "Bon effort ! Vous réduisez significativement votre impact."
                          : "Excellent ! Vous maximisez la durée de vie de votre appareil."}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Laptop Case Study */}
          {selectedCase === "laptop" && (
            <div className="space-y-8">
              <Card className="border-2 border-blue-500 p-8 lg:p-12">
                <div className="mb-8 flex items-start gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-100">
                    <Laptop className="h-8 w-8 text-blue-700" />
                  </div>
                  <div>
                    <h2 className="mb-2 text-3xl font-bold text-slate-900">L'Ordinateur Portable</h2>
                    <p className="text-lg text-slate-600">
                      Un outil de travail essentiel, mais dont la fabrication a un coût environnemental élevé.
                    </p>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-xl bg-blue-50 p-4">
                    <div className="mb-1 text-2xl font-bold text-blue-700">156 kg</div>
                    <div className="text-sm text-slate-700">CO₂ émis lors de la fabrication</div>
                  </div>
                  <div className="rounded-xl bg-blue-50 p-4">
                    <div className="mb-1 text-2xl font-bold text-blue-700">20 000 L</div>
                    <div className="text-sm text-slate-700">d'eau consommée</div>
                  </div>
                  <div className="rounded-xl bg-blue-50 p-4">
                    <div className="mb-1 text-2xl font-bold text-blue-700">800 kWh</div>
                    <div className="text-sm text-slate-700">d'énergie pour la production</div>
                  </div>
                  <div className="rounded-xl bg-blue-50 p-4">
                    <div className="mb-1 text-2xl font-bold text-blue-700">4-5 ans</div>
                    <div className="text-sm text-slate-700">durée de vie moyenne</div>
                  </div>
                </div>

                {/* Key Facts */}
                <div className="space-y-4">
                  <div className="rounded-xl bg-slate-50 p-6">
                    <h3 className="mb-3 font-semibold text-slate-900">Points clés</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex gap-2">
                        <span className="text-blue-600">•</span>
                        <span>
                          Fabriquer un ordinateur portable émet autant de CO₂ qu'un <strong>vol Paris-New York</strong>
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-600">•</span>
                        <span>
                          La production consomme <strong>800 kWh</strong>, soit 8 mois de consommation électrique d'un
                          foyer français
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-600">•</span>
                        <span>
                          Passer de 4 à 6 ans d'utilisation réduit l'impact annuel de <strong>33%</strong>
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-600">•</span>
                        <span>
                          La RAM et le stockage sont souvent <strong>facilement upgradables</strong> pour prolonger la
                          durée de vie
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Upgrade vs Replace */}
              <Card className="border-2 border-slate-200 p-8 lg:p-12">
                <h3 className="mb-6 text-2xl font-bold text-slate-900">Améliorer ou remplacer ?</h3>
                <div className="mb-6 rounded-xl bg-blue-50 border-2 border-blue-200 p-6">
                  <h4 className="mb-4 font-semibold text-blue-900">Améliorations possibles</h4>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-lg bg-white p-4">
                      <div className="mb-2 font-semibold text-slate-900">RAM</div>
                      <p className="mb-2 text-sm text-slate-600">Augmenter la mémoire vive</p>
                      <div className="text-lg font-bold text-blue-700">50-150€</div>
                      <div className="mt-2 text-xs text-slate-500">Impact : Très faible</div>
                    </div>
                    <div className="rounded-lg bg-white p-4">
                      <div className="mb-2 font-semibold text-slate-900">SSD</div>
                      <p className="mb-2 text-sm text-slate-600">Remplacer le disque dur</p>
                      <div className="text-lg font-bold text-blue-700">60-200€</div>
                      <div className="mt-2 text-xs text-slate-500">Impact : Faible</div>
                    </div>
                    <div className="rounded-lg bg-white p-4">
                      <div className="mb-2 font-semibold text-slate-900">Batterie</div>
                      <p className="mb-2 text-sm text-slate-600">Changer la batterie</p>
                      <div className="text-lg font-bold text-blue-700">80-250€</div>
                      <div className="mt-2 text-xs text-slate-500">Impact : Moyen</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-emerald-50 border-2 border-emerald-200 p-6">
                  <p className="text-slate-700">
                    <strong>Conseil :</strong> Avant de remplacer votre ordinateur, vérifiez s'il est possible
                    d'améliorer la RAM ou d'installer un SSD. Ces upgrades simples peuvent donner une seconde jeunesse à
                    votre machine pour une fraction du coût et de l'impact d'un achat neuf.
                  </p>
                </div>
              </Card>
            </div>
          )}

          {/* Datacenter Case Study */}
          {selectedCase === "datacenter" && (
            <div className="space-y-8">
              <Card className="border-2 border-teal-500 p-8 lg:p-12">
                <div className="mb-8 flex items-start gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-teal-100">
                    <Server className="h-8 w-8 text-teal-700" />
                  </div>
                  <div>
                    <h2 className="mb-2 text-3xl font-bold text-slate-900">Le Datacenter</h2>
                    <p className="text-lg text-slate-600">
                      L'infrastructure invisible qui héberge nos données et fait fonctionner le cloud.
                    </p>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-xl bg-teal-50 p-4">
                    <div className="mb-1 text-2xl font-bold text-teal-700">1-2%</div>
                    <div className="text-sm text-slate-700">de l'électricité mondiale</div>
                  </div>
                  <div className="rounded-xl bg-teal-50 p-4">
                    <div className="mb-1 text-2xl font-bold text-teal-700">PUE 1.5</div>
                    <div className="text-sm text-slate-700">efficacité énergétique moyenne</div>
                  </div>
                  <div className="rounded-xl bg-teal-50 p-4">
                    <div className="mb-1 text-2xl font-bold text-teal-700">40%</div>
                    <div className="text-sm text-slate-700">pour le refroidissement</div>
                  </div>
                  <div className="rounded-xl bg-teal-50 p-4">
                    <div className="mb-1 text-2xl font-bold text-teal-700">10-15 ans</div>
                    <div className="text-sm text-slate-700">durée de vie des serveurs</div>
                  </div>
                </div>

                {/* Key Facts */}
                <div className="space-y-4">
                  <div className="rounded-xl bg-slate-50 p-6">
                    <h3 className="mb-3 font-semibold text-slate-900">Comprendre les datacenters</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex gap-2">
                        <span className="text-teal-600">•</span>
                        <span>
                          Les datacenters consomment <strong>1 à 2% de l'électricité mondiale</strong>, une part en
                          constante augmentation
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-teal-600">•</span>
                        <span>
                          Le <strong>PUE (Power Usage Effectiveness)</strong> mesure l'efficacité : 1.0 est parfait, 1.5
                          est la moyenne actuelle
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-teal-600">•</span>
                        <span>
                          <strong>40% de l'énergie</strong> est utilisée pour le refroidissement des serveurs
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-teal-600">•</span>
                        <span>
                          Les datacenters français utilisent majoritairement de l'<strong>énergie nucléaire</strong>,
                          avec une empreinte carbone plus faible
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="border-2 border-slate-200 p-8 lg:p-12">
                <h3 className="mb-6 text-2xl font-bold text-slate-900">Cloud vs Serveur local</h3>
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="rounded-xl border-2 border-teal-500 bg-teal-50 p-6">
                    <h4 className="mb-4 text-xl font-bold text-slate-900">Cloud mutualisé</h4>
                    <ul className="space-y-3 text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600">✓</span>
                        <span>
                          <strong>Efficacité :</strong> Meilleure mutualisation des ressources
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600">✓</span>
                        <span>
                          <strong>Optimisation :</strong> Datacenters modernes avec PUE optimisé
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600">✓</span>
                        <span>
                          <strong>Énergie :</strong> Souvent alimentés par des énergies renouvelables
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-xl border-2 border-slate-300 bg-slate-50 p-6">
                    <h4 className="mb-4 text-xl font-bold text-slate-900">Serveur local</h4>
                    <ul className="space-y-3 text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-slate-400">•</span>
                        <span>
                          <strong>Sous-utilisation :</strong> Taux d'utilisation souvent faible
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-slate-400">•</span>
                        <span>
                          <strong>Refroidissement :</strong> Moins efficace que les grands datacenters
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-slate-400">•</span>
                        <span>
                          <strong>Maintenance :</strong> Renouvellement matériel plus fréquent
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 rounded-xl bg-blue-50 border-2 border-blue-200 p-6">
                  <p className="text-slate-700">
                    <strong>Verdict :</strong> Pour la plupart des usages, le cloud mutualisé est plus écologique grâce
                    à une meilleure efficacité énergétique et une mutualisation des ressources. Cependant, la sobriété
                    numérique reste essentielle : n'utilisez que les ressources dont vous avez réellement besoin.
                  </p>
                </div>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Related Links Section */}
      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <RelatedLinks
            links={[
              {
                href: "/comprendre",
                label: "Comprendre le cycle de vie",
                description: "Visualisez l'impact environnemental à chaque étape du cycle de vie des équipements",
              },
              {
                href: "/agir",
                label: "Comment agir",
                description: "Découvrez les actions concrètes pour réduire votre impact numérique au quotidien",
              },
              {
                href: "/recyclage",
                label: "Recyclage & Réparation",
                description: "Trouvez les points de collecte et acteurs du recyclage près de chez vous",
              },
              {
                href: "/outils",
                label: "Outils interactifs",
                description: "Calculez votre empreinte carbone numérique et simulez vos économies",
              },
            ]}
          />
        </div>
      </section>

      {/* Sources */}
      <section className="border-t border-slate-200 bg-white px-6 py-8">{/* Sources content here */}</section>
    </div>
  )
}
