import Link from "next/link"
import { Leaf, Mail, AlertCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="mb-8 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-700 dark:bg-amber-950/50">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-amber-900 dark:text-amber-100">
              <p className="font-semibold mb-1">Site personnel en développement</p>
              <p className="dark:text-amber-200">
                Les informations présentées peuvent comporter des erreurs ou inexactitudes. En cas de doute,
                référez-vous aux sources officielles citées. Signalement d'erreurs bienvenu à{" "}
                <a href="mailto:geoffroy.streit@gmail.com" className="underline font-medium hover:text-amber-700 dark:hover:text-amber-300">
                  geoffroy.streit@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-4 flex items-center gap-2 font-bold text-slate-900 dark:text-slate-100">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg">Le Green IT en clair</span>
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
              Site personnel pour sensibiliser et agir pour un numérique plus responsable en France.
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-500 italic">Créé par Geoffroy Streit, passionné d'écologie numérique</p>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">Illustrations créées avec l'assistance d'outils d'IA générative</p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="mb-4 font-semibold text-slate-900 dark:text-slate-100">Explorer</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/comprendre" className="text-slate-600 hover:text-emerald-700 dark:text-slate-400 dark:hover:text-emerald-400">
                  Comprendre
                </Link>
              </li>
              <li>
                <Link href="/chiffres" className="text-slate-600 hover:text-emerald-700 dark:text-slate-400 dark:hover:text-emerald-400">
                  Chiffres & Données
                </Link>
              </li>
              <li>
                <Link href="/agir" className="text-slate-600 hover:text-emerald-700 dark:text-slate-400 dark:hover:text-emerald-400">
                  Comment agir
                </Link>
              </li>
              <li>
                <Link href="/datacenters" className="text-slate-600 hover:text-emerald-700 dark:text-slate-400 dark:hover:text-emerald-400">
                  Datacenters
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-slate-900 dark:text-slate-100">Ressources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/recyclage" className="text-slate-600 hover:text-emerald-700 dark:text-slate-400 dark:hover:text-emerald-400">
                  Recyclage
                </Link>
              </li>
              <li>
                <Link href="/ressources" className="text-slate-600 hover:text-emerald-700 dark:text-slate-400 dark:hover:text-emerald-400">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-slate-600 hover:text-emerald-700 dark:text-slate-400 dark:hover:text-emerald-400">
                  À propos
                </Link>
              </li>
              <li>
                <a href="mailto:geoffroy.streit@gmail.com" className="text-slate-600 hover:text-emerald-700 dark:text-slate-400 dark:hover:text-emerald-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-slate-900 dark:text-slate-100">Sources de référence</h3>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li>ADEME</li>
              <li>GreenIT.fr</li>
              <li>Ecosystem</li>
              <li>Écologic</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 dark:border-slate-700 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              © 2026 Le Green IT en clair. Créé par Geoffroy Streit. Projet personnel non commercial.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <Link href="/mentions-legales" className="text-slate-600 hover:text-emerald-700 dark:text-slate-400 dark:hover:text-emerald-400">
                Mentions légales
              </Link>
              <a
                href="mailto:geoffroy.streit@gmail.com"
                className="text-slate-600 hover:text-emerald-700 dark:text-slate-400 dark:hover:text-emerald-400"
                title="Contact"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
