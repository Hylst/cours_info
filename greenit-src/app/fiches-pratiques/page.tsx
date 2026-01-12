"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, Printer, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const practicalSheets = [
  {
    id: "gestes-quotidiens",
    title: "7 gestes quotidiens pour un numérique sobre",
    description: "Actions simples à mettre en place dès aujourd'hui",
    target: "Citoyens",
    duration: "5 min",
    impact: "Réduction de 30% de votre impact",
    image: "/greenit/images/fiches/gestes-quotidiens.webp",
  },
  {
    id: "achat-responsable",
    title: "Guide d'achat responsable",
    description: "Comment choisir un appareil avec moins d'impact",
    target: "Citoyens",
    duration: "10 min",
    impact: "75% d'économie vs neuf",
    image: "/greenit/images/fiches/achat-responsable.webp",
  },
  {
    id: "reparer-prolonger",
    title: "Réparer et prolonger la vie de ses appareils",
    description: "Gestes d'entretien et adresses utiles",
    target: "Citoyens",
    duration: "8 min",
    impact: "Doublez la durée de vie",
    image: "/greenit/images/fiches/reparer-prolonger.webp",
  },
  {
    id: "green-it-entreprise",
    title: "Démarche Green IT en entreprise",
    description: "Plan d'action complet pour les organisations",
    target: "Entreprises",
    duration: "20 min",
    impact: "Réduction de 40-60%",
    image: "/greenit/images/fiches/green-it-entreprise.webp",
  },
  {
    id: "ecoconception-web",
    title: "Écoconception web et logicielle",
    description: "Bonnes pratiques pour les développeurs",
    target: "Développeurs",
    duration: "15 min",
    impact: "Sites 3-5x plus légers",
    image: "/greenit/clean-efficient-code-on-screen-with-green-energy-s.webp",
  },
  {
    id: "recyclage-mode-emploi",
    title: "Mode d'emploi du recyclage électronique",
    description: "Où et comment recycler vos appareils",
    target: "Tous publics",
    duration: "5 min",
    impact: "Taux de recyclage 85%",
    image: "/greenit/images/recycling-electronics.webp",
  },
  {
    id: "datacenters-verts",
    title: "Datacenters et cloud responsable",
    description: "Choisir ses hébergeurs et optimiser",
    target: "Entreprises",
    duration: "12 min",
    impact: "PUE optimisé < 1.3",
    image: "/greenit/images/green-datacenter.webp",
  },
  {
    id: "collectivites-action",
    title: "Plan d'action pour les collectivités",
    description: "Politique numérique responsable territoriale",
    target: "Collectivités",
    duration: "25 min",
    impact: "Exemplarité publique",
    image: "/greenit/city-hall-with-sustainable-technology-infrastructu.webp",
  },
]

export default function FichesPratiquesPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 px-6 py-16 lg:py-24 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-emerald-100 p-3 dark:bg-emerald-900/30">
            <FileText className="h-8 w-8 text-emerald-700 dark:text-emerald-400" />
          </div>
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl dark:text-slate-100">
            Fiches pratiques Green IT
          </h1>
          <p className="text-pretty text-lg text-slate-600 lg:text-xl dark:text-slate-300">
            Téléchargez nos guides pratiques au format PDF pour mettre en œuvre facilement les bonnes pratiques du
            numérique responsable.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {practicalSheets.map((sheet) => (
              <Card
                key={sheet.id}
                className="group overflow-hidden border-2 border-slate-200 transition-all hover:shadow-xl dark:border-slate-700 dark:bg-slate-800"
              >
                <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-700">
                  <Image
                    src={sheet.image || "/placeholder.svg"}
                    alt={`Illustration de ${sheet.title} : ${sheet.description}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur-sm dark:bg-slate-800/90 dark:text-slate-300">
                    {sheet.target}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-balance text-lg font-bold text-slate-900 dark:text-slate-100">
                    {sheet.title}
                  </h3>
                  <p className="mb-4 text-pretty text-sm text-slate-600 dark:text-slate-300">{sheet.description}</p>
                  <div className="mb-4 flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      {sheet.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      {sheet.impact}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/fiches-pratiques/${sheet.id}`} className="flex-1">
                      <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                        <FileText className="mr-2 h-4 w-4" />
                        Consulter
                      </Button>
                    </Link>
                    <a href="#" onClick={(e) => { e.preventDefault(); window.print(); }}>
                      <Button variant="outline" size="icon" title="Imprimer">
                        <Printer className="h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-8 dark:border-emerald-800 dark:from-emerald-950 dark:to-teal-950">
            <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:text-left">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600">
                <Share2 className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-slate-100">Partagez ces ressources</h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Ces fiches sont libres de droits. Diffusez-les dans votre entreprise, école ou collectivité pour
                  sensibiliser au numérique responsable.
                </p>
              </div>
              <div className="flex gap-2">
                <Button size="lg" variant="outline" onClick={() => window.print()}>
                  <Printer className="mr-2 h-5 w-5" />
                  Imprimer la liste
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
