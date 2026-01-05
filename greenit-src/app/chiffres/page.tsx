"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { Download, TrendingUp, Globe, MapPin, Zap } from "lucide-react"
import { AnimatedDataFlow } from "@/components/animated-data-flow"
import { GrowthAnimation } from "@/components/growth-animation"
import dynamic from "next/dynamic"

const LeafletMap = dynamic(() => import("@/components/leaflet-map"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[400px] items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800">
      <p className="text-slate-500">Chargement de la carte...</p>
    </div>
  ),
})

// Data for E-Waste Evolution
const eWasteData = [
  { year: "2010", monde: 33.8, france: 1.2 },
  { year: "2012", monde: 38.5, france: 1.3 },
  { year: "2014", monde: 41.8, france: 1.35 },
  { year: "2016", monde: 44.7, france: 1.4 },
  { year: "2018", monde: 48.2, france: 1.42 },
  { year: "2019", monde: 53.6, france: 1.45 },
  { year: "2020", monde: 55.3, france: 1.48 },
  { year: "2022", monde: 62.0, france: 1.52 },
  { year: "2024", monde: 68.5, france: 1.58 },
  { year: "2025", monde: 69.8, france: 1.61 },
  { year: "2026", monde: 72.4, france: 1.67 },
];

// Data for CO2 Breakdown by Lifecycle Phase
const co2BreakdownData = [
  { phase: "Extraction", percentage: 15, value: 15, fill: "#f59e0b" },
  { phase: "Fabrication", percentage: 60, value: 60, fill: "#64748b" },
  { phase: "Transport", percentage: 5, value: 5, fill: "#3b82f6" },
  { phase: "Usage", percentage: 18, value: 18, fill: "#10b981" },
  { phase: "Fin de vie", percentage: 2, value: 2, fill: "#14b8a6" },
]

// Data for Device Comparison
const deviceComparisonData = [
  { device: "Smartphone", co2: 50, energy: 250, water: 12000 },
  { device: "Tablette", co2: 75, energy: 350, water: 15000 },
  { device: "Ordinateur portable", co2: 156, energy: 800, water: 20000 },
  { device: "Ordinateur fixe", co2: 296, energy: 1200, water: 30000 },
  { device: 'Écran 24"', co2: 248, energy: 600, water: 18000 },
]

// Data for Recycling Rates by Country
const recyclingRatesData = [
  { country: "France", rate: 46 },
  { country: "Allemagne", rate: 52 },
  { country: "Suède", rate: 54 },
  { country: "Royaume-Uni", rate: 44 },
  { country: "Espagne", rate: 39 },
  { country: "Italie", rate: 45 },
  { country: "Moyenne UE", rate: 43 },
  { country: "Moyenne mondiale", rate: 22 },
]

// French recycling points (sample data)
const recyclingPoints = [
  { city: "Paris", lat: 48.8566, lng: 2.3522, points: 245 },
  { city: "Lyon", lat: 45.764, lng: 4.8357, points: 98 },
  { city: "Marseille", lat: 43.2965, lng: 5.3698, points: 112 },
  { city: "Toulouse", lat: 43.6047, lng: 1.4442, points: 87 },
  { city: "Bordeaux", lat: 44.8378, lng: -0.5792, points: 76 },
  { city: "Lille", lat: 50.6292, lng: 3.0573, points: 65 },
  { city: "Nantes", lat: 47.2184, lng: -1.5536, points: 58 },
  { city: "Strasbourg", lat: 48.5734, lng: 7.7521, points: 52 },
]

