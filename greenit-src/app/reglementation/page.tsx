"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  Scale,
  Building2,
  Users,
  Factory,
  FileText,
  CheckCircle2,
  AlertCircle,
  Calendar,
  TrendingUp,
  Shield,
  Leaf,
} from "lucide-react"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

const timelineData = [
  { year: "2020", event: "Loi AGEC", impact: 85 },
  { year: "2021", event: "Indice réparabilité", impact: 70 },
  { year: "2021", event: "Loi REEN", impact: 90 },
  { year: "2024", event: "Indice durabilité", impact: 75 },
  { year: "2025", event: "CSRD obligatoire", impact: 95 },
  { year: "2027", event: "Droit à la réparation EU", impact: 88 },
]

const complianceData = [
  { sector: "Grandes entreprises", conforme: 78, enCours: 18, nonConforme: 4 },
  { sector: "PME", conforme: 45, enCours: 35, nonConforme: 20 },
  { sector: "Secteur public", conforme: 82, enCours: 15, nonConforme: 3 },
  { sector: "Startups", conforme: 38, enCours: 42, nonConforme: 20 },
]

const impactData = [
  { name: "Réduction e-déchets", value: 35 },
  { name: "Allongement durée de vie", value: 28 },
  { name: "Économie circulaire", value: 22 },
  { name: "Transparence", value: 15 },
]

const COLORS = ["#10b981", "#3b82f6", "#8b5cf6", "#f59e0b"]

