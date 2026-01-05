"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import {
  Server,
  Zap,
  Droplets,
  Wind,
  Thermometer,
  TrendingDown,
  Globe,
  Leaf,
  ArrowRight,
  Info,
  Sun,
  CheckCircle2,
} from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

// Data for energy consumption breakdown
const energyBreakdownData = [
  { category: "Serveurs", percentage: 50, fill: "#3b82f6" },
  { category: "Refroidissement", percentage: 40, fill: "#14b8a6" },
  { category: "Infrastructure", percentage: 10, fill: "#64748b" },
]

// Data for PUE comparison
const pueComparisonData = [
  { type: "Ancien datacenter", pue: 2.5 },
  { type: "Moyenne mondiale", pue: 1.67 },
  { type: "Moyenne France", pue: 1.5 },
  { type: "Datacenter moderne", pue: 1.2 },
  { type: "Datacenter optimal", pue: 1.05 },
]

// Data for cooling methods
const coolingMethods = [
  {
    name: "Refroidissement à air",
    efficiency: "Faible",
    pue: "1.8-2.5",
    description: "Méthode traditionnelle utilisant la climatisation classique",
    color: "amber",
  },
  {
    name: "Free cooling",
    efficiency: "Moyenne",
    pue: "1.3-1.5",
    description: "Utilisation de l'air extérieur quand la température le permet",
    color: "blue",
  },
  {
    name: "Refroidissement liquide",
    efficiency: "Élevée",
    pue: "1.1-1.3",
    description: "Circulation de liquide de refroidissement dans les serveurs",
    color: "teal",
  },
  {
    name: "Immersion",
    efficiency: "Très élevée",
    pue: "1.02-1.1",
    description: "Serveurs immergés dans un liquide diélectrique",
    color: "emerald",
  },
]

