"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Download, ExternalLink, FileText, BookOpen, Video, Search } from "lucide-react"
import Link from "next/link"

const resources = [
  {
    category: "Guides pratiques",
    icon: FileText,
    color: "emerald",
    items: [
      {
        title: "7 gestes pour un numérique sobre",
        description: "Guide citoyen avec actions concrètes",
        type: "Fiche pratique",
        link: "/fiches-pratiques/gestes-quotidiens",
      },
      {
        title: "Guide d'achat responsable",
        description: "Choisir un appareil avec moins d'impact",
        type: "Fiche pratique",
        link: "/fiches-pratiques/achat-responsable",
      },
      {
        title: "Écoconception web et logicielle",
        description: "Bonnes pratiques pour développeurs",
        type: "Fiche pratique",
        link: "/fiches-pratiques/ecoconception-web",
      },
      {
        title: "Toutes les fiches pratiques",
        description: "Accédez à l'ensemble de nos guides téléchargeables",
        type: "Collection",
        link: "/fiches-pratiques",
      },
    ],
  },
  {
    category: "Rapports et études",
    icon: BookOpen,
    color: "blue",
    items: [
      {
        title: "Impact environnemental du numérique",
        description: "ADEME - Rapport complet 2023",
        type: "PDF",
        size: "8.5 MB",
        link: "https://librairie.ademe.fr/consommer-autrement/5226-evaluation-de-l-impact-environnemental-du-numerique-en-france-et-analyse-prospective.html",
      },
      {
        title: "Global E-Waste Monitor 2024",
        description: "ONU - Données mondiales",
        type: "PDF",
        size: "12.3 MB",
        link: "https://ewastemonitor.info/",
      },
      {
        title: "Étude GreenIT.fr 2023",
        description: "État des lieux du numérique responsable",
        type: "PDF",
        size: "5.7 MB",
        link: "https://www.greenit.fr/etude-empreinte-environnementale-du-numerique-mondial/",
      },
    ],
  },
  {
    category: "Infographies",
    icon: Video,
    color: "teal",
    items: [
      {
        title: "Cycle de vie d'un smartphone",
        description: "Infographie complète des 5 phases",
        type: "WEBP",
        size: "0.6 MB",
        link: "/images/lifecycle-infographic.webp",
      },
      {
        title: "Répartition impact CO₂",
        description: "Graphique - Production vs usage vs transport",
        type: "WEBP",
        size: "0.3 MB",
        link: "/images/co2-distribution.webp",
      },
      {
        title: "Carte interactive des points de collecte",
        description: "Carte dynamique France métropolitaine",
        type: "WEB",
        size: "Interactive",
        link: "/recyclage",
      },
    ],
  },
]

const externalLinks = [
  {
    name: "ADEME",
    description: "Agence de la transition écologique",
    url: "https://www.ademe.fr",
    category: "Organisme public",
  },
  {
    name: "GreenIT.fr",
    description: "Communauté du numérique responsable",
    url: "https://www.greenit.fr",
    category: "Association",
  },
  {
    name: "Ecosystem",
    description: "Éco-organisme recyclage DEEE",
    url: "https://www.ecosystem.eco",
    category: "Éco-organisme",
  },
  {
    name: "Écologic",
    description: "Éco-organisme DEEE professionnels",
    url: "https://www.ecologic-france.com",
    category: "Éco-organisme",
  },
  {
    name: "Réseau des Ressourceries",
    description: "Réemploi et réduction des déchets",
    url: "https://www.ressourcerie.fr",
    category: "Association",
  },
  {
    name: "Zero Waste France",
    description: "Réduction des déchets",
    url: "https://www.zerowastefrance.org",
    category: "Association",
  },
]

const glossaryData = [
  {
    term: "DEEE",
    definition:
      "Déchets d'Équipements Électriques et Électroniques. Tous les appareils fonctionnant à l'électricité ou avec des piles/batteries en fin de vie.",
    category: "Réglementation",
  },
  {
    term: "REP",
    definition:
      "Responsabilité Élargie du Producteur. Principe selon lequel les fabricants sont responsables de la fin de vie de leurs produits.",
    category: "Réglementation",
  },
  {
    term: "PUE",
    definition:
      "Power Usage Effectiveness. Indicateur d'efficacité énergétique des datacenters. Un PUE de 1.0 est parfait, 2.0 signifie 50% d'énergie gaspillée.",
    category: "Technique",
  },
  {
    term: "Écoconception",
    definition:
      "Approche de conception qui intègre l'environnement dès la conception d'un produit ou service numérique.",
    category: "Pratique",
  },
  {
    term: "Green IT",
    definition:
      "Ensemble des pratiques visant à réduire l'empreinte environnementale du numérique (matériel, logiciel, usage).",
    category: "Général",
  },
  {
    term: "Reconditionné",
    definition:
      "Appareil d'occasion remis en état de fonctionnement, testé et garanti. Réduit l'impact de 75% par rapport au neuf.",
    category: "Matériel",
  },
  {
    term: "Sobriété numérique",
    definition:
      "Démarche qui vise à réduire l'impact environnemental du numérique en modérant nos usages et en optimisant les ressources.",
    category: "Pratique",
  },
  {
    term: "Obsolescence programmée",
    definition:
      "Stratégie visant à réduire volontairement la durée de vie d'un produit pour en accélérer le remplacement. Interdite en France depuis 2015.",
    category: "Réglementation",
  },
  {
    term: "Empreinte carbone",
    definition:
      "Quantité totale de gaz à effet de serre émise directement et indirectement par une activité, un produit ou un service, exprimée en équivalent CO₂.",
    category: "Environnement",
  },
  {
    term: "ACV",
    definition:
      "Analyse du Cycle de Vie. Méthodologie qui évalue l'impact environnemental d'un produit de sa conception à sa fin de vie.",
    category: "Technique",
  },
  {
    term: "CDN",
    definition:
      "Content Delivery Network. Réseau de serveurs distribués géographiquement pour livrer du contenu web plus rapidement et avec moins d'énergie.",
    category: "Technique",
  },
  {
    term: "Lazy Loading",
    definition:
      "Technique de chargement différé des ressources (images, vidéos) uniquement lorsqu'elles sont nécessaires, réduisant la consommation de bande passante.",
    category: "Technique",
  },
  {
    term: "Indice de réparabilité",
    definition:
      "Note sur 10 obligatoire en France depuis 2021, indiquant la facilité de réparation d'un équipement électronique.",
    category: "Réglementation",
  },
  {
    term: "Loi AGEC",
    definition:
      "Loi Anti-Gaspillage pour une Économie Circulaire (2020). Impose l'indice de réparabilité, lutte contre l'obsolescence et favorise le réemploi.",
    category: "Réglementation",
  },
  {
    term: "Loi REEN",
    definition:
      "Loi Réduire l'Empreinte Environnementale du Numérique (2021). Impose aux acteurs du numérique de mesurer et réduire leur impact environnemental.",
    category: "Réglementation",
  },
]

