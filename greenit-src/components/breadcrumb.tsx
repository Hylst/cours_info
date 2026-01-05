"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { usePathname } from "next/navigation"

export function Breadcrumb() {
  const pathname = usePathname()

  if (pathname === "/") return null

  const segments = pathname.split("/").filter(Boolean)

  const breadcrumbMap: Record<string, string> = {
    "par-ou-commencer": "Par où commencer",
    comprendre: "Comprendre",
    problematiques: "Problématiques",
    mythes: "Mythes vs Réalités",
    reglementation: "Réglementation",
    chiffres: "Chiffres & Données",
    "cas-pratiques": "Cas pratiques",
    agir: "Comment agir",
    datacenters: "Datacenters",
    developpement: "Développement",
    recyclage: "Recyclage",
    perspectives: "Perspectives",
    outils: "Outils",
    ressources: "Ressources",
    "a-propos": "À propos",
    actualites: "Actualités",
    faq: "FAQ",
    "fiches-pratiques": "Fiches pratiques",
    "sitemap-page": "Plan du site",
    "gestes-quotidiens": "Gestes quotidiens",
    "achat-responsable": "Achat responsable",
    "ecoconception-web": "Écoconception web",
    "flux-rss": "Flux RSS",
    modeles: "Modèles téléchargeables",
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-slate-50 border-b border-slate-200 dark:bg-slate-800 dark:border-slate-700"
    >
      <div className="container mx-auto px-4 py-3">
        <ol className="flex items-center gap-2 text-sm">
          <li>
            <Link
              href="/"
              className="flex items-center gap-1 text-slate-600 hover:text-emerald-700 transition-colors dark:text-slate-400 dark:hover:text-emerald-400"
            >
              <Home className="w-4 h-4" />
              <span>Accueil</span>
            </Link>
          </li>
          {segments.map((segment, index) => {
            const href = `/${segments.slice(0, index + 1).join("/")}`
            const label = breadcrumbMap[segment] || segment.replace(/-/g, " ")
            const isLast = index === segments.length - 1

            return (
              <li key={href} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-slate-400" />
                {isLast ? (
                  <span className="font-medium text-emerald-700 dark:text-emerald-400">{label}</span>
                ) : (
                  <Link
                    href={href}
                    className="text-slate-600 hover:text-emerald-700 transition-colors dark:text-slate-400 dark:hover:text-emerald-400"
                  >
                    {label}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}
