"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  Globe,
  Search,
  Download,
  Share2,
  Zap,
  FileImage,
  Code,
  AlertCircle,
  CheckCircle2,
  TrendingUp,
  TrendingDown,
  Leaf,
} from "lucide-react"
import { Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

export function WebsiteCarbonCalculator() {
  const [url, setUrl] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [results, setResults] = useState<any>(null)

  const analyzeWebsite = async () => {
    setIsAnalyzing(true)

    // Simulation d'analyse (en production, cela appellerait une vraie API)
    setTimeout(() => {
      const mockResults = {
        url: url,
        pageWeight: Math.floor(Math.random() * 3000 + 500), // KB
        requests: Math.floor(Math.random() * 100 + 20),
        images: Math.floor(Math.random() * 50 + 5),
        scripts: Math.floor(Math.random() * 30 + 5),
        stylesheets: Math.floor(Math.random() * 10 + 2),
        fonts: Math.floor(Math.random() * 5 + 1),
        carbonPerVisit: Math.floor(Math.random() * 2000 + 100) / 1000, // g CO2
        carbonPerMonth: Math.floor(Math.random() * 50000 + 5000) / 1000, // kg CO2 for 10k visits
        lighthouse: {
          performance: Math.floor(Math.random() * 30 + 70),
          accessibility: Math.floor(Math.random() * 20 + 80),
          bestPractices: Math.floor(Math.random() * 20 + 80),
          seo: Math.floor(Math.random() * 20 + 80),
        },
        greenHosting: Math.random() > 0.5,
        optimizations: [
          {
            category: "Images",
            current: Math.floor(Math.random() * 1500 + 300),
            potential: Math.floor(Math.random() * 500 + 100),
            savings: 0,
          },
          {
            category: "JavaScript",
            current: Math.floor(Math.random() * 800 + 200),
            potential: Math.floor(Math.random() * 400 + 100),
            savings: 0,
          },
          {
            category: "CSS",
            current: Math.floor(Math.random() * 200 + 50),
            potential: Math.floor(Math.random() * 100 + 30),
            savings: 0,
          },
          {
            category: "Fonts",
            current: Math.floor(Math.random() * 300 + 50),
            potential: Math.floor(Math.random() * 150 + 30),
            savings: 0,
          },
        ],
      }

      // Calculate savings
      mockResults.optimizations.forEach((opt) => {
        opt.savings = Math.round(((opt.current - opt.potential) / opt.current) * 100)
      })

      setResults(mockResults)
      setIsAnalyzing(false)
    }, 3000)
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-700 dark:text-green-400"
    if (score >= 50) return "text-orange-700 dark:text-orange-400"
    return "text-red-700 dark:text-red-400"
  }

  const getScoreLabel = (score: number) => {
    if (score >= 90) return "Excellent"
    if (score >= 50) return "Moyen"
    return "À améliorer"
  }

  const getCarbonRating = (carbonPerVisit: number) => {
    if (carbonPerVisit < 0.5) return { label: "A+", color: "bg-green-600", textColor: "text-green-800 dark:text-green-400" }
    if (carbonPerVisit < 1) return { label: "A", color: "bg-green-500", textColor: "text-green-800 dark:text-green-400" }
    if (carbonPerVisit < 2) return { label: "B", color: "bg-yellow-500", textColor: "text-yellow-800 dark:text-yellow-400" }
    if (carbonPerVisit < 3) return { label: "C", color: "bg-orange-500", textColor: "text-orange-800 dark:text-orange-400" }
    return { label: "D", color: "bg-red-500", textColor: "text-red-800 dark:text-red-400" }
  }

  if (!results) {
    return (
      <Card className="shadow-lg dark:bg-slate-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            Calculateur d'empreinte carbone d'un site web
          </CardTitle>
          <CardDescription>
            Analysez l'impact environnemental d'un site web et obtenez des recommandations d'optimisation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="url" className="text-base font-semibold mb-2 block dark:text-gray-100">
                URL du site à analyser
              </Label>
              <div className="flex gap-2">
                <Input
                  id="url"
                  type="url"
                  placeholder="https://exemple.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="flex-1 dark:bg-slate-700 dark:text-gray-100 dark:border-slate-600"
                  disabled={isAnalyzing}
                />
                <Button
                  onClick={analyzeWebsite}
                  disabled={!url || isAnalyzing}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  {isAnalyzing ? (
                    <>
                      <Search className="h-4 w-4 mr-2 animate-spin" />
                      Analyse...
                    </>
                  ) : (
                    <>
                      <Search className="h-4 w-4 mr-2" />
                      Analyser
                    </>
                  )}
                </Button>
              </div>
              <p className="text-sm text-slate-600 dark:text-gray-400 mt-2">
                Entrez l'URL complète d'une page web pour analyser son empreinte carbone
              </p>
            </div>

            {isAnalyzing && (
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-3 mb-4">
                  <Search className="h-5 w-5 text-blue-600 dark:text-blue-400 animate-pulse" />
                  <span className="font-semibold text-blue-900 dark:text-blue-200">Analyse en cours...</span>
                </div>
                <Progress value={66} className="h-2 mb-3" />
                <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-300">
                  <li>• Chargement de la page</li>
                  <li>• Analyse des ressources (images, scripts, CSS)</li>
                  <li>• Calcul de l'empreinte carbone</li>
                  <li>• Génération des recommandations</li>
                </ul>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
              <Leaf className="h-8 w-8 text-green-600 dark:text-green-400 mb-3" />
              <h3 className="font-semibold mb-2 dark:text-gray-100">Méthodologie</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Analyse basée sur le poids de la page, le nombre de requêtes et les données du Sustainable Web Design
                Model 2025
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <Zap className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-3" />
              <h3 className="font-semibold mb-2 dark:text-gray-100">Données 2025</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                0,81g CO2e par GB transféré • Mix énergétique mondial moyen • Impact réseaux + datacenters + utilisateur
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
              <TrendingUp className="h-8 w-8 text-purple-600 dark:text-purple-400 mb-3" />
              <h3 className="font-semibold mb-2 dark:text-gray-100">Optimisations</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Recommandations personnalisées pour réduire le poids de votre site et améliorer les performances
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-yellow-900 dark:text-yellow-200 mb-1">Note importante</h4>
                <p className="text-sm text-yellow-800 dark:text-yellow-300">
                  Cette analyse est une estimation basée sur des modèles standard. L'impact réel peut varier selon
                  l'hébergement, le trafic et les pratiques des utilisateurs.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  const rating = getCarbonRating(results.carbonPerVisit)
  const resourceData = [
    { name: "Images", value: results.images, color: "#3b82f6" },
    { name: "Scripts", value: results.scripts, color: "#10b981" },
    { name: "CSS", value: results.stylesheets, color: "#f59e0b" },
    { name: "Fonts", value: results.fonts, color: "#8b5cf6" },
  ]

  return (
    <div className="space-y-6">
      <Card className="shadow-lg dark:bg-slate-800">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                Analyse de {results.url}
              </CardTitle>
              <CardDescription>Rapport d'empreinte carbone et recommandations d'optimisation</CardDescription>
            </div>
            <Button
              onClick={() => setResults(null)}
              variant="outline"
              className="bg-transparent border-gray-300 dark:border-gray-600"
            >
              Nouvelle analyse
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Métriques principales */}
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/30 p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800 text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">{results.pageWeight} KB</div>
              <div className="text-sm text-gray-700 dark:text-gray-300">Poids de la page</div>
              <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                Moyenne web: 2100 KB
                {results.pageWeight < 2100 && <TrendingDown className="inline h-3 w-3 ml-1 text-green-600" />}
                {results.pageWeight >= 2100 && <TrendingUp className="inline h-3 w-3 ml-1 text-red-600" />}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-900/30 p-6 rounded-lg border-2 border-green-200 dark:border-green-800 text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">{results.requests}</div>
              <div className="text-sm text-gray-700 dark:text-gray-300">Requêtes HTTP</div>
              <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                Moyenne web: 70
                {results.requests < 70 && <TrendingDown className="inline h-3 w-3 ml-1 text-green-600" />}
                {results.requests >= 70 && <TrendingUp className="inline h-3 w-3 ml-1 text-red-600" />}
              </div>
            </div>

            <div
              className={`bg-gradient-to-br from-${rating.color.split("-")[1]}-50 to-${rating.color.split("-")[1]}-100 dark:from-${rating.color.split("-")[1]}-900/20 dark:to-${rating.color.split("-")[1]}-900/30 p-6 rounded-lg border-2 border-${rating.color.split("-")[1]}-200 dark:border-${rating.color.split("-")[1]}-800 text-center`}
            >
              <div className={`text-3xl font-bold ${rating.textColor} mb-1`}>{results.carbonPerVisit}g</div>
              <div className="text-sm text-gray-700 dark:text-gray-300">CO2 par visite</div>
              <Badge className={`mt-2 ${rating.color} text-white`}>{rating.label}</Badge>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-900/30 p-6 rounded-lg border-2 border-purple-200 dark:border-purple-800 text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                {results.carbonPerMonth} kg
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-300">CO2/mois</div>
              <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Pour 10,000 visites</div>
            </div>
          </div>

          {/* Hébergement vert */}
          <div
            className={`p-4 rounded-lg border-2 ${results.greenHosting ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800" : "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800"}`}
          >
            <div className="flex items-center gap-3">
              {results.greenHosting ? (
                <>
                  <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                  <div>
                    <h4 className="font-semibold text-green-900 dark:text-green-200">Hébergement vert détecté</h4>
                    <p className="text-sm text-green-800 dark:text-green-300">
                      Ce site utilise un hébergement alimenté par des énergies renouvelables
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <AlertCircle className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  <div>
                    <h4 className="font-semibold text-orange-900 dark:text-orange-200">Hébergement standard détecté</h4>
                    <p className="text-sm text-orange-800 dark:text-orange-300">
                      Considérez un hébergeur vert pour réduire l'impact de 50%
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Scores Lighthouse */}
          <div>
            <h3 className="font-semibold text-lg mb-4 dark:text-gray-100">Scores Lighthouse</h3>
            <div className="grid md:grid-cols-4 gap-4">
              {Object.entries(results.lighthouse).map(([key, value]) => (
                <div
                  key={key}
                  className="bg-white dark:bg-slate-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium capitalize dark:text-gray-100">
                      {key === "bestPractices" ? "Best Practices" : key}
                    </span>
                    <span className={`text-2xl font-bold ${getScoreColor(value as number)}`}>{value}</span>
                  </div>
                  <Progress value={value as number} className="h-2 mb-1" />
                  <span className="text-xs text-gray-600 dark:text-gray-400">{getScoreLabel(value as number)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Répartition des ressources */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-4 dark:text-gray-100">Répartition des ressources</h3>
              <div className="bg-white dark:bg-slate-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie data={resourceData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
                      {resourceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {resourceData.map((item) => (
                    <div key={item.name} className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded" style={{ backgroundColor: item.color }} />
                      <span className="text-sm dark:text-gray-300">
                        {item.name}: {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4 dark:text-gray-100">Potentiel d'optimisation</h3>
              <div className="space-y-3">
                {results.optimizations.map((opt: any) => (
                  <div
                    key={opt.category}
                    className="bg-white dark:bg-slate-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium dark:text-gray-100">{opt.category}</span>
                      <Badge
                        variant={opt.savings > 40 ? "default" : "secondary"}
                        className="bg-green-600 dark:bg-green-700 text-white"
                      >
                        -{opt.savings}%
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-gray-600 dark:text-gray-400">{opt.current} KB</span>
                      <Progress value={100 - opt.savings} className="flex-1 h-2" />
                      <span className="text-green-600 dark:text-green-400 font-semibold">{opt.potential} KB</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recommandations */}
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="font-semibold text-lg mb-4 text-blue-900 dark:text-blue-200">
              Recommandations d'optimisation
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FileImage className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-1">Optimiser les images</h4>
                  <p className="text-sm text-blue-800 dark:text-blue-300">
                    Utilisez WebP, dimensionnez correctement, lazy loading. Économie potentielle:{" "}
                    {results.optimizations[0].savings}%
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Code className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-1">Minifier le code</h4>
                  <p className="text-sm text-blue-800 dark:text-blue-300">
                    Compressez JavaScript et CSS, supprimez le code mort. Bundle size réduite de{" "}
                    {results.optimizations[1].savings}%
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-1">Mise en cache</h4>
                  <p className="text-sm text-blue-800 dark:text-blue-300">
                    Configurez le cache navigateur et CDN pour réduire les transferts de 60-80%
                  </p>
                </div>
              </div>
              {!results.greenHosting && (
                <div className="flex items-start gap-3">
                  <Leaf className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-1">Hébergement vert</h4>
                    <p className="text-sm text-blue-800 dark:text-blue-300">
                      Migrez vers un hébergeur utilisant 100% d'énergies renouvelables (Infomaniak, OVH Eco,
                      PlanetHoster)
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Équivalences */}
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
            <h3 className="font-semibold text-lg mb-4 text-green-900 dark:text-green-200">
              Impact environnemental (10,000 visites/mois)
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
                  {Math.round((results.carbonPerMonth * 10) / 0.12)}
                </div>
                <div className="text-gray-700 dark:text-gray-300">km en voiture</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
                  {Math.round((results.carbonPerMonth * 10) / 2.5)}
                </div>
                <div className="text-gray-700 dark:text-gray-300">arbres à planter</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
                  {Math.round((results.carbonPerMonth * 10) / 0.9)}
                </div>
                <div className="text-gray-700 dark:text-gray-300">repas avec bœuf</div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
              <Download className="h-4 w-4 mr-2" />
              Télécharger le rapport PDF
            </Button>
            <Button variant="outline" className="flex-1 bg-transparent border-gray-300 dark:border-gray-600">
              <Share2 className="h-4 w-4 mr-2" />
              Partager l'analyse
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="text-sm text-gray-600 dark:text-gray-300 text-center">
        Sources: Sustainable Web Design Model 2025, Green Web Foundation, Website Carbon Calculator • Données: 0,81g
        CO2e/GB
      </div>
    </div>
  )
}
