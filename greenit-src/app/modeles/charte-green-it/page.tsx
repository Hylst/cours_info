"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, ArrowLeft, Printer } from "lucide-react"
import Link from "next/link"

export default function CharteGreenITPage() {
    const handlePrint = () => {
        window.print()
    }

    return (
        <div className="min-h-screen">
            {/* Header - masqué à l'impression */}
            <div className="print:hidden bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-8">
                <div className="mx-auto max-w-4xl">
                    <Link href="/modeles" className="inline-flex items-center gap-2 text-white hover:text-emerald-100 mb-4">
                        <ArrowLeft className="h-4 w-4" />
                        Retour aux modèles
                    </Link>
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-white mb-2">Charte Green IT pour entreprises</h1>
                            <p className="text-emerald-100">Document complet - 12 pages</p>
                        </div>
                        <Button onClick={handlePrint} size="lg" variant="secondary" className="bg-card text-emerald-700 hover:bg-muted">
                            <Printer className="mr-2 h-5 w-5" />
                            Imprimer en PDF
                        </Button>
                    </div>
                </div>
            </div>

            {/* Contenu à imprimer */}
            <div className="mx-auto max-w-4xl px-6 py-12 print:px-12 print:py-8">
                <style jsx global>{`
          @media print {
            @page {
              size: A4;
              margin: 2cm;
            }
            body {
              print-color-adjust: exact;
              -webkit-print-color-adjust: exact;
            }
          }
        `}</style>

                {/* Page de garde */}
                <div className="mb-12 text-center print:mb-8 page-break-after">
                    <div className="mb-8 inline-block rounded-full bg-muted/10 p-6">
                        <svg className="h-16 w-16 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    </div>
                    <h1 className="text-4xl font-bold text-foreground mb-4">Charte Green IT</h1>
                    <h2 className="text-2xl text-muted-foreground mb-8">Numérique Responsable en Entreprise</h2>
                    <div className="mt-12 space-y-2 text-muted-foreground">
                        <p>Document de référence</p>
                        <p>Version 1.0 - Janvier 2026</p>
                        <p className="text-sm italic mt-4">Source : Le Green IT en clair - hylst.fr/greenit</p>
                    </div>
                </div>

                {/* Table des matières */}
                <div className="mb-12 page-break-after">
                    <h2 className="text-2xl font-bold text-foreground mb-6 border-b-2 border-emerald-600 pb-2">Table des matières</h2>
                    <ol className="space-y-2 text-muted-foreground">
                        <li className="flex justify-between">
                            <span>1. Préambule et objectifs</span>
                            <span>3</span>
                        </li>
                        <li className="flex justify-between">
                            <span>2. Principes et engagements</span>
                            <span>4</span>
                        </li>
                        <li className="flex justify-between">
                            <span>3. Gouvernance et rôles</span>
                            <span>6</span>
                        </li>
                        <li className="flex justify-between">
                            <span>4. Plan d'action</span>
                            <span>7</span>
                        </li>
                        <li className="flex justify-between">
                            <span>5. Indicateurs et suivi</span>
                            <span>10</span>
                        </li>
                        <li className="flex justify-between">
                            <span>6. Annexes</span>
                            <span>12</span>
                        </li>
                    </ol>
                </div>

                {/* Section 1 */}
                <div className="mb-12 page-break-before">
                    <h2 className="text-2xl font-bold text-foreground mb-6 border-b-2 border-emerald-600 pb-2">
                        1. Préambule et objectifs
                    </h2>

                    <h3 className="text-xl font-semibold text-foreground mb-4">1.1 Contexte</h3>
                    <p className="mb-4 text-muted-foreground">
                        Le numérique représente aujourd'hui environ 4% des émissions mondiales de gaz à effet de serre, un chiffre en constante augmentation.
                        En France, le secteur numérique génère 2,5% des émissions nationales de CO2, soit 17 millions de tonnes équivalent CO2 par an.
                    </p>
                    <p className="mb-6 text-muted-foreground">
                        Face à cette réalité et dans le cadre de notre engagement pour la transition écologique, [NOM DE L'ENTREPRISE] s'engage
                        à adopter une démarche de numérique responsable.
                    </p>

                    <h3 className="text-xl font-semibold text-foreground mb-4">1.2 Objectifs de la charte</h3>
                    <Card className="p-6 bg-muted/5 border-border mb-6">
                        <ul className="space-y-3 text-muted-foreground">
                            <li className="flex items-start gap-2">
                                <span className="text-emerald-600 font-bold">•</span>
                                <span>Réduire de 30% l'empreinte environnementale de notre parc informatique d'ici 2027</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-emerald-600 font-bold">•</span>
                                <span>Sensibiliser 100% des collaborateurs aux enjeux du numérique responsable</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-emerald-600 font-bold">•</span>
                                <span>Intégrer des critères environnementaux dans 100% de nos achats IT</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-emerald-600 font-bold">•</span>
                                <span>Prolonger la durée de vie de nos équipements de 2 ans en moyenne</span>
                            </li>
                        </ul>
                    </Card>

                    <h3 className="text-xl font-semibold text-foreground mb-4">1.3 Périmètre d'application</h3>
                    <p className="mb-4 text-muted-foreground">
                        Cette charte s'applique à l'ensemble des activités numériques de l'entreprise :
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                        <li>Parc informatique (ordinateurs, smartphones, tablettes, serveurs)</li>
                        <li>Infrastructure réseau et télécom</li>
                        <li>Applications et services numériques</li>
                        <li>Sites web et services en ligne</li>
                        <li>Centres de données et cloud computing</li>
                    </ul>
                </div>

                {/* Section 2 */}
                <div className="mb-12 page-break-before">
                    <h2 className="text-2xl font-bold text-foreground mb-6 border-b-2 border-emerald-600 pb-2">
                        2. Principes et engagements
                    </h2>

                    <h3 className="text-xl font-semibold text-foreground mb-4">2.1 Principes directeurs</h3>

                    <Card className="p-6 mb-6">
                        <h4 className="font-semibold text-foreground mb-3">Sobriété numérique</h4>
                        <p className="text-muted-foreground">
                            Limiter notre consommation de ressources numériques au strict nécessaire et privilégier des solutions légères et efficaces.
                        </p>
                    </Card>

                    <Card className="p-6 mb-6">
                        <h4 className="font-semibold text-foreground mb-3">Économie circulaire</h4>
                        <p className="text-muted-foreground">
                            Favoriser le réemploi, la réparation et le recyclage de nos équipements plutôt que l'achat neuf systématique.
                        </p>
                    </Card>

                    <Card className="p-6 mb-6">
                        <h4 className="font-semibold text-foreground mb-3">Écoconception</h4>
                        <p className="text-muted-foreground">
                            Concevoir nos services numériques en minimisant leur impact environnemental dès la phase de design.
                        </p>
                    </Card>

                    <h3 className="text-xl font-semibold text-foreground mb-4 mt-8">2.2 Engagements de l'entreprise</h3>

                    <div className="space-y-4">
                        <div className="border-l-4 border-emerald-600 pl-4">
                            <h4 className="font-semibold text-foreground mb-2">Achats responsables</h4>
                            <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                                <li>Privilégier les équipements reconditionnés quand c'est possible</li>
                                <li>Exiger des labels environnementaux (EPEAT, TCO, Energy Star)</li>
                                <li>Favoriser les produits réparables et évolutifs</li>
                            </ul>
                        </div>

                        <div className="border-l-4 border-emerald-600 pl-4">
                            <h4 className="font-semibold text-foreground mb-2">Allongement de la durée de vie</h4>
                            <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                                <li>Cibler 5 ans minimum pour les ordinateurs</li>
                                <li>Cibler 4 ans minimum pour les smartphones</li>
                                <li>Mettre en place un service de réparation interne</li>
                            </ul>
                        </div>

                        <div className="border-l-4 border-emerald-600 pl-4">
                            <h4 className="font-semibold text-foreground mb-2">Fin de vie responsable</h4>
                            <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                                <li>Garantir le recyclage via des filières agréées (Ecosystem, Ecologic)</li>
                                <li>Donner une seconde vie aux équipements fonctionnels</li>
                                <li>Assurer la destruction sécurisée des données</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Section 3 - Gouvernance */}
                <div className="mb-12 page-break-before">
                    <h2 className="text-2xl font-bold text-foreground mb-6 border-b-2 border-emerald-600 pb-2">
                        3. Gouvernance et rôles
                    </h2>

                    <h3 className="text-xl font-semibold text-foreground mb-4">3.1 Comité Green IT</h3>
                    <Card className="p-6 mb-6">
                        <p className="text-muted-foreground mb-4">
                            Un comité Green IT est créé pour piloter la démarche. Il est composé de :
                        </p>
                        <table className="w-full text-sm">
                            <thead className="border-b border-border">
                                <tr className="text-left">
                                    <th className="pb-2 font-semibold text-foreground">Rôle</th>
                                    <th className="pb-2 font-semibold text-foreground">Responsabilités</th>
                                </tr>
                            </thead>
                            <tbody className="text-muted-foreground">
                                <tr className="border-b border-border">
                                    <td className="py-3">Directeur·rice IT</td>
                                    <td className="py-3">Pilotage stratégique et budget</td>
                                </tr>
                                <tr className="border-b border-border">
                                    <td className="py-3">Responsable RSE</td>
                                    <td className="py-3">Alignement avec la stratégie RSE globale</td>
                                </tr>
                                <tr className="border-b border-border">
                                    <td className="py-3">Responsable Achats</td>
                                    <td className="py-3">Intégration critères green dans les appels d'offres</td>
                                </tr>
                                <tr>
                                    <td className="py-3">Référent·e·s métiers</td>
                                    <td className="py-3">Relais dans les équipes et remontée besoins</td>
                                </tr>
                            </tbody>
                        </table>
                    </Card>

                    <h3 className="text-xl font-semibold text-foreground mb-4">3.2 Rôles et responsabilités</h3>
                    <p className="text-muted-foreground mb-4">Chaque collaborateur a un rôle à jouer :</p>
                    <ul className="space-y-2 text-muted-foreground">
                        <li><strong className="text-foreground">Direction :</strong> Valider la stratégie et allouer les ressources</li>
                        <li><strong className="text-foreground">DSI/IT :</strong> Déployer les solutions techniques green</li>
                        <li><strong className="text-foreground">Achats :</strong> Sélectionner des fournisseurs responsables</li>
                        <li><strong className="text-foreground">Collaborateurs :</strong> Adopter les écogestes au quotidien</li>
                    </ul>
                </div>

                {/* Section 4 - Plan d'action */}
                <div className="mb-12 page-break-before">
                    <h2 className="text-2xl font-bold text-foreground mb-6 border-b-2 border-emerald-600 pb-2">
                        4. Plan d'action
                    </h2>

                    <h3 className="text-xl font-semibold text-foreground mb-4">4.1 Axe 1 : Équipements</h3>
                    <table className="w-full text-sm mb-6 border border-border">
                        <thead className="bg-secondary">
                            <tr>
                                <th className="p-3 text-left font-semibold text-foreground">Action</th>
                                <th className="p-3 text-left font-semibold text-foreground">Indicateur</th>
                                <th className="p-3 text-left font-semibold text-foreground">Échéance</th>
                            </tr>
                        </thead>
                        <tbody className="text-muted-foreground">
                            <tr className="border-b border-border">
                                <td className="p-3">Systématiser l'achat reconditionné</td>
                                <td className="p-3">% équipements reconditionnés</td>
                                <td className="p-3">2026</td>
                            </tr>
                            <tr className="border-b border-border">
                                <td className="p-3">Mettre en place un atelier réparation</td>
                                <td className="p-3">Nombre de réparations/an</td>
                                <td className="p-3">Q2 2026</td>
                            </tr>
                            <tr className="border-b border-border">
                                <td className="p-3">Allonger durée de vie à 5 ans</td>
                                <td className="p-3">Âge moyen du parc</td>
                                <td className="p-3">2027</td>
                            </tr>
                            <tr>
                                <td className="p-3">Collecter 100% équipements fin de vie</td>
                                <td className="p-3">Taux de collecte</td>
                                <td className="p-3">2026</td>
                            </tr>
                        </tbody>
                    </table>

                    <h3 className="text-xl font-semibold text-foreground mb-4">4.2 Axe 2 : Usages</h3>
                    <div className="space-y-3 mb-6">
                        <Card className="p-4">
                            <h4 className="font-semibold text-foreground mb-2">Messagerie électronique</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                <li>Limiter les pièces jointes volumineuses (utiliser des liens)</li>
                                <li>Nettoyer régulièrement sa boîte mail</li>
                                <li>Désabonner des newsletters non lues</li>
                            </ul>
                        </Card>

                        <Card className="p-4">
                            <h4 className="font-semibold text-foreground mb-2">Stockage de données</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                <li>Supprimer les fichiers obsolètes</li>
                                <li>Éviter les doublons</li>
                                <li>Utiliser la compression</li>
                            </ul>
                        </Card>

                        <Card className="p-4">
                            <h4 className="font-semibold text-foreground mb-2">Visioconférence</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                <li>Couper la caméra quand possible</li>
                                <li>Privilégier l'audio pour les réunions simples</li>
                                <li>Éviter l'enregistrement systématique</li>
                            </ul>
                        </Card>
                    </div>

                    <h3 className="text-xl font-semibold text-foreground mb-4">4.3 Axe 3 : Services numériques</h3>
                    <p className="text-muted-foreground mb-4">Pour nos applications et sites web :</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                        <li>Appliquer les principes d'écoconception (référentiel GR491)</li>
                        <li>Optimiser les images et ressources</li>
                        <li>Mesurer et réduire l'empreinte carbone (lighthouse, websitecarbon)</li>
                        <li>Héberger sur des datacenters verts</li>
                    </ul>
                </div>

                {/* Section 5 - KPIs */}
                <div className="mb-12 page-break-before">
                    <h2 className="text-2xl font-bold text-foreground mb-6 border-b-2 border-emerald-600 pb-2">
                        5. Indicateurs et suivi
                    </h2>

                    <h3 className="text-xl font-semibold text-foreground mb-4">5.1 Indicateurs clés de performance</h3>

                    <table className="w-full text-sm mb-6 border border-border">
                        <thead className="bg-secondary">
                            <tr>
                                <th className="p-3 text-left font-semibold text-foreground">Indicateur</th>
                                <th className="p-3 text-left font-semibold text-foreground">Baseline 2025</th>
                                <th className="p-3 text-left font-semibold text-foreground">Objectif 2027</th>
                            </tr>
                        </thead>
                        <tbody className="text-muted-foreground">
                            <tr className="border-b border-border">
                                <td className="p-3">Émissions CO2 parc IT (tonnes)</td>
                                <td className="p-3">À mesurer</td>
                                <td className="p-3">-30%</td>
                            </tr>
                            <tr className="border-b border-border">
                                <td className="p-3">% équipements reconditionnés</td>
                                <td className="p-3">5%</td>
                                <td className="p-3">50%</td>
                            </tr>
                            <tr className="border-b border-border">
                                <td className="p-3">Durée de vie moyenne (années)</td>
                                <td className="p-3">3 ans</td>
                                <td className="p-3">5 ans</td>
                            </tr>
                            <tr className="border-b border-border">
                                <td className="p-3">Taux de recyclage (%)</td>
                                <td className="p-3">60%</td>
                                <td className="p-3">100%</td>
                            </tr>
                            <tr>
                                <td className="p-3">Collaborateurs sensibilisés (%)</td>
                                <td className="p-3">10%</td>
                                <td className="p-3">100%</td>
                            </tr>
                        </tbody>
                    </table>

                    <h3 className="text-xl font-semibold text-foreground mb-4">5.2 Reporting et révision</h3>
                    <Card className="p-6">
                        <ul className="space-y-3 text-muted-foreground">
                            <li className="flex items-start gap-2">
                                <span className="font-bold text-emerald-600">•</span>
                                <span><strong className="text-foreground">Mensuel :</strong> Suivi des actions par le comité Green IT</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="font-bold text-emerald-600">•</span>
                                <span><strong className="text-foreground">Trimestriel :</strong> Présentation des KPIs à la direction</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="font-bold text-emerald-600">•</span>
                                <span><strong className="text-foreground">Annuel :</strong> Bilan et ajustement du plan d'action</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="font-bold text-emerald-600">•</span>
                                <span><strong className="text-foreground">Révision :</strong> Cette charte sera révisée tous les 2 ans</span>
                            </li>
                        </ul>
                    </Card>
                </div>

                {/* Section 6 - Annexes */}
                <div className="mb-12 page-break-before">
                    <h2 className="text-2xl font-bold text-foreground mb-6 border-b-2 border-emerald-600 pb-2">
                        6. Annexes
                    </h2>

                    <h3 className="text-xl font-semibold text-foreground mb-4">Annexe A : Glossaire</h3>
                    <dl className="space-y-3 text-sm mb-8">
                        <div>
                            <dt className="font-semibold text-foreground">Green IT / Numérique responsable</dt>
                            <dd className="text-muted-foreground ml-4">Démarche visant à réduire l'empreinte environnementale du numérique</dd>
                        </div>
                        <div>
                            <dt className="font-semibold text-foreground">Écoconception</dt>
                            <dd className="text-muted-foreground ml-4">Conception de services numériques en minimisant leur impact environnemental</dd>
                        </div>
                        <div>
                            <dt className="font-semibold text-foreground">Sobriété numérique</dt>
                            <dd className="text-muted-foreground ml-4">Limitation de la consommation de ressources numériques au strict nécessaire</dd>
                        </div>
                        <div>
                            <dt className="font-semibold text-foreground">DEEE</dt>
                            <dd className="text-muted-foreground ml-4">Déchets d'Équipements Électriques et Électroniques</dd>
                        </div>
                    </dl>

                    <h3 className="text-xl font-semibold text-foreground mb-4">Annexe B : Ressources utiles</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• ADEME - Guide "La face cachée du numérique"</li>
                        <li>• GreenIT.fr - Référentiel d'écoconception GR491</li>
                        <li>• Institut du Numérique Responsable (INR)</li>
                        <li>• Ecosystem et Écologic - Filières de recyclage</li>
                        <li>• Le Green IT en clair - hylst.fr/greenit</li>
                    </ul>
                </div>

                {/* Signature */}
                <div className="mt-16 pt-8 border-t border-border">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <p className="font-semibold text-foreground mb-2">Pour l'entreprise</p>
                            <p className="text-sm text-muted-foreground mb-4">Nom et fonction</p>
                            <p className="text-sm text-muted-foreground">Date et signature :</p>
                            <div className="mt-2 border-b border-muted-foreground w-48"></div>
                        </div>
                        <div>
                            <p className="font-semibold text-foreground mb-2">Comité Green IT</p>
                            <p className="text-sm text-muted-foreground mb-4">Responsable Green IT</p>
                            <p className="text-sm text-muted-foreground">Date et signature :</p>
                            <div className="mt-2 border-b border-muted-foreground w-48"></div>
                        </div>
                    </div>
                </div>

                {/* Footer document */}
                <div className="mt-12 text-center text-xs text-muted-foreground">
                    <p>Document généré via Le Green IT en clair - hylst.fr/greenit</p>
                    <p>Template libre d'usage - À personnaliser selon vos besoins</p>
                </div>
            </div>
        </div>
    )
}
