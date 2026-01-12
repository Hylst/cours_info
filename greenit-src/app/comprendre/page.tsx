"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import {
  Mountain,
  Factory,
  Truck,
  Smartphone,
  Trash2,
  Droplets,
  Zap,
  Cloud,
  Gem,
  ArrowRight,
  Info,
  Car,
  Home,
  TreePine,
} from "lucide-react"
import { ScaleComparison } from "@/components/scale-comparison"
import { VisualAnalogy } from "@/components/visual-analogy"
import { RelatedLinks } from "@/components/related-links"
import { AnimatedLifecycleSVG } from "@/components/animated-lifecycle-svg"
import { AnimatedImpactBars } from "@/components/animated-impact-bars"
import { ImageZoom } from "@/components/image-zoom"

const lifecyclePhases = [
  {
    id: "extraction",
    title: "Extraction des matières premières",
    icon: Mountain,
    color: "amber",
    description: "Extraction de métaux rares et précieux nécessaires à la fabrication des composants électroniques.",
    impacts: [
      { icon: Droplets, label: "Eau", value: "12 000 L", detail: "pour 1 smartphone" },
      { icon: Zap, label: "Énergie", value: "250 kWh", detail: "équivalent à 2 mois de consommation d'un foyer" },
      { icon: Cloud, label: "CO₂", value: "50 kg", detail: "d'émissions de gaz à effet de serre" },
      { icon: Gem, label: "Métaux", value: "50+", detail: "métaux différents extraits" },
    ],
    analogy: "Fabriquer un smartphone nécessite autant d'eau que 160 douches !",
    details:
      "L'extraction minière est particulièrement gourmande en ressources. Les terres rares, indispensables aux composants électroniques, proviennent souvent de mines à ciel ouvert qui détruisent les écosystèmes locaux.",
  },
  {
    id: "production",
    title: "Fabrication et assemblage",
    icon: Factory,
    color: "slate",
    description: "Transformation des matières premières en composants électroniques et assemblage final des appareils.",
    impacts: [
      { icon: Cloud, label: "CO₂", value: "75%", detail: "de l'empreinte carbone totale" },
      { icon: Zap, label: "Énergie", value: "300 kWh", detail: "pour la fabrication" },
      { icon: Droplets, label: "Eau", value: "8 000 L", detail: "pour le refroidissement" },
      { icon: Gem, label: "Composants", value: "1000+", detail: "pièces assemblées" },
    ],
    analogy: "La fabrication d'un ordinateur portable émet autant de CO₂ qu'un vol Paris-New York !",
    details:
      "Cette phase est la plus polluante du cycle de vie. Les usines de fabrication consomment énormément d'énergie, souvent produite à partir de combustibles fossiles dans les pays de production.",
  },
  {
    id: "transport",
    title: "Transport et distribution",
    icon: Truck,
    color: "blue",
    description: "Acheminement des produits depuis les usines jusqu'aux consommateurs à travers le monde.",
    impacts: [
      { icon: Cloud, label: "CO₂", value: "5%", detail: "de l'empreinte totale" },
      { icon: Truck, label: "Distance", value: "15 000 km", detail: "en moyenne par appareil" },
      { icon: Zap, label: "Énergie", value: "20 kWh", detail: "pour le transport" },
    ],
    analogy: "Votre smartphone a probablement voyagé plus loin que vous cette année !",
    details:
      "Les appareils électroniques parcourent des milliers de kilomètres, principalement par bateau et avion, depuis l'Asie vers l'Europe et les Amériques.",
  },
  {
    id: "usage",
    title: "Utilisation quotidienne",
    icon: Smartphone,
    color: "emerald",
    description:
      "Phase d'utilisation par le consommateur, incluant la consommation électrique et les services numériques.",
    impacts: [
      { icon: Zap, label: "Énergie", value: "20%", detail: "de l'impact totale" },
      { icon: Cloud, label: "Data", value: "5 Go/mois", detail: "consommation moyenne" },
      { icon: Droplets, label: "Durée", value: "2-3 ans", detail: "durée de vie moyenne" },
    ],
    analogy: "Garder son smartphone 1 an de plus réduit son impact de 25% !",
    details:
      "Contraire aux idées reçues, l'utilisation ne représente qu'environ 20% de l'impact environnemental. C'est pourquoi allonger la durée de vie est le geste le plus efficace.",
  },
  {
    id: "end-of-life",
    title: "Fin de vie et recyclage",
    icon: Trash2,
    color: "teal",
    description: "Collecte, tri et recyclage des appareils en fin de vie pour récupérer les matériaux précieux.",
    impacts: [
      { icon: Gem, label: "Recyclage", value: "20%", detail: "taux de recyclage mondial" },
      { icon: Trash2, label: "Déchets", value: "62 Mt", detail: "de e-déchets en 2022" },
      { icon: Droplets, label: "Récupération", value: "80%", detail: "des métaux récupérables" },
    ],
    analogy: "Recycler 1 million de smartphones permet de récupérer 16 tonnes de cuivre !",
    details:
      "Seulement 20% des déchets électroniques sont correctement recyclés dans le monde. En France, ce taux atteint 45% grâce aux filières REP (Responsabilité Élargie du Producteur).",
  },
]