export default function ReglementationPage() {
  const [selectedTab, setSelectedTab] = useState("france")

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-emerald-600 via-teal-600 to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <Scale className="w-12 h-12" />
            <Badge variant="secondary" className="text-sm">
              Mise à jour 2025
            </Badge>
          </div>
          <h1 className="text-5xl font-bold mb-6 text-balance text-white">Réglementation Green IT</h1>
          <p className="text-xl text-white/90 max-w-3xl text-pretty">
            Découvrez les normes, lois et obligations en France et en Europe pour réduire l'empreinte environnementale
            du numérique
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Chronologie des réglementations</h2>
            <p className="text-lg text-muted-foreground">L'évolution du cadre législatif Green IT en France et en Europe</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Impact des réglementations dans le temps</CardTitle>
              <CardDescription>Score d'impact sur l'industrie numérique (0-100)</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={timelineData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="impact" stroke="#10b981" strokeWidth={3} name="Impact" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="france">🇫🇷 France</TabsTrigger>
              <TabsTrigger value="europe">🇪🇺 Europe</TabsTrigger>
              <TabsTrigger value="normes">📋 Normes ISO</TabsTrigger>
            </TabsList>

            {/* France Tab */}
            <TabsContent value="france" className="space-y-6">
              <Card className="border-primary/20 bg-secondary/10">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Leaf className="w-8 h-8 text-emerald-600" />
                    <div>
                      <CardTitle>Loi AGEC (2020)</CardTitle>
                      <CardDescription>Anti-Gaspillage pour une Économie Circulaire</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Objectifs principaux</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>Sortir du plastique jetable et favoriser le réemploi</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>Mieux informer les consommateurs (indice de réparabilité obligatoire)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>Lutter contre l'obsolescence programmée (pièces détachées 10 ans)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>Interdiction de destruction des invendus non alimentaires</span>
                      </li>
                    </ul>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 pt-4">
                    <div className="bg-card p-4 rounded-lg border border-primary/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="w-5 h-5 text-emerald-600" />
                        <h5 className="font-semibold text-card-foreground">Qui est concerné ?</h5>
                      </div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Fabricants et distributeurs</li>
                        <li>• Plateformes de vente en ligne</li>
                        <li>• Réparateurs professionnels</li>
                        <li>• Collectivités locales</li>
                      </ul>
                    </div>

                    <div className="bg-card p-4 rounded-lg border border-primary/20">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-5 h-5 text-emerald-600" />
                        <h5 className="font-semibold text-card-foreground">Impact mesuré (2025)</h5>
                      </div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• +42% de réparations depuis 2021</li>
                        <li>• 78% des appareils notés</li>
                        <li>• -15% d'e-déchets prématurés</li>
                        <li>• 2,3 Mds € économisés</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-primary/5">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Shield className="w-8 h-8 text-blue-600" />
                    <div>
                      <CardTitle>Loi REEN (2021)</CardTitle>
                      <CardDescription>Réduire l'Empreinte Environnementale du Numérique</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">5 objectifs majeurs</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="bg-card p-3 rounded-lg border border-accent/20">
                        <h5 className="font-semibold text-sm mb-1 text-card-foreground">1. Sensibilisation</h5>
                        <p className="text-sm text-muted-foreground">
                          Éducation à l'empreinte environnementale du numérique dès l'école
                        </p>
                      </div>
                      <div className="bg-card p-3 rounded-lg border border-accent/20">
                        <h5 className="font-semibold text-sm mb-1 text-card-foreground">2. Limitation du renouvellement</h5>
                        <p className="text-sm text-muted-foreground">Lutte contre l'obsolescence logicielle et matérielle</p>
                      </div>
                      <div className="bg-card p-3 rounded-lg border border-accent/20">
                        <h5 className="font-semibold text-sm mb-1 text-card-foreground">3. Écoconception</h5>
                        <p className="text-sm text-muted-foreground">Services numériques plus sobres et accessibles</p>
                      </div>
                      <div className="bg-card p-3 rounded-lg border border-accent/20">
                        <h5 className="font-semibold text-sm mb-1 text-card-foreground">4. Datacenters responsables</h5>
                        <p className="text-sm text-muted-foreground">Indicateurs environnementaux obligatoires (PUE, WUE)</p>
                      </div>
                      <div className="bg-card p-3 rounded-lg border border-accent/20">
                        <h5 className="font-semibold text-sm mb-1 text-card-foreground">5. Territoires</h5>
                        <p className="text-sm text-muted-foreground">
                          Stratégie numérique responsable pour collectivités &gt;50k hab.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-accent/10 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2 flex items-center gap-2 text-foreground">
                      <AlertCircle className="w-5 h-5 text-accent" />
                      Obligations spécifiques
                    </h5>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>
                        • <strong>Opérateurs télécom :</strong> Rapport annuel sur empreinte environnementale
                      </li>
                      <li>
                        • <strong>Datacenters &gt;1MW :</strong> Publication PUE, WUE, taux EnR
                      </li>
                      <li>
                        • <strong>Collectivités :</strong> Stratégie numérique responsable obligatoire
                      </li>
                      <li>
                        • <strong>Entreprises &gt;50 salariés :</strong> Sensibilisation des collaborateurs
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-accent/20 bg-accent/5">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <FileText className="w-8 h-8 text-purple-600" />
                    <div>
                      <CardTitle>Indices de réparabilité et durabilité</CardTitle>
                      <CardDescription>Transparence obligatoire depuis 2021</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-card p-4 rounded-lg border border-chart-3/20">
                      <h5 className="font-semibold mb-2 text-card-foreground">Indice de réparabilité (2021)</h5>
                      <p className="text-sm text-muted-foreground mb-3">Note sur 10 évaluant la facilité de réparation</p>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex justify-between">
                          <span>Documentation</span>
                          <span className="font-semibold">20%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Démontabilité</span>
                          <span className="font-semibold">20%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Disponibilité pièces</span>
                          <span className="font-semibold">20%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Prix des pièces</span>
                          <span className="font-semibold">20%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Critères spécifiques</span>
                          <span className="font-semibold">20%</span>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-chart-3/20">
                        <p className="text-xs text-muted-foreground">
                          <strong>Produits concernés :</strong> Smartphones, ordinateurs portables, téléviseurs,
                          lave-linge, tondeuses
                        </p>
                      </div>
                    </div>

                    <div className="bg-card p-4 rounded-lg border border-accent/20">
                      <h5 className="font-semibold mb-2 text-card-foreground">Indice de durabilité (2024)</h5>
                      <p className="text-sm text-muted-foreground mb-3">Évolution incluant robustesse et fiabilité</p>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex justify-between">
                          <span>Réparabilité</span>
                          <span className="font-semibold">35%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Fiabilité</span>
                          <span className="font-semibold">30%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Mise à jour logicielle</span>
                          <span className="font-semibold">20%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Critères environnementaux</span>
                          <span className="font-semibold">15%</span>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-chart-3/20">
                        <p className="text-xs text-muted-foreground">
                          <strong>Nouveauté :</strong> Intègre la durée de vie réelle et les mises à jour logicielles
                          garanties
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-chart-3/10 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2 text-foreground">Impact sur le marché (2025)</h5>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-chart-3">8.2/10</div>
                        <div className="text-xs text-muted-foreground">Note moyenne smartphones</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-chart-3">+2.1</div>
                        <div className="text-xs text-muted-foreground">Amélioration depuis 2021</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-chart-3">92%</div>
                        <div className="text-xs text-muted-foreground">Consommateurs consultent l'indice</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Europe Tab */}
            <TabsContent value="europe" className="space-y-6">
              <Card className="border-accent/20 bg-accent/5">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Building2 className="w-8 h-8 text-blue-600" />
                    <div>
                      <CardTitle>Directive DEEE (2012, révisée 2023)</CardTitle>
                      <CardDescription>Déchets d'Équipements Électriques et Électroniques</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Objectifs de collecte et recyclage</h4>
                    <div className="space-y-3">
                      <div className="bg-card p-3 rounded-lg border border-accent/20">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-card-foreground">Taux de collecte</span>
                          <Badge variant="outline" className="border-accent text-accent">65% minimum</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          65% du poids moyen des EEE mis sur le marché les 3 années précédentes
                        </p>
                      </div>
                      <div className="bg-card p-3 rounded-lg border border-accent/20">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-card-foreground">Taux de recyclage</span>
                          <Badge variant="outline" className="border-primary text-primary">85% minimum</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          85% des DEEE collectés doivent être recyclés ou valorisés
                        </p>
                      </div>
                      <div className="bg-card p-3 rounded-lg border border-accent/20">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-card-foreground">Responsabilité élargie</span>
                          <Badge variant="outline" className="border-secondary text-foreground">REP</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Les producteurs financent la collecte et le traitement des déchets
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-accent/10 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2 text-foreground">Obligations pour les États membres</h5>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Mise en place de systèmes de collecte séparée</li>
                      <li>• Traitement sélectif des substances dangereuses</li>
                      <li>• Registre national des producteurs et recycleurs</li>
                      <li>• Campagnes de sensibilisation du public</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/30">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Leaf className="w-8 h-8 text-emerald-600" />
                    <div>
                      <CardTitle>Droit à la réparation (2027)</CardTitle>
                      <CardDescription>Right to Repair - Application progressive</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Mesures clés</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="bg-card p-3 rounded-lg border border-primary/20">
                        <h5 className="font-semibold text-sm mb-1 flex items-center gap-2 text-card-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          Pièces détachées
                        </h5>
                        <p className="text-sm text-muted-foreground">Disponibilité garantie 10 ans après achat</p>
                      </div>
                      <div className="bg-card p-3 rounded-lg border border-primary/20">
                        <h5 className="font-semibold text-sm mb-1 flex items-center gap-2 text-card-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          Prix raisonnables
                        </h5>
                        <p className="text-sm text-muted-foreground">Plafonnement du coût des pièces de rechange</p>
                      </div>
                      <div className="bg-card p-3 rounded-lg border border-primary/20">
                        <h5 className="font-semibold text-sm mb-1 flex items-center gap-2 text-card-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          Accès aux outils
                        </h5>
                        <p className="text-sm text-muted-foreground">Manuels et outils de diagnostic accessibles</p>
                      </div>
                      <div className="bg-card p-3 rounded-lg border border-primary/20">
                        <h5 className="font-semibold text-sm mb-1 flex items-center gap-2 text-card-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          Réparateurs indépendants
                        </h5>
                        <p className="text-sm text-muted-foreground">Accès aux mêmes ressources que les services agréés</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary/10 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2 text-foreground">Calendrier d'application</h5>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-emerald-600" />
                        <span>
                          <strong>2024 :</strong> Smartphones et tablettes
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-emerald-600" />
                        <span>
                          <strong>2025 :</strong> Ordinateurs portables
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-emerald-600" />
                        <span>
                          <strong>2027 :</strong> Tous les appareils électroniques
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-950/30">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <FileText className="w-8 h-8 text-purple-600" />
                    <div>
                      <CardTitle>CSRD (2025)</CardTitle>
                      <CardDescription>Corporate Sustainability Reporting Directive</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Reporting extra-financier obligatoire</h4>
                    <p className="text-muted-foreground mb-4">
                      La CSRD impose aux grandes entreprises de publier des informations détaillées sur leur impact
                      environnemental, incluant leur empreinte numérique.
                    </p>

                    <div className="space-y-3">
                      <div className="bg-card p-3 rounded-lg border border-chart-3/20">
                        <h5 className="font-semibold text-sm mb-2 text-card-foreground">Qui est concerné ?</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Grandes entreprises &gt;250 salariés (2025)</li>
                          <li>• PME cotées (2026)</li>
                          <li>• Entreprises non-UE avec activité significative en Europe (2028)</li>
                        </ul>
                      </div>

                      <div className="bg-card p-3 rounded-lg border border-chart-3/20">
                        <h5 className="font-semibold text-sm mb-2 text-card-foreground">Données numériques à reporter</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Consommation énergétique des infrastructures IT</li>
                          <li>• Émissions GES liées au numérique (scope 1, 2, 3)</li>
                          <li>• Politique d'achat responsable (matériel reconditionné)</li>
                          <li>• Gestion des e-déchets et taux de recyclage</li>
                          <li>• Durée de vie moyenne des équipements</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-chart-3/10 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2 text-foreground">Impact attendu</h5>
                    <p className="text-sm text-muted-foreground">
                      La CSRD va forcer les entreprises à mesurer précisément leur empreinte numérique et à mettre en
                      place des stratégies de réduction. Environ <strong>50 000 entreprises européennes</strong> seront
                      concernées d'ici 2028.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* ISO Norms Tab */}
            <TabsContent value="normes" className="space-y-6">
              <Card className="border-chart-2/20 bg-chart-2/5">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Shield className="w-8 h-8 text-teal-600" />
                    <div>
                      <CardTitle>ISO 14001 : Management environnemental</CardTitle>
                      <CardDescription>Norme internationale de référence</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Principes fondamentaux</h4>
                    <p className="text-muted-foreground mb-4">
                      L'ISO 14001 définit les exigences pour un système de management environnemental (SME) efficace.
                      Elle s'applique à toutes les organisations, quelle que soit leur taille ou leur secteur.
                    </p>

                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="bg-card p-3 rounded-lg border border-chart-2/20">
                        <h5 className="font-semibold text-sm mb-1 text-card-foreground">Engagement de la direction</h5>
                        <p className="text-sm text-muted-foreground">Leadership et politique environnementale claire</p>
                      </div>
                      <div className="bg-card p-3 rounded-lg border border-chart-2/20">
                        <h5 className="font-semibold text-sm mb-1 text-card-foreground">Planification</h5>
                        <p className="text-sm text-muted-foreground">
                          Identification des aspects environnementaux significatifs
                        </p>
                      </div>
                      <div className="bg-card p-3 rounded-lg border border-chart-2/20">
                        <h5 className="font-semibold text-sm mb-1 text-card-foreground">Support et opérations</h5>
                        <p className="text-sm text-muted-foreground">Ressources, compétences et contrôle opérationnel</p>
                      </div>
                      <div className="bg-card p-3 rounded-lg border border-chart-2/20">
                        <h5 className="font-semibold text-sm mb-1 text-card-foreground">Amélioration continue</h5>
                        <p className="text-sm text-muted-foreground">Surveillance, audit et actions correctives</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-chart-2/10 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2 text-foreground">Application au Green IT</h5>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Mesure de l'empreinte carbone des infrastructures IT</li>
                      <li>• Politique d'achat responsable (critères environnementaux)</li>
                      <li>• Gestion des déchets électroniques (DEEE)</li>
                      <li>• Optimisation de la consommation énergétique</li>
                      <li>• Formation et sensibilisation des équipes IT</li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-card p-3 rounded-lg border border-chart-2/20">
                      <div className="text-2xl font-bold text-chart-2">400k+</div>
                      <div className="text-xs text-muted-foreground">Certifications mondiales</div>
                    </div>
                    <div className="bg-card p-3 rounded-lg border border-chart-2/20">
                      <div className="text-2xl font-bold text-chart-2">12k+</div>
                      <div className="text-xs text-muted-foreground">Entreprises françaises</div>
                    </div>
                    <div className="bg-card p-3 rounded-lg border border-chart-2/20">
                      <div className="text-2xl font-bold text-chart-2">-25%</div>
                      <div className="text-xs text-muted-foreground">Réduction impact moyen</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-accent/20 bg-accent/5">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Factory className="w-8 h-8 text-accent" />
                    <div>
                      <CardTitle>ISO 50001 : Management de l'énergie</CardTitle>
                      <CardDescription>Optimisation de la performance énergétique</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Objectifs de la norme</h4>
                    <p className="text-muted-foreground mb-4">
                      L'ISO 50001 aide les organisations à développer une gestion systématique de l'énergie pour
                      améliorer leur performance énergétique, incluant l'efficacité, l'usage et la consommation.
                    </p>

                    <div className="space-y-3">
                      <div className="bg-card p-3 rounded-lg border border-accent/20">
                        <h5 className="font-semibold text-sm mb-2 text-card-foreground">Cycle PDCA (Plan-Do-Check-Act)</h5>
                        <div className="grid grid-cols-4 gap-2 text-xs">
                          <div className="text-center">
                            <div className="font-semibold text-accent mb-1">Plan</div>
                            <div className="text-muted-foreground">Revue énergétique</div>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold text-accent mb-1">Do</div>
                            <div className="text-muted-foreground">Mise en œuvre</div>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold text-accent mb-1">Check</div>
                            <div className="text-muted-foreground">Surveillance</div>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold text-accent mb-1">Act</div>
                            <div className="text-muted-foreground">Amélioration</div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-card p-3 rounded-lg border border-accent/20">
                        <h5 className="font-semibold text-sm mb-2 text-card-foreground">Application aux datacenters</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Mesure du PUE (Power Usage Effectiveness)</li>
                          <li>• Optimisation du refroidissement</li>
                          <li>• Virtualisation et consolidation des serveurs</li>
                          <li>• Utilisation d'énergies renouvelables</li>
                          <li>• Récupération de chaleur fatale</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-accent/10 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2 text-foreground">Bénéfices mesurés</h5>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-accent">-20%</div>
                        <div className="text-xs text-muted-foreground">Consommation énergétique</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-accent">-15%</div>
                        <div className="text-xs text-muted-foreground">Coûts énergétiques</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-accent">ROI 3 ans</div>
                        <div className="text-xs text-muted-foreground">Retour sur investissement</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-emerald-200 bg-emerald-50/50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Leaf className="w-8 h-8 text-emerald-600" />
                    <div>
                      <CardTitle>Autres certifications Green IT</CardTitle>
                      <CardDescription>Labels et normes complémentaires</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-card p-4 rounded-lg border border-primary/20">
                      <h5 className="font-semibold mb-2 text-card-foreground">🌿 Label Numérique Responsable</h5>
                      <p className="text-sm text-muted-foreground mb-2">
                        Certification française délivrée par l'INR (Institut du Numérique Responsable)
                      </p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• 3 niveaux : Sensibilisation, Progression, Exemplarité</li>
                        <li>• Évalue stratégie, gouvernance, achats, usage</li>
                        <li>• 450+ organisations labellisées en France</li>
                      </ul>
                    </div>

                    <div className="bg-card p-4 rounded-lg border border-primary/20">
                      <h5 className="font-semibold mb-2 text-card-foreground">⚡ Energy Star</h5>
                      <p className="text-sm text-muted-foreground mb-2">
                        Label américain reconnu internationalement pour l'efficacité énergétique
                      </p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Ordinateurs, serveurs, écrans, imprimantes</li>
                        <li>• 25-30% plus efficaces que le standard</li>
                        <li>• Reconnu dans 75+ pays</li>
                      </ul>
                    </div>

                    <div className="bg-card p-4 rounded-lg border border-primary/20">
                      <h5 className="font-semibold mb-2 text-card-foreground">🏆 TCO Certified</h5>
                      <p className="text-sm text-muted-foreground mb-2">Certification suédoise couvrant tout le cycle de vie</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Critères sociaux et environnementaux stricts</li>
                        <li>• Réparabilité, recyclabilité, substances dangereuses</li>
                        <li>• Référence pour achats publics responsables</li>
                      </ul>
                    </div>

                    <div className="bg-card p-4 rounded-lg border border-primary/20">
                      <h5 className="font-semibold mb-2 text-card-foreground">🔋 EPEAT</h5>
                      <p className="text-sm text-muted-foreground mb-2">Electronic Product Environmental Assessment Tool</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• 3 niveaux : Bronze, Silver, Gold</li>
                        <li>• Évalue 51 critères environnementaux</li>
                        <li>• Obligatoire pour marchés publics US</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Compliance Status Section */}
      <section className="py-16 px-4 bg-secondary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">État de conformité en France (2025)</h2>
            <p className="text-lg text-muted-foreground">Niveau d'adoption des réglementations par secteur</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Conformité par secteur</CardTitle>
                <CardDescription>Pourcentage d'entreprises conformes aux principales réglementations</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={complianceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="sector" angle={-15} textAnchor="end" height={80} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="conforme" fill="#10b981" name="Conforme" />
                    <Bar dataKey="enCours" fill="#f59e0b" name="En cours" />
                    <Bar dataKey="nonConforme" fill="#ef4444" name="Non conforme" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Impact des réglementations</CardTitle>
                <CardDescription>Répartition des bénéfices environnementaux</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={impactData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {impactData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Constraints & Challenges Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Contraintes et défis</h2>
            <p className="text-lg text-muted-foreground">Les obstacles à la mise en conformité</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-destructive/20 bg-destructive/5">
              <CardHeader>
                <AlertCircle className="w-8 h-8 text-destructive mb-2" />
                <CardTitle className="text-lg text-card-foreground">Coûts de mise en conformité</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• Investissements initiaux importants (audit, formation, outils)</p>
                <p>• Coût moyen : 50k€ - 500k€ selon taille entreprise</p>
                <p>• ROI sur 3-5 ans via économies d'énergie et image</p>
                <p>• Aides publiques disponibles (ADEME, régions)</p>
              </CardContent>
            </Card>

            <Card className="border-destructive/20 bg-destructive/5">
              <CardHeader>
                <AlertCircle className="w-8 h-8 text-destructive mb-2" />
                <CardTitle className="text-lg text-card-foreground">Complexité technique</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• Mesure précise de l'empreinte numérique difficile</p>
                <p>• Manque d'outils standardisés de reporting</p>
                <p>• Besoin de compétences spécialisées (Green IT)</p>
                <p>• Coordination entre DSI, RSE et achats nécessaire</p>
              </CardContent>
            </Card>

            <Card className="border-chart-3/20 bg-chart-3/5">
              <CardHeader>
                <AlertCircle className="w-8 h-8 text-chart-3 mb-2" />
                <CardTitle className="text-lg text-card-foreground">Évolution rapide</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• Nouvelles réglementations chaque année</p>
                <p>• Harmonisation France/Europe en cours</p>
                <p>• Adaptation des processus métier nécessaire</p>
                <p>• Veille réglementaire permanente indispensable</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 px-4 bg-background border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Ressources officielles</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Consultez les textes officiels et guides pratiques pour vous mettre en conformité
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <Button variant="outline" className="h-auto py-4 px-6 justify-start bg-transparent" asChild>
              <a href="https://www.legifrance.gouv.fr" target="_blank" rel="noopener noreferrer">
                <div className="text-left">
                  <div className="font-semibold text-foreground">Légifrance</div>
                  <div className="text-xs text-muted-foreground">Textes de loi AGEC et REEN</div>
                </div>
              </a>
            </Button>

            <Button variant="outline" className="h-auto py-4 px-6 justify-start bg-transparent" asChild>
              <a href="https://www.ademe.fr" target="_blank" rel="noopener noreferrer">
                <div className="text-left">
                  <div className="font-semibold text-foreground">ADEME</div>
                  <div className="text-xs text-muted-foreground">Guides pratiques et aides</div>
                </div>
              </a>
            </Button>

            <Button variant="outline" className="h-auto py-4 px-6 justify-start bg-transparent" asChild>
              <a href="https://eur-lex.europa.eu" target="_blank" rel="noopener noreferrer">
                <div className="text-left">
                  <div className="font-semibold text-foreground">EUR-Lex</div>
                  <div className="text-xs text-muted-foreground">Directives européennes</div>
                </div>
              </a>
            </Button>

            <Button variant="outline" className="h-auto py-4 px-6 justify-start bg-transparent" asChild>
              <a href="https://www.iso.org" target="_blank" rel="noopener noreferrer">
                <div className="text-left">
                  <div className="font-semibold text-foreground">ISO</div>
                  <div className="text-xs text-muted-foreground">Normes internationales</div>
                </div>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
