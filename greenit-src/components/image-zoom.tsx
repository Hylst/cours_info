"use client"

import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Image from "next/image"
import { ZoomIn } from "lucide-react"
import { cn } from "@/lib/utils"

interface ImageZoomProps {
    src: string
    alt: string
    className?: string
    containerClassName?: string
    priority?: boolean
    sizes?: string
    quality?: number
}

export function ImageZoom({
    src,
    alt,
    className,
    containerClassName,
    priority,
    sizes,
    quality = 90
}: ImageZoomProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className={cn("group relative cursor-zoom-in overflow-hidden", containerClassName)}>
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        priority={priority}
                        sizes={sizes}
                        quality={quality}
                        className={cn("object-contain transition-transform duration-300 group-hover:scale-[1.02]", className)}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/20">
                        <div className="rounded-full bg-white/10 p-3 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 group-hover:scale-110">
                            <ZoomIn className="h-6 w-6 text-white" />
                        </div>
                        <div className="absolute bottom-4 right-4 rounded-lg bg-black/50 px-3 py-1 text-[10px] font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            Cliquer pour agrandir
                        </div>
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent className="max-w-[95vw] sm:max-w-[90vw] lg:max-w-6xl xl:max-w-7xl border-none bg-transparent p-0 shadow-none">
                <DialogTitle className="sr-only">Agrandissement de l'image : {alt}</DialogTitle>
                <DialogDescription className="sr-only">Une vue détaillée de l'image : {alt}</DialogDescription>
                <div className="relative flex h-[85vh] w-full items-center justify-center overflow-hidden rounded-xl bg-black/10 backdrop-blur-xl">
                    <img
                        src={src}
                        alt={alt}
                        className="h-auto max-h-full w-auto max-w-full rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
                    />
                </div>
            </DialogContent>
        </Dialog>
    )
}