export default function ComprendrePage() {
  const [selectedPhase, setSelectedPhase] = useState(0)

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-secondary/30 px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
            Comprendre le cycle de vie du numérique
          </h1>
          <p className="text-pretty text-lg text-muted-foreground lg:text-xl mb-8">
            De l'extraction des matières premières au recyclage, découvrez l'impact environnemental réel de nos
            équipements électroniques à chaque étape de leur vie.
          </p>
          <ImageZoom
            src="/greenit/images/lifecycle-numerique-hero.webp"
            alt="Cycle de vie du numérique - de l'extraction au recyclage"
            containerClassName="aspect-[16/9] w-full rounded-2xl shadow-xl bg-muted border-2"
            priority
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>
      </section>

      {/* Animated Lifecycle Visualization */}
      <section className="px-6 py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground lg:text-4xl">
            Le cycle de vie en un coup d'œil
          </h2>
          <p className="mb-12 text-center text-lg text-muted-foreground">
            Visualisation interactive des 5 phases du cycle de vie d'un appareil électronique
          </p>
          <div className="bg-card rounded-2xl p-4 sm:p-8 shadow-sm border">
            <AnimatedLifecycleSVG />
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:py-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground lg:text-4xl">
            L'impact d'un smartphone en chiffres
          </h2>
          <p className="mb-12 text-center text-lg text-muted-foreground">
            Pour mieux comprendre l'ampleur de l'impact, voici des comparaisons concrètes
          </p>

          <ImageZoom
            src="/greenit/images/smartphone-impact-infographic.webp"
            alt="Infographie détaillée de l'impact environnemental d'un smartphone"
            containerClassName="mb-12 aspect-[4/3] w-full max-w-4xl mx-auto rounded-2xl shadow-lg bg-card border"
            className="p-4"
            quality={90}
            sizes="(max-width: 768px) 100vw, 896px"
          />

          {/* Animated Impact Bars */}
          <div className="mb-12">
            <AnimatedImpactBars />
          </div>

          <div className="mb-12">
            <ScaleComparison
              type="co2"
              value={50}
              unit="kg CO₂"
              comparisons={[
                {
                  icon: Car,
                  label: "Trajet en voiture",
                  equivalent: "300 km",
                  description: "Distance Paris-Reims en voiture thermique",
                },
                {
                  icon: TreePine,
                  label: "Arbres nécessaires",
                  equivalent: "2,5 arbres",
                  description: "Pour absorber le CO₂ pendant 1 an",
                },
                {
                  icon: Home,
                  label: "Chauffage",
                  equivalent: "5 jours",
                  description: "De chauffage d'un appartement en hiver",
                },
              ]}
            />
          </div>

          <div>
            <VisualAnalogy
              title="70 kg de matières premières extraites"
              description="Pour fabriquer un smartphone de 150g, il faut extraire 70 kg de matières premières, soit 467 fois son poids final !"
              visual={{
                items: [
                  { icon: "📱", count: 1, label: "Smartphone (150g)" },
                  { icon: "⚖️", count: 467, label: "Fois son poids en matières extraites" },
                ],
              }}
              color="amber"
            />
          </div>

          {/* Text Transcript Section */}
          <div className="mt-8 rounded-lg border bg-card p-6">
            <h4 className="mb-3 text-lg font-semibold text-card-foreground">
              Transcription textuelle de l'infographie
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <strong>Impact matières premières :</strong> 70 kg de ressources extraites, incluant 50 métaux
                différents (lithium, cobalt, terres rares, or, argent)
              </p>
              <p>
                <strong>Impact carbone :</strong> 55 kg de CO2 émis, équivalent à 300 km en voiture thermique
              </p>
              <p>
                <strong>Consommation d'eau :</strong> 13 000 litres utilisés dans le processus de fabrication
              </p>
              <p>
                <strong>Transport :</strong> 15 000 km parcourus en moyenne avant d'atteindre le consommateur
              </p>
              <p>
                <strong>Compensation nécessaire :</strong> 3 arbres pendant 1 an pour absorber le CO2 émis
              </p>
              <p>
                <strong>Recommandation :</strong> Conserver son smartphone au moins 5 ans pour amortir l'impact de
                fabrication
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Lifecycle Visualization */}
      <section className="bg-secondary/30 px-6 py-16 lg:py-24 border-t">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground lg:text-4xl">
            Les 5 étapes du cycle de vie
          </h2>

          {/* Phase Navigation */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {lifecyclePhases.map((phase, index) => {
              const Icon = phase.icon
              const isActive = selectedPhase === index
              const colorClass = phase.color // Use variable for template literals

              return (
                <button
                  key={phase.id}
                  onClick={() => setSelectedPhase(index)}
                  className={`flex items-center gap-2 rounded-xl border-2 px-4 py-3 transition-all ${isActive
                    ? `border-primary bg-primary/10`
                    : "bg-card hover:border-primary/30"
                    }`}
                >
                  <Icon className={`h-5 w-5 ${isActive ? `text-primary` : "text-muted-foreground"}`} />
                  <span className={`text-sm font-medium ${isActive ? `text-foreground font-bold` : "text-muted-foreground"}`}>
                    {phase.title}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Visual Timeline */}
          <div className="relative mb-16 px-4">
            <div className="flex items-center justify-between">
              {lifecyclePhases.map((phase, index) => {
                const Icon = phase.icon
                const isActive = selectedPhase === index
                const isPast = selectedPhase > index

                return (
                  <div key={phase.id} className="relative flex flex-1 flex-col items-center">
                    {/* Connector Line */}
                    {index < lifecyclePhases.length - 1 && (
                      <div
                        className={`absolute left-1/2 top-8 h-1 w-full transition-colors ${isPast ? "bg-primary" : "bg-muted"
                          }`}
                      />
                    )}

                    {/* Icon Circle */}
                    <button
                      onClick={() => setSelectedPhase(index)}
                      className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 transition-all ${isActive
                        ? "border-primary bg-primary shadow-lg scale-110"
                        : isPast
                          ? "border-primary bg-card"
                          : "bg-card hover:border-primary/30"
                        }`}
                    >
                      <Icon
                        className={`h-7 w-7 ${isActive ? "text-primary-foreground" : isPast ? "text-primary" : "text-muted-foreground"
                          }`}
                      />
                    </button>

                    {/* Label */}
                    <span className="mt-3 hidden text-center text-xs font-medium text-muted-foreground lg:block">
                      {phase.title.split(" ")[0]}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Phase Details */}
          <div className="mx-auto max-w-5xl">
            <Card className="overflow-hidden border-2 bg-card p-8 lg:p-12 transition-all duration-300">
              <div className="mb-6 flex items-start gap-4">
                {(() => {
                  const phase = lifecyclePhases[selectedPhase]
                  const Icon = phase.icon
                  return (
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-${phase.color}-100 dark:bg-${phase.color}-900/30`}
                    >
                      <Icon className={`h-7 w-7 text-${phase.color}-700 dark:text-${phase.color}-400`} />
                    </div>
                  )
                })()}
                <div>
                  <h3 className="mb-2 text-2xl font-bold text-card-foreground">{lifecyclePhases[selectedPhase].title}</h3>
                  <p className="text-muted-foreground">{lifecyclePhases[selectedPhase].description}</p>
                </div>
              </div>

              {/* Impacts Grid */}
              <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {lifecyclePhases[selectedPhase].impacts.map((impact, index) => {
                  const ImpactIcon = impact.icon
                  return (
                    <div key={index} className="rounded-xl bg-secondary/50 p-4 border transition-all">
                      <ImpactIcon className="mb-2 h-6 w-6 text-primary" />
                      <div className="mb-1 text-2xl font-bold text-foreground">{impact.value}</div>
                      <div className="text-sm font-medium text-muted-foreground">{impact.label}</div>
                      <div className="mt-1 text-xs text-muted-foreground/70">{impact.detail}</div>
                    </div>
                  )
                })}
              </div>

              {/* Analogy */}
              <div className="mb-6 rounded-xl bg-accent/10 border-2 border-accent/20 p-6">
                <div className="mb-2 flex items-center gap-2">
                  <Info className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-foreground">Pour mieux comprendre</span>
                </div>
                <p className="text-muted-foreground">{lifecyclePhases[selectedPhase].analogy}</p>
              </div>

              {/* Details */}
              <p className="text-muted-foreground leading-relaxed">{lifecyclePhases[selectedPhase].details}</p>

              {/* Navigation Buttons */}
              <div className="mt-8 flex items-center justify-between">
                <Button
                  variant="outline"
                  onClick={() => setSelectedPhase(Math.max(0, selectedPhase - 1))}
                  disabled={selectedPhase === 0}
                >
                  Étape précédente
                </Button>
                <Button
                  onClick={() => setSelectedPhase(Math.min(lifecyclePhases.length - 1, selectedPhase + 1))}
                  disabled={selectedPhase === lifecyclePhases.length - 1}
                >
                  Étape suivante
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Links Section */}
      <section className="px-6 py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-5xl">
          <RelatedLinks
            links={[
              {
                href: "/chiffres",
                label: "Chiffres & Données",
                description:
                  "Explorez les statistiques détaillées et visualisations interactives sur l'impact du numérique",
              },
              {
                href: "/cas-pratiques",
                label: "Cas pratiques",
                description: "Découvrez des études de cas concrètes pour smartphone, ordinateur et datacenter",
              },
              {
                href: "/agir",
                label: "Comment agir",
                description: "Passez à l'action avec nos guides pratiques pour réduire votre empreinte numérique",
              },
            ]}
          />
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="px-6 py-16 lg:py-24 bg-secondary/30">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground lg:text-4xl">Les points clés à retenir</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-2 bg-card p-6">
              <div className="mb-3 text-3xl font-bold text-primary">75%</div>
              <h3 className="mb-2 font-semibold text-card-foreground">La fabrication est la phase la plus polluante</h3>
              <p className="text-sm text-muted-foreground">
                Les trois quarts de l'impact environnemental d'un appareil proviennent de sa fabrication. C'est pourquoi
                le geste le plus efficace est de garder ses appareils le plus longtemps possible.
              </p>
            </Card>

            <Card className="border-2 bg-card p-6">
              <div className="mb-3 text-3xl font-bold text-accent-foreground">50+</div>
              <h3 className="mb-2 font-semibold text-card-foreground">Des dizaines de métaux rares</h3>
              <p className="text-sm text-muted-foreground">
                Un smartphone contient plus de 50 métaux différents, dont certains sont très rares et difficiles à
                extraire. Le recyclage permet de récupérer une partie de ces ressources précieuses.
              </p>
            </Card>

            <Card className="border-2 bg-card p-6">
              <div className="mb-3 text-3xl font-bold text-primary">20%</div>
              <h3 className="mb-2 font-semibold text-card-foreground">L'usage compte moins qu'on ne pense</h3>
              <p className="text-sm text-muted-foreground">
                Contraire aux idées reçues, l'utilisation ne représente qu'environ 20% de l'impact total. Éteindre ses
                appareils est utile, mais les garder plus longtemps l'est bien plus.
              </p>
            </Card>

            <Card className="border-2 bg-card p-6">
              <div className="mb-3 text-3xl font-bold text-accent-foreground">45%</div>
              <h3 className="mb-2 font-semibold text-card-foreground">Le recyclage progresse en France</h3>
              <p className="text-sm text-muted-foreground">
                En France, 45% des déchets électroniques sont recyclés grâce aux filières REP, contre seulement 20% au
                niveau mondial. Mais il reste encore beaucoup à faire.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary/30 px-6 py-16 lg:py-24 border-t">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-foreground lg:text-4xl">Prêt à passer à l'action ?</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Maintenant que vous comprenez l'impact du numérique, découvrez les gestes concrets pour réduire votre
            empreinte environnementale.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/agir">
              <Button size="lg">
                Découvrir les actions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/chiffres">
              <Button size="lg" variant="outline">
                Voir les chiffres détaillés
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="border-t bg-background px-6 py-8">
        <div className="mx-auto max-w-5xl">
          <h3 className="mb-4 text-sm font-semibold text-foreground">Sources</h3>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span>ADEME - Impact environnemental du numérique (2023)</span>
            <span>•</span>
            <span>Global E-Waste Monitor, ONU (2024)</span>
            <span>•</span>
            <span>GreenIT.fr - Étude cycle de vie (2023)</span>
          </div>
        </div>
      </section>
    </div>
  )
}
