"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Progress } from "@/components/ui/progress"
import {
  Calculator,
  Lightbulb,
  Trophy,
  Download,
  Share2,
  RotateCcw,
  Globe,
  TrendingUp,
  Cloud,
  ClipboardCheck,
  Brain,
} from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import jsPDF from "jspdf"
import "jspdf-autotable"

// Constants for PDF generation
const PDF_COLORS = {
  primary: [5, 150, 105], // emerald-600
  secondary: [16, 185, 129], // emerald-500
  text: [30, 41, 59], // slate-800
  lightText: [100, 116, 139], // slate-500
  bg: [248, 250, 252], // slate-50
}

import { QuizGreenITAdvanced } from "@/components/quiz-green-it-advanced"
import { WebsiteCarbonCalculator } from "@/components/website-carbon-calculator"

export default function OutilsPage() {
  const [activeTab, setActiveTab] = useState<
    "calculator" | "simulator" | "quiz" | "website" | "enterprise" | "cloud" | "audit"
  >("calculator")

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:bg-gradient-to-b dark:from-green-900 dark:to-gray-900">
      <div className="bg-gradient-to-br from-emerald-600 to-teal-700 px-6 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center text-white">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur px-4 py-2 text-sm font-medium">
              <Lightbulb className="h-4 w-4" />
              Espace Outils Interactifs
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-balance">
              Mesurez, Simulez, Apprenez
            </h1>
            <p className="text-lg text-emerald-50 mb-8 max-w-3xl mx-auto text-pretty">
              Sept outils interactifs pour comprendre votre impact numérique, optimiser vos choix, et évaluer vos
              connaissances sur le Green IT avec des données 2025 sourcées.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            <button
              onClick={() => setActiveTab("calculator")}
              className={`group relative overflow-hidden rounded-xl border-2 p-6 text-left transition-all ${activeTab === "calculator"
                ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 shadow-lg"
                : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-emerald-300 hover:shadow-md"
                }`}
            >
              <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl transition-colors ${activeTab === "calculator"
                  ? "bg-emerald-600 text-white"
                  : "bg-emerald-100 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white"
                  }`}
              >
                <Calculator className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-gray-100 mb-2">Empreinte carbone</h3>
              <p className="text-xs text-slate-600 dark:text-gray-300">Calculez votre impact personnel</p>
              {activeTab === "calculator" && (
                <div className="absolute top-4 right-4 h-3 w-3 rounded-full bg-emerald-600 animate-pulse" />
              )}
            </button>

            <button
              onClick={() => setActiveTab("website")}
              className={`group relative overflow-hidden rounded-xl border-2 p-6 text-left transition-all ${activeTab === "website"
                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-lg"
                : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-blue-300 hover:shadow-md"
                }`}
            >
              <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl transition-colors ${activeTab === "website"
                  ? "bg-blue-600 text-white"
                  : "bg-blue-100 text-blue-700 group-hover:bg-blue-600 group-hover:text-white"
                  }`}
              >
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-gray-100 mb-2">Analyse de site web</h3>
              <p className="text-xs text-slate-600 dark:text-gray-300">Impact carbone d'une URL</p>
              {activeTab === "website" && (
                <div className="absolute top-4 right-4 h-3 w-3 rounded-full bg-blue-600 animate-pulse" />
              )}
            </button>

            <button
              onClick={() => setActiveTab("simulator")}
              className={`group relative overflow-hidden rounded-xl border-2 p-6 text-left transition-all ${activeTab === "simulator"
                ? "border-teal-500 bg-teal-50 dark:bg-teal-900/20 shadow-lg"
                : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-teal-300 hover:shadow-md"
                }`}
            >
              <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl transition-colors ${activeTab === "simulator"
                  ? "bg-teal-600 text-white"
                  : "bg-teal-100 text-teal-700 group-hover:bg-teal-600 group-hover:text-white"
                  }`}
              >
                <Lightbulb className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-gray-100 mb-2">Simulateur sobriété</h3>
              <p className="text-xs text-slate-600 dark:text-gray-300">Visualisez vos économies</p>
              {activeTab === "simulator" && (
                <div className="absolute top-4 right-4 h-3 w-3 rounded-full bg-teal-600 animate-pulse" />
              )}
            </button>

            <button
              onClick={() => setActiveTab("enterprise")}
              className={`group relative overflow-hidden rounded-xl border-2 p-6 text-left transition-all ${activeTab === "enterprise"
                ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20 shadow-lg"
                : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-purple-300 hover:shadow-md"
                }`}
            >
              <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl transition-colors ${activeTab === "enterprise"
                  ? "bg-purple-600 text-white"
                  : "bg-purple-100 text-purple-700 group-hover:bg-purple-600 group-hover:text-white"
                  }`}
              >
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-gray-100 mb-2">Économies entreprise</h3>
              <p className="text-xs text-slate-600 dark:text-gray-300">ROI Green IT sur 5 ans</p>
              {activeTab === "enterprise" && (
                <div className="absolute top-4 right-4 h-3 w-3 rounded-full bg-purple-600 animate-pulse" />
              )}
            </button>

            <button
              onClick={() => setActiveTab("cloud")}
              className={`group relative overflow-hidden rounded-xl border-2 p-6 text-left transition-all ${activeTab === "cloud"
                ? "border-cyan-500 bg-cyan-50 dark:bg-cyan-900/20 shadow-lg"
                : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-cyan-300 hover:shadow-md"
                }`}
            >
              <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl transition-colors ${activeTab === "cloud"
                  ? "bg-cyan-600 text-white"
                  : "bg-cyan-100 text-cyan-700 group-hover:bg-cyan-600 group-hover:text-white"
                  }`}
              >
                <Cloud className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-gray-100 mb-2">Comparateur cloud</h3>
              <p className="text-xs text-slate-600 dark:text-gray-300">Hébergeurs éco-responsables</p>
              {activeTab === "cloud" && (
                <div className="absolute top-4 right-4 h-3 w-3 rounded-full bg-cyan-600 animate-pulse" />
              )}
            </button>

            <button
              onClick={() => setActiveTab("audit")}
              className={`group relative overflow-hidden rounded-xl border-2 p-6 text-left transition-all ${activeTab === "audit"
                ? "border-orange-500 bg-orange-50 dark:bg-orange-900/20 shadow-lg"
                : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-orange-300 hover:shadow-md"
                }`}
            >
              <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl transition-colors ${activeTab === "audit"
                  ? "bg-orange-600 text-white"
                  : "bg-orange-100 text-orange-700 group-hover:bg-orange-600 group-hover:text-white"
                  }`}
              >
                <ClipboardCheck className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-gray-100 mb-2">Audit parc IT</h3>
              <p className="text-xs text-slate-600 dark:text-gray-300">Optimisez votre matériel</p>
              {activeTab === "audit" && (
                <div className="absolute top-4 right-4 h-3 w-3 rounded-full bg-orange-600 animate-pulse" />
              )}
            </button>

            <button
              onClick={() => setActiveTab("quiz")}
              className={`group relative overflow-hidden rounded-xl border-2 p-6 text-left transition-all ${activeTab === "quiz"
                ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 shadow-lg"
                : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-indigo-300 hover:shadow-md"
                }`}
            >
              <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl transition-colors ${activeTab === "quiz"
                  ? "bg-indigo-600 text-white"
                  : "bg-indigo-100 text-indigo-700 group-hover:bg-indigo-600 group-hover:text-white"
                  }`}
              >
                <Brain className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-gray-100 mb-2">Quiz Green IT</h3>
              <p className="text-xs text-slate-600 dark:text-gray-300">100 questions interactives</p>
              {activeTab === "quiz" && (
                <div className="absolute top-4 right-4 h-3 w-3 rounded-full bg-indigo-600 animate-pulse" />
              )}
            </button>
          </div>

          {/* Content */}
          {activeTab === "calculator" && <CarbonCalculator />}
          {activeTab === "website" && <WebsiteCarbonCalculator />}
          {activeTab === "simulator" && <SobrietySimulator />}
          {activeTab === "quiz" && <QuizGreenITAdvanced />}
          {activeTab === "enterprise" && <EnterpriseSimulator />}
          {activeTab === "cloud" && <CloudComparator />}
          {activeTab === "audit" && <ITAudit />}
        </div>
      </div>
    </div>
  )
}

function LabeledSlider({ value, min, max, step, onValueChange, unit }: any) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <Button
          size="icon"
          variant="outline"
          className="h-8 w-8 shrink-0"
          onClick={() => onValueChange([Math.max(min, value[0] - step)])}
          disabled={value[0] <= min}
        >
          -
        </Button>
        <div className="flex-1 relative pb-6">
          <Slider value={value} onValueChange={onValueChange} min={min} max={max} step={step} className="my-2" />
          <div className="absolute top-full left-0 w-full flex justify-between text-[10px] text-gray-500 font-mono -mt-1 select-none pointer-events-none">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="flex flex-col items-center gap-1">
                <span className="h-1 w-px bg-gray-300 dark:bg-gray-600" />
                <span>
                  {Math.round(min + ((max - min) / 4) * i)}
                  {unit}
                </span>
              </span>
            ))}
          </div>
        </div>
        <Button
          size="icon"
          variant="outline"
          className="h-8 w-8 shrink-0"
          onClick={() => onValueChange([Math.min(max, value[0] + step)])}
          disabled={value[0] >= max}
        >
          +
        </Button>
      </div>
    </div>
  )
}

function CarbonCalculator() {
  const [devices, setDevices] = useState({
    smartphone: { count: 1, age: 2, usage: 3 },
    laptop: { count: 1, age: 3, usage: 6 },
    tablet: { count: 0, age: 2, usage: 2 },
    desktop: { count: 0, age: 4, usage: 8 },
    tv: { count: 1, age: 5, usage: 4 },
  })

  const [cloudUsage, setCloudUsage] = useState({
    email: 50,
    streaming: 10,
    cloud: 20,
    social: 2,
  })

  // Calcul de l'empreinte carbone (données 2025 ADEME)
  const calculateFootprint = () => {
    let total = 0

    // Empreinte fabrication + usage annuel (kg CO2e)
    const deviceImpact = {
      smartphone: { fabrication: 55, usage: 8 },
      laptop: { fabrication: 156, usage: 22 },
      tablet: { fabrication: 63, usage: 12 },
      desktop: { fabrication: 296, usage: 88 },
      tv: { fabrication: 371, usage: 118 },
    }

    Object.entries(devices).forEach(([device, data]) => {
      if (data.count > 0) {
        const impact = deviceImpact[device as keyof typeof deviceImpact]
        // Amortissement fabrication sur durée de vie
        const fabricationPerYear = impact.fabrication / data.age
        const usageImpact = (impact.usage * data.usage) / 24 // Proportionnel à l'usage
        total += (fabricationPerYear + usageImpact) * data.count
      }
    })

    // Impact cloud et services (kg CO2e/an)
    total += cloudUsage.email * 0.3 // 0.3 kg par email/jour
    total += cloudUsage.streaming * 1.6 // 1.6 kg par heure/semaine
    total += cloudUsage.cloud * 0.2 // 0.2 kg par Go/mois
    total += cloudUsage.social * 2.5 // 2.5 kg par heure/jour

    return Math.round(total)
  }

  const totalFootprint = calculateFootprint()
  const averageFrench = 285 // kg CO2e/an pour un Français moyen (2025)
  const percentage = Math.round((totalFootprint / averageFrench) * 100)

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-green-600 dark:text-green-400" />
            Calculateur d'empreinte carbone numérique
          </CardTitle>
          <CardDescription>
            Estimez l'impact environnemental de vos équipements et usages numériques (données ADEME 2025)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Équipements */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-gray-100">Vos équipements</h3>
            <div className="space-y-6">
              {Object.entries(devices).map(([device, data]) => (
                <div
                  key={device}
                  className="space-y-3 p-4 bg-gray-50 dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center justify-between">
                    <Label className="capitalize font-medium text-gray-900 dark:text-gray-100">
                      {device === "smartphone" && "Smartphone"}
                      {device === "laptop" && "Ordinateur portable"}
                      {device === "tablet" && "Tablette"}
                      {device === "desktop" && "Ordinateur fixe"}
                      {device === "tv" && "Télévision"}
                    </Label>
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() =>
                          setDevices({
                            ...devices,
                            [device]: { ...data, count: Math.max(0, data.count - 1) },
                          })
                        }
                      >
                        -
                      </Button>
                      <span className="w-8 text-center font-semibold text-gray-900 dark:text-gray-100">
                        {data.count}
                      </span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() =>
                          setDevices({
                            ...devices,
                            [device]: { ...data, count: Math.min(5, data.count + 1) },
                          })
                        }
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  {data.count > 0 && (
                    <>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <Label className="text-sm text-gray-600 dark:text-gray-300">Âge moyen</Label>
                          <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">{data.age} ans</span>
                        </div>
                        <LabeledSlider
                          value={[data.age]}
                          onValueChange={([value]) =>
                            setDevices({
                              ...devices,
                              [device]: { ...data, age: value },
                            })
                          }
                          min={1}
                          max={10}
                          step={1}
                          unit=" ans"
                        />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <Label className="text-sm text-gray-600 dark:text-gray-300">Usage quotidien</Label>
                          <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">{data.usage}h</span>
                        </div>
                        <LabeledSlider
                          value={[data.usage]}
                          onValueChange={([value]) =>
                            setDevices({
                              ...devices,
                              [device]: { ...data, usage: value },
                            })
                          }
                          min={1}
                          max={16}
                          step={1}
                          unit="h"
                        />
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Usages cloud */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-gray-100">Vos usages numériques</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label className="text-gray-900 dark:text-gray-100">Emails envoyés par jour</Label>
                  <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">{cloudUsage.email}</span>
                </div>
                <LabeledSlider
                  value={[cloudUsage.email]}
                  onValueChange={([value]) => setCloudUsage({ ...cloudUsage, email: value })}
                  min={0}
                  max={200}
                  step={10}
                  unit=""
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label className="text-gray-900 dark:text-gray-100">Streaming vidéo (heures/semaine)</Label>
                  <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">{cloudUsage.streaming}</span>
                </div>
                <LabeledSlider
                  value={[cloudUsage.streaming]}
                  onValueChange={([value]) => setCloudUsage({ ...cloudUsage, streaming: value })}
                  min={0}
                  max={50}
                  step={1}
                  unit="h"
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label className="text-gray-900 dark:text-gray-100">Stockage cloud (Go)</Label>
                  <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">{cloudUsage.cloud}</span>
                </div>
                <LabeledSlider
                  value={[cloudUsage.cloud]}
                  onValueChange={([value]) => setCloudUsage({ ...cloudUsage, cloud: value })}
                  min={0}
                  max={200}
                  step={10}
                  unit="Go"
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label className="text-gray-900 dark:text-gray-100">Réseaux sociaux (heures/jour)</Label>
                  <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">{cloudUsage.social}</span>
                </div>
                <LabeledSlider
                  value={[cloudUsage.social]}
                  onValueChange={([value]) => setCloudUsage({ ...cloudUsage, social: value })}
                  min={0}
                  max={8}
                  step={0.5}
                  unit="h"
                />
              </div>
            </div>
          </div>

          {/* Résultats */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg border-2 border-green-200 dark:border-green-800">
            <h3 className="font-semibold text-xl mb-4 text-gray-900 dark:text-gray-100">
              Votre empreinte carbone numérique
            </h3>
            <div className="text-center mb-6">
              <div className="text-5xl font-bold text-green-700 dark:text-green-400 mb-2">{totalFootprint} kg</div>
              <div className="text-gray-700 dark:text-gray-300 font-medium">CO₂e par an</div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2 text-gray-800 dark:text-gray-200">
                  <span>Comparé à la moyenne française ({averageFrench} kg)</span>
                  <span className="font-semibold">{percentage}%</span>
                </div>
                <Progress value={Math.min(percentage, 100)} className="h-3" />
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg text-center border border-gray-200 dark:border-gray-700">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {Math.round(totalFootprint / 12)}
                  </div>
                  <div className="text-sm text-gray-700 dark:text-gray-300">kg CO₂e/mois</div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg text-center border border-gray-200 dark:border-gray-700">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {Math.round(totalFootprint * 0.7)}
                  </div>
                  <div className="text-sm text-gray-700 dark:text-gray-300">Économie possible (-30%)</div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg mt-4 border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Équivalences</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>≈ {Math.round(totalFootprint / 0.12)} km en voiture</li>
                  <li>≈ {Math.round(totalFootprint / 120)} vols Paris-New York</li>
                  <li>≈ {Math.round(totalFootprint / 0.9)} repas avec bœuf</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              <Button
                className="flex-1 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-slate-700 border border-gray-300 dark:border-gray-600"
                variant="outline"
              >
                <Download className="w-4 h-4 mr-2" />
                Télécharger le rapport
              </Button>
              <Button
                className="flex-1 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-slate-700 border border-gray-300 dark:border-gray-600"
                variant="outline"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Partager
              </Button>
            </div>
          </div>

          {/* Recommandations */}
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-gray-100">
              Recommandations personnalisées
            </h3>
            <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
              {totalFootprint > averageFrench && (
                <li>• Votre empreinte est supérieure à la moyenne. Consultez nos guides d'action pour la réduire.</li>
              )}
              {devices.smartphone.age < 3 && (
                <li>• Conservez votre smartphone au moins 5 ans pour amortir son impact de fabrication.</li>
              )}
              {cloudUsage.streaming > 20 && (
                <li>• Réduisez la qualité de streaming (720p au lieu de 4K) pour économiser 75% de CO₂.</li>
              )}
              {cloudUsage.email > 100 && (
                <li>• Nettoyez régulièrement votre boîte mail et désabonnez-vous des newsletters inutiles.</li>
              )}
              <li>• Privilégiez le reconditionné pour vos prochains achats (80% d'impact en moins).</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <div className="text-sm text-gray-600 dark:text-gray-300 text-center">
        Sources: ADEME 2025, GreenIT.fr, Shift Project • Méthodologie: ACV (Analyse du Cycle de Vie)
      </div>
    </div>
  )
}

function SobrietySimulator() {
  const [scenario, setScenario] = useState({
    deviceLifespan: 3,
    repairChoice: "new",
    streamingQuality: "4k",
    emailCleanup: "never",
    cloudStorage: "keep",
    deviceType: "new",
  })

  const calculateImpact = () => {
    const baselineImpact = 285 // kg CO2e/an moyenne française 2025
    let optimizedImpact = baselineImpact

    // Durée de vie des appareils
    if (scenario.deviceLifespan >= 5) optimizedImpact *= 0.65
    else if (scenario.deviceLifespan >= 4) optimizedImpact *= 0.75
    else if (scenario.deviceLifespan >= 3) optimizedImpact *= 0.85

    // Réparation vs remplacement
    if (scenario.repairChoice === "repair") optimizedImpact *= 0.85
    else if (scenario.repairChoice === "refurb") optimizedImpact *= 0.75

    // Qualité streaming
    if (scenario.streamingQuality === "720p") optimizedImpact *= 0.92
    else if (scenario.streamingQuality === "1080p") optimizedImpact *= 0.95

    // Nettoyage emails
    if (scenario.emailCleanup === "monthly") optimizedImpact *= 0.95
    else if (scenario.emailCleanup === "weekly") optimizedImpact *= 0.92

    // Stockage cloud
    if (scenario.cloudStorage === "optimize") optimizedImpact *= 0.93
    else if (scenario.cloudStorage === "local") optimizedImpact *= 0.88

    // Type d'appareil
    if (scenario.deviceType === "refurb") optimizedImpact *= 0.7
    else if (scenario.deviceType === "repair") optimizedImpact *= 0.8

    return {
      baseline: Math.round(baselineImpact),
      optimized: Math.round(optimizedImpact),
      savings: Math.round(baselineImpact - optimizedImpact),
      percentage: Math.round(((baselineImpact - optimizedImpact) / baselineImpact) * 100),
    }
  }

  const impact = calculateImpact()

  // Données pour le graphique de projection
  const projectionData = Array.from({ length: 6 }, (_, i) => ({
    year: `Année ${i}`,
    baseline: impact.baseline * i,
    optimized: impact.optimized * i,
    savings: (impact.baseline - impact.optimized) * i,
  }))

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-green-600 dark:text-green-400" />
            Simulateur de sobriété numérique
          </CardTitle>
          <CardDescription>
            Visualisez l'impact de vos choix de consommation numérique sur 5 ans (données 2025)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Paramètres */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label className="text-base font-semibold mb-3 block text-gray-900 dark:text-gray-100">
                  Durée de vie de vos appareils: {scenario.deviceLifespan} ans
                </Label>
                <Slider
                  value={[scenario.deviceLifespan]}
                  onValueChange={([value]) => setScenario({ ...scenario, deviceLifespan: value })}
                  min={2}
                  max={7}
                  step={1}
                  className="mt-2"
                />
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  {scenario.deviceLifespan < 3 && "Trop court ! Visez au moins 5 ans."}
                  {scenario.deviceLifespan >= 3 && scenario.deviceLifespan < 5 && "Bien, mais vous pouvez faire mieux."}
                  {scenario.deviceLifespan >= 5 && "Excellent ! Impact optimal."}
                </p>
              </div>

              <div>
                <Label className="text-base font-semibold mb-3 block text-gray-900 dark:text-gray-100">
                  En cas de panne
                </Label>
                <RadioGroup
                  value={scenario.repairChoice}
                  onValueChange={(value) => setScenario({ ...scenario, repairChoice: value })}
                >
                  <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700">
                    <RadioGroupItem value="new" id="new" />
                    <Label htmlFor="new" className="cursor-pointer flex-1 text-gray-900 dark:text-gray-100">
                      J'achète du neuf
                      <span className="block text-sm text-gray-600 dark:text-gray-300">Impact: 100%</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700">
                    <RadioGroupItem value="repair" id="repair" />
                    <Label htmlFor="repair" className="cursor-pointer flex-1 text-gray-900 dark:text-gray-100">
                      Je répare
                      <span className="block text-sm text-green-600 dark:text-green-400">Impact: -15%</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700">
                    <RadioGroupItem value="refurb" id="refurb" />
                    <Label htmlFor="refurb" className="cursor-pointer flex-1 text-gray-900 dark:text-gray-100">
                      J'achète reconditionné
                      <span className="block text-sm text-green-600 dark:text-green-400">Impact: -25%</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-base font-semibold mb-3 block text-gray-900 dark:text-gray-100">
                  Qualité de streaming
                </Label>
                <RadioGroup
                  value={scenario.streamingQuality}
                  onValueChange={(value) => setScenario({ ...scenario, streamingQuality: value })}
                >
                  <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700">
                    <RadioGroupItem value="4k" id="4k" />
                    <Label htmlFor="4k" className="cursor-pointer flex-1 text-gray-900 dark:text-gray-100">
                      4K/UHD
                      <span className="block text-sm text-gray-600 dark:text-gray-300">7 Go/h</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700">
                    <RadioGroupItem value="1080p" id="1080p" />
                    <Label htmlFor="1080p" className="cursor-pointer flex-1 text-gray-900 dark:text-gray-100">
                      Full HD (1080p)
                      <span className="block text-sm text-green-600 dark:text-green-400">3 Go/h (-5%)</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700">
                    <RadioGroupItem value="720p" id="720p" />
                    <Label htmlFor="720p" className="cursor-pointer flex-1 text-gray-900 dark:text-gray-100">
                      HD (720p)
                      <span className="block text-sm text-green-600 dark:text-green-400">0.9 Go/h (-8%)</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label className="text-base font-semibold mb-3 block text-gray-900 dark:text-gray-100">
                  Nettoyage des emails
                </Label>
                <RadioGroup
                  value={scenario.emailCleanup}
                  onValueChange={(value) => setScenario({ ...scenario, emailCleanup: value })}
                >
                  <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700">
                    <RadioGroupItem value="never" id="never" />
                    <Label htmlFor="never" className="cursor-pointer flex-1 text-gray-900 dark:text-gray-100">
                      Jamais
                      <span className="block text-sm text-gray-600 dark:text-gray-300">Boîte saturée</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700">
                    <RadioGroupItem value="monthly" id="monthly" />
                    <Label htmlFor="monthly" className="cursor-pointer flex-1 text-gray-900 dark:text-gray-100">
                      Mensuel
                      <span className="block text-sm text-green-600 dark:text-green-400">-5% d'impact</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700">
                    <RadioGroupItem value="weekly" id="weekly" />
                    <Label htmlFor="weekly" className="cursor-pointer flex-1 text-gray-900 dark:text-gray-100">
                      Hebdomadaire
                      <span className="block text-sm text-green-600 dark:text-green-400">-8% d'impact</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-base font-semibold mb-3 block text-gray-900 dark:text-gray-100">
                  Stockage cloud
                </Label>
                <RadioGroup
                  value={scenario.cloudStorage}
                  onValueChange={(value) => setScenario({ ...scenario, cloudStorage: value })}
                >
                  <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700">
                    <RadioGroupItem value="keep" id="keep" />
                    <Label htmlFor="keep" className="cursor-pointer flex-1 text-gray-900 dark:text-gray-100">
                      Je garde tout
                      <span className="block text-sm text-gray-600 dark:text-gray-300">Stockage illimité</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700">
                    <RadioGroupItem value="optimize" id="optimize" />
                    <Label htmlFor="optimize" className="cursor-pointer flex-1 text-gray-900 dark:text-gray-100">
                      J'optimise régulièrement
                      <span className="block text-sm text-green-600 dark:text-green-400">-7% d'impact</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700">
                    <RadioGroupItem value="local" id="local" />
                    <Label htmlFor="local" className="cursor-pointer flex-1 text-gray-900 dark:text-gray-100">
                      Stockage local prioritaire
                      <span className="block text-sm text-green-600 dark:text-green-400">-12% d'impact</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-base font-semibold mb-3 block text-gray-900 dark:text-gray-100">
                  Prochain achat
                </Label>
                <RadioGroup
                  value={scenario.deviceType}
                  onValueChange={(value) => setScenario({ ...scenario, deviceType: value })}
                >
                  <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700">
                    <RadioGroupItem value="new" id="device-new" />
                    <Label htmlFor="device-new" className="cursor-pointer flex-1 text-gray-900 dark:text-gray-100">
                      Neuf
                      <span className="block text-sm text-gray-600 dark:text-gray-300">Impact maximal</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700">
                    <RadioGroupItem value="repair" id="device-repair" />
                    <Label htmlFor="device-repair" className="cursor-pointer flex-1 text-gray-900 dark:text-gray-100">
                      Réparer l'ancien
                      <span className="block text-sm text-green-600 dark:text-green-400">-20% d'impact</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700">
                    <RadioGroupItem value="refurb" id="device-refurb" />
                    <Label htmlFor="device-refurb" className="cursor-pointer flex-1 text-gray-900 dark:text-gray-100">
                      Reconditionné
                      <span className="block text-sm text-green-600 dark:text-green-400">-30% d'impact</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>

          {/* Résultats */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-lg border-2 border-green-200 dark:border-green-800">
            <h3 className="font-semibold text-xl mb-6 text-gray-900 dark:text-gray-100">Impact de vos choix</h3>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg text-center border border-gray-200 dark:border-gray-700">
                <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">Scénario actuel</div>
                <div className="text-3xl font-bold text-gray-700 dark:text-gray-100">{impact.baseline}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">kg CO₂e/an</div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg text-center border border-gray-200 dark:border-gray-700">
                <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">Avec sobriété</div>
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">{impact.optimized}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">kg CO₂e/an</div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg text-center border border-gray-200 dark:border-gray-700">
                <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">Économie</div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">-{impact.percentage}%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{impact.savings} kg/an</div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg mb-6 border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Projection sur 5 ans</h4>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={projectionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
                  <XAxis dataKey="year" stroke="rgba(255, 255, 255, 0.6)" />
                  <YAxis stroke="rgba(255, 255, 255, 0.6)" />
                  <RechartsTooltip wrapperStyle={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }} />
                  <Line type="monotone" dataKey="baseline" stroke="#9ca3af" name="Sans changement" strokeWidth={2} />
                  <Line type="monotone" dataKey="optimized" stroke="#10b981" name="Avec sobriété" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
              <div className="text-center mt-4">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {Math.round(impact.savings * 5)} kg CO₂e économisés
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">sur 5 ans</div>
              </div>
            </div>

            <div className="bg-blue-100 dark:bg-blue-900/10 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Cela équivaut à:</h4>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• {Math.round((impact.savings * 5) / 0.12)} km en voiture économisés</li>
                <li>• {Math.round((impact.savings * 5) / 2.5)} arbres plantés</li>
                <li>• {Math.round((impact.savings * 5) / 0.9)} repas végétariens vs viande</li>
              </ul>
            </div>
          </div>

          {/* Actions recommandées */}
          <div className="bg-yellow-50 dark:bg-yellow-900/10 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-gray-100">
              Actions prioritaires pour vous
            </h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              {scenario.deviceLifespan < 5 && (
                <li>
                  • <strong>Allonger la durée de vie</strong> de vos appareils à 5 ans minimum
                </li>
              )}
              {scenario.repairChoice === "new" && (
                <li>
                  • <strong>Privilégiez la réparation</strong> ou le reconditionné pour vos prochains achats
                </li>
              )}
              {scenario.streamingQuality === "4k" && (
                <li>
                  • <strong>Réduisez la qualité de streaming</strong> à 1080p (différence invisible sur petit écran)
                </li>
              )}
              {scenario.emailCleanup === "never" && (
                <li>
                  • <strong>Nettoyez votre boîte mail</strong> mensuellement et désabonnez-vous des newsletters
                </li>
              )}
              {scenario.cloudStorage === "keep" && (
                <li>
                  • <strong>Optimisez votre stockage cloud</strong> en supprimant les doublons et fichiers inutiles
                </li>
              )}
            </ul>
          </div>

          <div className="flex gap-2">
            <Button className="flex-1 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-slate-700 border border-gray-300 dark:border-gray-600">
              <Download className="w-4 h-4 mr-2" />
              Télécharger mon plan d'action
            </Button>
            <Button
              variant="outline"
              className="flex-1 bg-transparent text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-slate-700 border border-gray-300 dark:border-gray-600"
              onClick={() =>
                setScenario({
                  deviceLifespan: 3,
                  repairChoice: "new",
                  streamingQuality: "4k",
                  emailCleanup: "never",
                  cloudStorage: "keep",
                  deviceType: "new",
                })
              }
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Réinitialiser
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="text-sm text-gray-600 dark:text-gray-300 text-center">
        Sources: ADEME 2025, Shift Project, GreenIT.fr • Calculs basés sur des moyennes françaises
      </div>
    </div>
  )
}

function GreenITQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)

  const questions = [
    {
      question: "Quelle est la phase la plus polluante du cycle de vie d'un smartphone en 2025 ?",
      options: [
        "L'utilisation quotidienne",
        "La fabrication et l'extraction des matériaux",
        "Le transport depuis l'usine",
        "Le recyclage en fin de vie",
      ],
      correct: 1,
      explanation:
        "La fabrication représente 75-80% de l'impact total d'un smartphone. L'extraction des terres rares et l'assemblage sont très énergivores. C'est pourquoi allonger la durée de vie est si important !",
    },
    {
      question: "Combien de kg de CO₂ économise-t-on en gardant son smartphone 5 ans au lieu de 2 ans ?",
      options: ["5 kg", "15 kg", "35 kg", "55 kg"],
      correct: 2,
      explanation:
        "En gardant son smartphone 5 ans au lieu de 2 ans, on économise environ 35 kg de CO₂, soit l'équivalent de 290 km en voiture ! L'impact de fabrication est ainsi mieux amorti.",
    },
    {
      question: "Quel est le taux de recyclage des smartphones en France en 2025 ?",
      options: ["15%", "28%", "45%", "67%"],
      correct: 1,
      explanation:
        "Seulement 28% des smartphones sont recyclés en France. 72% dorment dans les tiroirs ou finissent à la poubelle. Pensez à les rapporter en point de collecte !",
    },
    {
      question: "Combien d'eau est nécessaire pour fabriquer un ordinateur portable ?",
      options: ["50 litres", "200 litres", "1 200 litres", "20 000 litres"],
      correct: 2,
      explanation:
        "Il faut environ 1 200 litres d'eau pour fabriquer un ordinateur portable, principalement pour l'extraction et le raffinage des matériaux. C'est l'équivalent de 8 baignoires !",
    },
    {
      question: "Quelle action réduit le plus l'impact environnemental du streaming vidéo ?",
      options: [
        "Regarder en WiFi plutôt qu'en 4G",
        "Baisser la luminosité de l'écran",
        "Passer de 4K à 720p",
        "Utiliser un bloqueur de publicités",
      ],
      correct: 2,
      explanation:
        "Passer de 4K à 720p réduit la consommation de données de 90% ! La différence de qualité est souvent imperceptible sur smartphone ou petit écran. Le WiFi vs 4G a aussi un impact, mais moindre.",
    },
    {
      question: "Quel pourcentage de l'empreinte carbone numérique mondiale vient des datacenters en 2025 ?",
      options: ["5%", "15%", "35%", "55%"],
      correct: 1,
      explanation:
        "Les datacenters représentent environ 15% de l'empreinte carbone numérique mondiale. Les équipements utilisateurs (smartphones, ordinateurs) représentent la majorité (65-70%).",
    },
    {
      question: "Combien d'emails non lus stockés équivalent à 1 km en voiture ?",
      options: ["10 emails", "100 emails", "1 000 emails", "10 000 emails"],
      correct: 2,
      explanation:
        "Environ 1 000 emails stockés pendant un an équivalent à 1 km en voiture. Un email avec pièce jointe peut émettre jusqu'à 50g de CO₂. Pensez à nettoyer votre boîte mail !",
    },
    {
      question: "Quel est le meilleur choix environnemental pour remplacer un smartphone cassé ?",
      options: [
        "Acheter le dernier modèle neuf",
        "Acheter un modèle neuf d'entrée de gamme",
        "Le faire réparer",
        "Acheter un modèle reconditionné",
      ],
      correct: 2,
      explanation:
        "Réparer est toujours le meilleur choix ! Cela évite une nouvelle fabrication. Si impossible, le reconditionné est la 2ème meilleure option (80% d'impact en moins vs neuf).",
    },
    {
      question: "Combien de terres rares différentes contient un smartphone ?",
      options: ["5 à 10", "15 à 20", "30 à 40", "Plus de 50"],
      correct: 2,
      explanation:
        "Un smartphone contient 30 à 40 métaux différents, dont de nombreuses terres rares (lithium, cobalt, tantale...). Leur extraction est très polluante et souvent dans des conditions sociales difficiles.",
    },
    {
      question: "Quelle est la consommation électrique annuelle d'un datacenter moyen en France ?",
      options: [
        "Équivalent à 500 foyers",
        "Équivalent à 5 000 foyers",
        "Équivalent à 50 000 foyers",
        "Équivalent à 500 000 foyers",
      ],
      correct: 2,
      explanation:
        "Un datacenter moyen consomme l'équivalent de 50 000 foyers français par an. Heureusement, le mix électrique français bas-carbone (nucléaire + renouvelables) limite l'impact CO₂.",
    },
  ]

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex]
    setAnswers(newAnswers)

    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1)
    }

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 1500)
    } else {
      setTimeout(() => setShowResults(true), 1500)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResults(false)
    setScore(0)
  }

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100
    if (percentage >= 80)
      return {
        title: "Expert Green IT !",
        message:
          "Bravo ! Vous maîtrisez parfaitement les enjeux du numérique responsable. Partagez vos connaissances autour de vous !",
        badge: "🏆",
      }
    if (percentage >= 60)
      return {
        title: "Bon niveau !",
        message: "Vous avez de bonnes bases sur le Green IT. Continuez à vous informer pour devenir un expert !",
        badge: "🌟",
      }
    if (percentage >= 40)
      return {
        title: "En progression",
        message: "Vous commencez à comprendre les enjeux. Explorez nos ressources pour approfondir vos connaissances.",
        badge: "📚",
      }
    return {
      title: "Débutant",
      message:
        "Le Green IT est un vaste sujet. Parcourez notre site pour découvrir comment réduire votre impact numérique !",
      badge: "🌱",
    }
  }

  if (showResults) {
    const scoreInfo = getScoreMessage()
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-green-600 dark:text-green-400" />
            Résultats du Quiz Green IT
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-8 rounded-lg border-2 border-green-200 dark:border-green-800">
            <div className="text-6xl mb-4">{scoreInfo.badge}</div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">{scoreInfo.title}</h3>
            <div className="text-5xl font-bold text-green-600 dark:text-green-400 mb-2">
              {score}/{questions.length}
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{scoreInfo.message}</p>
            <Progress value={(score / questions.length) * 100} className="h-3 mb-2" />
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Score: {Math.round((score / questions.length) * 100)}%
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Récapitulatif de vos réponses</h4>
            {questions.map((q, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border-2 ${answers[index] === q.correct
                  ? "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800"
                  : "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800"
                  }`}
              >
                <div className="flex items-start gap-2 mb-2">
                  <span className="font-semibold">Q{index + 1}.</span>
                  <span className="flex-1">{q.question}</span>
                  <span className="text-xl">{answers[index] === q.correct ? "✓" : "✗"}</span>
                </div>
                <div className="ml-6 text-sm">
                  <div
                    className={
                      answers[index] === q.correct
                        ? "text-green-700 dark:text-green-400"
                        : "text-red-700 dark:text-red-400"
                    }
                  >
                    Votre réponse: {q.options[answers[index]]}
                  </div>
                  {answers[index] !== q.correct && (
                    <div className="text-green-700 dark:text-green-400 mt-1">Bonne réponse: {q.options[q.correct]}</div>
                  )}
                  <div className="text-gray-600 dark:text-gray-300 mt-2 italic">{q.explanation}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <Button
              onClick={resetQuiz}
              className="flex-1 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-slate-700 border border-gray-300 dark:border-gray-600"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Recommencer le quiz
            </Button>
            <Button
              variant="outline"
              className="flex-1 bg-transparent text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-slate-700 border border-gray-300 dark:border-gray-600"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Partager mon score
            </Button>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Pour aller plus loin</h4>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>• Consultez nos guides d'action pour réduire votre impact</li>
              <li>• Utilisez le calculateur d'empreinte carbone</li>
              <li>• Explorez les cas pratiques détaillés</li>
              <li>• Téléchargez nos ressources pédagogiques</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    )
  }

  const question = questions[currentQuestion]
  const hasAnswered = answers[currentQuestion] !== undefined

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-green-600 dark:text-green-400" />
          Quiz Green IT - Testez vos connaissances
        </CardTitle>
        <CardDescription>
          10 questions pour évaluer votre niveau sur le numérique responsable (données 2025)
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Progress */}
        <div>
          <div className="flex justify-between text-sm mb-2 text-gray-900 dark:text-gray-100">
            <span>
              Question {currentQuestion + 1}/{questions.length}
            </span>
            <span className="font-semibold">
              {score} bonne{score > 1 ? "s" : ""}
            </span>
          </div>
          <Progress value={((currentQuestion + 1) / questions.length) * 100} className="h-2" />
        </div>

        {/* Question */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-lg border-2 border-green-200 dark:border-green-800">
          <h3 className="text-xl font-semibold mb-6 text-balance text-gray-900 dark:text-gray-100">
            {question.question}
          </h3>

          <div className="space-y-3">
            {question.options.map((option, index) => {
              const isSelected = answers[currentQuestion] === index
              const isCorrect = index === question.correct
              const showFeedback = hasAnswered

              return (
                <button
                  key={index}
                  onClick={() => !hasAnswered && handleAnswer(index)}
                  disabled={hasAnswered}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all ${!showFeedback
                    ? "bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 hover:border-green-300 dark:hover:border-green-400 hover:bg-green-50 dark:hover:bg-green-900/20"
                    : isSelected && isCorrect
                      ? "bg-green-100 border-green-500"
                      : isSelected && !isCorrect
                        ? "bg-red-100 border-red-500"
                        : isCorrect
                          ? "bg-green-100 border-green-500"
                          : "bg-gray-50 border-gray-200 dark:border-gray-700"
                    } ${hasAnswered ? "cursor-not-allowed" : "cursor-pointer"}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 dark:text-gray-100">{option}</span>
                    {showFeedback && isCorrect && (
                      <span className="text-2xl text-green-700 dark:text-green-400">✓</span>
                    )}
                    {showFeedback && isSelected && !isCorrect && (
                      <span className="text-2xl text-red-700 dark:text-red-400">✗</span>
                    )}
                  </div>
                </button>
              )
            })}
          </div>

          {hasAnswered && (
            <div
              className={`mt-6 p-4 rounded-lg ${answers[currentQuestion] === question.correct ? "bg-green-100" : "bg-blue-100"
                }`}
            >
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Explication:</strong> {question.explanation}
              </p>
            </div>
          )}
        </div>

        {!hasAnswered && (
          <div className="text-sm text-gray-600 dark:text-gray-300 text-center">
            Sélectionnez votre réponse pour continuer
          </div>
        )}
      </CardContent>
    </Card>
  )
}

