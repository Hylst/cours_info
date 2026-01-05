import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, BookOpen, AlertCircle, Zap, FolderOpen } from "lucide-react"
import Link from "next/link"

export default function SitemapPage() {
  const siteStructure = [
    {
      category: "Accueil",
      icon: Home,
      pages: [{ href: "/", label: "Page d'accueil", description: "Introduction au Green IT et parcours utilisateurs" }],
    },
    {
      category: "Découvrir",
      icon: BookOpen,
      pages: [
        {
          href: "/comprendre",
          label: "Comprendre le cycle de vie",
          description: "Visualisation interactive du cycle de vie des équipements",
        },
        {
          href: "/problematiques",
          label: "Problématiques & Solutions",
          description: "Enjeux du numérique et solutions disponibles",
        },
        { href: "/chiffres", label: "Chiffres & Données", description: "Statistiques et visualisations interactives" },
        { href: "/cas-pratiques", label: "Cas pratiques", description: "Études de cas détaillées par type d'appareil" },
      ],
    },
    {
      category: "Agir",
      icon: Zap,
      pages: [
        {
          href: "/agir",
          label: "Comment agir",
          description: "Guides d'actions pour citoyens, entreprises et collectivités",
        },
        {
          href: "/recyclage",
          label: "Recyclage & Réparation",
          description: "Réseau de points de collecte et acteurs du recyclage",
        },
        { href: "/outils", label: "Outils interactifs", description: "Calculateur d'empreinte, simulateur et quiz" },
      ],
    },
    {
      category: "Approfondir",
      icon: AlertCircle,
      pages: [
        { href: "/datacenters", label: "Datacenters verts", description: "Efficacité énergétique et bonnes pratiques" },
        {
          href: "/developpement",
          label: "Développement éco-responsable",
          description: "Guide pour développeurs et concepteurs d'applications",
        },
        { href: "/reglementation", label: "Réglementation", description: "Normes et lois en France et en Europe" },
        {
          href: "/perspectives",
          label: "Perspectives d'avenir",
          description: "Scénarios futurs et solutions à développer",
        },
      ],
    },
    {
      category: "Plus",
      icon: FolderOpen,
      pages: [
        { href: "/ressources", label: "Ressources", description: "Guides, liens utiles et glossaire" },
        { href: "/a-propos", label: "À propos", description: "Mission, valeurs et méthodologie du projet" },
        { href: "/sitemap-page", label: "Plan du site", description: "Cette page" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">
              Plan du site
            </h1>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto text-pretty">
              Naviguez facilement à travers toutes les sections du site Le Green IT en clair
            </p>
          </div>

          <div className="space-y-6">
            {siteStructure.map((section) => {
              const Icon = section.icon
              return (
                <Card key={section.category}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-emerald-900">
                      <Icon className="w-5 h-5 text-emerald-600" />
                      {section.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {section.pages.map((page) => (
                        <Link
                          key={page.href}
                          href={page.href}
                          className="group flex flex-col gap-1 rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-emerald-400 hover:shadow-md"
                        >
                          <div className="font-semibold text-slate-900 group-hover:text-emerald-700">{page.label}</div>
                          <div className="text-sm text-slate-600">{page.description}</div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-emerald-50 border-emerald-200">
              <CardContent className="py-6">
                <p className="text-slate-700 mb-4">Vous ne trouvez pas ce que vous cherchez ?</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
                  >
                    <Home className="w-4 h-4" />
                    Retour à l'accueil
                  </Link>
                  <a
                    href="mailto:geoffroy.streit@gmail.com"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-600 px-6 py-2 text-sm font-semibold text-emerald-700 transition-colors hover:bg-emerald-50"
                  >
                    Nous contacter
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
