"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Lightbulb,
  Leaf,
  Zap,
  Globe,
  Cpu,
  Wind,
  Sun,
  Droplets,
  ArrowRight,
  CheckCircle2,
  XCircle,
} from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"

// Projection data for digital carbon footprint
const projectionData = [
  { year: 2020, scenario1: 2.1, scenario2: 2.1, scenario3: 2.1 },
  { year: 2025, scenario1: 2.8, scenario2: 2.5, scenario3: 2.3 },
  { year: 2030, scenario1: 3.9, scenario2: 2.8, scenario3: 2.0 },
  { year: 2035, scenario1: 5.3, scenario2: 3.0, scenario3: 1.5 },
  { year: 2040, scenario1: 7.0, scenario2: 3.2, scenario3: 1.2 },
]

// Renewable energy adoption in datacenters
const renewableAdoptionData = [
  { year: 2020, percentage: 28 },
  { year: 2021, percentage: 32 },
  { year: 2022, percentage: 38 },
  { year: 2023, percentage: 45 },
  { year: 2024, percentage: 52 },
  { year: 2025, percentage: 60 },
]

const opportunities = [
  {
    title: "IA pour l'optimisation énergétique",
    icon: Cpu,
    color: "blue",
    description:
      "L'intelligence artificielle peut réduire la consommation des datacenters de 30% en optimisant le refroidissement et la charge des serveurs en temps réel.",
    impact: "Très positif",
  },
  {
    title: "Énergies renouvelables",
    icon: Sun,
    color: "emerald",
    description:
      "Les datacenters alimentés à 100% par des énergies renouvelables se multiplient. Objectif : 80% d'ici 2030 en Europe.",
    impact: "Très positif",
  },
  {
    title: "Économie circulaire",
    icon: Leaf,
    color: "teal",
    description:
      "Le reconditionnement et la réparation se démocratisent. Le marché du reconditionné croît de 15% par an en France.",
    impact: "Positif",
  },
  {
    title: "Réglementation européenne",
    icon: Globe,
    color: "cyan",
    description:
      "L'UE impose des normes strictes : indice de réparabilité obligatoire, durée de vie minimale, écoconception des logiciels.",
    impact: "Positif",
  },
]

const risks = [
  {
    title: "Explosion de la consommation de données",
    icon: TrendingUp,
    color: "amber",
    description:
      "Le trafic internet double tous les 3 ans. Sans action, l'empreinte carbone du numérique pourrait tripler d'ici 2040.",
    impact: "Critique",
  },
  {
    title: "IA générative énergivore",
    icon: Zap,
    color: "orange",
    description:
      "Une requête ChatGPT consomme 10x plus d'énergie qu'une recherche Google. La démocratisation de l'IA augmente drastiquement la consommation.",
    impact: "Élevé",
  },
  {
    title: "Obsolescence programmée",
    icon: AlertTriangle,
    color: "red",
    description:
      "Malgré les lois, la durée de vie moyenne des smartphones stagne à 2,5 ans. Les mises à jour logicielles ralentissent les anciens appareils.",
    impact: "Élevé",
  },
  {
    title: "Raréfaction des métaux",
    icon: Droplets,
    color: "rose",
    description:
      "Les réserves de lithium, cobalt et terres rares s'épuisent. Risque de pénurie d'ici 2050 sans recyclage massif.",
    impact: "Critique",
  },
]

const solutions2030 = [
  {
    category: "Technologies émergentes",
    items: [
      "Serveurs à refroidissement liquide généralisés (PUE < 1.1)",
      "Processeurs ARM ultra-efficaces (-50% de consommation)",
      "Stockage ADN pour l'archivage (durée de vie 1000 ans)",
      "Réseaux 6G optimisés pour l'efficacité énergétique",
    ],
  },
  {
    category: "Modèles économiques",
    items: [
      "Location longue durée plutôt que propriété",
      "Garantie légale étendue à 10 ans",
      "Bonus-malus sur la durabilité des produits",
      "Consigne sur les appareils électroniques",
    ],
  },
  {
    category: "Comportements",
    items: [
      "Sobriété numérique enseignée dès l'école",
      "Limitation volontaire du streaming HD",
      "Réparation devenue réflexe culturel",
      "Cloud personnel plutôt que services centralisés",
    ],
  },
]

