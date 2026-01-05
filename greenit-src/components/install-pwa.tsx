"use client"

import { useState, useEffect } from "react"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function InstallPWA() {
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handler = (e: any) => {
            // Prevent Chrome 67 and earlier from automatically showing the prompt
            e.preventDefault()
            // Stash the event so it can be triggered later.
            setDeferredPrompt(e)
            setIsVisible(true)
        }

        window.addEventListener("beforeinstallprompt", handler)

        return () => {
            window.removeEventListener("beforeinstallprompt", handler)
        }
    }, [])

    const handleInstallClick = async () => {
        if (!deferredPrompt) return

        // Show the install prompt
        deferredPrompt.prompt()

        // Wait for the user to respond to the prompt
        const { outcome } = await deferredPrompt.userChoice

        if (outcome === "accepted") {
            console.log("User accepted the PWA install prompt")
        } else {
            console.log("User dismissed the PWA install prompt")
        }

        // Clear the deferred prompt so it can be garbage collected
        setDeferredPrompt(null)
        setIsVisible(false)
    }

    if (!isVisible) return null

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={handleInstallClick}
            className="hidden items-center gap-2 text-emerald-700 hover:bg-emerald-50 md:flex dark:text-emerald-400 dark:hover:bg-emerald-900/20"
        >
            <Download className="h-4 w-4" />
            <span>Installer l'app</span>
        </Button>
    )
}