function EnterpriseSimulator() {
  const [config, setConfig] = useState({
    employees: 50,
    devicesPerEmployee: 2.5,
    averageDeviceAge: 3,
    renewalCycle: 3,
    cloudUsage: "medium" as "low" | "medium" | "high",
    datacenters: 0,
    currentInitiatives: [] as string[],
    energyPrice: 0.18, // €/kWh
  })

  const [selectedScenario, setSelectedScenario] = useState<"baseline" | "moderate" | "ambitious">("moderate")
  const [showResults, setShowResults] = useState(false)

  const scenarios = {
    baseline: {
      name: "Scénario de base",
      description: "Aucun changement de pratiques",
      color: "gray",
      deviceLifeExtension: 0,
      refurbishedRate: 0,
      energyOptimization: 0,
      cloudOptimization: 0,
    },
    moderate: {
      name: "Green IT modéré",
      description: "Extension durée de vie + reconditionné partiel",
      color: "teal",
      deviceLifeExtension: 1.5, // +1.5 ans
      refurbishedRate: 0.3, // 30% reconditionné
      energyOptimization: 0.15, // -15% énergie
      cloudOptimization: 0.2, // -20% cloud
    },
    ambitious: {
      name: "Green IT ambitieux",
      description: "Stratégie complète de sobriété numérique",
      color: "emerald",
      deviceLifeExtension: 2.5, // +2.5 ans
      refurbishedRate: 0.6, // 60% reconditionné
      energyOptimization: 0.3, // -30% énergie
      cloudOptimization: 0.4, // -40% cloud
    },
  }

  const calculateProjections = () => {
    const totalDevices = Math.round(config.employees * config.devicesPerEmployee)
    const years = [0, 1, 2, 3, 4, 5]

    const allScenarioResults = Object.entries(scenarios).map(([key, scenario]) => {
      let totalSavings = 0
      let totalCO2Savings = 0
      let cumulativeBaselineCost = 0
      let cumulativeOptimizedCost = 0

      for (let year = 1; year <= 5; year++) { // Calculate for 5 years
        // Number of renewals necessary
        const baseRenewalCycle = config.renewalCycle
        const optimizedRenewalCycle = baseRenewalCycle + scenario.deviceLifeExtension

        // Costs baseline (without optimization)
        const baseDevicesRenewed = Math.ceil(totalDevices / baseRenewalCycle)
        const baseEquipmentCost = baseDevicesRenewed * 800 // €
        const baseEnergyCost = totalDevices * 120 // €/an (average consumption)
        const baseCloudCost = config.employees * (config.cloudUsage === "low" ? 200 : config.cloudUsage === "medium" ? 500 : 1000)
        const baseMaintenanceCost = totalDevices * 50 // €/an
        const baseTotalCost = baseEquipmentCost + baseEnergyCost + baseCloudCost + baseMaintenanceCost
        cumulativeBaselineCost += baseTotalCost

        // Costs optimized
        const optimizedDevicesRenewed = Math.ceil(totalDevices / optimizedRenewalCycle)
        const refurbishedDevices = Math.round(optimizedDevicesRenewed * scenario.refurbishedRate)
        const newDevices = optimizedDevicesRenewed - refurbishedDevices

        const optimizedEquipmentCost = newDevices * 800 + refurbishedDevices * 800 * 0.5
        const optimizedEnergyCost = totalDevices * 120 * (1 - scenario.energyOptimization)
        const optimizedCloudCost = config.employees * (config.cloudUsage === "low" ? 200 : config.cloudUsage === "medium" ? 500 : 1000) * (1 - scenario.cloudOptimization)
        const optimizedMaintenanceCost = totalDevices * 50 * 1.2 // +20% preventive maintenance
        const optimizedTotalCost = optimizedEquipmentCost + optimizedEnergyCost + optimizedCloudCost + optimizedMaintenanceCost
        cumulativeOptimizedCost += optimizedTotalCost

        totalSavings += (baseTotalCost - optimizedTotalCost)

        // CO2 baseline
        const baseCO2Devices = baseDevicesRenewed * 200 // kg
        const baseCO2Usage = totalDevices * 30 // kg/an
        const baseCO2Cloud = config.employees * (config.cloudUsage === "low" ? 50 : config.cloudUsage === "medium" ? 150 : 300)
        const baseTotalCO2 = baseCO2Devices + baseCO2Usage + baseCO2Cloud

        // CO2 optimized
        const optimizedCO2Devices = newDevices * 200 + refurbishedDevices * 40 // kg
        const optimizedCO2Usage = totalDevices * 30 * (1 - scenario.energyOptimization * 0.5)
        const optimizedCO2Cloud = config.employees * (config.cloudUsage === "low" ? 50 : config.cloudUsage === "medium" ? 150 : 300) * (1 - scenario.cloudOptimization)
        const optimizedTotalCO2 = optimizedCO2Devices + optimizedCO2Usage + optimizedCO2Cloud

        totalCO2Savings += (baseTotalCO2 - optimizedTotalCO2)
      }

      const implementationCost = config.employees * 100 // Estimated implementation cost (training, process)
      const netSavings = totalSavings - implementationCost
      const paybackMonths = netSavings > 0 ? Math.round((implementationCost / (totalSavings / 60))) : 0

      return {
        id: key,
        name: scenario.name,
        totalSavings: Math.round(netSavings),
        totalEmissions: Math.round(totalCO2Savings),
        payback: paybackMonths,
        projections: years.map((year) => {
          // Recalculate for chart
          const baseRenewalCycle = config.renewalCycle
          const optimizedRenewalCycle = baseRenewalCycle + scenario.deviceLifeExtension

          const baseDevicesRenewed = year > 0 ? Math.ceil(totalDevices / baseRenewalCycle) : 0
          const baseEquipmentCost = baseDevicesRenewed * 800
          const baseEnergyCost = totalDevices * 120
          const baseCloudCost = config.employees * (config.cloudUsage === "low" ? 200 : config.cloudUsage === "medium" ? 500 : 1000)
          const baseMaintenanceCost = totalDevices * 50
          const baseTotalCost = baseEquipmentCost + baseEnergyCost + baseCloudCost + baseMaintenanceCost

          const optimizedDevicesRenewed = year > 0 ? Math.ceil(totalDevices / optimizedRenewalCycle) : 0
          const refurbishedDevices = Math.round(optimizedDevicesRenewed * scenario.refurbishedRate)
          const newDevices = optimizedDevicesRenewed - refurbishedDevices

          const optimizedEquipmentCost = newDevices * 800 + refurbishedDevices * 800 * 0.5
          const optimizedEnergyCost = totalDevices * 120 * (1 - scenario.energyOptimization)
          const optimizedCloudCost = config.employees * (config.cloudUsage === "low" ? 200 : config.cloudUsage === "medium" ? 500 : 1000) * (1 - scenario.cloudOptimization)
          const optimizedMaintenanceCost = totalDevices * 50 * 1.2
          const optimizedTotalCost = optimizedEquipmentCost + optimizedEnergyCost + optimizedCloudCost + optimizedMaintenanceCost

          // CO2 logic for projections
          const baseCO2Devices = year > 0 ? baseDevicesRenewed * 200 : 0
          const baseCO2Usage = totalDevices * 30
          const baseCO2Cloud = config.employees * (config.cloudUsage === "low" ? 50 : config.cloudUsage === "medium" ? 150 : 300)
          const currentBaseTotalCO2 = year === 0 ? 0 : baseCO2Devices + baseCO2Usage + baseCO2Cloud

          const optimizedCO2Devices = year > 0 ? (newDevices * 200 + refurbishedDevices * 40) : 0
          const optimizedCO2Usage = totalDevices * 30 * (1 - scenario.energyOptimization * 0.5)
          const optimizedCO2Cloud = config.employees * (config.cloudUsage === "low" ? 50 : config.cloudUsage === "medium" ? 150 : 300) * (1 - scenario.cloudOptimization)
          const currentOptimizedTotalCO2 = year === 0 ? 0 : optimizedCO2Devices + optimizedCO2Usage + optimizedCO2Cloud

          return {
            year: `Année ${year}`,
            baselineCost: Math.round(baseTotalCost),
            optimizedCost: Math.round(optimizedTotalCost),
            savings: Math.round(baseTotalCost - optimizedTotalCost),
            baselineCO2: Math.round(currentBaseTotalCO2),
            optimizedCO2: Math.round(currentOptimizedTotalCO2),
            co2Savings: Math.round(currentBaseTotalCO2 - currentOptimizedTotalCO2),
          }
        })
      }
    })

    return allScenarioResults
  }

  const exportPDF = () => {
    const doc = new jsPDF()
    const allScenarioResults = calculateProjections()
    const timestamp = new Date().toLocaleDateString("fr-FR")

    // Header
    doc.setFillColor(PDF_COLORS.primary[0], PDF_COLORS.primary[1], PDF_COLORS.primary[2])
    doc.rect(0, 0, 210, 40, "F")
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(22)
    doc.text("Simulation Stratégie Green IT", 20, 25)
    doc.setFontSize(10)
    doc.text(`Généré le ${timestamp} - hylst.fr/greenit`, 20, 32)

    // Configuration
    doc.setTextColor(PDF_COLORS.text[0], PDF_COLORS.text[1], PDF_COLORS.text[2])
    doc.setFontSize(14)
    doc.text("Configuration de l'entreprise", 20, 55)
    doc.setFontSize(10)
    doc.text(`Effectif : ${config.employees} employés`, 20, 65)
    doc.text(`Équipements par employé : ${config.devicesPerEmployee}`, 20, 72)
    doc.text(`Cycle de renouvellement : ${config.renewalCycle} ans`, 20, 79)

    // Comparison Table
    const tableData = allScenarioResults.map(s => [
      s.name,
      s.totalSavings.toLocaleString() + " €",
      s.totalEmissions.toLocaleString() + " kg CO2e", // This is actually CO2 savings
      s.payback === 0 ? "Immédiat" : s.payback + " mois"
    ])

    // @ts-ignore
    doc.autoTable({
      startY: 90,
      head: [["Scénario", "Économies (5 ans)", "CO2 Évité (5 ans)", "Retour sur investissement"]],
      body: tableData,
      headStyles: { fillColor: PDF_COLORS.primary },
      theme: "striped",
      styles: {
        font: 'helvetica',
        fontSize: 10,
        textColor: PDF_COLORS.text,
      },
      columnStyles: {
        0: { fontStyle: 'bold' },
        1: { halign: 'right' },
        2: { halign: 'right' },
        3: { halign: 'right' },
      }
    })

    // Action Plan
    // @ts-ignore
    const finalY = doc.lastAutoTable.finalY + 15
    doc.setFontSize(14)
    doc.text("Plan d'action recommandé", 20, finalY)
    doc.setFontSize(10)
    const actions = [
      "Allonger la durée de vie des équipements de 3 à 5 ans.",
      "Privilégier l'achat de matériel reconditionné pour les nouveaux arrivants.",
      "Optimiser l'usage du cloud et supprimer les données inutiles.",
      "Sensibiliser les collaborateurs aux éco-gestes numériques.",
      "Mettre en place une politique de recyclage systématique."
    ]
    actions.forEach((action, index) => {
      doc.text(`${index + 1}. ${action}`, 20, finalY + 10 + (index * 7))
    })

    doc.save(`Simulation-Green-IT-${timestamp.replace(/\//g, "-")}.pdf`)
  }

  const resultsForSelectedScenario = calculateProjections().find(r => r.id === selectedScenario);
  const results = resultsForSelectedScenario ? resultsForSelectedScenario : {
    projections: [],
    totalSavings: 0,
    totalEmissions: 0, // This is CO2 savings
    payback: 0,
  };
  const scenario = scenarios[selectedScenario]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            Simulateur d'économies Green IT pour entreprises
          </CardTitle>
          <CardDescription>
            Calculez le retour sur investissement d'une stratégie de sobriété numérique sur 5 ans (données 2025)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Configuration entreprise */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-gray-100">🏢 Profil de l'entreprise</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <Label className="text-gray-900 dark:text-gray-100">Nombre d'employés</Label>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">{config.employees}</span>
                </div>
                <LabeledSlider
                  value={[config.employees]}
                  onValueChange={([value]) => setConfig({ ...config, employees: value })}
                  min={10}
                  max={1000}
                  step={10}
                  unit=""
                />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <Label className="text-gray-900 dark:text-gray-100">Appareils par employé</Label>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">{config.devicesPerEmployee}</span>
                </div>
                <LabeledSlider
                  value={[config.devicesPerEmployee * 10]}
                  onValueChange={([value]) => setConfig({ ...config, devicesPerEmployee: value / 10 })}
                  min={10}
                  max={50}
                  step={5}
                  unit=""
                />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <Label className="text-gray-900 dark:text-gray-100">Cycle de renouvellement actuel</Label>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">{config.renewalCycle} ans</span>
                </div>
                <LabeledSlider
                  value={[config.renewalCycle]}
                  onValueChange={([value]) => setConfig({ ...config, renewalCycle: value })}
                  min={2}
                  max={6}
                  step={1}
                  unit=" ans"
                />
              </div>

              <div className="space-y-3">
                <Label className="text-gray-900 dark:text-gray-100">Utilisation cloud</Label>
                <RadioGroup
                  value={config.cloudUsage}
                  onValueChange={(value) => setConfig({ ...config, cloudUsage: value as typeof config.cloudUsage })}
                  className="flex gap-4"
                >
                  {[
                    { value: "low", label: "Faible" },
                    { value: "medium", label: "Moyenne" },
                    { value: "high", label: "Intensive" },
                  ].map((option) => (
                    <div key={option.value} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.value} id={`cloud-${option.value}`} />
                      <Label htmlFor={`cloud-${option.value}`} className="cursor-pointer text-gray-700 dark:text-gray-300">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg col-span-full md:col-span-2">
                <div className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Votre parc :</strong> {Math.round(config.employees * config.devicesPerEmployee)} équipements pour{" "}
                  {config.employees} employés, renouvelés tous les {config.renewalCycle} ans.
                </div>
              </div>
            </div>
          </div>

          {/* Sélection du scénario */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-gray-100">📊 Choisissez un scénario</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {Object.entries(scenarios).map(([key, s]) => (
                <button
                  key={key}
                  onClick={() => setSelectedScenario(key as typeof selectedScenario)}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${selectedScenario === key
                    ? `border-${s.color}-500 bg-${s.color}-50 dark:bg-${s.color}-900/20 shadow-lg`
                    : "border-gray-200 dark:border-gray-700 hover:border-gray-300"
                    }`}
                >
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{s.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{s.description}</p>
                  {key !== "baseline" && (
                    <ul className="text-xs space-y-1 text-gray-600 dark:text-gray-400">
                      <li>• Durée de vie: +{s.deviceLifeExtension} ans</li>
                      <li>• Reconditionné: {s.refurbishedRate * 100}%</li>
                      <li>• Énergie: -{s.energyOptimization * 100}%</li>
                    </ul>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Bouton de simulation */}
          <div className="text-center">
            <Button size="lg" onClick={() => setShowResults(true)} className="bg-purple-600 hover:bg-purple-700">
              <TrendingUp className="w-5 h-5 mr-2" />
              Simuler sur 5 ans
            </Button>
          </div>

          {/* Résultats */}
          {showResults && (
            <div className="space-y-6">
              {/* KPIs principaux */}
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-6 rounded-lg border-2 border-purple-200 dark:border-purple-800">
                <h3 className="font-semibold text-xl mb-4 text-gray-900 dark:text-gray-100">
                  📈 Résultats sur 5 ans - {scenario.name}
                </h3>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-lg text-center border border-gray-200 dark:border-gray-700">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                      {(results.totalSavings / 1000).toFixed(0)}k€
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Économies totales</div>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-lg text-center border border-gray-200 dark:border-gray-700">
                    <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                      {(results.totalEmissions / 1000).toFixed(1)}t
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">CO₂ évité</div>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-lg text-center border border-gray-200 dark:border-gray-700">
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                      {results.totalSavings > 0 ? Math.round((results.totalSavings / (config.employees * 100)) * 100) : 0}%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">ROI</div>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-lg text-center border border-gray-200 dark:border-gray-700">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{results.payback}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Mois pour rentabilité</div>
                  </div>
                </div>
              </div>

              {/* Graphique de projection */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-lg mb-4 text-gray-900 dark:text-gray-100">
                  📉 Projection des coûts sur 5 ans
                </h4>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={results.projections}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="year" stroke="rgba(255,255,255,0.6)" />
                    <YAxis
                      stroke="rgba(255,255,255,0.6)"
                      tickFormatter={(value) => `${(value / 1000).toFixed(0)}k€`}
                    />
                    <RechartsTooltip
                      formatter={(value: number) => [`${(value / 1000).toFixed(1)}k€`, ""]}
                      contentStyle={{ backgroundColor: "rgba(255,255,255,0.95)" }}
                    />
                    <Line
                      type="monotone"
                      dataKey="baselineCost"
                      stroke="#94a3b8"
                      name="Sans changement"
                      strokeWidth={2}
                      dot
                    />
                    <Line
                      type="monotone"
                      dataKey="optimizedCost"
                      stroke="#10b981"
                      name={scenario.name}
                      strokeWidth={3}
                      dot
                    />
                  </LineChart>
                </ResponsiveContainer>
                <div className="flex justify-center gap-6 mt-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-1 bg-gray-400 rounded" />
                    <span className="text-gray-600 dark:text-gray-400">Sans changement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-1 bg-emerald-500 rounded" />
                    <span className="text-gray-600 dark:text-gray-400">{scenario.name}</span>
                  </div>
                </div>
              </div>

              {/* Détail année par année */}
              <div>
                <h4 className="font-semibold text-lg mb-4 text-gray-900 dark:text-gray-100">📅 Détail annuel</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-2 px-3 text-gray-900 dark:text-gray-100">Année</th>
                        <th className="text-right py-2 px-3 text-gray-600 dark:text-gray-400">Coût baseline</th>
                        <th className="text-right py-2 px-3 text-gray-600 dark:text-gray-400">Coût optimisé</th>
                        <th className="text-right py-2 px-3 text-green-600 dark:text-green-400">Économies</th>
                        <th className="text-right py-2 px-3 text-emerald-600 dark:text-emerald-400">CO₂ évité</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.projections.slice(1).map((p, i) => (
                        <tr key={i} className="border-b border-gray-100 dark:border-gray-800">
                          <td className="py-2 px-3 font-medium text-gray-900 dark:text-gray-100">{p.year}</td>
                          <td className="text-right py-2 px-3 text-gray-600 dark:text-gray-400">
                            {(p.baselineCost / 1000).toFixed(1)}k€
                          </td>
                          <td className="text-right py-2 px-3 text-gray-600 dark:text-gray-400">
                            {(p.optimizedCost / 1000).toFixed(1)}k€
                          </td>
                          <td className="text-right py-2 px-3 font-semibold text-green-600 dark:text-green-400">
                            +{(p.savings / 1000).toFixed(1)}k€
                          </td>
                          <td className="text-right py-2 px-3 font-semibold text-emerald-600 dark:text-emerald-400">
                            -{(p.co2Savings / 1000).toFixed(2)}t
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="bg-gray-50 dark:bg-slate-700 font-semibold">
                        <td className="py-2 px-3 text-gray-900 dark:text-gray-100">Total</td>
                        <td className="text-right py-2 px-3 text-gray-600 dark:text-gray-400">-</td>
                        <td className="text-right py-2 px-3 text-gray-600 dark:text-gray-400">-</td>
                        <td className="text-right py-2 px-3 text-green-600 dark:text-green-400">
                          +{(results.totalSavings / 1000).toFixed(0)}k€
                        </td>
                        <td className="text-right py-2 px-3 text-emerald-600 dark:text-emerald-400">
                          -{(results.totalEmissions / 1000).toFixed(1)}t
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>

              {/* Plan d'action */}
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-gray-100">📋 Plan d'action recommandé</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Actions immédiates</h5>
                    <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      <li>• Auditer le parc existant et son état</li>
                      <li>• Former les équipes aux bonnes pratiques</li>
                      <li>• Mettre en place la maintenance préventive</li>
                      <li>• Établir une politique d'achat responsable</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Actions long terme</h5>
                    <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      <li>• Partenariat avec un reconditionneur</li>
                      <li>• Optimisation de l'infrastructure cloud</li>
                      <li>• Suivi et reporting des indicateurs RSE</li>
                      <li>• Sensibilisation continue des collaborateurs</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Boutons d'action */}
              <div className="flex gap-4">
                <Button className="flex-1 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-slate-700 border border-gray-300 dark:border-gray-600"
                  onClick={exportPDF}>
                  <Download className="w-4 h-4 mr-2" />
                  Télécharger le rapport complet
                </Button>
                <Button variant="outline" className="flex-1" onClick={() => setShowResults(false)}>
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Modifier les paramètres
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="text-sm text-gray-600 dark:text-gray-300 text-center">
        Sources: ADEME 2025, études TCO Gartner, données sectorielles • Calculs basés sur des moyennes françaises
      </div>
    </div>
  )
}


function CloudComparator() {
  const [sortBy, setSortBy] = useState<"score" | "pue" | "renewable" | "name">("score")
  const [filterGreen, setFilterGreen] = useState(false)

  const providers = [
    {
      name: "Infomaniak",
      country: "🇨🇭 Suisse",
      pue: 1.1,
      renewableEnergy: 100,
      carbonNeutral: true,
      certifications: ["ISO 14001", "ISO 50001", "Engagement climat"],
      sustainabilityScore: 98,
      description: "Leader européen de l'hébergement écologique, 100% énergies renouvelables locales.",
      color: "emerald",
    },
    {
      name: "Scaleway",
      country: "🇫🇷 France",
      pue: 1.2,
      renewableEnergy: 100,
      carbonNeutral: true,
      certifications: ["ISO 14001", "HDS", "DC4"],
      sustainabilityScore: 95,
      description: "Datacenters français éco-conçus avec refroidissement adiabatique.",
      color: "emerald",
    },
    {
      name: "OVHcloud",
      country: "🇫🇷 France",
      pue: 1.2,
      renewableEnergy: 78,
      carbonNeutral: false,
      certifications: ["ISO 14001", "ISO 50001"],
      sustainabilityScore: 82,
      description: "Refroidissement par eau innovant, objectif neutralité carbone 2025.",
      color: "teal",
    },
    {
      name: "Google Cloud",
      country: "🌍 Global",
      pue: 1.1,
      renewableEnergy: 100,
      carbonNeutral: true,
      certifications: ["ISO 14001", "ISO 50001", "LEED"],
      sustainabilityScore: 90,
      description: "Neutralité carbone depuis 2007, 100% renouvelable depuis 2017.",
      color: "emerald",
    },
    {
      name: "Microsoft Azure",
      country: "🌍 Global",
      pue: 1.18,
      renewableEnergy: 100,
      carbonNeutral: true,
      certifications: ["ISO 14001", "LEED"],
      sustainabilityScore: 88,
      description: "Objectif carbone négatif 2030, investissements massifs dans le renouvelable.",
      color: "teal",
    },
    {
      name: "AWS",
      country: "🌍 Global",
      pue: 1.2,
      renewableEnergy: 90,
      carbonNeutral: false,
      certifications: ["ISO 14001", "ISO 50001"],
      sustainabilityScore: 78,
      description: "Objectif 100% renouvelable 2025, programme Climate Pledge.",
      color: "cyan",
    },
    {
      name: "DigitalOcean",
      country: "🇺🇸 USA",
      pue: 1.3,
      renewableEnergy: 60,
      carbonNeutral: false,
      certifications: ["SOC 2"],
      sustainabilityScore: 55,
      description: "Efforts en cours sur l'efficacité, mais encore limités sur le renouvelable.",
      color: "orange",
    },
    {
      name: "Hetzner",
      country: "🇩🇪 Allemagne",
      pue: 1.15,
      renewableEnergy: 100,
      carbonNeutral: true,
      certifications: ["ISO 14001", "TÜV"],
      sustainabilityScore: 92,
      description: "Datacenters allemands alimentés à 100% par énergies renouvelables.",
      color: "emerald",
    },
  ]

  const sortedProviders = [...providers]
    .filter((p) => !filterGreen || p.sustainabilityScore >= 85)
    .sort((a, b) => {
      switch (sortBy) {
        case "score":
          return b.sustainabilityScore - a.sustainabilityScore
        case "pue":
          return a.pue - b.pue
        case "renewable":
          return b.renewableEnergy - a.renewableEnergy
        case "name":
          return a.name.localeCompare(b.name)
        default:
          return 0
      }
    })

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-emerald-600 dark:text-emerald-400"
    if (score >= 75) return "text-teal-600 dark:text-teal-400"
    if (score >= 60) return "text-cyan-600 dark:text-cyan-400"
    return "text-orange-600 dark:text-orange-400"
  }

  const getScoreBgColor = (score: number) => {
    if (score >= 90) return "bg-emerald-100 dark:bg-emerald-900/30"
    if (score >= 75) return "bg-teal-100 dark:bg-teal-900/30"
    if (score >= 60) return "bg-cyan-100 dark:bg-cyan-900/30"
    return "bg-orange-100 dark:bg-orange-900/30"
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cloud className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
            Comparateur de fournisseurs cloud éco-responsables
          </CardTitle>
          <CardDescription>
            Comparez l'impact environnemental des principaux hébergeurs et fournisseurs cloud (données 2025)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Filtres et tri */}
          <div className="flex flex-wrap gap-4 items-center justify-between bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
            <div className="flex items-center gap-4">
              <Label className="text-gray-900 dark:text-gray-100">Trier par :</Label>
              <div className="flex gap-2">
                {[
                  { key: "score", label: "Score éco" },
                  { key: "pue", label: "PUE" },
                  { key: "renewable", label: "% Renouvelable" },
                  { key: "name", label: "Nom" },
                ].map((option) => (
                  <Button
                    key={option.key}
                    size="sm"
                    variant={sortBy === option.key ? "default" : "outline"}
                    onClick={() => setSortBy(option.key as typeof sortBy)}
                    className={sortBy === option.key ? "bg-cyan-600 hover:bg-cyan-700" : ""}
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="filterGreen"
                checked={filterGreen}
                onChange={(e) => setFilterGreen(e.target.checked)}
                className="rounded border-gray-300"
              />
              <Label htmlFor="filterGreen" className="cursor-pointer text-gray-900 dark:text-gray-100">
                Afficher uniquement les hébergeurs verts (score ≥ 85)
              </Label>
            </div>
          </div>

          {/* Légende */}
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">💡 Comprendre les métriques</h4>
            <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
              <li>
                <strong>PUE (Power Usage Effectiveness)</strong> : Ratio d'efficacité énergétique. Plus il est proche de 1,
                mieux c'est. Un PUE de 1.2 signifie que 20% de l'énergie est utilisée pour le refroidissement.
              </li>
              <li>
                <strong>Énergie renouvelable</strong> : Pourcentage d'électricité provenant de sources renouvelables
                (solaire, éolien, hydraulique).
              </li>
              <li>
                <strong>Score éco</strong> : Score global de durabilité basé sur le PUE, % renouvelable, certifications et
                engagements.
              </li>
            </ul>
          </div>

          {/* Tableau comparatif */}
          <div className="space-y-4">
            {sortedProviders.map((provider, index) => (
              <div
                key={provider.name}
                className={`p-6 rounded-xl border-2 transition-all hover:shadow-md ${getScoreBgColor(
                  provider.sustainabilityScore
                )} border-transparent hover:border-gray-300 dark:hover:border-gray-600`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1 min-w-[200px]">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">{index + 1}</span>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{provider.name}</h3>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{provider.country}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{provider.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {provider.certifications.map((cert) => (
                        <span
                          key={cert}
                          className="px-2 py-1 text-xs rounded-full bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                      <div className={`text-2xl font-bold ${getScoreColor(provider.sustainabilityScore)}`}>
                        {provider.sustainabilityScore}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Score éco</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                      <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{provider.pue}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">PUE</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                      <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{provider.renewableEnergy}%</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Renouvelable</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-3 rounded-lg text-center border border-gray-200 dark:border-gray-700">
                      <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        {provider.carbonNeutral ? "✅" : "⏳"}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Neutre carbone</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recommandation */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-6 rounded-lg border-2 border-emerald-200 dark:border-emerald-800">
            <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-gray-100">🌱 Notre recommandation</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Pour un hébergement web éco-responsable en France ou en Europe, privilégiez :
            </p>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>
                • <strong>Infomaniak</strong> ou <strong>Hetzner</strong> pour le meilleur bilan environnemental
              </li>
              <li>
                • <strong>Scaleway</strong> pour rester en France avec un excellent PUE
              </li>
              <li>
                • <strong>Google Cloud</strong> si vous avez besoin d'un hyperscaler avec engagement environnemental fort
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <div className="text-sm text-gray-600 dark:text-gray-300 text-center">
        Sources: Rapports RSE des fournisseurs, The Green Web Foundation, ADEME • Données 2024-2025
      </div>
    </div>
  )
}


function ITAudit() {
  const [inventory, setInventory] = useState({
    desktops: { count: 10, avgAge: 4 },
    laptops: { count: 20, avgAge: 3 },
    monitors: { count: 25, avgAge: 4 },
    smartphones: { count: 15, avgAge: 2 },
    tablets: { count: 5, avgAge: 3 },
    printers: { count: 3, avgAge: 5 },
    servers: { count: 2, avgAge: 4 },
  })

  const [showResults, setShowResults] = useState(false)

  const deviceData = {
    desktops: { name: "Ordinateurs fixes", fabricationCO2: 296, usageCO2: 88, optimalLife: 6, icon: "🖥️" },
    laptops: { name: "Ordinateurs portables", fabricationCO2: 156, usageCO2: 22, optimalLife: 5, icon: "💻" },
    monitors: { name: "Écrans", fabricationCO2: 350, usageCO2: 40, optimalLife: 8, icon: "🖥️" },
    smartphones: { name: "Smartphones", fabricationCO2: 55, usageCO2: 8, optimalLife: 4, icon: "📱" },
    tablets: { name: "Tablettes", fabricationCO2: 63, usageCO2: 12, optimalLife: 5, icon: "📋" },
    printers: { name: "Imprimantes", fabricationCO2: 130, usageCO2: 35, optimalLife: 7, icon: "🖨️" },
    servers: { name: "Serveurs", fabricationCO2: 1200, usageCO2: 500, optimalLife: 6, icon: "🖧" },
  }

  const calculateResults = () => {
    let totalCO2 = 0
    let totalDevices = 0
    let renewalNeeded = 0
    let potentialSavings = 0
    const details: Array<{
      type: string
      name: string
      count: number
      avgAge: number
      optimalLife: number
      co2: number
      status: "good" | "warning" | "critical"
      recommendation: string
    }> = []

    Object.entries(inventory).forEach(([type, { count, avgAge }]) => {
      const data = deviceData[type as keyof typeof deviceData]
      totalDevices += count

      // Calcul CO2 annuel: fabrication amortie + usage
      const fabricationPerYear = (data.fabricationCO2 / avgAge) * count
      const usagePerYear = data.usageCO2 * count
      const co2 = fabricationPerYear + usagePerYear
      totalCO2 += co2

      // Évaluation du statut
      let status: "good" | "warning" | "critical" = "good"
      let recommendation = ""

      if (avgAge < data.optimalLife * 0.6) {
        status = "good"
        recommendation = "Durée de vie optimale, continuez à utiliser ces équipements."
      } else if (avgAge < data.optimalLife) {
        status = "warning"
        recommendation = `Envisagez une extension de vie via maintenance préventive. Durée optimale: ${data.optimalLife} ans.`
      } else {
        status = "critical"
        renewalNeeded += count
        recommendation = `Renouvellement à planifier. Privilégiez le reconditionné (-80% CO2).`
        potentialSavings += data.fabricationCO2 * 0.8 * count // Économie si reconditionné
      }

      if (count > 0) {
        details.push({
          type,
          name: data.name,
          count,
          avgAge,
          optimalLife: data.optimalLife,
          co2: Math.round(co2),
          status,
          recommendation,
        })
      }
    })

    // Score éco-efficacité (0-100)
    const avgLifeRatio =
      Object.entries(inventory).reduce((acc, [type, { count, avgAge }]) => {
        const data = deviceData[type as keyof typeof deviceData]
        return acc + (avgAge / data.optimalLife) * count
      }, 0) / totalDevices

    const ecoScore = Math.min(100, Math.max(0, Math.round((1 - Math.abs(avgLifeRatio - 0.7) * 2) * 100)))

    return {
      totalCO2: Math.round(totalCO2),
      totalDevices,
      renewalNeeded,
      potentialSavings: Math.round(potentialSavings),
      ecoScore,
      details,
    }
  }

  const results = calculateResults()

  const getStatusColor = (status: "good" | "warning" | "critical") => {
    switch (status) {
      case "good":
        return "bg-emerald-100 dark:bg-emerald-900/30 border-emerald-300 dark:border-emerald-700"
      case "warning":
        return "bg-yellow-100 dark:bg-yellow-900/30 border-yellow-300 dark:border-yellow-700"
      case "critical":
        return "bg-red-100 dark:bg-red-900/30 border-red-300 dark:border-red-700"
    }
  }

  const getScoreGrade = (score: number) => {
    if (score >= 80) return { grade: "A", color: "text-emerald-600 dark:text-emerald-400", label: "Excellent" }
    if (score >= 60) return { grade: "B", color: "text-teal-600 dark:text-teal-400", label: "Bon" }
    if (score >= 40) return { grade: "C", color: "text-yellow-600 dark:text-yellow-400", label: "À améliorer" }
    if (score >= 20) return { grade: "D", color: "text-orange-600 dark:text-orange-400", label: "Insuffisant" }
    return { grade: "E", color: "text-red-600 dark:text-red-400", label: "Critique" }
  }

  const exportPDF = () => {
    const doc = new jsPDF()
    const auditResults = calculateResults()
    const scoreGrade = getScoreGrade(auditResults.ecoScore)
    const timestamp = new Date().toLocaleDateString("fr-FR")

    // Header
    doc.setFillColor(PDF_COLORS.primary[0], PDF_COLORS.primary[1], PDF_COLORS.primary[2])
    doc.rect(0, 0, 210, 40, "F")
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(22)
    doc.text("Audit Environnemental IT", 20, 25)
    doc.setFontSize(10)
    doc.text(`Généré le ${timestamp} - hylst.fr/greenit`, 20, 32)

    // Summary Section
    doc.setTextColor(PDF_COLORS.text[0], PDF_COLORS.text[1], PDF_COLORS.text[2])
    doc.setFontSize(16)
    doc.text("Résumé de l'impact", 20, 55)

    doc.setFontSize(12)
    doc.text(`Empreinte totale : ${auditResults.totalCO2.toFixed(1)} kg CO2e / an`, 20, 65)
    doc.text(`Économies possibles : ${auditResults.potentialSavings.toFixed(1)} kg CO2e / an`, 20, 72);

    // Score Badge
    doc.setDrawColor(200, 200, 200)
    doc.roundedRect(140, 50, 50, 30, 3, 3, "S")
    doc.setFontSize(10)
    doc.text("Score Éco-IT", 145, 58)
    doc.setFontSize(24)
    doc.setTextColor(scoreGrade.color.includes("emerald") ? 5 : scoreGrade.color.includes("red") ? 200 : 0, scoreGrade.color.includes("emerald") ? 150 : 0, 0) // Simplified color mapping for PDF
    doc.text(scoreGrade.grade, 160, 72)

    // Inventory Table
    const tableData = auditResults.details.map(item => [
      item.name,
      item.count,
      item.avgAge + " ans",
      item.co2.toFixed(1) + " kg"
    ])

    // @ts-ignore
    doc.autoTable({
      startY: 90,
      head: [["Équipement", "Nombre", "Âge moyen", "Impact CO2/an"]],
      body: tableData,
      headStyles: { fillColor: PDF_COLORS.primary },
      theme: "striped",
      styles: {
        font: 'helvetica',
        fontSize: 10,
        textColor: PDF_COLORS.text,
      },
      columnStyles: {
        0: { fontStyle: 'bold' },
        1: { halign: 'right' },
        2: { halign: 'right' },
        3: { halign: 'right' },
      }
    })

    // Recommendations
    // @ts-ignore
    const finalY = doc.lastAutoTable.finalY + 15
    doc.setTextColor(PDF_COLORS.text[0], PDF_COLORS.text[1], PDF_COLORS.text[2])
    doc.setFontSize(16)
    doc.text("Recommandations prioritaires", 20, finalY)

    doc.setFontSize(10)
    const recommendations = [
      `1. Court terme: Mettre en place une politique de maintenance préventive pour prolonger la durée de vie`,
      `2. Moyen terme: Planifier le renouvellement des ${auditResults.renewalNeeded} équipements critiques en privilégiant le reconditionné`,
      `3. Long terme: Adopter une politique d'achat responsable (labels, durabilité, réparabilité)`,
      `4. Transversal: Former les équipes aux bonnes pratiques d'usage pour prolonger la durée de vie`
    ];
    recommendations.forEach((rec, index) => {
      doc.text(rec, 20, finalY + 10 + (index * 7))
    })

    // Footer
    doc.setFontSize(8)
    doc.setTextColor(PDF_COLORS.lightText[0], PDF_COLORS.lightText[1], PDF_COLORS.lightText[2])
    doc.text("Le Green IT en clair - Pour un numérique plus responsable", 105, 285, { align: "center" })

    doc.save(`Audit-Green-IT-${timestamp.replace(/\//g, "-")}.pdf`)
  }

  const scoreGrade = getScoreGrade(results.ecoScore)

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ClipboardCheck className="h-6 w-6 text-orange-600 dark:text-orange-400" />
            Audit de parc informatique
          </CardTitle>
          <CardDescription>
            Évaluez l'empreinte carbone de votre parc IT et identifiez les opportunités d'optimisation (données ADEME 2025)
          </CardDescription>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={exportPDF}>
              <Download className="mr-2 h-4 w-4" />
              PDF
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Formulaire d'inventaire */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-gray-100">📦 Inventaire du parc</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {Object.entries(inventory).map(([type, { count, avgAge }]) => {
                const data = deviceData[type as keyof typeof deviceData]
                return (
                  <div
                    key={type}
                    className="p-4 bg-gray-50 dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">{data.icon}</span>
                      <span className="font-medium text-gray-900 dark:text-gray-100">{data.name}</span>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <Label className="text-gray-600 dark:text-gray-400">Quantité</Label>
                          <span className="font-semibold text-gray-900 dark:text-gray-100">{count}</span>
                        </div>
                        <LabeledSlider
                          value={[count]}
                          onValueChange={([value]) =>
                            setInventory({ ...inventory, [type]: { ...inventory[type as keyof typeof inventory], count: value } })
                          }
                          min={0}
                          max={type === "servers" ? 20 : 100}
                          step={1}
                          unit=""
                        />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <Label className="text-gray-600 dark:text-gray-400">Âge moyen</Label>
                          <span className="font-semibold text-gray-900 dark:text-gray-100">{avgAge} ans</span>
                        </div>
                        <LabeledSlider
                          value={[avgAge]}
                          onValueChange={([value]) =>
                            setInventory({ ...inventory, [type]: { ...inventory[type as keyof typeof inventory], avgAge: value } })
                          }
                          min={1}
                          max={10}
                          step={1}
                          unit=" ans"
                        />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Bouton d'analyse */}
          <div className="text-center">
            <Button
              size="lg"
              onClick={() => setShowResults(true)}
              className="bg-orange-600 hover:bg-orange-700"
            >
              <ClipboardCheck className="w-5 h-5 mr-2" />
              Analyser le parc
            </Button>
          </div>

          {/* Résultats */}
          {showResults && (
            <div className="space-y-6">
              {/* Score global */}
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 p-6 rounded-lg border-2 border-orange-200 dark:border-orange-800">
                <h3 className="font-semibold text-xl mb-4 text-gray-900 dark:text-gray-100">📊 Résultats de l'audit</h3>
                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-lg text-center border border-gray-200 dark:border-gray-700">
                    <div className={`text-4xl font-bold ${scoreGrade.color}`}>{scoreGrade.grade}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Score éco</div>
                    <div className={`text-xs ${scoreGrade.color}`}>{scoreGrade.label}</div>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-lg text-center border border-gray-200 dark:border-gray-700">
                    <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">{results.totalDevices}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Équipements</div>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-lg text-center border border-gray-200 dark:border-gray-700">
                    <div className="text-3xl font-bold text-red-600 dark:text-red-400">
                      {(results.totalCO2 / 1000).toFixed(1)}t
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">CO₂e/an</div>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-lg text-center border border-gray-200 dark:border-gray-700">
                    <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">{results.renewalNeeded}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">À renouveler</div>
                  </div>
                </div>

                <Progress value={results.ecoScore} className="h-4 mb-2" />
                <div className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  Score d'éco-efficacité: {results.ecoScore}/100
                </div>
              </div>

              {/* Détails par catégorie */}
              <div>
                <h4 className="font-semibold text-lg mb-4 text-gray-900 dark:text-gray-100">🔍 Analyse détaillée</h4>
                <div className="space-y-3">
                  {results.details.map((item) => (
                    <div
                      key={item.type}
                      className={`p-4 rounded-lg border-2 ${getStatusColor(item.status)}`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{deviceData[item.type as keyof typeof deviceData].icon}</span>
                          <div>
                            <div className="font-semibold text-gray-900 dark:text-gray-100">
                              {item.name} ({item.count})
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              Âge moyen: {item.avgAge} ans / Optimal: {item.optimalLife} ans
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-gray-900 dark:text-gray-100">{item.co2} kg CO₂e/an</div>
                          <div
                            className={`text-sm ${item.status === "good"
                              ? "text-emerald-600 dark:text-emerald-400"
                              : item.status === "warning"
                                ? "text-yellow-600 dark:text-yellow-400"
                                : "text-red-600 dark:text-red-400"
                              }`}
                          >
                            {item.status === "good" ? "✓ OK" : item.status === "warning" ? "⚠ À surveiller" : "⚠ Critique"}
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 text-sm text-gray-700 dark:text-gray-300">{item.recommendation}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Économies potentielles */}
              {results.potentialSavings > 0 && (
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-gray-100">
                    💰 Économies potentielles avec le reconditionné
                  </h4>
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                    -{(results.potentialSavings / 1000).toFixed(1)} tonnes CO₂e
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    En remplaçant les {results.renewalNeeded} équipements à renouveler par du reconditionné, vous économiseriez
                    l'équivalent de {Math.round(results.potentialSavings / 0.12)} km en voiture.
                  </p>
                </div>
              )}

              {/* Recommandations */}
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-gray-100">📋 Plan d'action recommandé</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>1. <strong>Court terme</strong>: Mettre en place une politique de maintenance préventive pour prolonger la durée de vie</li>
                  <li>2. <strong>Moyen terme</strong>: Planifier le renouvellement des {results.renewalNeeded} équipements critiques en privilégiant le reconditionné</li>
                  <li>3. <strong>Long terme</strong>: Adopter une politique d'achat responsable (labels, durabilité, réparabilité)</li>
                  <li>4. <strong>Transversal</strong>: Former les équipes aux bonnes pratiques d'usage pour prolonger la durée de vie</li>
                </ul>
              </div>

              {/* Boutons d'action */}
              <div className="flex gap-4">
                <Button className="flex-1 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-slate-700 border border-gray-300 dark:border-gray-600">
                  <Download className="w-4 h-4 mr-2" />
                  Télécharger le rapport PDF
                </Button>
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setShowResults(false)}
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Modifier l'inventaire
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="text-sm text-gray-600 dark:text-gray-300 text-center">
        Sources: ADEME 2025, GreenIT.fr • Méthodologie: ACV (Analyse du Cycle de Vie)
      </div>
    </div>
  )
}
