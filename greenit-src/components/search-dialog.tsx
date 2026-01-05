"use client"

import * as React from "react"
import { Calculator, Calendar, FileText, Home, Info, Laptop, Leaf, Settings, User } from "lucide-react"
import { useRouter } from "next/navigation"

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"

interface SearchDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
    const router = useRouter()

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                onOpenChange((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [onOpenChange])

    const runCommand = React.useCallback((command: () => unknown) => {
        onOpenChange(false)
        command()
    }, [onOpenChange])

    return (
        <CommandDialog open={open} onOpenChange={onOpenChange}>
            <CommandInput placeholder="Rechercher une page ou une fonctionnalité..." />
            <CommandList>
                <CommandEmpty>Aucun résultat trouvé.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                    <CommandItem onSelect={() => runCommand(() => router.push("/comprendre"))}>
                        <Leaf className="mr-2 h-4 w-4" />
                        <span>Comprendre le Green IT</span>
                    </CommandItem>
                    <CommandItem onSelect={() => runCommand(() => router.push("/agir"))}>
                        <User className="mr-2 h-4 w-4" />
                        <span>Comment agir</span>
                    </CommandItem>
                    <CommandItem onSelect={() => runCommand(() => router.push("/outils"))}>
                        <Calculator className="mr-2 h-4 w-4" />
                        <span>Outils & Calculatrices</span>
                    </CommandItem>
                </CommandGroup>
                <CommandGroup heading="Pages">
                    <CommandItem onSelect={() => runCommand(() => router.push("/"))}>
                        <Home className="mr-2 h-4 w-4" />
                        <span>Accueil</span>
                    </CommandItem>
                    <CommandItem onSelect={() => runCommand(() => router.push("/chiffres"))}>
                        <Calculator className="mr-2 h-4 w-4" />
                        <span>Chiffres clés</span>
                    </CommandItem>
                    <CommandItem onSelect={() => runCommand(() => router.push("/problematiques"))}>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Problématiques</span>
                    </CommandItem>
                    <CommandItem onSelect={() => runCommand(() => router.push("/datacenters"))}>
                        <Laptop className="mr-2 h-4 w-4" />
                        <span>Datacenters</span>
                    </CommandItem>
                    <CommandItem onSelect={() => runCommand(() => router.push("/fiches-pratiques"))}>
                        <FileText className="mr-2 h-4 w-4" />
                        <span>Fiches pratiques</span>
                    </CommandItem>
                    <CommandItem onSelect={() => runCommand(() => router.push("/actualites"))}>
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>Actualités</span>
                    </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Paramètres">
                    <CommandItem onSelect={() => runCommand(() => router.push("/a-propos"))}>
                        <Info className="mr-2 h-4 w-4" />
                        <span>À propos</span>
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    )
}
