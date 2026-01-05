"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, TrendingUp, ArrowRight, Filter, Rss, RefreshCw, ExternalLink, Newspaper, Radio } from "lucide-react"

type NewsCategory = "reglementation" | "innovation" | "tendance" | "etude" | "evenement" | "all"

interface NewsArticle {
  id: string
  title: string
  excerpt: string
  category: NewsCategory
  date: string
  relatedPage?: string
  source?: string
}

interface RSSFeedItem {
  title: string
  link: string
  description: string
  pubDate: string
  source: string
  category: string
}

export default function ActualitesPage() {
  const [selectedCategory, setSelectedCategory] = useState<NewsCategory>("all")
  const [loading, setLoading] = useState(true)
  const [feedItems, setFeedItems] = useState<RSSFeedItem[]>([])
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date())

  // --- Curated News (Static) ---
  const newsArticles: NewsArticle[] = [
    {
      id: "1",
      title: "La directive européenne 'Droit à la réparation 2.0' entre en vigueur",
      excerpt:
        "Depuis le 1er janvier 2026, l'Europe impose de nouvelles contraintes aux fabricants : indice de réparabilité harmonisé et disponibilité des pièces pendant 12 ans.",
      category: "reglementation",
      date: "02 janvier 2026",
      relatedPage: "/reglementation",
      source: "Commission Européenne",
    },
    {
      id: "2",
      title: "Bilan 2025 : Le recyclage des e-déchets a progressé de 15% en France",
      excerpt:
        "Les campagnes de sensibilisation et le bonus réparation ont porté leurs fruits. La collecte des smartphones a doublé l'an passé.",
      category: "etude",
      date: "28 décembre 2025",
      relatedPage: "/chiffres",
      source: "ADEME",
    },
    {
      id: "3",
      title: "Datacenters : L'IA générative représente désormais 20% de la consommation",
      excerpt:
        "L'explosion des usages de l'IA pèse lourdement sur le bilan carbone. Les opérateurs cherchent des solutions de refroidissement liquide plus performantes.",
      category: "tendance",
      date: "15 décembre 2025",
      relatedPage: "/datacenters",
      source: "The Shift Project",
    },
    {
      id: "4",
      title: "Green Code : Le langage Rust adopté massivement pour réduire l'empreinte serveur",
      excerpt:
        "De plus en plus d'entreprises migrent leurs microservices critiques vers Rust, divisant par deux leur facture énergétique cloud.",
      category: "innovation",
      date: "10 décembre 2025",
      relatedPage: "/developpement",
      source: "TechCrunch",
    },
    {
      id: "5",
      title: "Nouveau label 'Site Web Éco-conçu' : Les critères se durcissent",
      excerpt:
        "Pour obtenir le label en 2026, les sites devront peser moins de 1 Mo par page et ne pas utiliser de dark patterns.",
      category: "reglementation",
      date: "05 décembre 2025",
      relatedPage: "/developpement",
      source: "INR",
    },
    {
      id: "6",
      title: "Sobriété numérique : Les collectivités locales montrent l'exemple",
      excerpt:
        "Plus de 500 mairies ont signé la charte 'Ville Numérique Responsable', s'engageant à allonger la durée de vie de leur matériel informatique.",
      category: "tendance",
      date: "25 novembre 2025",
      relatedPage: "/fiches-pratiques/collectivites-action",
      source: "Banque des Territoires",
    },
  ]

  // --- RSS Feeds (Simulated) ---
  const simulatedFeeds: RSSFeedItem[] = [
    {
      title: "GreenIT.fr : Analyse du cycle de vie des lunettes de réalité augmentée",
      link: "https://www.greenit.fr",
      description: "Une nouvelle étude montre que l'impact de fabrication est 50% plus élevé que celui d'un smartphone.",
      pubDate: "Aujourd'hui, 09:30",
      source: "GreenIT.fr",
      category: "Analyse",
    },
    {
      title: "ADEME : Les Français et le reconditionné, baromètre 2026",
      link: "https://www.ademe.fr",
      description: "70% des Français se disent prêts à acheter un téléphone reconditionné, un chiffre en hausse constante.",
      pubDate: "Hier, 14:15",
      source: "ADEME",
      category: "Étude",
    },
    {
      title: "Le Monde Informatique : Microsoft annonce des datacenters carbone négatif",
      link: "https://www.lemondeinformatique.fr",
      description: "Le géant de Redmond promet de compenser plus de carbone qu'il n'en émet d'ici 2030 grâce à la capture directe.",
      pubDate: "Hier, 10:00",
      source: "LMI",
      category: "Actu",
    },
    {
      title: "Arcep : La 6G devra être sobre ou ne sera pas",
      link: "https://www.arcep.fr",
      description: "Le régulateur prévient : aucun déploiement ne sera autorisé sans garantie de non-augmentation de la consommation globale.",
      pubDate: "02/01/2026",
      source: "Arcep",
      category: "Régulation",
    },
    {
      title: "NextInpact : Fin de support pour Windows 10, quel impact écologique ?",
      link: "https://www.nextinpact.com",
      description: "Des millions de PC risquent de devenir obsolètes fin 2025. Les associations appellent à étendre le support étendu.",
      pubDate: "01/01/2026",
      source: "NextInpact",
      category: "Obsolescence",
    },
  ]

  const categories = [
    { id: "all" as NewsCategory, label: "Toutes", color: "bg-secondary text-secondary-foreground" },
    { id: "reglementation" as NewsCategory, label: "Réglementation", color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300" },
    { id: "innovation" as NewsCategory, label: "Innovation", color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300" },
    { id: "tendance" as NewsCategory, label: "Tendance", color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" },
    { id: "etude" as NewsCategory, label: "Étude", color: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300" },
  ]

  const filteredNews =
    selectedCategory === "all" ? newsArticles : newsArticles.filter((article) => article.category === selectedCategory)

  const getCategoryColor = (category: NewsCategory) => {
    const cat = categories.find((c) => c.id === category)
    return cat?.color || "bg-secondary text-secondary-foreground"
  }

  useEffect(() => {
    setTimeout(() => {
      setFeedItems(simulatedFeeds)
      setLoading(false)
    }, 800)
  }, [])

  const refreshFeeds = () => {
    setLoading(true)
    setTimeout(() => {
      setLastUpdate(new Date())
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <div className="bg-muted/30 border-b border-border">
        <div className="px-6 py-12 lg:py-16 mx-auto max-w-7xl">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <TrendingUp className="h-4 w-4" />
              Actualités & Veille
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground lg:text-5xl">Actualités Green IT</h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Dossiers de fond, analyses et veille réglementaire pour comprendre les enjeux du numérique responsable en 2026.
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 py-8 lg:py-12">
        <div className="mx-auto max-w-7xl">

          <Tabs defaultValue="featured" className="space-y-8">
            <div className="flex justify-center">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="featured" className="flex items-center gap-2">
                  <Newspaper className="h-4 w-4" />
                  À la une
                </TabsTrigger>
                <TabsTrigger value="rss" className="flex items-center gap-2">
                  <Rss className="h-4 w-4" />
                  Flux en direct
                  <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse ml-1"></span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="featured" className="space-y-8 animate-in fade-in-50 slide-in-from-bottom-2">
              {/* Filters */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="text-sm font-medium text-muted-foreground mr-2">Filtrer par :</span>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${selectedCategory === category.id
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                      }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>

              {/* Grid */}
              <div className="grid gap-6 lg:grid-cols-2">
                {filteredNews.map((article) => (
                  <Card
                    key={article.id}
                    className="group overflow-hidden border-2 border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <Badge className={`${getCategoryColor(article.category)} border-0`}>
                        {categories.find((c) => c.id === article.category)?.label}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {article.date}
                      </div>
                    </div>

                    <h3 className="mb-3 text-xl font-bold text-foreground group-hover:text-primary transition-colors">{article.title}</h3>

                    <p className="mb-6 text-muted-foreground leading-relaxed">{article.excerpt}</p>

                    <div className="flex items-center justify-between mt-auto">
                      {article.source && <span className="text-sm font-medium text-muted-foreground">Source : {article.source}</span>}

                      {article.relatedPage && (
                        <Link href={article.relatedPage}>
                          <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0 hover:bg-transparent">
                            En savoir plus
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="rss" className="space-y-6 animate-in fade-in-50 slide-in-from-bottom-2">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-card border-2 border-primary/20 p-4 rounded-xl">
                <div className="flex items-center gap-2">
                  <Radio className="h-5 w-5 text-red-500 animate-pulse" />
                  <div>
                    <h3 className="font-semibold text-foreground">Veille en temps réel</h3>
                    <p className="text-sm text-muted-foreground">Agrégateur de flux RSS (ADEME, Arcep, GreenIT.fr...)</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-xs text-muted-foreground hidden sm:inline-block">Mis à jour : {lastUpdate.toLocaleTimeString()}</span>
                  <Button
                    onClick={refreshFeeds}
                    disabled={loading}
                    variant="outline"
                    size="sm"
                    className="gap-2"
                  >
                    <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
                    Actualiser
                  </Button>
                </div>
              </div>

              {loading ? (
                <div className="grid gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-32 rounded-xl bg-muted/50 animate-pulse" />
                  ))}
                </div>
              ) : (
                <div className="grid gap-4">
                  {feedItems.map((item, index) => (
                    <Card key={index} className="p-5 border-l-4 border-l-primary hover:bg-muted/50 transition-colors">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">{item.source}</Badge>
                          <Badge variant="secondary" className="text-xs">{item.category}</Badge>
                        </div>
                        <span className="text-xs text-muted-foreground">{item.pubDate}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                      <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                      >
                        Lire la suite <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
