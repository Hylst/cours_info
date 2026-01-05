"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, Printer, Share2, CheckCircle2 } from "lucide-react"
import Link from "next/link"

interface SheetContentProps {
    sheet: any & { id?: string }
}

export function SheetContent({ sheet }: SheetContentProps) {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
            <article className="px-6 py-12">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-8 flex items-center justify-between">
                        <Link href="/fiches-pratiques">
                            <Button variant="ghost" size="sm">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Retour aux fiches
                            </Button>
                        </Link>
                        <Button variant="outline" size="sm" onClick={() => window.print()}>
                            <Printer className="mr-2 h-4 w-4" />
                            Imprimer / PDF
                        </Button>
                    </div>
                </div>

                <Card className="mb-8 border-2 border-slate-200 p-8 dark:border-slate-700 dark:bg-slate-800">
                    <div className="mb-4 flex items-center gap-3">
                        <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                            {sheet.target}
                        </Badge>
                        <span className="text-sm text-slate-600 dark:text-slate-400">{sheet.duration}</span>
                    </div>
                    <h1 className="mb-4 text-balance text-3xl font-bold text-slate-900 lg:text-4xl dark:text-slate-100">
                        {sheet.title}
                    </h1>
                    <p className="mb-6 text-pretty text-xl text-slate-600 dark:text-slate-300">{sheet.subtitle}</p>
                    <div className="flex items-center gap-2 rounded-lg bg-emerald-50 p-4 dark:bg-emerald-950">
                        <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
                        <p className="font-semibold text-emerald-800 dark:text-emerald-300">Impact : {sheet.impact}</p>
                    </div>
                </Card>

                <div className="space-y-8">
                    {sheet.sections.map((section: any, index: number) => (
                        <Card
                            key={index}
                            className="border-2 border-slate-200 p-6 dark:border-slate-700 dark:bg-slate-800 print:break-inside-avoid"
                        >
                            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">{section.title}</h2>
                            <p className="mb-4 text-slate-700 dark:text-slate-300">{section.content}</p>
                            <div className="space-y-2">
                                <h3 className="font-semibold text-slate-900 dark:text-slate-100">Points clés :</h3>
                                <ul className="space-y-2">
                                    {section.tips.map((tip: string, tipIndex: number) => (
                                        <li key={tipIndex} className="flex items-start gap-3">
                                            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
                                            <span className="text-slate-700 dark:text-slate-300">{tip}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Card>
                    ))}
                </div>

                <Card className="mt-8 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-teal-50 p-6 dark:border-blue-800 dark:from-blue-950 dark:to-teal-950">
                    <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-slate-100">Ressources complémentaires</h3>
                    <ul className="space-y-2">
                        {sheet.resources.map((resource: string, index: number) => (
                            <li key={index} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                                <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                                {resource.includes("http") ? (
                                    <a href={resource} className="hover:underline" target="_blank" rel="noopener noreferrer">
                                        {resource}
                                    </a>
                                ) : resource.includes("/") ? (
                                    <Link href={resource.split(" : ")[1]} className="hover:underline">
                                        {resource}
                                    </Link>
                                ) : (
                                    resource
                                )}
                            </li>
                        ))}
                    </ul>
                </Card>

                <div className="mt-8 flex items-center justify-center gap-4">
                    <Button variant="outline" size="lg" onClick={() => window.print()}>
                        <Printer className="mr-2 h-5 w-5" />
                        Imprimer cette fiche en PDF
                    </Button>
                    <Button variant="outline" size="lg">
                        <Share2 className="mr-2 h-5 w-5" />
                        Partager
                    </Button>
                </div>
            </article >

            <style jsx global>{`
        @media print {
          nav,
          footer,
          button {
            display: none !important;
          }
          .print\\:break-inside-avoid {
            break-inside: avoid;
          }
        }
      `}</style>
        </div >
    )
}