export default function DatacentersPage() {
  const [pueValue, setPueValue] = useState([1.5])
  const [serverCount, setServerCount] = useState([100])

  // Calculate energy waste based on PUE
  const calculateWaste = (pue: number) => {
    return Math.round(((pue - 1) / pue) * 100)
  }

  const wastePercentage = calculateWaste(pueValue[0])
  const totalPower = serverCount[0] * 0.5 // Assuming 500W per server
  const wastedPower = (totalPower * wastePercentage) / 100

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-teal-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-2 text-sm font-medium text-blue-800 dark:text-blue-300">
            <Server className="h-4 w-4" />
            Datacenters & Cloud
          </div>
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 lg:text-5xl">
            Comprendre l'impact des datacenters
          </h1>
          <p className="text-pretty text-lg text-slate-600 dark:text-slate-300 lg:text-xl">
            Les datacenters sont l'infrastructure invisible du numérique. Découvrez leur fonctionnement, leur impact
            environnemental et les solutions pour les rendre plus durables.
          </p>
        </div>
      </section>

      {/* What is a Datacenter */}
      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 dark:text-slate-100 lg:text-4xl">
            Qu'est-ce qu'un datacenter ?
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-900/30">
                  <Server className="h-7 w-7 text-blue-700 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Définition</h3>
              </div>
              <p className="mb-4 text-slate-700 dark:text-slate-300">
                Un datacenter (centre de données) est un bâtiment qui héberge des milliers de serveurs informatiques
                fonctionnant 24h/24 pour stocker, traiter et distribuer des données.
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                C'est l'infrastructure qui fait fonctionner Internet, le cloud, les applications web, les réseaux
                sociaux, le streaming vidéo, et tous les services numériques que nous utilisons quotidiennement.
              </p>
            </Card>

            <Card className="border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-teal-100 dark:bg-teal-900/30">
                  <Globe className="h-7 w-7 text-teal-700 dark:text-teal-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">En chiffres</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="mb-1 text-3xl font-bold text-blue-700 dark:text-blue-400">1-2%</div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">de la consommation électrique mondiale</p>
                </div>
                <div>
                  <div className="mb-1 text-3xl font-bold text-teal-700 dark:text-teal-400">8 000+</div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">datacenters dans le monde</p>
                </div>
                <div>
                  <div className="mb-1 text-3xl font-bold text-cyan-700 dark:text-cyan-400">250 TWh</div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">consommation annuelle mondiale</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Energy Breakdown */}
      <section className="bg-slate-50 dark:bg-slate-900 px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 dark:text-slate-100 lg:text-4xl">
            Répartition de la consommation énergétique
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-8">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={energyBreakdownData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ category, percentage }) => `${category}: ${percentage}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="percentage"
                  >
                    {energyBreakdownData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Card>

            <div className="flex flex-col justify-center space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30">
                  <Server className="h-6 w-6 text-blue-700 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-slate-900 dark:text-slate-100">Serveurs (50%)</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Calcul, stockage et traitement des données. C'est la charge utile du datacenter.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-100 dark:bg-teal-900/30">
                  <Wind className="h-6 w-6 text-teal-700 dark:text-teal-400" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-slate-900 dark:text-slate-100">Refroidissement (40%)</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Climatisation nécessaire pour évacuer la chaleur produite par les serveurs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800">
                  <Zap className="h-6 w-6 text-slate-700 dark:text-slate-300" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-slate-900 dark:text-slate-100">Infrastructure (10%)</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Éclairage, sécurité, onduleurs et autres équipements de support.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-xl bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 p-6">
            <div className="flex items-start gap-3">
              <Info className="mt-1 h-5 w-5 shrink-0 text-blue-700 dark:text-blue-400" />
              <p className="text-slate-700 dark:text-slate-300">
                <strong>Point clé :</strong> Le refroidissement représente 40% de la consommation. C'est pourquoi
                l'optimisation des systèmes de refroidissement est cruciale pour réduire l'impact environnemental des
                datacenters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PUE Explanation */}
      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 dark:text-slate-100 lg:text-4xl">
            Le PUE : mesurer l'efficacité énergétique
          </h2>

          <Card className="mb-8 border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-8 lg:p-12">
            <div className="mb-8 text-center">
              <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
                PUE = Power Usage Effectiveness (Efficacité d'utilisation de l'énergie)
              </h3>
              <div className="mx-auto max-w-2xl rounded-xl bg-slate-50 dark:bg-slate-900 p-6">
                <p className="mb-4 text-lg text-slate-700 dark:text-slate-300">
                  Le PUE mesure l'efficacité énergétique d'un datacenter en comparant l'énergie totale consommée à
                  l'énergie utilisée par les équipements informatiques.
                </p>
                <div className="rounded-lg bg-blue-100 dark:bg-blue-900/30 p-4">
                  <p className="text-center text-xl font-bold text-blue-900 dark:text-blue-100">
                    PUE = Énergie totale / Énergie des serveurs
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="mb-4 text-center text-lg font-semibold text-slate-900 dark:text-slate-100">Interprétation du PUE</h4>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-xl bg-emerald-50 dark:bg-emerald-900/20 p-4 text-center">
                  <div className="mb-2 text-3xl font-bold text-emerald-700 dark:text-emerald-400">1.0</div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Parfait (théorique)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">100% de l'énergie pour les serveurs</p>
                </div>
                <div className="rounded-xl bg-blue-50 dark:bg-blue-900/20 p-4 text-center">
                  <div className="mb-2 text-3xl font-bold text-blue-700 dark:text-blue-400">1.5</div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Bon</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">33% d'énergie perdue</p>
                </div>
                <div className="rounded-xl bg-amber-50 dark:bg-amber-900/20 p-4 text-center">
                  <div className="mb-2 text-3xl font-bold text-amber-700 dark:text-amber-400">2.0+</div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">À améliorer</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">50%+ d'énergie perdue</p>
                </div>
              </div>
            </div>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={pueComparisonData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="type" stroke="#64748b" />
                <YAxis stroke="#64748b" domain={[0, 3]} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#fff", border: "2px solid #e2e8f0", borderRadius: "0.5rem" }}
                />
                <Bar dataKey="pue" fill="#3b82f6" radius={[8, 8, 0, 0]} name="PUE" />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* Interactive PUE Calculator */}
          <Card className="border-2 border-blue-500 bg-blue-50 dark:bg-blue-900/10 dark:border-blue-700 p-8 lg:p-12">
            <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-slate-100">Simulateur d'efficacité énergétique</h3>
            <p className="mb-8 text-slate-700 dark:text-slate-300">
              Ajustez le PUE et le nombre de serveurs pour voir l'impact sur la consommation et le gaspillage
              énergétique.
            </p>

            <div className="mb-8 grid gap-8 lg:grid-cols-2">
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-medium text-slate-700 dark:text-slate-300">PUE du datacenter</span>
                  <span className="text-2xl font-bold text-blue-700 dark:text-blue-400">{pueValue[0].toFixed(2)}</span>
                </div>
                <Slider value={pueValue} onValueChange={setPueValue} min={1.0} max={3.0} step={0.1} className="mb-2" />
                <div className="flex justify-between text-xs text-slate-500">
                  <span>1.0 (Optimal)</span>
                  <span>3.0 (Inefficace)</span>
                </div>
              </div>

              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-medium text-slate-700 dark:text-slate-300">Nombre de serveurs</span>
                  <span className="text-2xl font-bold text-blue-700 dark:text-blue-400">{serverCount[0]}</span>
                </div>
                <Slider
                  value={serverCount}
                  onValueChange={setServerCount}
                  min={10}
                  max={1000}
                  step={10}
                  className="mb-2"
                />
                <div className="flex justify-between text-xs text-slate-500">
                  <span>10 serveurs</span>
                  <span>1000 serveurs</span>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl bg-white dark:bg-slate-900 p-6">
                <div className="mb-2 text-sm font-medium text-slate-600 dark:text-slate-400">Puissance serveurs</div>
                <div className="mb-1 text-3xl font-bold text-slate-900 dark:text-slate-100">{totalPower.toFixed(0)} kW</div>
                <p className="text-xs text-slate-500 dark:text-slate-500">Charge utile</p>
              </div>

              <div className="rounded-xl bg-white p-6">
                <div className="mb-2 text-sm font-medium text-slate-600">Énergie gaspillée</div>
                <div className="mb-1 text-3xl font-bold text-amber-700">{wastedPower.toFixed(0)} kW</div>
                <p className="text-xs text-slate-500">{wastePercentage}% de perte</p>
              </div>

              <div className="rounded-xl bg-white p-6">
                <div className="mb-2 text-sm font-medium text-slate-600">Puissance totale</div>
                <div className="mb-1 text-3xl font-bold text-blue-700">{(totalPower * pueValue[0]).toFixed(0)} kW</div>
                <p className="text-xs text-slate-500">Consommation réelle</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Cooling Methods */}
      <section className="bg-slate-50 px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 dark:text-slate-100 lg:text-4xl">
            Méthodes de refroidissement
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {coolingMethods.map((method, index) => (
              <Card key={index} className={`border-2 border-${method.color}-500 bg-${method.color}-50 p-6`}>
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-${method.color}-600`}>
                      <Thermometer className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-slate-100">{method.name}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">PUE: {method.pue}</p>
                    </div>
                  </div>
                  <div
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${method.efficiency === "Très élevée"
                      ? "bg-emerald-600 text-white"
                      : method.efficiency === "Élevée"
                        ? "bg-teal-600 text-white"
                        : method.efficiency === "Moyenne"
                          ? "bg-blue-600 text-white"
                          : "bg-amber-600 text-white"
                      }`}
                  >
                    {method.efficiency}
                  </div>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300">{method.description}</p>
              </Card>
            ))}
          </div>

          <div className="mt-8 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border-2 border-emerald-200 dark:border-emerald-800 p-6">
            <div className="flex items-start gap-3">
              <TrendingDown className="mt-1 h-5 w-5 shrink-0 text-emerald-700 dark:text-emerald-400" />
              <p className="text-slate-700 dark:text-slate-300">
                <strong>Tendance :</strong> Les datacenters modernes adoptent de plus en plus le refroidissement liquide
                et l'immersion, permettant de réduire le PUE de 2.0 à 1.1, soit une économie d'énergie de 45%.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Management Section */}
      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 dark:text-slate-100 lg:text-4xl">
            Gestion intelligente de l'énergie
          </h2>

          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="border-2 border-slate-200 p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-100">
                  <Zap className="h-7 w-7 text-blue-700" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Optimisation horaire</h3>
              </div>
              <p className="mb-6 text-slate-700 dark:text-slate-300">
                Les datacenters modernes adaptent leur consommation en fonction de la disponibilité des énergies
                renouvelables et des tarifs électriques.
              </p>
              <div className="space-y-4">
                <div className="rounded-xl bg-emerald-50 dark:bg-emerald-900/20 p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-semibold text-slate-900 dark:text-slate-100">Heures creuses (2h-6h)</span>
                    <span className="text-emerald-700 dark:text-emerald-400 font-bold">Optimal</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Lancement des tâches intensives (sauvegardes, calculs batch) quand l'énergie éolienne est abondante
                  </p>
                </div>
                <div className="rounded-xl bg-blue-50 dark:bg-blue-900/20 p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-semibold text-slate-900 dark:text-slate-100">Heures pleines (10h-20h)</span>
                    <span className="text-blue-700 dark:text-blue-400 font-bold">Modéré</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Priorisation des services critiques, report des tâches non urgentes
                  </p>
                </div>
                <div className="rounded-xl bg-amber-50 dark:bg-amber-900/20 p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-semibold text-slate-900 dark:text-slate-100">Pics de consommation (18h-20h)</span>
                    <span className="text-amber-700 dark:text-amber-400 font-bold">Réduit</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Réduction volontaire de la charge pour soulager le réseau électrique
                  </p>
                </div>
              </div>
            </Card>

            <Card className="border-2 border-slate-200 p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-teal-100">
                  <Wind className="h-7 w-7 text-teal-700" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Mix énergétique dynamique</h3>
              </div>
              <p className="mb-6 text-slate-700 dark:text-slate-300">
                Les datacenters peuvent basculer entre différentes sources d'énergie en temps réel selon leur
                disponibilité et leur empreinte carbone.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-100">
                    <Sun className="h-6 w-6 text-yellow-700" />
                  </div>
                  <div className="flex-1">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">Solaire</span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">10h-16h</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                      <div className="h-full w-[35%] rounded-full bg-yellow-500" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100">
                    <Wind className="h-6 w-6 text-blue-700" />
                  </div>
                  <div className="flex-1">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">Éolien</span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">Variable</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                      <div className="h-full w-[45%] rounded-full bg-blue-500" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-100">
                    <Droplets className="h-6 w-6 text-teal-700" />
                  </div>
                  <div className="flex-1">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-900">Hydraulique</span>
                      <span className="text-sm text-slate-600">24h/24</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                      <div className="h-full w-[70%] rounded-full bg-teal-500" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100">
                    <Zap className="h-6 w-6 text-purple-700" />
                  </div>
                  <div className="flex-1">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">Nucléaire</span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">24h/24</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                      <div className="h-full w-[90%] rounded-full bg-purple-500" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-teal-50 dark:bg-teal-900/20 border-2 border-teal-200 dark:border-teal-800 p-4">
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  <strong>En France :</strong> Le mix énergétique bas-carbone (70% nucléaire + 12% hydraulique) permet
                  aux datacenters français d'avoir une empreinte carbone 4x inférieure à la moyenne mondiale.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Green Datacenter Best Practices Section */}
      <section className="bg-slate-50 px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 dark:text-slate-100 lg:text-4xl">
            Datacenters verts : les meilleures pratiques
          </h2>

          <div className="mb-8 grid gap-6 md:grid-cols-3">
            <Card className="border-2 border-emerald-500 bg-emerald-50 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-slate-100">Récupération de chaleur</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                La chaleur produite par les serveurs peut chauffer des bâtiments, des serres ou des piscines
                municipales. Économie : 20-40% d'énergie.
              </p>
            </Card>

            <Card className="border-2 border-blue-500 bg-blue-50 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
                <Server className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-slate-100">Virtualisation poussée</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Un serveur physique peut héberger 10-20 machines virtuelles. Taux d'utilisation optimal : 70-80% au lieu
                de 10-15%.
              </p>
            </Card>

            <Card className="border-2 border-teal-500 bg-teal-50 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-600">
                <TrendingDown className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-slate-100">Extinction intelligente</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Les serveurs inutilisés sont automatiquement mis en veille ou éteints. Économie potentielle : 30% de la
                consommation.
              </p>
            </Card>
          </div>

          <Card className="border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-8">
            <h3 className="mb-6 text-xl font-bold text-slate-900 dark:text-slate-100">Exemples de datacenters verts en France</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-600">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-slate-900 dark:text-slate-100">Scaleway (Paris)</h4>
                  <p className="mb-2 text-sm text-slate-700 dark:text-slate-300">
                    PUE de 1.2, refroidissement par air extérieur, 100% énergie renouvelable, récupération de chaleur
                    pour chauffer des logements sociaux.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-medium text-white">
                      PUE 1.2
                    </span>
                    <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-medium text-white">
                      100% renouvelable
                    </span>
                    <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-medium text-white">
                      Récupération chaleur
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-slate-900 dark:text-slate-100">OVHcloud (Roubaix)</h4>
                  <p className="mb-2 text-sm text-slate-700 dark:text-slate-300">
                    Refroidissement par eau de pluie, PUE de 1.09, serveurs conçus en interne pour maximiser
                    l'efficacité, engagement neutralité carbone 2025.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">PUE 1.09</span>
                    <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                      Eau de pluie
                    </span>
                    <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                      Neutralité 2025
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl bg-teal-50 dark:bg-teal-900/20 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-600">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-slate-900 dark:text-slate-100">Qarnot Computing (Paris)</h4>
                  <p className="mb-2 text-sm text-slate-700 dark:text-slate-300">
                    Concept innovant : serveurs-radiateurs installés dans des logements et bureaux. 100% de la chaleur
                    récupérée, PUE théorique de 1.0.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-teal-600 px-3 py-1 text-xs font-medium text-white">PUE 1.0</span>
                    <span className="rounded-full bg-teal-600 px-3 py-1 text-xs font-medium text-white">
                      100% chaleur récupérée
                    </span>
                    <span className="rounded-full bg-teal-600 px-3 py-1 text-xs font-medium text-white">
                      Innovation
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* France Specifics */}
      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 dark:text-slate-100 lg:text-4xl">Les datacenters en France</h2>
          <div className="grid gap-8 lg:grid-cols-3">
            <Card className="border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30">
                <Zap className="h-6 w-6 text-blue-700 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-slate-100">Mix énergétique favorable</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                La France utilise majoritairement de l'énergie nucléaire (70%) et renouvelable, avec une empreinte
                carbone plus faible que la moyenne mondiale.
              </p>
            </Card>

            <Card className="border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 dark:bg-teal-900/30">
                <Droplets className="h-6 w-6 text-teal-700 dark:text-teal-400" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-slate-100">Climat tempéré</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Le climat français permet d'utiliser le free cooling une grande partie de l'année, réduisant les besoins
                en climatisation.
              </p>
            </Card>

            <Card className="border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/30">
                <Leaf className="h-6 w-6 text-emerald-700 dark:text-emerald-400" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-slate-100">Réglementation stricte</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                La France impose des normes environnementales strictes pour les nouveaux datacenters, favorisant
                l'efficacité énergétique.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="bg-gradient-to-br from-teal-600 to-blue-700 dark:from-teal-900 dark:to-blue-900 px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-white lg:text-4xl">
            Bonnes pratiques pour réduire l'impact
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-2 border-teal-200 dark:border-teal-800 bg-white/95 dark:bg-slate-900/95 p-6">
              <h3 className="mb-4 font-bold text-slate-900 dark:text-slate-100">Pour les utilisateurs</h3>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex gap-2">
                  <span className="text-teal-600">•</span>
                  <span>Nettoyer régulièrement ses données cloud</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-600">•</span>
                  <span>Limiter le stockage de fichiers volumineux</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-600">•</span>
                  <span>Privilégier les hébergeurs verts</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-600">•</span>
                  <span>Désactiver la synchronisation automatique</span>
                </li>
              </ul>
            </Card>

            <Card className="border-2 border-blue-200 dark:border-blue-800 bg-white/95 dark:bg-slate-900/95 p-6">
              <h3 className="mb-4 font-bold text-slate-900 dark:text-slate-100">Pour les entreprises</h3>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Optimiser l'utilisation des serveurs</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Virtualiser et mutualiser les ressources</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Choisir des datacenters avec PUE bas</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Mesurer et monitorer la consommation</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-slate-100 lg:text-4xl">Agissez pour un cloud plus vert</h2>
          <p className="mb-8 text-lg text-slate-600 dark:text-slate-400">
            Découvrez comment réduire votre empreinte numérique et adoptez les bonnes pratiques au quotidien.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
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
      <section className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <h3 className="mb-4 text-sm font-semibold text-slate-900 dark:text-slate-100">Sources</h3>
          <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
            <span>ADEME - Impact environnemental du numérique (2023)</span>
            <span>•</span>
            <span>IEA - Data Centres and Data Transmission Networks (2024)</span>
            <span>•</span>
            <span>GreenIT.fr - Étude datacenters (2023)</span>
          </div>
        </div>
      </section>
    </div>
  )
}