export default function RessourcesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous")

  const categories = ["Tous", ...Array.from(new Set(glossaryData.map((item) => item.category)))]

  const filteredGlossary = glossaryData.filter((item) => {
    const matchesSearch =
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "Tous" || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-secondary/10 px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
            Ressources et documentation
          </h1>
          <p className="text-pretty text-lg text-muted-foreground lg:text-xl">
            Guides pratiques, rapports, infographies et liens utiles pour approfondir vos connaissances sur le Green IT
            et le numérique responsable.
          </p>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="px-6 py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground lg:text-4xl">
            Documents téléchargeables
          </h2>
          <div className="space-y-12">
            {resources.map((category, catIndex) => {
              const Icon = category.icon
              return (
                <div key={catIndex}>
                  <div className="mb-6 flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10`}
                    >
                      <Icon className={`h-5 w-5 text-primary`} />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{category.category}</h3>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {category.items.map((item, itemIndex) => (
                      <Card
                        key={itemIndex}
                        className="border border-border p-6 transition-all hover:shadow-lg bg-card"
                      >
                        <div className="mb-4">
                          <h4 className="mb-2 font-semibold text-card-foreground">{item.title}</h4>
                          <p className="mb-3 text-sm text-muted-foreground">{item.description}</p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span className="rounded bg-secondary px-2 py-1 font-medium">
                              {item.type}
                            </span>
                            {item.size && <span>{item.size}</span>}
                          </div>
                        </div>
                        {typeof item.link === "string" && item.link.length > 0 ? (
                          item.link.startsWith("http") ? (
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                              <Button
                                size="sm"
                                className="w-full bg-primary hover:bg-primary/90"
                              >
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Voir le rapport
                              </Button>
                            </a>
                          ) : (
                            <Link href={item.link}>
                              <Button
                                size="sm"
                                className="w-full bg-primary hover:bg-primary/90"
                              >
                                <FileText className="mr-2 h-4 w-4" />
                                Consulter
                              </Button>
                            </Link>
                          )
                        ) : (
                          <Button
                            size="sm"
                            className="w-full bg-muted text-muted-foreground"
                            disabled
                          >
                            <Download className="mr-2 h-4 w-4" />
                            Bientôt disponible
                          </Button>
                        )}
                      </Card>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* External Links */}
      <section className="bg-secondary/5 px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground lg:text-4xl">
            Liens utiles
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {externalLinks.map((link, index) => (
              <Card
                key={index}
                className="border border-border p-6 transition-all hover:shadow-lg bg-card"
              >
                <div className="mb-2 text-xs font-medium text-muted-foreground">{link.category}</div>
                <h3 className="mb-2 text-lg font-bold text-card-foreground">{link.name}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{link.description}</p>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
                >
                  Visiter le site
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground lg:text-4xl">
            Glossaire du Green IT
          </h2>
          <p className="mb-12 text-center text-lg text-muted-foreground">
            Tous les termes essentiels pour comprendre le numérique responsable
          </p>

          <div className="mb-8 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Rechercher un terme..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-card border-border"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {filteredGlossary.map((item, index) => (
              <Card key={index} className="border border-border p-6 bg-card">
                <div className="mb-2 flex items-start justify-between">
                  <h3 className="font-bold text-card-foreground">{item.term}</h3>
                  <Badge variant="secondary" className="text-xs">
                    {item.category}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{item.definition}</p>
              </Card>
            ))}
          </div>

          {filteredGlossary.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-muted-foreground">
                Aucun terme trouvé pour "{searchTerm}". Essayez un autre mot-clé.
              </p>
            </div>
          )}

          <div className="mt-8 text-center text-sm text-muted-foreground">
            {filteredGlossary.length} terme{filteredGlossary.length > 1 ? "s" : ""} affiché
            {filteredGlossary.length > 1 ? "s" : ""} sur {glossaryData.length}
          </div>
        </div>
      </section>
    </div>
  )
}
