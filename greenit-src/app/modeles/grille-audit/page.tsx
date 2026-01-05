"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Printer, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function GrilleAuditPage() {
    const handlePrint = () => {
        window.print()
    }

    return (
        <div className="min-h-screen">
            <div className="print:hidden bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-8">
                <div className="mx-auto max-w-4xl">
                    <Link href="/modeles" className="inline-flex items-center gap-2 text-white hover:text-emerald-100 mb-4">
                        <ArrowLeft className="h-4 w-4" />
                        Retour aux modèles
                    </Link>
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-white mb-2">Grille d'Audit Green IT</h1>
                            <p className="text-emerald-100">100 critères d'évaluation</p>
                        </div>
                        <Button onClick={handlePrint} size="lg" variant="secondary" className="bg-card text-emerald-700 hover:bg-muted">
                            <Printer className="mr-2 h-5 w-5" />
                            Imprimer en PDF
                        </Button>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-4xl px-6 py-12 print:px-12 print:py-8">
                <style jsx global>{`
          @media print {
            @page { size: A4; margin: 2cm; }
            body { print-color-adjust: exact; }
          }
        `}</style>

                <div className="mb-12 text-center">
                    <div className="mb-8 inline-block rounded-full bg-muted/10 p-6">
                        <CheckCircle2 className="h-16 w-16 text-emerald-600" />
                    </div>
                    <h1 className="text-4xl font-bold text-foreground mb-4">Grille d'Audit Green IT</h1>
                    <h2 className="text-2xl text-muted-foreground mb-8">Évaluation de maturité sur 100 critères</h2>
                </div>

                {/* Introduction */}
                <Card className="p-8 mb-12">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Mode d'emploi</h2>
                    <p className="text-muted-foreground mb-6">
                        Cette grille permet d'évaluer le niveau de maturité Green IT de votre organisation sur 100 critères répartis en 5 axes.
                        Chaque critère est noté de 0 à 3 points.
                    </p>
                    <div className="grid md:grid-cols-4 gap-4">
                        <Card className="p-4 text-center bg-red-50 dark:bg-red-950/20 border-red-200">
                            <div className="text-2xl font-bold text-red-600">0</div>
                            <p className="text-sm text-muted-foreground">Non conforme</p>
                        </Card>
                        <Card className="p-4 text-center bg-muted/5 border-border">
                            <div className="text-2xl font-bold text-amber-600">1</div>
                            <p className="text-sm text-muted-foreground">Initiatives isolées</p>
                        </Card>
                        <Card className="p-4 text-center bg-muted/5 border-border">
                            <div className="text-2xl font-bold text-blue-600">2</div>
                            <p className="text-sm text-muted-foreground">Démarche structurée</p>
                        </Card>
                        <Card className="p-4 text-center bg-muted/5 border-border">
                            <div className="text-2xl font-bold text-emerald-600">3</div>
                            <p className="text-sm text-muted-foreground">Excellence</p>
                        </Card>
                    </div>
                </Card>

                {/* Axe 1 - Gouvernance */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-foreground mb-6 border-b-2 border-emerald-600 pb-2">
                        Axe 1 : Gouvernance et stratégie (20 critères)
                    </h2>

                    <table className="w-full text-sm border border-border mb-6">
                        <thead className="bg-secondary">
                            <tr>
                                <th className="p-3 text-left font-semibold text-foreground w-12">#</th>
                                <th className="p-3 text-left font-semibold text-foreground">Critère</th>
                                <th className="p-3 text-left font-semibold text-foreground w-32">Note (0-3)</th>
                            </tr>
                        </thead>
                        <tbody className="text-muted-foreground">
                            <tr className="border-b border-border">
                                <td className="p-3">1.1</td>
                                <td className="p-3">Politique Green IT formalisée et signée par la direction</td>
                                <td className="p-3">☐ 0 ☐ 1 ☐ 2 ☐ 3</td>
                            </tr>
                            <tr className="border-b border-border">
                                <td className="p-3">1.2</td>
                                <td className="p-3">Responsable Green IT désigné avec budget dédié</td>
                                <td className="p-3">☐ 0 ☐ 1 ☐ 2 ☐ 3</td>
                            </tr>
                            <tr className="border-b border-border">
                                <td className="p-3">1.3</td>
                                <td className="p-3">Objectifs chiffrés de réduction d'impact (court/moyen/long terme)</td>
                                <td className="p-3">☐ 0 ☐ 1 ☐ 2 ☐ 3</td>
                            </tr>
                            <tr className="border-b border-border">
                                <td className="p-3">1.4</td>
                                <td className="p-3">Comité Green IT avec représentants IT, RSE, Achats</td>
                                <td className="p-3">☐ 0 ☐ 1 ☐ 2 ☐ 3</td>
                            </tr>
                            <tr className="border-b border-border">
                                <td className="p-3">1.5</td>
                                <td className="p-3">Intégration Green IT dans la stratégie globale de l'entreprise</td>
                                <td className="p-3">☐ 0 ☐ 1 ☐ 2 ☐ 3</td>
                            </tr>
                        </tbody>
                    </table>

                    <Card className="p-4 bg-muted/5 border-border">
                        <p className="text-sm text-muted-foreground">
                            <strong className="text-foreground">Score Axe 1 :</strong> ___/60 points
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                            <em>Note : Les 15 critères supplémentaires sont détaillés dans la version complète</em>
                        </p>
                    </Card>
                </div>

                {/* Axe 2 - Équipements */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-foreground mb-6 border-b-2 border-emerald-600 pb-2">
                        Axe 2 : Équipements et infrastructure (25 critères)
                    </h2>

                    <table className="w-full text-sm border border-border mb-6">
                        <thead className="bg-secondary">
                            <tr>
                                <th className="p-3 text-left font-semibold text-foreground w-12">#</th>
                                <th className="p-3 text-left font-semibold text-foreground">Critère</th>
                                <th className="p-3 text-left font-semibold text-foreground w-32">Note (0-3)</th>
                            </tr>
                        </thead>
                        <tbody className="text-muted-foreground">
                            <tr className="border-b border-border">
                                <td className="p-3">2.1</td>
                                <td className="p-3">Inventaire complet et à jour du parc informatique</td>
                                <td className="p-3">☐ 0 ☐ 1 ☐ 2 ☐ 3</td>
                            </tr>
                            <tr className="border-b border-border">
                                <td className="p-3">2.2</td>
                                <td className="p-3">≥ 30% d'équipements reconditionnés dans les achats</td>
                                <td className="p-3">☐ 0 ☐ 1 ☐ 2 ☐ 3</td>
                            </tr>
                            <tr className="border-b border-border">
                                <td className="p-3">2.3</td>
                                <td className="p-3">Critères environnementaux dans 100% des appels d'offres IT</td>
                                <td className="p-3">☐ 0 ☐ 1 ☐ 2 ☐ 3</td>
                            </tr>
                            <tr className="border-b border-border">
                                <td className="p-3">2.4</td>
                                <td className="p-3">Durée de vie moyenne des équipements ≥ 5 ans</td>
                                <td className="p-3">☐ 0 ☐ 1 ☐ 2 ☐ 3</td>
                            </tr>
                            <tr className="border-b border-border">
                                <td className="p-3">2.5</td>
                                <td className="p-3">Service de réparation interne ou contrat de maintenance</td>
                                <td className="p-3">☐ 0 ☐ 1 ☐ 2 ☐ 3</td>
                            </tr>
                            <tr className="border-b border-border">
                                <td className="p-3">2.6</td>
                                <td className="p-3">Recyclage via filière agrées (Ecosystem, Ecologic) : 100%</td>
                                <td className="p-3">☐ 0 ☐ 1 ☐ 2 ☐ 3</td>
                            </tr>
                        </tbody>
                    </table>

                    <Card className="p-4 bg-muted/5 border-border">
                        <p className="text-sm text-muted-foreground">
                            <strong className="text-foreground">Score Axe 2 :</strong> ___/75 points
                        </p>
                    </Card>
                </div>

                {/* Axe 3 - Usages */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-foreground mb-6 border-b-2 border-emerald-600 pb-2">
                        Axe 3 : Usages et pratiques (20 critères)
                    </h2>

                    <table className="w-full text-sm border border-border mb-6">
                        <thead className="bg-secondary">
                            <tr>
                                <th className="p-3 text-left font-semibold text-foreground w-12">#</th>
                                <th className="p-3 text-left font-semibold text-foreground">Critère</th>
                                <th className="p-3 text-left font-semibold text-foreground w-32">Note (0-3)</th>
                            </tr>
                        </thead>
                        <tbody className="text-muted-foreground">
                            <tr className="border-b border-border">
                                <td className="p-3">3.1</td>
                                <td className="p-3">Charte des écogestes numérique diffusée à tous</td>
                                <td className="p-3">☐ 0 ☐ 1 ☐ 2 ☐ 3</td>
                            </tr>
                            <tr className="border-b border-border">
                                <td className="p-3">3.2</td>
                                <td className="p-3">Politique de nettoyage régulier des emails et fichiers</td>
                                <td className="p-3">☐ 0 ☐ 1 ☐ 2 ☐ 3</td>
                            </tr>
                            <tr className="border-b border-border">
                                <td className="p-3">3.3</td>
                                <td className="p-3">Limitation de la résolution vidéo en visioconférence par défaut</td>
                                <td className="p-3">☐ 0 ☐ 1 ☐ 2 ☐ 3</td>
                            </tr>
                            <tr className="border-b border-border">
                                <td className="p-3">3.4</td>
                                <td className="p-3">Outils collaboratifs privilégiés vs emails avec PJ</td>
                                <td className="p-3">☐ 0 ☐ 1 ☐ 2 ☐ 3</td>
                            </tr>
                            <tr className="border-b border-border">
                                <td className="p-3">3.5</td>
                                <td className="p-3">Politique d'impression responsable (recto-verso, noir & blanc)</td>
                                <td className="p-3">☐ 0 ☐ 1 ☐ 2 ☐ 3</td>
                            </tr>
                        </tbody>
                    </table>

                    <Card className="p-4 bg-muted/5 border-border">
                        <p className="text-sm text-muted-foreground">
                            <strong className="text-foreground">Score Axe 3 :</strong> ___/60 points
                        </p>
                    </Card>
                </div>

                {/* Axe 4 - Services numériques */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-foreground mb-6 border-b-2 border-emerald-600 pb-2">
                        Axe 4 : Services numériques et SI (20 critères)
                    </h2>

                    <table className="w-full text-sm border border-border mb-6">
                        <thead className="bg-secondary">
                            <tr>
                                <th className="p-3 text-left font-semibold text-foreground w-12">#</th>
                                <th className="p-3 text-left font-semibold text-foreground">Critère</th>
                                <th className="p-3 text-left font-semibold text-foreground w-32">Note (0-3)</th>
                            </tr>
                        </thead>
                        <tbody className="text-muted-foreground">
                            <tr className="border-b border-border">
                                <td className="p-3">4.1</td>
                                <td className="p-3">Écoconception appliquée aux développements internes</td>
                                <td className="p-3">☐ 0 ☐ 1 ☐ 2 ☐ 3</td>
                            </tr>
                            <tr className="border-b border-border">
                                <td className="p-3">4.2</td>
                                <td className="p-3">Mesure de l'empreinte des services numériques (lighthouse, etc.)</td>
                                <td className="p-3">☐ 0 ☐ 1 ☐ 2 ☐ 3</td>
                            </tr>
                            <tr className="border-b border-border">
                                <td className="p-3">4.3</td>
                                <td className="p-3">Hébergement sur datacenters avec PUE &lt; 1.5</td>
                                <td className="p-3">☐ 0 ☐ 1 ☐ 2 ☐ 3</td>
                            </tr>
                            <tr className="border-b border-border">
                                <td className="p-3">4.4</td>
                                <td className="p-3">Politique de rationalisation des applicatifs (éviter doublons)</td>
                                <td className="p-3">☐ 0 ☐ 1 ☐ 2 ☐ 3</td>
                            </tr>
                            <tr className="border-b border-border">
                                <td className="p-3">4.5</td>
                                <td className="p-3">Critères Green IT dans le choix des prestataires IT</td>
                                <td className="p-3">☐ 0 ☐ 1 ☐ 2 ☐ 3</td>
                            </tr>
                        </tbody>
                    </table>

                    <Card className="p-4 bg-muted/5 border-border">
                        <p className="text-sm text-muted-foreground">
                            <strong className="text-foreground">Score Axe 4 :</strong> ___/60 points
                        </p>
                    </Card>
                </div>

                {/* Axe 5 - Sensibilisation */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-foreground mb-6 border-b-2 border-emerald-600 pb-2">
                        Axe 5 : Sensibilisation et formation (15 critères)
                    </h2>

                    <table className="w-full text-sm border border-border mb-6">
                        <thead className="bg-secondary">
                            <tr>
                                <th className="p-3 text-left font-semibold text-foreground w-12">#</th>
                                <th className="p-3 text-left font-semibold text-foreground">Critère</th>
                                <th className="p-3 text-left font-semibold text-foreground w-32">Note (0-3)</th>
                            </tr>
                        </thead>
                        <tbody className="text-muted-foreground">
                            <tr className="border-b border-border">
                                <td className="p-3">5.1</td>
                                <td className="p-3">Formation Green IT obligatoire pour tous les nouveaux arrivants</td>
                                <td className="p-3">☐ 0 ☐ 1 ☐ 2 ☐ 3</td>
                            </tr>
                            <tr className="border-b border-border">
                                <td className="p-3">5.2</td>
                                <td className="p-3">Campagnes de sensibilisation régulières (newsletters, affiches)</td>
                                <td className="p-3">☐ 0 ☐ 1 ☐ 2 ☐ 3</td>
                            </tr>
                            <tr className="border-b border-border">
                                <td className="p-3">5.3</td>
                                <td className="p-3">Formation écoconception pour les développeurs</td>
                                <td className="p-3">☐ 0 ☐ 1 ☐ 2 ☐ 3</td>
                            </tr>
                            <tr className="border-b border-border">
                                <td className="p-3">5.4</td>
                                <td className="p-3">Événement annuel dédié au numérique responsable</td>
                                <td className="p-3">☐ 0 ☐ 1 ☐ 2 ☐ 3</td>
                            </tr>
                            <tr className="border-b border-border">
                                <td className="p-3">5.5</td>
                                <td className="p-3">Documentation et ressources Green IT accessibles à tous</td>
                                <td className="p-3">☐ 0 ☐ 1 ☐ 2 ☐ 3</td>
                            </tr>
                        </tbody>
                    </table>

                    <Card className="p-4 bg-muted/5 border-border">
                        <p className="text-sm text-muted-foreground">
                            <strong className="text-foreground">Score Axe 5 :</strong> ___/45 points
                        </p>
                    </Card>
                </div>

                {/* Score global */}
                <Card className="p-8 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border-2 border-emerald-300 dark:border-emerald-700 mb-12">
                    <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Calcul du score global</h2>

                    <table className="w-full text-sm mb-6">
                        <thead className="border-b-2 border-emerald-600">
                            <tr>
                                <th className="p-3 text-left font-semibold text-foreground">Axe</th>
                                <th className="p-3 text-left font-semibold text-foreground">Score obtenu</th>
                                <th className="p-3 text-left font-semibold text-foreground">Score maximum</th>
                            </tr>
                        </thead>
                        <tbody className="text-muted-foreground">
                            <tr className="border-b border-border">
                                <td className="p-3">1. Gouvernance</td>
                                <td className="p-3">___/60</td>
                                <td className="p-3">60</td>
                            </tr>
                            <tr className="border-b border-border">
                                <td className="p-3">2. Équipements</td>
                                <td className="p-3">___/75</td>
                                <td className="p-3">75</td>
                            </tr>
                            <tr className="border-b border-border">
                                <td className="p-3">3. Usages</td>
                                <td className="p-3">___/60</td>
                                <td className="p-3">60</td>
                            </tr>
                            <tr className="border-b border-border">
                                <td className="p-3">4. Services numériques</td>
                                <td className="p-3">___/60</td>
                                <td className="p-3">60</td>
                            </tr>
                            <tr className="border-b border-border">
                                <td className="p-3">5. Sensibilisation</td>
                                <td className="p-3">___/45</td>
                                <td className="p-3">45</td>
                            </tr>
                            <tr className="font-bold text-foreground">
                                <td className="p-3">TOTAL</td>
                                <td className="p-3">___/300</td>
                                <td className="p-3">300</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="grid md:grid-cols-4 gap-4 mt-6">
                        <Card className="p-4 text-center bg-red-50 dark:bg-red-950/20 border-red-300">
                            <div className="text-xl font-bold text-red-600">&lt; 100</div>
                            <p className="text-sm text-muted-foreground">Débutant</p>
                        </Card>
                        <Card className="p-4 text-center bg-amber-50 dark:bg-amber-950/20 border-amber-300">
                            <div className="text-xl font-bold text-amber-600">100-180</div>
                            <p className="text-sm text-muted-foreground">Intermédiaire</p>
                        </Card>
                        <Card className="p-4 text-center bg-blue-50 dark:bg-blue-950/20 border-blue-300">
                            <div className="text-xl font-bold text-blue-600">180-240</div>
                            <p className="text-sm text-muted-foreground">Avancé</p>
                        </Card>
                        <Card className="p-4 text-center bg-emerald-50 dark:bg-emerald-950/20 border-emerald-300">
                            <div className="text-xl font-bold text-emerald-600">240-300</div>
                            <p className="text-sm text-muted-foreground">Excellence</p>
                        </Card>
                    </div>
                </Card>

                {/* Plan d'action */}
                <Card className="p-8 border-2 border-blue-300 dark:border-blue-700">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Plan d'action recommandé</h2>
                    <p className="text-muted-foreground mb-6">
                        Sur la base de votre score, identifiez les 5 critères les plus critiques (score 0 ou 1)
                        et priorisez-les dans votre roadmap Green IT.
                    </p>

                    <table className="w-full text-sm border border-border">
                        <thead className="bg-secondary">
                            <tr>
                                <th className="p-3 text-left font-semibold text-foreground">Critère prioritaire</th>
                                <th className="p-3 text-left font-semibold text-foreground">Action</th>
                                <th className="p-3 text-left font-semibold text-foreground">Échéance</th>
                            </tr>
                        </thead>
                        <tbody className="text-muted-foreground">
                            <tr className="border-b border-border">
                                <td className="p-3">_____________</td>
                                <td className="p-3">_____________</td>
                                <td className="p-3">_____________</td>
                            </tr>
                            <tr className="border-b border-border">
                                <td className="p-3">_____________</td>
                                <td className="p-3">_____________</td>
                                <td className="p-3">_____________</td>
                            </tr>
                            <tr className="border-b border-border">
                                <td className="p-3">_____________</td>
                                <td className="p-3">_____________</td>
                                <td className="p-3">_____________</td>
                            </tr>
                            <tr className="border-b border-border">
                                <td className="p-3">_____________</td>
                                <td className="p-3">_____________</td>
                                <td className="p-3">_____________</td>
                            </tr>
                            <tr>
                                <td className="p-3">_____________</td>
                                <td className="p-3">_____________</td>
                                <td className="p-3">_____________</td>
                            </tr>
                        </tbody>
                    </table>
                </Card>

                {/* Footer */}
                <div className="mt-12 text-center text-xs text-muted-foreground">
                    <p>Grille générée via Le Green IT en clair - hylst.fr/greenit</p>
                    <p>Méthodologie libre d'usage - À adapter selon vos besoins</p>
                    <p className="mt-2 italic">Version complète disponible avec les 100 critères détaillés</p>
                </div>
            </div>
        </div>
    )
}
