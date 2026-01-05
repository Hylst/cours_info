"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, XCircle, Lightbulb, TrendingUp, Database, Smartphone, Recycle, Zap } from "lucide-react"
import Link from "next/link"

interface Myth {
  id: string
  category: string
  icon: React.ReactNode
  myth: string
  reality: string
  explanation: string
  source: string
  relatedLink?: { label: string; href: string }
}

export default function MythesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [revealedMyths, setRevealedMyths] = useState<Set<string>>(new Set())

  const myths: Myth[] = [
    {
      id: "1",
      category: "Usage",
      icon: <Smartphone className="h-5 w-5" />,
      myth: "Le cloud ne pollue pas, c'est virtuel",
      reality: "Faux - Le cloud repose sur des infrastructures physiques très énergivores",
      explanation:
        "Le cloud n'est pas immatériel. Il s'appuie sur des datacenters qui consomment énormément d'électricité pour fonctionner et se refroidir. En 2025, les datacenters représentent environ 1,5% de la consommation électrique mondiale. Stocker 1 Go dans le cloud pendant un an émet environ 20 kg de CO₂.",
      source: "IEA 2025, The Shift Project",
      relatedLink: { label: "En savoir plus sur les datacenters", href: "/datacenters" },
    },
    {
      id: "2",
      category: "Usage",
      icon: <Zap className="h-5 w-5" />,
      myth: "La phase d'utilisation est la plus polluante",
      reality: "Faux - La fabrication représente 75% de l'impact environnemental",
      explanation:
        "Contrairement à l'idée reçue, l'utilisation d'un smartphone ne représente que 20% de son empreinte carbone totale. La fabrication (extraction des minerais, assemblage, transport) compte pour 75%. C'est pourquoi garder son appareil le plus longtemps possible est le geste le plus efficace.",
      source: "ADEME 2025, Étude sur l'impact environnemental du numérique",
      relatedLink: { label: "Découvrir le cycle de vie", href: "/comprendre" },
    },
    {
      id: "3",
      category: "Recyclage",
      icon: <Recycle className="h-5 w-5" />,
      myth: "Recycler suffit à résoudre le problème",
      reality: "Faux - Seuls 17% des e-déchets sont recyclés dans le monde",
      explanation:
        "En 2025, seuls 17,4% des déchets électroniques sont correctement collectés et recyclés à l'échelle mondiale. En France, ce taux atteint environ 45%, mais reste insuffisant. De plus, le recyclage lui-même consomme de l'énergie et ne permet pas de récupérer tous les matériaux. La priorité doit être donnée à la réduction, la réparation et la réutilisation.",
      source: "Global E-Waste Monitor 2025, ONU",
      relatedLink: { label: "Explorer le recyclage", href: "/recyclage" },
    },
    {
      id: "4",
      category: "Équipement",
      icon: <TrendingUp className="h-5 w-5" />,
      myth: "Les nouveaux appareils sont plus écologiques",
      reality: "Nuancé - Ils sont plus efficaces, mais leur fabrication pollue davantage",
      explanation:
        "Les appareils récents sont effectivement plus économes en énergie à l'usage (processeurs plus efficients, meilleure gestion de la batterie). Cependant, ils utilisent des composants plus complexes et miniaturisés, nécessitant plus de ressources et d'énergie pour leur fabrication. Acheter un appareil neuf émet en moyenne 50 kg de CO₂, contre 8 kg pour un appareil reconditionné.",
      source: "ADEME 2025, Backmarket",
      relatedLink: { label: "Comparer neuf vs reconditionné", href: "/cas-pratiques" },
    },
    {
      id: "5",
      category: "Usage",
      icon: <Database className="h-5 w-5" />,
      myth: "Supprimer mes emails réduit significativement mon empreinte",
      reality: "Vrai mais l'impact est minime comparé à d'autres actions",
      explanation:
        "Oui, supprimer des emails permet de libérer de l'espace sur les serveurs et donc de réduire légèrement la consommation énergétique. Mais l'impact est très faible : 1 email stocké pendant un an émet environ 10 g de CO₂. Garder votre smartphone 1 an de plus économise 50 kg de CO₂, soit l'équivalent de 5 000 emails stockés. Priorisez les actions à fort impact !",
      source: "ADEME, Carbon Trust 2025",
      relatedLink: { label: "Découvrir les actions efficaces", href: "/agir" },
    },
    {
      id: "6",
      category: "Équipement",
      icon: <Smartphone className="h-5 w-5" />,
      myth: "Mon vieux téléphone consomme plus d'énergie qu'un neuf",
      reality: "Vrai pour l'usage, mais garder l'ancien reste plus écologique",
      explanation:
        "Un smartphone récent peut consommer 20-30% d'énergie en moins à l'usage grâce aux processeurs plus efficients. Mais l'écart de consommation annuel représente environ 5 kg de CO₂, alors que fabriquer un nouveau téléphone en émet 50 kg. Il faudrait donc garder le nouveau téléphone 10 ans pour compenser ! Conclusion : gardez votre ancien appareil tant qu'il fonctionne.",
      source: "Étude Fraunhofer Institute 2025",
      relatedLink: { label: "Calculer votre impact", href: "/outils" },
    },
    {
      id: "7",
      category: "Usage",
      icon: <Zap className="h-5 w-5" />,
      myth: "Le mode avion permet d'économiser beaucoup d'énergie",
      reality: "Vrai mais l'impact reste limité sur l'empreinte globale",
      explanation:
        "Le mode avion désactive les connexions sans fil (4G/5G, WiFi, Bluetooth) qui consomment de l'énergie. Cela peut prolonger l'autonomie de la batterie de 20-30%. Sur un an, cela représente environ 2 kg de CO₂ économisés. C'est bien, mais c'est 25 fois moins que l'impact évité en gardant votre appareil un an de plus.",
      source: "GreenIT.fr 2025",
    },
    {
      id: "8",
      category: "Recyclage",
      icon: <Recycle className="h-5 w-5" />,
      myth: "Les appareils électroniques se dégradent naturellement",
      reality: "Faux - Ils contiennent des matériaux toxiques et non biodégradables",
      explanation:
        "Les équipements électroniques contiennent des métaux lourds (plomb, mercure, cadmium), des plastiques et des composés chimiques qui ne se dégradent pas naturellement. Abandonnés dans la nature, ils polluent les sols et les nappes phréatiques pendant des décennies. C'est pourquoi le recyclage dans des filières spécialisées est obligatoire.",
      source: "Ministère de la Transition Écologique 2025",
      relatedLink: { label: "Trouver un point de collecte", href: "/recyclage" },
    },
    {
      id: "9",
      category: "Équipement",
      icon: <TrendingUp className="h-5 w-5" />,
      myth: "Les appareils Apple sont plus écologiques que les autres",
      reality: "Nuancé - Progrès sur le recyclage, mais l'obsolescence reste problématique",
      explanation:
        "Apple a fait des progrès en utilisant davantage de matériaux recyclés (75% d'aluminium recyclé en 2025) et en réduisant les emballages. Cependant, la réparabilité reste limitée (indice de réparabilité moyen de 6,5/10), et le remplacement fréquent encouragé par les sorties annuelles augmente l'impact global. Aucune marque n'est parfaite : l'essentiel est de garder l'appareil longtemps.",
      source: "Rapport Apple Environmental Progress 2025, iFixit",
    },
    {
      id: "10",
      category: "Usage",
      icon: <Database className="h-5 w-5" />,
      myth: "Regarder des vidéos en streaming pollue énormément",
      reality: "Vrai - Mais l'impact dépend beaucoup de la qualité et du réseau",
      explanation:
        "Le streaming vidéo représente 60% du trafic internet mondial et consomme beaucoup d'énergie. Regarder 1h de vidéo en HD émet environ 100 g de CO₂. En 4K, cela triple à 300 g. En revanche, en définition standard (480p), l'impact chute à 30 g. Astuce : privilégiez la WiFi à la 4G/5G (2 fois moins d'énergie) et réduisez la qualité quand le grand écran n'est pas nécessaire.",
      source: "The Shift Project 2025, IEA",
      relatedLink: { label: "Découvrir les bonnes pratiques", href: "/agir" },
    },
    {
      id: "11",
      category: "Développement",
      icon: <Lightbulb className="h-5 w-5" />,
      myth: "Le code n'a pas d'impact environnemental",
      reality: "Faux - Un code mal optimisé augmente la consommation d'énergie",
      explanation:
        "Le code inefficace (algorithmes non optimisés, requêtes multiples inutiles, médias lourds) augmente le temps de traitement des serveurs et la consommation des appareils. Un site web optimisé peut réduire sa consommation énergétique de 50-70%. Les développeurs ont un rôle clé dans l'écoconception numérique.",
      source: "GreenIT.fr, W3C 2025",
      relatedLink: { label: "Guide développeur", href: "/developpement" },
    },
    {
      id: "12",
      category: "Équipement",
      icon: <Smartphone className="h-5 w-5" />,
      myth: "Le reconditionnement est moins fiable que le neuf",
      reality: "Faux - Les appareils reconditionnés sont testés et garantis",
      explanation:
        "Un appareil reconditionné professionnel passe par 40 à 50 points de contrôle, remplace les pièces défectueuses, et offre une garantie de 12 à 24 mois (comme le neuf). Le taux de panne après 1 an est comparable au neuf (environ 5%). En France, le marché du reconditionné a progressé de 15% en 2025, prouvant sa fiabilité.",
      source: "Backmarket, Ecosystem 2025",
      relatedLink: { label: "Comprendre le reconditionné", href: "/cas-pratiques" },
    },
  ]

  const categories = ["all", "Usage", "Équipement", "Recyclage", "Développement"]

  const filteredMyths = selectedCategory === "all" ? myths : myths.filter((m) => m.category === selectedCategory)

  const toggleReveal = (id: string) => {
    const newRevealed = new Set(revealedMyths)
    if (newRevealed.has(id)) {
      newRevealed.delete(id)
    } else {
      newRevealed.add(id)
    }
    setRevealedMyths(newRevealed)
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-700 px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">Mythes vs Réalités</Badge>
          <h1 className="mb-6 text-4xl font-bold text-white lg:text-5xl">Démêlons le vrai du faux</h1>
          <p className="text-xl text-emerald-50">
            Le Green IT est entouré d'idées reçues. Découvrez ce qui est vraiment efficace pour réduire votre impact
            numérique, avec des données sourcées et à jour.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="border-b border-slate-200 bg-white px-6 py-6 dark:border-slate-700 dark:bg-slate-800">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-3">
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400 self-center">Filtrer par :</span>
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(cat)}
                className={
                  selectedCategory === cat
                    ? "bg-emerald-600 hover:bg-emerald-700"
                    : "hover:bg-slate-100 dark:hover:bg-slate-700"
                }
              >
                {cat === "all" ? "Tous les mythes" : cat}
              </Button>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            {filteredMyths.length} mythe{filteredMyths.length > 1 ? "s" : ""} trouvé
            {filteredMyths.length > 1 ? "s" : ""}
          </p>
        </div>
      </section>

      {/* Myths Grid */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2">
            {filteredMyths.map((myth) => {
              const isRevealed = revealedMyths.has(myth.id)
              return (
                <Card
                  key={myth.id}
                  className="overflow-hidden border-2 border-slate-200 transition-all hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
                >
                  <div className="p-6">
                    {/* Header */}
                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300">
                          {myth.icon}
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {myth.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Myth Statement */}
                    <div className="mb-4 rounded-lg bg-red-50 p-4 border border-red-200 dark:bg-red-900/20 dark:border-red-800">
                      <div className="flex items-start gap-3">
                        <XCircle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-red-800 dark:text-red-300 mb-1">Idée reçue</p>
                          <p className="font-semibold text-slate-900 dark:text-slate-100">{myth.myth}</p>
                        </div>
                      </div>
                    </div>

                    {/* Reveal Button */}
                    {!isRevealed && (
                      <Button
                        onClick={() => toggleReveal(myth.id)}
                        variant="outline"
                        className="w-full border-emerald-600 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-500 dark:text-emerald-400 dark:hover:bg-emerald-900/20"
                      >
                        Découvrir la réalité
                      </Button>
                    )}

                    {/* Reality Section */}
                    {isRevealed && (
                      <div className="space-y-4">
                        <div className="rounded-lg bg-emerald-50 p-4 border border-emerald-200 dark:bg-emerald-900/20 dark:border-emerald-800">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-sm font-medium text-emerald-800 dark:text-emerald-300 mb-1">
                                La réalité
                              </p>
                              <p className="font-semibold text-slate-900 dark:text-slate-100">{myth.reality}</p>
                            </div>
                          </div>
                        </div>

                        <div className="rounded-lg bg-blue-50 p-4 border border-blue-200 dark:bg-blue-900/20 dark:border-blue-800">
                          <div className="flex items-start gap-3">
                            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-sm font-medium text-blue-800 dark:text-blue-300 mb-2">Explication</p>
                              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                                {myth.explanation}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-700">
                          <p className="text-xs text-slate-500 dark:text-slate-400">Source : {myth.source}</p>
                        </div>

                        {myth.relatedLink && (
                          <Link href={myth.relatedLink.href}>
                            <Button variant="link" className="w-full text-emerald-700 dark:text-emerald-400 p-0">
                              {myth.relatedLink.label} →
                            </Button>
                          </Link>
                        )}

                        <Button
                          onClick={() => toggleReveal(myth.id)}
                          variant="ghost"
                          size="sm"
                          className="w-full text-slate-600 dark:text-slate-400"
                        >
                          Masquer
                        </Button>
                      </div>
                    )}
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white px-6 py-16 dark:bg-slate-800">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-slate-100">Vous avez d'autres questions ?</h2>
          <p className="mb-8 text-lg text-slate-600 dark:text-slate-400">
            Consultez notre FAQ ou explorez nos ressources pour approfondir vos connaissances sur le Green IT.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/faq">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Voir la FAQ
              </Button>
            </Link>
            <Link href="/ressources">
              <Button size="lg" variant="outline">
                Explorer les ressources
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
