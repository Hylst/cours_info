import { FileText, Shield, Globe } from "lucide-react"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 px-6 py-16 lg:py-24 dark:from-background dark:via-secondary dark:to-background">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-emerald-100 p-3 dark:bg-emerald-900/30">
            <Shield className="h-8 w-8 text-emerald-700 dark:text-emerald-400" />
          </div>
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
            Mentions légales
          </h1>
          <p className="text-pretty text-lg text-muted-foreground lg:text-xl">
            Informations légales et crédits du site Le Green IT en clair
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl space-y-8">
          <Card className="p-8">
            <div className="mb-4 flex items-center gap-3">
              <Globe className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              <h2 className="text-2xl font-bold text-foreground">Éditeur du site</h2>
            </div>
            <div className="space-y-3 text-muted-foreground">
              <p>
                <strong className="text-foreground">Nom :</strong> Geoffroy Streit
              </p>
              <p>
                <strong className="text-foreground">Nature :</strong> Site personnel à caractère éducatif et informatif
              </p>
              <p>
                <strong className="text-foreground">Email :</strong>{" "}
                <a href="mailto:geoffroy.streit@gmail.com" className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 underline">
                  geoffroy.streit@gmail.com
                </a>
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <div className="mb-4 flex items-center gap-3">
              <FileText className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              <h2 className="text-2xl font-bold text-foreground">Hébergement</h2>
            </div>
            <div className="space-y-3 text-muted-foreground">
              <p>
                <strong className="text-foreground">Hébergeur :</strong> Hostinger International Ltd.
              </p>
              <p>
                <strong className="text-foreground">Serveur :</strong> VPS géré via Coolify (Docker)
              </p>
              <p>
                <strong className="text-foreground">URL :</strong> hylst.fr/greenit
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <div className="mb-4 flex items-center gap-3">
              <Shield className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              <h2 className="text-2xl font-bold text-foreground">Données personnelles et cookies</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Collecte de données :</strong> Ce site ne collecte aucune donnée personnelle. Aucun formulaire ne recueille d'informations nominatives.
              </p>
              <p>
                <strong className="text-foreground">Cookies :</strong> Ce site n'utilise pas de cookies publicitaires ou de suivi analytique (Google Analytics, etc.). Seuls des cookies techniques essentiels au fonctionnement du site (préférence de thème) peuvent être utilisés.
              </p>
              <p>
                <strong className="text-foreground">Conformité RGPD :</strong> Aucune donnée personnelle n'étant collectée, ce site est conforme au RGPD par défaut.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <div className="mb-4 flex items-center gap-3">
              <FileText className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              <h2 className="text-2xl font-bold text-foreground">Propriété intellectuelle</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Contenus textuels :</strong> Les contenus de ce site sont mis à disposition à titre informatif et éducatif. Ils peuvent être réutilisés librement avec attribution de la source.
              </p>
              <p>
                <strong className="text-foreground">Illustrations :</strong> Les illustrations présentes sur ce site ont été créées avec l'assistance d'outils d'intelligence artificielle générative (IA). Elles sont utilisées dans un cadre personnel et éducatif non commercial.
              </p>
              <p>
                <strong className="text-foreground">Code source :</strong> Le code source du site Next.js est un projet personnel et peut être partagé sur demande à des fins éducatives.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <div className="mb-4 flex items-center gap-3">
              <Globe className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              <h2 className="text-2xl font-bold text-foreground">Sources et crédits</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Les données et informations présentées sur ce site proviennent de sources officielles publiques :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong className="text-foreground">ADEME</strong> - Agence de la transition écologique
                </li>
                <li>
                  <strong className="text-foreground">GreenIT.fr</strong> - Communauté des acteurs du numérique responsable
                </li>
                <li>
                  <strong className="text-foreground">ONU</strong> - Global E-Waste Monitor
                </li>
                <li>
                  <strong className="text-foreground">Ecosystem et Écologic</strong> - Éco-organismes français
                </li>
              </ul>
              <p className="mt-4">
                <strong className="text-foreground">Avertissement :</strong> Ce site est un projet personnel en développement. Les informations peuvent comporter des erreurs ou inexactitudes. En cas de doute, référez-vous aux sources officielles citées.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <div className="mb-4 flex items-center gap-3">
              <Shield className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              <h2 className="text-2xl font-bold text-foreground">Responsabilité</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                L'éditeur du site s'efforce de fournir des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, inexactitudes ou carences dans la mise à jour des contenus.
              </p>
              <p>
                Les liens vers des sites externes sont fournis à titre informatif. L'éditeur n'a aucun contrôle sur leur contenu et décline toute responsabilité quant aux informations qui y figurent.
              </p>
            </div>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Pour toute question ou signalement d'erreur
            </p>
            <Link href="/a-propos">
              <span className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 font-medium underline">
                Contactez-nous
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