export default function ChiffresPage() {
  const [selectedMetric, setSelectedMetric] = useState<"co2" | "energy" | "water">("co2")

  const downloadChart = (chartName: string) => {
    // In a real implementation, this would export the chart as PNG/SVG
    alert(`Téléchargement du graphique "${chartName}" (fonctionnalité à implémenter)`)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-teal-50 to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-2 text-sm font-medium text-blue-800 dark:text-blue-300">
            <TrendingUp className="h-4 w-4" />
            Données et statistiques
          </div>
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 lg:text-5xl">
            Les chiffres du numérique en France et dans le monde
          </h1>
          <p className="text-pretty text-lg text-slate-600 dark:text-slate-300 lg:text-xl">
            Visualisez l'impact environnemental du numérique à travers des données récentes et sourcées.
          </p>
        </div>
      </section>

      {/* Animated Data Flow Visualization */}
      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-900 dark:text-slate-100 lg:text-4xl">Le parcours des données</h2>
          <p className="mb-12 text-center text-lg text-slate-600 dark:text-slate-300">
            Visualisation du flux de données entre votre appareil et les datacenters
          </p>
          <AnimatedDataFlow />
        </div>
      </section>

      {/* Growth Animation */}
      <section className="bg-slate-50 dark:bg-slate-900 px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <GrowthAnimation />
        </div>
      </section>

      {/* E-Waste Evolution Chart */}
      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
            <div>
              <h2 className="mb-2 text-3xl font-bold text-slate-900 dark:text-slate-100">Évolution des déchets électroniques</h2>
              <p className="text-slate-600 dark:text-slate-400">Production mondiale et française de e-déchets (2010-2026)</p>
            </div>
            <Button variant="outline" onClick={() => downloadChart("evolution-e-waste")}>
              <Download className="mr-2 h-4 w-4" />
              Exporter
            </Button>
          </div>

          <Card className="border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 lg:p-8">
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={eWasteData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="year" stroke="#64748b" />
                <YAxis stroke="#64748b" label={{ value: "Millions de tonnes", angle: -90, position: "insideLeft" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--card)",
                    border: "2px solid var(--border)",
                    borderRadius: "0.5rem",
                    color: "var(--foreground)"
                  }}
                  itemStyle={{ color: "var(--foreground)" }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="monde"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  name="Monde (Mt)"
                  dot={{ fill: "#3b82f6", r: 5 }}
                />
                <Line
                  type="monotone"
                  dataKey="france"
                  stroke="#10b981"
                  strokeWidth={3}
                  name="France (Mt)"
                  dot={{ fill: "#10b981", r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-6 rounded-lg bg-blue-50 dark:bg-blue-900/20 p-4">
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Analyse :</strong> La production mondiale de déchets électroniques a doublé en 15 ans, passant
                de 34 Mt en 2010 à 72 Mt début 2026. En France, nous produisons environ 1,7 million de tonnes par an, soit
                25 kg par habitant.
              </p>
            </div>
          </Card>

          <div className="mt-4 text-sm text-slate-500 dark:text-slate-400">Source : Global E-Waste Monitor, ONU (2024) • ADEME (2023)</div>
        </div>
      </section>

      {/* CO2 Breakdown Pie Chart */}
      <section className="bg-slate-50 dark:bg-slate-900 px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
            <div>
              <h2 className="mb-2 text-3xl font-bold text-slate-900 dark:text-slate-100">Répartition de l'empreinte carbone</h2>
              <p className="text-slate-600 dark:text-slate-400">Impact CO₂ par phase du cycle de vie d'un smartphone</p>
            </div>
            <Button variant="outline" onClick={() => downloadChart("co2-breakdown")}>
              <Download className="mr-2 h-4 w-4" />
              Exporter
            </Button>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 lg:p-8">
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={co2BreakdownData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ phase, percentage }) => `${phase}: ${percentage}%`}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {co2BreakdownData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "var(--card)",
                      border: "2px solid var(--border)",
                      borderRadius: "0.5rem",
                      color: "var(--foreground)"
                    }}
                    itemStyle={{ color: "var(--foreground)" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </Card>

            <div className="flex flex-col justify-center space-y-4">
              {co2BreakdownData.map((item) => (
                <div key={item.phase} className="flex items-center gap-4">
                  <div className="h-12 w-12 shrink-0 rounded-lg" style={{ backgroundColor: item.fill }} />
                  <div className="flex-1">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="font-semibold text-slate-900 dark:text-slate-100">{item.phase}</span>
                      <span className="text-lg font-bold text-slate-900 dark:text-slate-100">{item.percentage}%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${item.percentage}%`, backgroundColor: item.fill }}
                      />
                    </div>
                  </div>
                </div>
              ))}

              <div className="mt-6 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border-2 border-emerald-200 dark:border-emerald-800 p-4">
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  <strong>Point clé :</strong> La fabrication représente 60% de l'empreinte carbone totale. Garder son
                  smartphone 1 an de plus réduit son impact annuel de 25%.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 text-sm text-slate-500 dark:text-slate-400">Source : ADEME - Impact environnemental du numérique (2023)</div>
        </div>
      </section>

      {/* Device Comparison Chart */}
      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
            <div>
              <h2 className="mb-2 text-3xl font-bold text-slate-900 dark:text-slate-100">Comparaison par appareil</h2>
              <p className="text-slate-600 dark:text-slate-400">Impact environnemental de la fabrication selon le type d'équipement</p>
            </div>
            <div className="flex gap-2">
              <Button
                variant={selectedMetric === "co2" ? "default" : "outline"}
                onClick={() => setSelectedMetric("co2")}
                className={selectedMetric === "co2" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
              >
                CO₂ (kg)
              </Button>
              <Button
                variant={selectedMetric === "energy" ? "default" : "outline"}
                onClick={() => setSelectedMetric("energy")}
                className={selectedMetric === "energy" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
              >
                Énergie (kWh)
              </Button>
              <Button
                variant={selectedMetric === "water" ? "default" : "outline"}
                onClick={() => setSelectedMetric("water")}
                className={selectedMetric === "water" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
              >
                Eau (L)
              </Button>
            </div>
          </div>

          <Card className="border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 lg:p-8">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={deviceComparisonData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="device" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--card)",
                    border: "2px solid var(--border)",
                    borderRadius: "0.5rem",
                    color: "var(--foreground)"
                  }}
                  itemStyle={{ color: "var(--foreground)" }}
                />
                <Bar
                  dataKey={selectedMetric}
                  fill="#10b981"
                  radius={[8, 8, 0, 0]}
                  name={
                    selectedMetric === "co2" ? "CO₂ (kg)" : selectedMetric === "energy" ? "Énergie (kWh)" : "Eau (L)"
                  }
                />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <div className="mt-4 text-sm text-slate-500 dark:text-slate-400">Source : ADEME - Base Impacts (2023)</div>
        </div>
      </section>

      {/* Recycling Rates Chart */}
      <section className="bg-slate-50 dark:bg-slate-900 px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
            <div>
              <h2 className="mb-2 text-3xl font-bold text-slate-900 dark:text-slate-100">Taux de recyclage par pays</h2>
              <p className="text-slate-600 dark:text-slate-400">Pourcentage de déchets électroniques correctement recyclés</p>
            </div>
            <Button variant="outline" onClick={() => downloadChart("recycling-rates")}>
              <Download className="mr-2 h-4 w-4" />
              Exporter
            </Button>
          </div>

          <Card className="border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 lg:p-8">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={recyclingRatesData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis type="number" stroke="#64748b" unit="%" />
                <YAxis dataKey="country" type="category" stroke="#64748b" width={120} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--card)",
                    border: "2px solid var(--border)",
                    borderRadius: "0.5rem",
                    color: "var(--foreground)"
                  }}
                  itemStyle={{ color: "var(--foreground)" }}
                />
                <Bar dataKey="rate" fill="#14b8a6" radius={[0, 8, 8, 0]} name="Taux de recyclage (%)" />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-6 rounded-lg bg-teal-50 dark:bg-teal-900/20 p-4">
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Analyse :</strong> La France recycle 46% de ses déchets électroniques, soit le double de la
                moyenne mondiale (22%). Les pays nordiques comme la Suède atteignent 54%, montrant qu'il est possible de
                faire mieux.
              </p>
            </div>
          </Card>

          <div className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            Source : Global E-Waste Monitor (2024) • Eurostat (2025) • Ecosystem
          </div>
        </div>
      </section>

      {/* Recycling Points Map */}
      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <h2 className="mb-2 text-3xl font-bold text-slate-900 dark:text-slate-100">Points de collecte en France</h2>
            <p className="text-slate-600 dark:text-slate-400">Nombre de points de collecte dans les principales villes françaises</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Leaflet Map */}
            <div className="h-[400px]">
              <LeafletMap points={recyclingPoints} />
            </div>

            {/* City List */}
            <div className="space-y-3">
              {recyclingPoints.map((point) => (
                <Card key={point.city} className="border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                        <MapPin className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 dark:text-slate-100">{point.city}</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">
                          {point.lat.toFixed(4)}°N, {Math.abs(point.lng).toFixed(4)}°{point.lng >= 0 ? "E" : "W"}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">{point.points}</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">points</div>
                    </div>
                  </div>
                </Card>
              ))}

              <div className="mt-6 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border-2 border-emerald-200 dark:border-emerald-800 p-4">
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  <strong>Plus de 15 000 points de collecte</strong> sont disponibles en France pour recycler vos
                  appareils électroniques : déchetteries, magasins, ressourceries...
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 text-sm text-slate-500 dark:text-slate-400">Source : Ecosystem • Écologic (2024)</div>
        </div>
      </section>

      {/* Key Stats Summary */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-700 dark:from-emerald-900 dark:to-teal-900 px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-white lg:text-4xl">En résumé</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <Globe className="mx-auto mb-4 h-12 w-12 text-emerald-100" />
              <div className="mb-2 text-4xl font-bold text-white">72,4 Mt</div>
              <p className="text-emerald-50">de e-déchets produits dans le monde en 2026</p>
            </div>
            <div className="text-center">
              <Zap className="mx-auto mb-4 h-12 w-12 text-emerald-100" />
              <div className="mb-2 text-4xl font-bold text-white">60%</div>
              <p className="text-emerald-50">de l'impact vient de la fabrication</p>
            </div>
            <div className="text-center">
              <MapPin className="mx-auto mb-4 h-12 w-12 text-emerald-100" />
              <div className="mb-2 text-4xl font-bold text-white">46%</div>
              <p className="text-emerald-50">taux de recyclage en France</p>
            </div>
            <div className="text-center">
              <TrendingUp className="mx-auto mb-4 h-12 w-12 text-emerald-100" />
              <div className="mb-2 text-4xl font-bold text-white">+113%</div>
              <p className="text-emerald-50">d'augmentation des e-déchets depuis 2010</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
