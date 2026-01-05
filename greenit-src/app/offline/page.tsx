import { WifiOff, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function OfflinePage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-6 text-center dark:bg-slate-950">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                <WifiOff className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h1 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white lg:text-4xl">Vous êtes hors ligne</h1>
            <p className="mb-8 max-w-md text-slate-600 dark:text-slate-400">
                Pas d'inquiétude ! La plupart des ressources éducatives et des calculateurs de ce site sont accessibles sans
                connexion internet.
            </p>
            <Link href="/">
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <Home className="mr-2 h-4 w-4" />
                    Retour à l'accueil
                </Button>
            </Link>
        </div>
    )
}
