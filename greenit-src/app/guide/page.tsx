"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    FileText,
    CheckCircle2,
    Leaf,
    Smartphone,
    Laptop,
    Globe,
    Printer,
    Download
} from "lucide-react"

import { useRouter } from "next/navigation"

export default function GuidePage() {
    const router = useRouter()
    const sections = [
        {
            title: "Matériel & Équipement",
            icon: Laptop,
            color: "emerald",
            tips: [
                "Gardez vos appareils le plus longtemps possible (4 ans minimum).",
                "Privilégiez le matériel reconditionné pour vos nouveaux achats.",
                "Choisissez des appareils avec un bon indice de réparabilité.",
                "Évitez de multiplier les écrans et privilégiez les plus petits formats."
            ]
        },
        {
            title: "Usages Quotidiens",
            icon: Smartphone,
            color: "blue",
            tips: [
                "Éteignez votre box et vos appareils la nuit et en votre absence.",
                "Privilégiez le Wi-Fi à la 4G/5G (consomme 3x moins d'énergie).",
                "Désactivez la lecture automatique des vidéos sur les réseaux sociaux.",
                "Nettoyez régulièrement vos boîtes mail et désinscrivez-vous des newsletters inutiles."
            ]
        },
        {
            title: "Web & Navigation",
            icon: Globe,
            color: "teal",
            tips: [
                "Tapez l'adresse directement au lieu de passer par une recherche.",
                "Utilisez des favoris pour vos sites fréquents.",
                "Limitez le nombre d'onglets ouverts simultanément.",
                "Activez le mode sombre quand l'écran est OLED (économise la batterie)."
            ]
        }
    ]

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Header */}
            <section className="bg-primary/10 py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <Badge className="mb-4 bg-primary text-primary-foreground">Guide Officiel 2025</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Guide du Numérique Responsable
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8">
                        Les bons réflexes pour réduire votre empreinte numérique au quotidien.
                    </p>
                    <Button onClick={() => window.print()} className="bg-primary hover:bg-primary/90">
                        <Printer className="mr-2 h-4 w-4" />
                        Imprimer le guide (PDF)
                    </Button>
                </div>
            </section>

            {/* Content */}
            <div className="max-w-5xl mx-auto px-6 mt-12 grid gap-8">
                {sections.map((section, index) => {
                    const Icon = section.icon
                    return (
                        <Card key={index} className="border-2 border-border shadow-sm">
                            <CardHeader className={`bg-${section.color}-500/5 border-b`}>
                                <div className="flex items-center gap-3">
                                    <div className={`p-2 rounded-lg bg-${section.color}-500/10`}>
                                        <Icon className={`h-6 w-6 text-${section.color}-500`} />
                                    </div>
                                    <CardTitle className="text-2xl">{section.title}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-6">
                                <ul className="grid gap-4 md:grid-cols-2">
                                    {section.tips.map((tip, idx) => (
                                        <li key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors">
                                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                            <span className="text-muted-foreground">{tip}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    )
                })}

                <Card className="bg-emerald-600 text-white p-8 rounded-2xl border-none">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-2xl font-bold mb-4 flex items-center justify-center md:justify-start gap-2">
                                <Leaf className="h-6 w-6" />
                                Le saviez-vous ?
                            </h3>
                            <p className="text-emerald-50 text-lg">
                                Produire un ordinateur portable de 2kg émet 156 kg de CO₂ et nécessite 800 kg de matières premières.
                                Allonger sa durée de vie de 2 à 4 ans réduit son impact environnemental de 50%.
                            </p>
                        </div>
                        <Button variant="secondary" size="lg" className="w-full md:w-auto" onClick={() => router.push('/agir')}>
                            Découvrir plus d'actions
                        </Button>
                    </div>
                </Card>
            </div>

            <div className="mt-12 text-center text-muted-foreground text-sm">
                Ce guide est conçu pour être lu à l'écran ou imprimé en mode économie d'encre.
            </div>
        </div>
    )
}
