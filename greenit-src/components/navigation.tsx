"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Leaf, Menu, X, ChevronDown, Search, Calculator } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import { InstallPWA } from "@/components/install-pwa"
import { SearchDialog } from "@/components/search-dialog"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchOpen(false)
        setMobileMenuOpen(false)
      }
    }

    if (searchOpen || mobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown)
      return () => window.removeEventListener("keydown", handleKeyDown)
    }
  }, [searchOpen, mobileMenuOpen])

  const navCategories = [
    {
      label: "Découvrir",
      items: [
        { href: "/par-ou-commencer", label: "🚀 Par où commencer" },
        { href: "/comprendre", label: "Comprendre le cycle de vie" },
        { href: "/problematiques", label: "Problématiques & Solutions" },
        { href: "/mythes", label: "Mythes vs Réalités" },
        { href: "/chiffres", label: "Chiffres & Données" },
        { href: "/cas-pratiques", label: "Cas pratiques" },
        { href: "/actualites", label: "Actualités Green IT" },
      ],
    },
    {
      label: "Agir",
      items: [
        { href: "/agir", label: "Comment agir" },
        { href: "/fiches-pratiques", label: "Fiches pratiques" },
        { href: "/modeles", label: "📥 Modèles téléchargeables" },
        { href: "/recyclage", label: "Recyclage & Réparation" },
        { href: "/outils", label: "🎯 Outils interactifs" },
      ],
    },
    {
      label: "Approfondir",
      items: [
        { href: "/datacenters", label: "Datacenters verts" },
        { href: "/developpement", label: "Développement éco-responsable" },
        { href: "/reglementation", label: "Réglementation" },
        { href: "/perspectives", label: "Perspectives d'avenir" },
      ],
    },
  ]

  return (
    <nav suppressHydrationWarning className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:border-slate-800 dark:bg-slate-950/95 dark:supports-[backdrop-filter]:bg-slate-950/80">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-slate-900 dark:text-slate-100">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 shadow-md shadow-emerald-600/20">
              <Leaf className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg">
              Le Green IT <span className="hidden sm:inline">en clair</span>
            </span>
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            {navCategories.map((category) => (
              <DropdownMenu key={category.label}>
                <DropdownMenuTrigger
                  suppressHydrationWarning
                  className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-emerald-700 dark:hover:text-emerald-400 focus:outline-none data-[state=open]:text-emerald-700 dark:data-[state=open]:text-emerald-400"
                >
                  {category.label}
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56 bg-card border-border">
                  {category.items.map((item) => (
                    <DropdownMenuItem key={item.href} asChild>
                      <Link href={item.href} className="cursor-pointer text-card-foreground focus:bg-secondary focus:text-emerald-700 dark:focus:text-emerald-400">
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
            <Link
              href="/ressources"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-emerald-700 dark:hover:text-emerald-400"
            >
              Ressources
            </Link>
            <Link
              href="/faq"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-emerald-700 dark:hover:text-emerald-400"
            >
              FAQ
            </Link>
            <div className="h-4 w-px bg-slate-200 dark:bg-slate-700 mx-2" />
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-slate-600 hover:text-emerald-700 transition-colors dark:text-slate-300 dark:hover:text-emerald-400"
                aria-label="Rechercher"
              >
                <Search className="h-5 w-5" />
              </button>
              <ThemeToggle />
              <InstallPWA />
            </div>
            <Link href="/outils">
              <Button
                size="sm"
                className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-md hover:shadow-lg transition-all dark:bg-emerald-700 dark:hover:bg-emerald-600"
              >
                <Calculator className="h-4 w-4 mr-1.5" />
                Outils
              </Button>
            </Link>
          </div>

          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-slate-600 hover:text-emerald-700 transition-colors dark:text-slate-300 dark:hover:text-emerald-400"
              aria-label="Rechercher"
            >
              <Search className="h-5 w-5" />
            </button>
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-900 dark:text-slate-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />

        {mobileMenuOpen && (
          <div className="animate-in slide-in-from-top-5 border-t border-slate-200 py-4 lg:hidden dark:border-slate-800 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="flex flex-col gap-6 pb-20">
              <Link href="/outils" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white justify-center">
                  <Calculator className="h-4 w-4 mr-2" />
                  Accéder aux outils interactifs
                </Button>
              </Link>

              {navCategories.map((category) => (
                <div key={category.label}>
                  <div className="font-semibold text-sm text-slate-900 mb-3 dark:text-slate-100 flex items-center gap-2">
                    <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
                    {category.label}
                    <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
                  </div>
                  <div className="flex flex-col gap-1">
                    {category.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-100 hover:text-emerald-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-emerald-400"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              <div>
                <div className="font-semibold text-sm text-slate-900 mb-3 dark:text-slate-100 flex items-center gap-2">
                  <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
                  Plus
                  <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href="/ressources"
                    className="block rounded-md px-3 py-2 text-sm text-center text-slate-600 bg-slate-50 transition-colors hover:bg-slate-100 hover:text-emerald-700 dark:text-slate-300 dark:bg-slate-900 dark:hover:bg-slate-800 dark:hover:text-emerald-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Ressources
                  </Link>
                  <Link
                    href="/faq"
                    className="block rounded-md px-3 py-2 text-sm text-center text-slate-600 bg-slate-50 transition-colors hover:bg-slate-100 hover:text-emerald-700 dark:text-slate-300 dark:bg-slate-900 dark:hover:bg-slate-800 dark:hover:text-emerald-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    FAQ
                  </Link>
                  <Link
                    href="/a-propos"
                    className="block rounded-md px-3 py-2 text-sm text-center text-slate-600 bg-slate-50 transition-colors hover:bg-slate-100 hover:text-emerald-700 dark:text-slate-300 dark:bg-slate-900 dark:hover:bg-slate-800 dark:hover:text-emerald-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    À propos
                  </Link>
                </div>
              </div>

              <div className="flex justify-center pt-4">
                <InstallPWA />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
