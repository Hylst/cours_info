"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  Download,
  Building2,
  Code,
  BarChart3,
  FileSpreadsheet,
  CheckCircle2,
  Users,
  Leaf,
} from "lucide-react"
import Link from "next/link"

const templates = [
  {
    id: "charte-green-it",
    title: "Charte Green IT pour entreprises",
    description:
      "Document complet définissant les engagements et bonnes pratiques numériques responsables de votre organisation",
    category: "Gouvernance",
    icon: Building2,
    format: "DOCX / PDF",
    pages: "12 pages",
    difficulty: "Intermédiaire",
    target: "Entreprises, DSI",
    features: [
      "Principes et engagements",
      "Rôles et responsabilités",
      "Plan d'action détaillé",
      "Indicateurs de suivi",
    ],
  },
  {
    id: "politique-numerique",
    title: "Politique numérique responsable",
    description:
      "Modèle de politique interne pour encadrer l'usage et l'achat d'équipements numériques dans votre structure",
    category: "Gouvernance",
    icon: FileText,
    format: "DOCX / PDF",
    pages: "8 pages",
    difficulty: "Facile",
    target: "Tous types d'organisations",
    features: [
      "Règles d'achat responsable",
      "Gestion du cycle de vie",
      "Formation et sensibilisation",
      "Mesures concrètes",
    ],
  },
  {
    id: "tableau-bord-impact",
    title: "Tableau de bord de suivi d'impact",
    description:
      "Outil Excel pour mesurer et suivre votre empreinte numérique : équipements, consommation, émissions CO2",
    category: "Mesure",
    icon: BarChart3,
    format: "XLSX",
    pages: "5 onglets",
    difficulty: "Intermédiaire",
    target: "RSE, Contrôle de gestion",
    features: [
      "Inventaire du parc informatique",
      "Calcul empreinte carbone",
      "Graphiques automatiques",
      "Suivi année par année",
    ],
  },
  {
    id: "grille-audit",
    title: "Grille d'audit Green IT",
    description: "Checklist complète pour évaluer la maturité Green IT de votre organisation sur 100 critères",
    category: "Audit",
    icon: CheckCircle2,
    format: "XLSX / PDF",
    pages: "15 pages",
    difficulty: "Avancé",
    target: "Auditeurs, Consultants",
    features: ["100 critères d'évaluation", "Scoring automatique", "Recommandations priorisées", "Rapport de synthèse"],
  },
  {
    id: "script-analyse-site",
    title: "Script d'analyse de site web",
    description:
      "Script Python pour analyser l'empreinte environnementale d'un site web : poids, requêtes, bonnes pratiques",
    category: "Technique",
    icon: Code,
    format: "Python (.py)",
    pages: "Code source",
    difficulty: "Avancé",
    target: "Développeurs, DevOps",
    features: [
      "Analyse automatique du DOM",
      "Calcul du poids des pages",
      "Vérification écoconception",
      "Rapport JSON/HTML",
    ],
  },
  {
    id: "plan-action-dsi",
    title: "Plan d'action DSI numérique responsable",
    description: "Feuille de route stratégique sur 3 ans avec objectifs chiffrés et ressources nécessaires",
    category: "Stratégie",
    icon: FileSpreadsheet,
    format: "XLSX / DOCX",
    pages: "20 pages",
    difficulty: "Avancé",
    target: "DSI, Direction",
    features: ["Roadmap sur 36 mois", "Budget prévisionnel", "KPIs et objectifs", "Planning Gantt"],
  },
  {
    id: "guide-sensibilisation",
    title: "Kit de sensibilisation collaborateurs",
    description: "Ensemble de supports pour former vos équipes : présentation, quiz, affiches, mémo",
    category: "Formation",
    icon: Users,
    format: "PPTX / PDF",
    pages: "Pack complet",
    difficulty: "Facile",
    target: "RH, Communication",
    features: ["Présentation 30min", "Quiz interactif", "5 affiches A3", "Mémo de poche"],
  },
  {
    id: "cahier-charges-achat",
    title: "Cahier des charges achat responsable",
    description:
      "Modèle de cahier des charges intégrant critères environnementaux et sociaux pour vos appels d'offres IT",
    category: "Achats",
    icon: FileText,
    format: "DOCX / PDF",
    pages: "18 pages",
    difficulty: "Intermédiaire",
    target: "Achats, Marchés publics",
    features: ["Critères RSE détaillés", "Grille de notation", "Labels et certifications", "Clauses contractuelles"],
  },
]

const categories = ["Tous", "Gouvernance", "Mesure", "Audit", "Technique", "Stratégie", "Formation", "Achats"]

export default function ModelesPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 px-6 py-16 lg:py-24 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-muted/10 p-3">
            <FileText className="h-8 w-8 text-emerald-700 dark:text-emerald-400" />
          </div>
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl dark:text-slate-100">
            Modèles et outils téléchargeables
          </h1>
          <p className="text-pretty text-lg text-slate-600 lg:text-xl dark:text-slate-300">
            Templates prêts à l'emploi pour déployer une démarche Green IT dans votre organisation. Tous les documents
            sont personnalisables et libres d'usage.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <Button key={cat} variant="outline" size="sm" className="rounded-full bg-transparent">
                {cat}
              </Button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {templates.map((template) => {
              const Icon = template.icon
              return (
                <Card
                  key={template.id}
                  className="group flex flex-col border-2 border-slate-200 transition-all hover:shadow-xl dark:border-slate-700 dark:bg-slate-800"
                >
                  <div className="p-6 flex-1">
                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted/10">
                        <Icon className="h-6 w-6 text-emerald-700 dark:text-emerald-400" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {template.category}
                      </Badge>
                    </div>

                    <h3 className="mb-2 text-balance text-lg font-bold text-slate-900 dark:text-slate-100">
                      {template.title}
                    </h3>
                    <p className="mb-4 text-pretty text-sm text-slate-600 dark:text-slate-300">
                      {template.description}
                    </p>

                    <div className="mb-4 flex flex-wrap gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1 dark:bg-slate-700">
                        {template.format}
                      </span>
                      <span className="flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1 dark:bg-slate-700">
                        {template.pages}
                      </span>
                      <span className="flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1 dark:bg-slate-700">
                        {template.difficulty}
                      </span>
                    </div>

                    <div className="mb-4 text-xs font-medium text-slate-700 dark:text-slate-300">
                      Pour : {template.target}
                    </div>

                    <ul className="space-y-2">
                      {template.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <Leaf className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-slate-200 p-4 dark:border-slate-700">
                    {template.id === "script-analyse-site" ? (
                      <a href="/modeles/script-analyse-site.py" download>
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                          <Download className="mr-2 h-4 w-4" />
                          Télécharger
                        </Button>
                      </a>
                    ) : (
                      <Link href={`/modeles/${template.id}`}>
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                          <Download className="mr-2 h-4 w-4" />
                          Consulter / Imprimer PDF
                        </Button>
                      </Link>
                    )}
                  </div>
                </Card>
              )
            })}
          </div>

          <Card className="mt-12 border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-8 dark:border-emerald-800 dark:from-emerald-950 dark:to-teal-950">
            <div className="text-center">
              <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
                Besoin d'un modèle personnalisé ?
              </h3>
              <p className="mb-6 text-slate-700 dark:text-slate-300">
                Nous pouvons créer des templates sur mesure adaptés à votre secteur et vos besoins spécifiques.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/a-propos">
                  <Button size="lg" variant="outline">
                    Nous contacter
                  </Button>
                </Link>
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  <Download className="mr-2 h-5 w-5" />
                  Tout télécharger (ZIP)
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