export default function PerspectivesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800">
            <Lightbulb className="h-4 w-4" />
            Perspectives & Avenir
          </div>
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
            L'avenir du numérique responsable
          </h1>
          <p className="text-pretty text-lg text-slate-600 lg:text-xl">
            Entre opportunités technologiques et risques environnementaux : quel futur pour le Green IT en France et
            dans le monde ?
          </p>
        </div>
      </section>

      {/* Scenarios 2040 */}
      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 lg:text-4xl">3 scénarios pour 2040</h2>

          <Card className="mb-8 border-2 border-slate-200 p-8 lg:p-12">
            <h3 className="mb-6 text-center text-xl font-semibold text-slate-900">
              Projection de l'empreinte carbone du numérique (Gt CO₂eq)
            </h3>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={projectionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="year" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip
                  contentStyle={{ backgroundColor: "#fff", border: "2px solid #e2e8f0", borderRadius: "0.5rem" }}
                />
                <Line
                  type="monotone"
                  dataKey="scenario1"
                  stroke="#ef4444"
                  strokeWidth={3}
                  name="Scénario tendanciel"
                  dot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="scenario2"
                  stroke="#f59e0b"
                  strokeWidth={3}
                  name="Scénario modéré"
                  dot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="scenario3"
                  stroke="#10b981"
                  strokeWidth={3}
                  name="Scénario sobre"
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="border-2 border-red-500 bg-red-50 p-6">
              <div className="mb-4 flex items-center gap-3">
                <TrendingUp className="h-8 w-8 text-red-700" />
                <h3 className="text-xl font-bold text-slate-900">Scénario tendanciel</h3>
              </div>
              <p className="mb-4 text-sm text-slate-700">
                <strong>+233% d'ici 2040</strong> - Continuation des tendances actuelles sans changement majeur.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                  <span>Croissance exponentielle du streaming 8K et VR</span>
                </li>
                <li className="flex gap-2">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                  <span>IA générative omniprésente et énergivore</span>
                </li>
                <li className="flex gap-2">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                  <span>Renouvellement rapide des appareils (2 ans)</span>
                </li>
                <li className="flex gap-2">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                  <span>Datacenters peu optimisés</span>
                </li>
              </ul>
            </Card>

            <Card className="border-2 border-amber-500 bg-amber-50 p-6">
              <div className="mb-4 flex items-center gap-3">
                <TrendingUp className="h-8 w-8 text-amber-700" />
                <h3 className="text-xl font-bold text-slate-900">Scénario modéré</h3>
              </div>
              <p className="mb-4 text-sm text-slate-700">
                <strong>+52% d'ici 2040</strong> - Application partielle des bonnes pratiques et réglementations.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                  <span>Datacenters 50% renouvelables</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                  <span>Durée de vie moyenne 4 ans</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                  <span>Taux de recyclage 60%</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                  <span>Écoconception logicielle encouragée</span>
                </li>
              </ul>
            </Card>

            <Card className="border-2 border-emerald-500 bg-emerald-50 p-6">
              <div className="mb-4 flex items-center gap-3">
                <TrendingDown className="h-8 w-8 text-emerald-700" />
                <h3 className="text-xl font-bold text-slate-900">Scénario sobre</h3>
              </div>
              <p className="mb-4 text-sm text-slate-700">
                <strong>-43% d'ici 2040</strong> - Transformation profonde vers un numérique durable.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>Datacenters 100% renouvelables</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>Durée de vie moyenne 7 ans</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>Taux de recyclage 90%</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>Sobriété numérique généralisée</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Renewable Energy Adoption */}
      <section className="bg-slate-50 px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 lg:text-4xl">
            Transition vers les énergies renouvelables
          </h2>

          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="border-2 border-slate-200 p-8">
              <h3 className="mb-6 text-xl font-semibold text-slate-900">
                Adoption des énergies renouvelables dans les datacenters
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={renewableAdoptionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="year" stroke="#64748b" />
                  <YAxis stroke="#64748b" domain={[0, 100]} />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#fff", border: "2px solid #e2e8f0", borderRadius: "0.5rem" }}
                  />
                  <Bar dataKey="percentage" fill="#10b981" radius={[8, 8, 0, 0]} name="% Renouvelable" />
                </BarChart>
              </ResponsiveContainer>
              <p className="mt-4 text-sm text-slate-600">
                La part des énergies renouvelables dans les datacenters progresse de 8% par an en moyenne.
              </p>
            </Card>

            <div className="space-y-6">
              <Card className="border-2 border-emerald-500 bg-emerald-50 p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Sun className="h-8 w-8 text-emerald-700" />
                  <h3 className="text-lg font-bold text-slate-900">Solaire</h3>
                </div>
                <p className="mb-3 text-sm text-slate-700">
                  Les panneaux solaires sur les toits des datacenters peuvent couvrir 20-30% de leurs besoins
                  énergétiques.
                </p>
                <div className="text-2xl font-bold text-emerald-700">30%</div>
                <p className="text-xs text-slate-600">des nouveaux datacenters équipés</p>
              </Card>

              <Card className="border-2 border-blue-500 bg-blue-50 p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Wind className="h-8 w-8 text-blue-700" />
                  <h3 className="text-lg font-bold text-slate-900">Éolien</h3>
                </div>
                <p className="mb-3 text-sm text-slate-700">
                  Les grands acteurs (Google, Microsoft, Amazon) investissent massivement dans des parcs éoliens dédiés.
                </p>
                <div className="text-2xl font-bold text-blue-700">45%</div>
                <p className="text-xs text-slate-600">de l'énergie des GAFAM</p>
              </Card>

              <Card className="border-2 border-teal-500 bg-teal-50 p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Droplets className="h-8 w-8 text-teal-700" />
                  <h3 className="text-lg font-bold text-slate-900">Hydraulique</h3>
                </div>
                <p className="mb-3 text-sm text-slate-700">
                  La France bénéficie d'un mix énergétique favorable avec 70% de nucléaire et 12% d'hydraulique.
                </p>
                <div className="text-2xl font-bold text-teal-700">82%</div>
                <p className="text-xs text-slate-600">d'énergie bas-carbone en France</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 lg:text-4xl">
            Opportunités et innovations
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {opportunities.map((opportunity, index) => {
              const Icon = opportunity.icon
              return (
                <Card key={index} className={`border-2 border-${opportunity.color}-500 bg-${opportunity.color}-50 p-6`}>
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-${opportunity.color}-600`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">{opportunity.title}</h3>
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        opportunity.impact === "Très positif" ? "bg-emerald-600 text-white" : "bg-teal-600 text-white"
                      }`}
                    >
                      {opportunity.impact}
                    </span>
                  </div>
                  <p className="text-sm text-slate-700">{opportunity.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Risks */}
      <section className="bg-slate-50 px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 lg:text-4xl">Risques et défis</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {risks.map((risk, index) => {
              const Icon = risk.icon
              return (
                <Card key={index} className={`border-2 border-${risk.color}-500 bg-${risk.color}-50 p-6`}>
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-${risk.color}-600`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">{risk.title}</h3>
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        risk.impact === "Critique" ? "bg-red-600 text-white" : "bg-orange-600 text-white"
                      }`}
                    >
                      {risk.impact}
                    </span>
                  </div>
                  <p className="text-sm text-slate-700">{risk.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Solutions 2030 */}
      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 lg:text-4xl">Solutions pour 2030</h2>
          <div className="grid gap-8 lg:grid-cols-3">
            {solutions2030.map((solution, index) => (
              <Card key={index} className="border-2 border-slate-200 p-6">
                <h3 className="mb-6 text-xl font-bold text-slate-900">{solution.category}</h3>
                <ul className="space-y-3">
                  {solution.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Messages */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-700 px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-white lg:text-4xl">Messages clés pour l'avenir</h2>
          <div className="space-y-6">
            <Card className="border-2 border-emerald-200 bg-white/95 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-lg font-bold text-white">
                  1
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-slate-900">L'avenir n'est pas écrit</h3>
                  <p className="text-sm text-slate-700">
                    Nous avons le choix entre un scénario catastrophe (+233%) et un scénario sobre (-43%). Chaque action
                    compte.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="border-2 border-teal-200 bg-white/95 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-600 text-lg font-bold text-white">
                  2
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-slate-900">La technologie n'est pas la solution miracle</h3>
                  <p className="text-sm text-slate-700">
                    Les innovations (IA, énergies renouvelables) sont nécessaires mais insuffisantes. La sobriété
                    numérique est indispensable.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="border-2 border-blue-200 bg-white/95 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                  3
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-slate-900">Agir maintenant pour 2030</h3>
                  <p className="text-sm text-slate-700">
                    Les 5 prochaines années sont cruciales. Les décisions prises aujourd'hui détermineront la
                    trajectoire jusqu'en 2040.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="border-2 border-cyan-200 bg-white/95 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-600 text-lg font-bold text-white">
                  4
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-slate-900">La France a un rôle à jouer</h3>
                  <p className="text-sm text-slate-700">
                    Avec son mix énergétique bas-carbone et sa réglementation avancée, la France peut être un modèle
                    européen du Green IT.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-slate-900 lg:text-4xl">
            Construisons ensemble un numérique durable
          </h2>
          <p className="mb-8 text-lg text-slate-600">
            Découvrez comment agir concrètement pour contribuer au scénario sobre et réduire l'impact environnemental du
            numérique.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Voir les actions concrètes
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Calculer mon empreinte
            </Button>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="border-t border-slate-200 bg-slate-50 px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <h3 className="mb-4 text-sm font-semibold text-slate-900">Sources</h3>
          <div className="flex flex-wrap gap-4 text-sm text-slate-600">
            <span>The Shift Project - Lean ICT (2024)</span>
            <span>•</span>
            <span>ADEME - Prospective 2030-2050 (2023)</span>
            <span>•</span>
            <span>IEA - Net Zero by 2050 (2024)</span>
            <span>•</span>
            <span>GreenIT.fr - Étude d'impact (2025)</span>
          </div>
        </div>
      </section>
    </div>
  )
}
