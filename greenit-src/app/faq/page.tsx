"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, Search, HelpCircle } from "lucide-react"
import Link from "next/link"

const faqCategories = [
  {
    category: "Général",
    color: "emerald",
    questions: [
      {
        q: "Qu'est-ce que le Green IT ?",
        a: "Le Green IT (ou numérique responsable) désigne l'ensemble des pratiques visant à réduire l'empreinte environnementale du numérique. Cela inclut la conception, l'utilisation et la fin de vie des équipements électroniques (ordinateurs, smartphones, serveurs...) et des services numériques (sites web, applications, cloud...).",
      },
      {
        q: "Pourquoi le numérique pollue-t-il ?",
        a: "L'impact environnemental du numérique provient de trois sources principales : 1) La fabrication des équipements (extraction de matières premières, production, transport) qui représente 75% de l'impact, 2) L'utilisation (consommation d'électricité), 3) La fin de vie (déchets électroniques difficiles à recycler). Un smartphone nécessite par exemple 70 kg de matières premières et émet 50 kg de CO₂ sur son cycle de vie.",
      },
      {
        q: "Quel est l'impact du numérique en France ?",
        a: "En France, le numérique représente environ 2,5% des émissions de gaz à effet de serre nationales (17 millions de tonnes CO₂eq en 2023). On compte plus de 60 millions de smartphones, 50 millions d'ordinateurs et 26 millions de téléviseurs connectés. Nous produisons 1,5 million de tonnes de déchets électroniques par an, dont seulement 40-45% sont recyclés correctement.",
      },
      {
        q: "Peut-on vraiment faire une différence individuellement ?",
        a: "Oui, absolument ! Garder son smartphone 4 ans au lieu de 2 divise son impact par 2. À l'échelle nationale, si tous les Français gardaient leur équipement 1 an de plus, on éviterait l'émission de 2,7 millions de tonnes de CO₂ par an (équivalent de 1,5 million de voitures). Chaque geste compte, surtout multiplié par des millions d'utilisateurs.",
      },
    ],
  },
  {
    category: "Achat & Équipement",
    color: "blue",
    questions: [
      {
        q: "Faut-il acheter neuf ou reconditionné ?",
        a: "Le reconditionné est fortement recommandé : un appareil reconditionné a un impact environnemental réduit de 75% par rapport au neuf. En France, le marché du reconditionné représente 2,5 milliards d'euros en 2024 avec plus de 2,5 millions d'appareils vendus. Assurez-vous de choisir un vendeur certifié offrant au minimum 6 mois de garantie.",
      },
      {
        q: "Comment choisir un appareil durable ?",
        a: "Vérifiez l'indice de réparabilité (obligatoire depuis 2021) et visez au moins 7/10. Privilégiez les marques offrant des pièces détachées et un SAV de qualité. Choisissez des appareils modulaires (batterie remplaçable) et avec un support logiciel longue durée (5+ ans). Évitez le suréquipement : achetez selon vos besoins réels, pas les dernières fonctionnalités.",
      },
      {
        q: "Qu'est-ce que l'indice de réparabilité ?",
        a: "C'est une note sur 10 obligatoire en France depuis janvier 2021 pour les smartphones, ordinateurs, téléviseurs, lave-linge et tondeuses à gazon. Il évalue 5 critères : documentation technique, démontabilité, disponibilité des pièces détachées, prix des pièces et critères spécifiques au produit. Un indice élevé (>7/10) indique un appareil facile à réparer.",
      },
      {
        q: "Combien de temps garder ses appareils ?",
        a: "Objectif minimum : 5 ans pour un smartphone, 7 ans pour un ordinateur, 10 ans pour une TV. Actuellement, la moyenne française est de 2,3 ans pour un smartphone. Chaque année supplémentaire réduit l'impact de 15-20%. La fabrication représentant 75% de l'impact, allonger la durée d'usage est le geste le plus efficace.",
      },
    ],
  },
  {
    category: "Usage & Quotidien",
    color: "teal",
    questions: [
      {
        q: "Comment réduire la consommation électrique de mes appareils ?",
        a: "Actions principales : 1) Éteindre complètement (pas juste en veille) la nuit et quand inutilisés, 2) Débrancher box internet la nuit (économie de 65 kWh/an), 3) Régler luminosité à 50% max, 4) Activer mode économie d'énergie, 5) Fermer applications en arrière-plan, 6) Privilégier Wi-Fi à 4G/5G (20x moins énergivore), 7) Utiliser multiprise avec interrupteur.",
      },
      {
        q: "Le streaming vidéo pollue-t-il vraiment ?",
        a: "Oui, de manière significative. 1h de streaming en 4K consomme 6,5 Go de données et émet environ 370g de CO₂. En qualité standard (720p), c'est seulement 50g de CO₂. En France, le streaming vidéo représente 60% du trafic internet. Actions : privilégier 720p, télécharger les contenus regardés plusieurs fois, désactiver lecture automatique, éviter le streaming sur mobile en 4G/5G.",
      },
      {
        q: "Les emails polluent-ils vraiment ?",
        a: "L'impact individuel d'un email est faible (4-50g CO₂ selon pièces jointes), mais multiplié par des milliards d'emails quotidiens, ça compte. En France, l'envoi de 33 emails/jour/personne représente environ 180 kg CO₂/an. Bonnes pratiques : supprimer emails avec grosses pièces jointes, désabonner des newsletters inutiles, compresser les pièces jointes, nettoyer boîte mail régulièrement.",
      },
      {
        q: "Faut-il supprimer ses données dans le cloud ?",
        a: "Oui ! Chaque Go stocké dans le cloud émet environ 15g de CO₂ par an (alimentation serveurs, refroidissement, sauvegardes). Le Français moyen stocke 50 Go de données inutiles. Actions : trier photos/vidéos en double, vider dossier Téléchargements, supprimer anciens fichiers, désactiver sauvegarde automatique de tout.",
      },
    ],
  },
  {
    category: "Réparation & Recyclage",
    color: "orange",
    questions: [
      {
        q: "Où faire réparer mes appareils ?",
        a: "Plusieurs options : 1) SAV du fabricant ou revendeur agréé, 2) Réparateurs indépendants labellisés, 3) Repair Cafés (gratuits, entraide), 4) Ressourceries et structures de l'économie sociale et solidaire (Emmaüs, Envie, etc.). Depuis 2021, un bonus réparation existe en France (jusqu'à 45€ remboursés). Consultez la carte des réparateurs sur ecosystem.eco.",
      },
      {
        q: "Vaut-il mieux réparer ou racheter ?",
        a: "Réparer est presque toujours préférable écologiquement. Exemple smartphone : remplacement batterie (60-80€) vs achat neuf (50 kg CO₂). Même un appareil réparé à 50% de son prix initial reste plus écologique que le neuf. Seule exception : si réparation très coûteuse (>70% prix neuf) et appareil très ancien (>8 ans) avec mauvaise efficacité énergétique.",
      },
      {
        q: "Comment recycler mes vieux appareils ?",
        a: "Ne JAMAIS jeter à la poubelle ! Options : 1) Reprise magasin (obligation 1 pour 1 : ils reprennent gratuitement l'ancien), 2) Points de collecte (déchetteries, magasins, mairies), 3) Bornes Ecosystem/Écologic, 4) Don à associations (Emmaüs, Envie) si fonctionnel. Effacez vos données avant. En France, objectif 65% de taux de collecte en 2025.",
      },
      {
        q: "Que deviennent les appareils recyclés ?",
        a: "Les DEEE (Déchets d'Équipements Électriques et Électroniques) sont démontés pour récupérer : métaux précieux (or, argent, cuivre), plastiques, verres. Taux de recyclage : 85% pour smartphones en Europe. Problème : certains composants (terres rares, batteries lithium) difficiles à recycler. C'est pourquoi prolonger la durée de vie et réemployer sont prioritaires sur le recyclage.",
      },
    ],
  },
  {
    category: "Développement & Professionnel",
    color: "violet",
    questions: [
      {
        q: "Qu'est-ce que l'écoconception web ?",
        a: "L'écoconception web consiste à créer des sites et applications numériques en minimisant leur impact environnemental. Principes : réduire le poids des pages (idéal <500 Ko), optimiser images (WebP, AVIF), minimiser JavaScript, lazy loading, choisir hébergeur vert, optimiser requêtes base de données. Un site éco-conçu est aussi plus rapide et accessible.",
      },
      {
        q: "Comment mesurer l'impact environnemental d'un site web ?",
        a: "Outils disponibles : EcoIndex (note A à G), Website Carbon Calculator, GreenFrame, Lighthouse (Google). Ils mesurent : poids page, requêtes serveur, consommation électrique estimée. Objectif : EcoIndex >B, page <1 Mo, <50 requêtes. Un site moyen émet 1,76g CO₂ par vue. Le site le plus éco-conçu peut descendre à 0,1g CO₂.",
      },
      {
        q: "Quels langages de programmation sont les plus éco-responsables ?",
        a: "Classement par efficacité énergétique : 1) C/C++/Rust (référence), 2) Java, 3) C#, 4) JavaScript/TypeScript, 5) PHP, 6) Python (57x moins efficace que C). Pour le web : préférer code natif optimisé, frameworks légers, compilation native. Attention : lisibilité et maintenabilité restent prioritaires. L'optimisation algorithmique compte plus que le langage.",
      },
      {
        q: "Comment mettre en place une stratégie Green IT en entreprise ?",
        a: "Étapes clés : 1) Mesurer empreinte actuelle (parc informatique, datacenters, usage), 2) Fixer objectifs chiffrés (réduction 30-50% sur 3 ans), 3) Nommer référent Green IT, 4) Former équipes, 5) Allonger durée de vie équipements (5-7 ans), 6) Privilégier reconditionné, 7) Optimiser datacenters (PUE <1.5), 8) Écoconception services numériques, 9) Mesurer progrès annuellement.",
      },
    ],
  },
  {
    category: "Réglementation & Politique",
    color: "indigo",
    questions: [
      {
        q: "Quelles sont les principales lois en France ?",
        a: "Lois majeures : 1) Loi AGEC (2020) : indice réparabilité, lutte obsolescence programmée, 2) Loi REEN (2021) : mesure impact numérique, écoconception services publics, sensibilisation, 3) Droit à la réparation européen (2024), 4) Indice durabilité (dès 2025). Obligations : affichage indices, disponibilité pièces 5-10 ans, mises à jour logicielles longues.",
      },
      {
        q: "Qu'est-ce que la REP (Responsabilité Élargie du Producteur) ?",
        a: "La REP impose aux fabricants et distributeurs de financer la collecte et le recyclage de leurs produits en fin de vie. En France, éco-organismes agréés : Ecosystem (grand public), Écologic (professionnels), Screlec (piles). Les fabricants paient une éco-contribution (visible sur facture) finançant le système. Objectif 2025 : 65% taux de collecte DEEE.",
      },
      {
        q: "Que prévoit le droit à la réparation européen ?",
        a: "Adopté en 2024, il impose : 1) Disponibilité pièces détachées 7-10 ans selon produits, 2) Prix raisonnables pour pièces, 3) Accès documentation technique, 4) Conception facilitant démontage, 5) Interdiction empêchements réparation (logiciels, verrouillages), 6) Allongement garantie si réparation pendant garantie. Application progressive 2024-2027.",
      },
      {
        q: "Y a-t-il des aides financières pour la réparation ?",
        a: "Oui, plusieurs dispositifs en France : 1) Bonus réparation : jusqu'à 45€ remboursés (smartphones, ordinateurs, TV), 2) Fonds réparation via éco-organismes, 3) Aides locales (certaines régions/communes), 4) Crédit d'impôt transition énergétique (dans certains cas). Consultez ecosystem.eco et longuevieauxobjets.gouv.fr pour détails et carte des bénéficiaires.",
      },
    ],
  },
]

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("Toutes")
  const [openQuestions, setOpenQuestions] = useState<string[]>([])

  const categories = ["Toutes", ...faqCategories.map((cat) => cat.category)]

  const filteredFAQ = faqCategories
    .map((cat) => ({
      ...cat,
      questions: cat.questions.filter(
        (q) =>
          (selectedCategory === "Toutes" || cat.category === selectedCategory) &&
          (q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
            q.a.toLowerCase().includes(searchTerm.toLowerCase())),
      ),
    }))
    .filter((cat) => cat.questions.length > 0)

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`
    setOpenQuestions((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]))
  }

  const totalQuestions = faqCategories.reduce((sum, cat) => sum + cat.questions.length, 0)

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 px-6 py-16 lg:py-24 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-emerald-100 p-3 dark:bg-emerald-900/30">
            <HelpCircle className="h-8 w-8 text-emerald-700 dark:text-emerald-400" />
          </div>
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl dark:text-slate-100">
            Foire aux questions
          </h1>
          <p className="text-pretty text-lg text-slate-600 lg:text-xl dark:text-slate-300">
            Toutes les réponses à vos questions sur le Green IT, le numérique responsable et l'écologie numérique.
          </p>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">{totalQuestions} questions répondues</p>
        </div>
      </section>

      <section className="px-6 py-12 lg:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <Input
                type="search"
                placeholder="Rechercher une question..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 dark:bg-slate-800 dark:border-slate-700"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className="cursor-pointer px-4 py-2"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          {filteredFAQ.length === 0 ? (
            <Card className="border-2 border-slate-200 p-12 text-center dark:border-slate-700 dark:bg-slate-800">
              <p className="text-slate-600 dark:text-slate-400">
                Aucune question trouvée pour "{searchTerm}". Essayez un autre mot-clé ou changez de catégorie.
              </p>
            </Card>
          ) : (
            <div className="space-y-8">
              {filteredFAQ.map((category, catIndex) => (
                <div key={catIndex}>
                  <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-slate-100">
                    <div className={`h-2 w-2 rounded-full bg-${category.color}-600 dark:bg-${category.color}-400`} />
                    {category.category}
                    <Badge variant="secondary" className="text-xs">
                      {category.questions.length}
                    </Badge>
                  </h2>
                  <div className="space-y-3">
                    {category.questions.map((item, qIndex) => {
                      const isOpen = openQuestions.includes(`${catIndex}-${qIndex}`)
                      return (
                        <Card
                          key={qIndex}
                          className="border-2 border-slate-200 overflow-hidden transition-all hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600"
                        >
                          <button
                            onClick={() => toggleQuestion(catIndex, qIndex)}
                            className="flex w-full items-start justify-between gap-4 p-6 text-left transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50"
                          >
                            <h3 className="flex-1 font-semibold text-slate-900 dark:text-slate-100">{item.q}</h3>
                            {isOpen ? (
                              <ChevronUp className="h-5 w-5 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
                            ) : (
                              <ChevronDown className="h-5 w-5 flex-shrink-0 text-slate-400" />
                            )}
                          </button>
                          {isOpen && (
                            <div className="border-t border-slate-200 bg-slate-50 px-6 py-4 dark:border-slate-700 dark:bg-slate-800/50">
                              <p className="text-slate-700 leading-relaxed dark:text-slate-300">{item.a}</p>
                            </div>
                          )}
                        </Card>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          <Card className="mt-12 border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-8 dark:border-emerald-800 dark:from-emerald-950 dark:to-teal-950">
            <h3 className="mb-4 text-xl font-bold text-foreground">
              Vous ne trouvez pas la réponse ?
            </h3>
            <p className="mb-6 text-muted-foreground">
              Consultez nos ressources complètes ou contactez-nous pour obtenir plus d'informations sur le numérique
              responsable.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                <Link href="/ressources">Voir les ressources</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/a-propos">Nous contacter</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
