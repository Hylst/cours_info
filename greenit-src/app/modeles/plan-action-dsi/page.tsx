"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Printer, FileSpreadsheet } from "lucide-react"
import Link from "next/link"

export default function PlanActionDSIPage() {
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
                            <h1 className="text-3xl font-bold text-white mb-2">Plan d'Action DSI Numérique Responsable</h1>
                            <p className="text-emerald-100">Roadmap 36 mois</p>
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
                        <FileSpreadsheet className="h-16 w-16 text-emerald-600" />
                    </div>
                    <h1 className="text-4xl font-bold text-foreground mb-4">Plan d'Action DSI</h1>
                    <h2 className="text-2xl text-muted-foreground mb-8">Numérique Responsable sur 3 ans</h2>
                </div>

                {/* Vision */}
                <Card className="p-8 mb-12 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border-2 border-emerald-300">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Vision et objectifs</h2>
                    <p className="text-muted-foreground mb-6">
                        Transformer la DSI en acteur clé de la transition écologique de l'organisation en réduisant l'empreinte
                        environnementale du système d'information de 30% d'ici 3 ans.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                        <Card className="p-4 bg-white dark:bg-background">
                            <div className="text-3xl font-bold text-emerald-600 mb-2">-30%</div>
                            <p className="text-sm text-muted-foreground">Émissions CO₂</p>
                        </Card>
                        <Card className="p-4 bg-white dark:bg-background">
                            <div className="text-3xl font-bold text-blue-600 mb-2">50%</div>
                            <p className="text-sm text-muted-foreground">Équipements reconditionnés</p>
                        </Card>
                        <Card className="p-4 bg-white dark:bg-background">
                            <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                            <p className="text-sm text-muted-foreground">Collaborateurs formés</p>
                        </Card>
                    </div>
                </Card>

                {/* Année 1 */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-foreground mb-6 border-b-2 border-emerald-600 pb-2">
                        Année 1 : Structuration (2026)
                    </h2>

                    <div className="space-y-6">
                        <Card className="p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-foreground mb-2">Q1 - Diagnostic et gouvernance</h3>
                                    <p className="text-sm text-muted-foreground">Janvier - Mars 2026</p>
                                </div>
                                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold">
                                    Budget: 25k€
                                </span>
                            </div>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>• Audit complet de l'empreinte numérique actuelle</li>
                                <li>• Nomination d'un responsable Green IT</li>
                                <li>• Création du comité Green IT (DSI, RSE, Achats)</li>
                                <li>• Rédaction de la charte Green IT</li>
                                <li>• Définition des KPIs et tableau de bord</li>
                            </ul>
                        </Card>

                        <Card className="p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-foreground mb-2">Q2 - Quick wins équipements</h3>
                                    <p className="text-sm text-muted-foreground">Avril - Juin 2026</p>
                                </div>
                                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold">
                                    Budget: 50k€
                                </span>
                            </div>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>• Mise en place inventaire complet du parc (logiciel GLPI/CMDB)</li>
                                <li>• Premiers achats d'équipements reconditionnés (20% du parc)</li>
                                <li>• Partenariat avec filière de recyclage (Ecosystem)</li>
                                <li>• Politique de réparation avant remplacement</li>
                            </ul>
                        </Card>

                        <Card className="p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-foreground mb-2">Q3 - Sensibilisation</h3>
                                    <p className="text-sm text-muted-foreground">Juillet - Septembre 2026</p>
                                </div>
                                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold">
                                    Budget: 15k€
                                </span>
                            </div>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>• Lancement campagne de sensibilisation (affiches, newsletters)</li>
                                <li>• Formation Green IT pour 100% des nouveaux arrivants</li>
                                <li>• Création du guide des écogestes numériques</li>
                                <li>• Webinaire DSI "Numérique responsable"</li>
                            </ul>
                        </Card>

                        <Card className="p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-foreground mb-2">Q4 - Bilan et ajustements</h3>
                                    <p className="text-sm text-muted-foreground">Octobre - Décembre 2026</p>
                                </div>
                                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold">
                                    Budget: 10k€
                                </span>
                            </div>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>• Premier bilan d'impact (mesure empreinte carbone)</li>
                                <li>• Rapport au comité de direction</li>
                                <li>• Ajustement plan d'action année 2</li>
                                <li>• Communication interne des résultats</li>
                            </ul>
                        </Card>
                    </div>

                    <Card className="p-6 mt-6 bg-muted/5 border-border">
                        <p className="font-semibold text-foreground mb-2">Objectifs Année 1 :</p>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>✓ Budget total : 100 000 €</li>
                            <li>✓ -10% empreinte carbone vs baseline</li>
                            <li>✓ 20% équipements reconditionnés</li>
                            <li>✓ 100% nouveaux collaborateurs formés</li>
                        </ul>
                    </Card>
                </div>

                {/* Année 2 */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-foreground mb-6 border-b-2 border-emerald-600 pb-2">
                        Année 2 : Déploiement (2027)
                    </h2>

                    <div className="space-y-6">
                        <Card className="p-6">
                            <h3 className="text-xl font-semibold text-foreground mb-4">Actions majeures</h3>
                            <table className="w-full text-sm">
                                <thead className="border-b border-border">
                                    <tr className="text-left">
                                        <th className="pb-2 font-semibold text-foreground">Trimestre</th>
                                        <th className="pb-2 font-semibold text-foreground">Action prioritaire</th>
                                        <th className="pb-2 font-semibold text-foreground">Budget</th>
                                    </tr>
                                </thead>
                                <tbody className="text-muted-foreground">
                                    <tr className="border-b border-border">
                                        <td className="py-3">Q1</td>
                                        <td className="py-3">Écoconception : formation développeurs + référentiel</td>
                                        <td className="py-3">30k€</td>
                                    </tr>
                                    <tr className="border-b border-border">
                                        <td className="py-3">Q2</td>
                                        <td className="py-3">Migration cloud vers datacenters verts (PUE &lt; 1.3)</td>
                                        <td className="py-3">50k€</td>
                                    </tr>
                                    <tr className="border-b border-border">
                                        <td className="py-3">Q3</td>
                                        <td className="py-3">Prolongation durée de vie : 5 ans minimum</td>
                                        <td className="py-3">20k€</td>
                                    </tr>
                                    <tr className="border-b border-border">
                                        <td className="py-3">Q4</td>
                                        <td className="py-3">Atelier de réparation interne</td>
                                        <td className="py-3">40k€</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Card>

                        <Card className="p-6 bg-muted/5 border-border">
                            <p className="font-semibold text-foreground mb-2">Objectifs Année 2 :</p>
                            <ul className="space-y-1 text-sm text-muted-foreground">
                                <li>✓ Budget total : 140 000 €</li>
                                <li>✓ -20% empreinte carbone vs baseline</li>
                                <li>✓ 40% équipements reconditionnés</li>
                                <li>✓ Durée de vie moyenne : 5 ans</li>
                                <li>✓ 100% nouvelles applications  écoconçues</li>
                            </ul>
                        </Card>
                    </div>
                </div>

                {/* Année 3 */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-foreground mb-6 border-b-2 border-emerald-600 pb-2">
                        Année 3 : Excellence et pérennisation (2028)
                    </h2>

                    <div className="space-y-6">
                        <Card className="p-6">
                            <h3 className="text-xl font-semibold text-foreground mb-4">Actions prioritaires</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-3">
                                    <div className="p-4 bg-muted/5 border-border">
                                        <h4 className="font-semibold text-foreground mb-2">Optimisation SI</h4>
                                        <ul className="text-sm text-muted-foreground space-y-1">
                                            <li>• Rationalisation applicative (-30%)</li>
                                            <li>• Décommissionnement serveurs obsolètes</li>
                                            <li>• Migration vers serverless</li>
                                        </ul>
                                        <p className="text-sm font-semibold text-emerald-600 mt-2">Budget : 60k€</p>
                                    </div>

                                    <div className="p-4 bg-muted/5 border-border">
                                        <h4 className="font-semibold text-foreground mb-2">Innovation</h4>
                                        <ul className="text-sm text-muted-foreground space-y-1">
                                            <li>• IA responsable (green AI)</li>
                                            <li>• Mesure automatisée empreinte</li>
                                            <li>• Tableau de bord temps réel</li>
                                        </ul>
                                        <p className="text-sm font-semibold text-blue-600 mt-2">Budget : 50k€</p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="p-4 bg-muted/5 border-border">
                                        <h4 className="font-semibold text-foreground mb-2">Culture & Formation</h4>
                                        <ul className="text-sm text-muted-foreground space-y-1">
                                            <li>• Semaine du numérique responsable</li>
                                            <li>• Certification collaborateurs</li>
                                            <li>• Ambassadeurs Green IT</li>
                                        </ul>
                                        <p className="text-sm font-semibold text-purple-600 mt-2">Budget : 30k€</p>
                                    </div>

                                    <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded">
                                        <h4 className="font-semibold text-foreground mb-2">Certification</h4>
                                        <ul className="text-sm text-muted-foreground space-y-1">
                                            <li>• Label Numérique Responsable</li>
                                            <li>• Certification ISO 14001 SI</li>
                                            <li>• Communication externe</li>
                                        </ul>
                                        <p className="text-sm font-semibold text-amber-600 mt-2">Budget : 40k€</p>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6 bg-muted/5 border-border">
                            <p className="font-semibold text-foreground mb-2">Objectifs Année 3 (cibles finales) :</p>
                            <ul className="space-y-1 text-sm text-muted-foreground">
                                <li>✓ Budget total : 180 000 €</li>
                                <li>✓ <strong className="text-emerald-600">-30% empreinte carbone vs baseline (OBJECTIF ATTEINT)</strong></li>
                                <li>✓ 50% équipements reconditionnés</li>
                                <li>✓ Durée de vie moyenne : 6 ans</li>
                                <li>✓ Label Numérique Responsable obtenu</li>
                            </ul>
                        </Card>
                    </div>
                </div>

                {/* Budget global */}
                <Card className="p-8 mb-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-2 border-blue-300">
                    <h2 className="text-2xl font-bold text-foreground mb-6">Budget prévisionnel 3 ans</h2>

                    <table className="w-full mb-6">
                        <thead className="border-b-2 border-blue-600">
                            <tr className="text-left">
                                <th className="p-3 font-semibold text-foreground">Année</th>
                                <th className="p-3 font-semibold text-foreground">Investissement</th>
                                <th className="p-3 font-semibold text-foreground">Économies estimées</th>
                                <th className="p-3 font-semibold text-foreground">ROI</th>
                            </tr>
                        </thead>
                        <tbody className="text-muted-foreground">
                            <tr className="border-b border-border">
                                <td className="p-3">2026</td>
                                <td className="p-3">100 000 €</td>
                                <td className="p-3">15 000 €/an</td>
                                <td className="p-3 text-emerald-600">15%</td>
                            </tr>
                            <tr className="border-b border-border">
                                <td className="p-3">2027</td>
                                <td className="p-3">140 000 €</td>
                                <td className="p-3">35 000 €/an</td>
                                <td className="p-3 text-emerald-600">25%</td>
                            </tr>
                            <tr className="border-b border-border">
                                <td className="p-3">2028</td>
                                <td className="p-3">180 000 €</td>
                                <td className="p-3">60 000 €/an</td>
                                <td className="p-3 text-emerald-600">33%</td>
                            </tr>
                            <tr className="font-bold text-foreground">
                                <td className="p-3">TOTAL</td>
                                <td className="p-3">420 000 €</td>
                                <td className="p-3">110 000 €/an (récurrent)</td>
                                <td className="p-3 text-emerald-600">26% global</td>
                            </tr>
                        </tbody>
                    </table>

                    <p className="text-sm text-muted-foreground italic">
                        * Économies issues de : prolongation durée de vie, baisse consommation électrique,
                        réduction licences inutilisées, optimisation cloud
                    </p>
                </Card>

                {/* KPIs */}
                <Card className="p-8 mb-12">
                    <h2 className="text-2xl font-bold text-foreground mb-6">Tableau de bord des KPIs</h2>

                    <table className="w-full text-sm border border-border">
                        <thead className="bg-secondary">
                            <tr className="text-left">
                                <th className="p-3 font-semibold text-foreground">Indicateur</th>
                                <th className="p-3 font-semibold text-foreground">Baseline 2025</th>
                                <th className="p-3 font-semibold text-foreground">Objectif 2028</th>
                                <th className="p-3 font-semibold text-foreground">Fréquence</th>
                            </tr>
                        </thead>
                        <tbody className="text-muted-foreground">
                            <tr className="border-b border-border">
                                <td className="p-3">Empreinte carbone SI (t CO₂)</td>
                                <td className="p-3">150 t</td>
                                <td className="p-3">105 t (-30%)</td>
                                <td className="p-3">Annuel</td>
                            </tr>
                            <tr className="border-b border-border">
                                <td className="p-3">% équipements reconditionnés</td>
                                <td className="p-3">5%</td>
                                <td className="p-3">50%</td>
                                <td className="p-3">Mensuel</td>
                            </tr>
                            <tr className="border-b border-border">
                                <td className="p-3">Durée de vie moyenne (années)</td>
                                <td className="p-3">3 ans</td>
                                <td className="p-3">6 ans</td>
                                <td className="p-3">Annuel</td>
                            </tr>
                            <tr className="border-b border-border">
                                <td className="p-3">Taux de recyclage</td>
                                <td className="p-3">60%</td>
                                <td className="p-3">100%</td>
                                <td className="p-3">Trimestriel</td>
                            </tr>
                            <tr className="border-b border-border">
                                <td className="p-3">Collaborateurs formés</td>
                                <td className="p-3">10%</td>
                                <td className="p-3">100%</td>
                                <td className="p-3">Annuel</td>
                            </tr>
                            <tr>
                                <td className="p-3">Applications écoconçues</td>
                                <td className="p-3">0%</td>
                                <td className="p-3">100% (nouvelles)</td>
                                <td className="p-3">Continu</td>
                            </tr>
                        </tbody>
                    </table>
                </Card>

                {/* Risques */}
                <Card className="p-8 bg-muted/5 border-border">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Risques et mitigation</h2>

                    <div className="space-y-3">
                        <div className="flex items-start gap-3">
                            <span className="text-amber-600 font-bold">⚠️</span>
                            <div>
                                <p className="font-semibold text-foreground">Budget insuffisant</p>
                                <p className="text-sm text-muted-foreground">
                                    <em>Mitigation :</em> Prioriser les quick wins avec ROI rapide, valoriser les économies réalisées
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="text-amber-600 font-bold">⚠️</span>
                            <div>
                                <p className="font-semibold text-foreground">Résistance au changement</p>
                                <p className="text-sm text-muted-foreground">
                                    <em>Mitigation :</em> Communication forte, formation, implication direction, ambassadeurs internes
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="text-amber-600 font-bold">⚠️</span>
                            <div>
                                <p className="font-semibold text-foreground">Disponibilité reconditionné limitée</p>
                                <p className="text-sm text-muted-foreground">
                                    <em>Mitigation :</em> Partenariats multiples fournisseurs, anticipation des commandes, location option
                                </p>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Footer */}
                <div className="mt-12 text-center text-xs text-muted-foreground">
                    <p>Plan d'action généré via Le Green IT en clair - hylst.fr/greenit</p>
                    <p>Template libre d'usage - À adapter selon vos besoins et contexte</p>
                </div>
            </div>
        </div>
    )
}
