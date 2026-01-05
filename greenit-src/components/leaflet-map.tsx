"use client"

import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix Leaflet marker icons in Next.js - use local files
const fixLeafletIcons = () => {
    // @ts-ignore
    delete L.Icon.Default.prototype._getIconUrl
    L.Icon.Default.mergeOptions({
        iconRetinaUrl: '/images/leaflet/marker-icon-2x.png',
        iconUrl: '/images/leaflet/marker-icon.png',
        shadowUrl: '/images/leaflet/marker-shadow.png',
    })
}

interface Point {
    city: string
    lat: number
    lng: number
    points?: number
}

interface LeafletMapProps {
    points: Point[]
    center?: [number, number]
    zoom?: number
}

// Component to handle map center changes
function ChangeView({ center, zoom }: { center: [number, number], zoom: number }) {
    const map = useMap()
    map.setView(center, zoom)
    return null
}

export default function LeafletMap({ points, center = [46.603354, 1.888334], zoom = 5.5 }: LeafletMapProps) {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
        fixLeafletIcons()
    }, [])

    if (!isMounted) {
        return (
            <div className="flex h-full min-h-[400px] items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800">
                <p className="text-slate-500">Chargement de la carte...</p>
            </div>
        )
    }

    return (
        <div className="h-full min-h-[400px] w-full overflow-hidden rounded-xl border-2 border-slate-200 dark:border-slate-800">
            <MapContainer
                center={center}
                zoom={zoom}
                scrollWheelZoom={false}
                className="h-full w-full"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <ChangeView center={center} zoom={zoom} />
                {points.map((point, index) => (
                    <Marker key={`${point.city}-${index}`} position={[point.lat, point.lng]}>
                        <Popup>
                            <div className="text-center font-sans">
                                <strong className="text-slate-900">{point.city}</strong>
                                {point.points && (
                                    <p className="m-0 mt-1 text-sm text-emerald-700">
                                        {point.points} points de collecte
                                    </p>
                                )}
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    )
}
