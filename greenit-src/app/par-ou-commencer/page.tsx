"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  User,
  Building2,
  Code,
  Landmark,
  ArrowRight,
  CheckCircle2,
  Calculator,
  BookOpen,
  Wrench,
  Lightbulb,
} from "lucide-react"

export default function GettingStartedPage() {
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null)

  const profiles = [
    {
      id: "citoyen",
      icon: User,
      title: "Citoyen",
      description: "Je veux réduire mon impact numérique au quotidien",
      color: "from-emerald-500 to-teal-500",
    },
    {
      id: "developpeur",
      icon: Code,
      title: "Développeur",
      description: "Je veux coder de manière plus éco-responsable",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "entreprise",
      icon: Building2,
      title: "Entreprise",
      description: "Je veux mettre en place une stratégie Green IT",
      color: "from-amber-500 to-orange-500",
    },
    {
      id: "collectivite",
      icon: Landmark,
      title: "Collectivité",
      description: "Je veux engager ma commune dans la transition numérique",
      color: "from-purple-500 to-pink-500",
    },
  ]

  const pathways = {
    citoyen: [
      {
        step: 1,
        title: "Comprendre l'impact",
        description: "Découvrez le cycle de vie d'un smartphone et son empreinte environnementale",
        link: "/comprendre",
        icon: BookOpen,
      },
      {
        step: 2,
        title: "Calculer mon empreinte",
        description: "Évaluez votre empreinte numérique personnelle avec notre calculateur",
        link: "/outils",
        icon: Calculator,
      },
      {
        step: 3,
        title: "Agir au quotidien",
        description: "Adoptez les gestes simples pour réduire votre impact",
        link: "/agir",
        icon: CheckCircle2,
      },
      {
        step: 4,
        title: "Télécharger les fiches pratiques",
        description: "Guides PDF à conserver pour les bonnes pratiques",
        link: "/fiches-pratiques",
        icon: Wrench,
      },
    ],
    developpeur: [
      {
        step: 1,
        title: "Découvrir les enjeux",
        description: "Comprenez l'impact environnemental du développement logiciel",
        link: "/developpement",
        icon: BookOpen,
      },
      {
        step: 2,
        title: "Optimiser son code",
        description: "Apprenez les techniques d'écoconception et d'optimisation",
        link: "/developpement#optimisation",
        icon: Code,
      },
      {
        step: 3,
        title: "Choisir les bons langages",
        description: "Comparaison énergétique des langages de programmation",
        link: "/developpement#langages",
        icon: Lightbulb,
      },
      {
        step: 4,
        title: "Consulter les ressources",
        description: "Documentation, outils et bonnes pratiques",
        link: "/ressources",
        icon: BookOpen,
      },
    ],
    entreprise: [
      {
        step: 1,
        title: "Comprendre les enjeux",
        description: "Problématiques environnementales et opportunités business",
        link: "/problematiques",
        icon: BookOpen,
      },
      {
        step: 2,
        title: "Connaître la réglementation",
        description: "Obligations légales et normes Green IT en France",
        link: "/reglementation",
        icon: CheckCircle2,
      },
      {
        step: 3,
        title: "Plan d'action entreprise",
        description: "Checklist et étapes pour votre transformation Green IT",
        link: "/agir#entreprise",
        icon: Wrench,
      },
      {
        step: 4,
        title: "Cas pratiques",
        description: "Exemples concrets et retours d'expérience",
        link: "/cas-pratiques",
        icon: Lightbulb,
      },
    ],
    collectivite: [
      {
        step: 1,
        title: "Comprendre les enjeux territoriaux",
        description: "Impact du numérique sur votre territoire",
        link: "/problematiques",
        icon: BookOpen,
      },
      {
        step: 2,
        title: "Cadre réglementaire",
        description: "Lois AGEC, REEN et obligations des collectivités",
        link: "/reglementation",
        icon: CheckCircle2,
      },
      {
        step: 3,
        title: "Plan d'action collectivité",
        description: "Mettre en place une stratégie numérique responsable",
        link: "/agir#collectivite",
        icon: Wrench,
      },
      {
        step: 4,
        title: "Réseau de recyclage",
        description: "Points de collecte et partenaires locaux",
        link: "/recyclage",
        icon: Landmark,
      },
    ],
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
            <Lightbulb className="h-4 w-4" />
            Guide de démarrage
          </div>
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl dark:text-slate-100">
            Par où commencer avec le Green IT ?
          </h1>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-slate-600 dark:text-slate-300">
            Que vous soyez citoyen, développeur, entreprise ou collectivité, nous vous guidons vers les ressources
            adaptées à votre profil pour démarrer votre transition numérique responsable.
          </p>
        </div>
      </section>

      {/* Profile Selection */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-slate-900 dark:text-slate-100">
            Sélectionnez votre profil
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {profiles.map((profile) => {
              const Icon = profile.icon
              const isSelected = selectedProfile === profile.id
              return (
                <Card
                  key={profile.id}
                  className={`cursor-pointer p-6 transition-all hover:shadow-xl ${
                    isSelected
                      ? "ring-2 ring-emerald-500 shadow-lg dark:ring-emerald-400"
                      : "hover:ring-1 hover:ring-slate-300 dark:hover:ring-slate-600"
                  }`}
                  onClick={() => setSelectedProfile(profile.id)}
                >
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${profile.color}`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 font-bold text-slate-900 dark:text-slate-100">{profile.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{profile.description}</p>
                  {isSelected && (
                    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-emerald-700 dark:text-emerald-400">
                      <CheckCircle2 className="h-4 w-4" />
                      Sélectionné
                    </div>
                  )}
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Personalized Pathway */}
      {selectedProfile && (
        <section className="px-6 pb-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <h2 className="mb-3 text-3xl font-bold text-slate-900 dark:text-slate-100">
                Votre parcours personnalisé
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                Suivez ces étapes pour démarrer efficacement votre transition Green IT
              </p>
            </div>

            <div className="relative">
              {/* Vertical line connecting steps */}
              <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-emerald-200 to-teal-200 dark:from-emerald-800 dark:to-teal-800" />

              <div className="space-y-8">
                {pathways[selectedProfile as keyof typeof pathways].map((step) => {
                  const StepIcon = step.icon
                  return (
                    <div key={step.step} className="relative flex gap-6">
                      {/* Step number circle */}
                      <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 text-xl font-bold text-white shadow-lg">
                        {step.step}
                      </div>

                      {/* Step content */}
                      <Card className="flex-1 p-6 hover:shadow-lg transition-shadow dark:bg-slate-800">
                        <div className="mb-3 flex items-start justify-between">
                          <div>
                            <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-slate-100">{step.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400">{step.description}</p>
                          </div>
                          <StepIcon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <Link href={step.link}>
                          <Button className="mt-4 bg-emerald-600 hover:bg-emerald-700">
                            Commencer
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </Card>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Quick Actions */}
      <section className="bg-slate-100 px-6 py-16 dark:bg-slate-800">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-slate-900 dark:text-slate-100">
            Ou explorez directement
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="p-6 hover:shadow-lg transition-shadow dark:bg-slate-700">
              <Calculator className="mb-4 h-10 w-10 text-emerald-600 dark:text-emerald-400" />
              <h3 className="mb-2 font-bold text-slate-900 dark:text-slate-100">Outils interactifs</h3>
              <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
                Calculateurs, simulateurs et quiz pour mesurer votre impact
              </p>
              <Link href="/outils">
                <Button variant="outline" className="w-full bg-transparent">
                  Accéder aux outils
                </Button>
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow dark:bg-slate-700">
              <BookOpen className="mb-4 h-10 w-10 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-2 font-bold text-slate-900 dark:text-slate-100">Mythes vs Réalités</h3>
              <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
                Déconstruisez les idées reçues sur le numérique responsable
              </p>
              <Link href="/mythes">
                <Button variant="outline" className="w-full bg-transparent">
                  Découvrir
                </Button>
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow dark:bg-slate-700">
              <Wrench className="mb-4 h-10 w-10 text-amber-600 dark:text-amber-400" />
              <h3 className="mb-2 font-bold text-slate-900 dark:text-slate-100">Fiches pratiques</h3>
              <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
                Guides téléchargeables pour passer à l'action immédiatement
              </p>
              <Link href="/fiches-pratiques">
                <Button variant="outline" className="w-full bg-transparent">
                  Télécharger
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 p-8 text-center text-white shadow-xl">
          <h2 className="mb-4 text-2xl font-bold">Besoin d'aide pour vous lancer ?</h2>
          <p className="mb-6 text-emerald-50">
            Consultez notre FAQ ou explorez le plan du site pour trouver exactement ce que vous cherchez.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/faq">
              <Button size="lg" variant="secondary">
                Voir la FAQ
              </Button>
            </Link>
            <Link href="/sitemap-page">
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white">
                Plan du site
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
