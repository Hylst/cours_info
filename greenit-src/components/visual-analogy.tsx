"use client"

import { Card } from "@/components/ui/card"
import { Info } from "lucide-react"

interface VisualAnalogyProps {
  title: string
  description: string
  visual: {
    items: {
      icon: string
      count: number
      label: string
    }[]
  }
  color?: "emerald" | "blue" | "teal" | "amber"
}

export function VisualAnalogy({ title, description, visual, color = "emerald" }: VisualAnalogyProps) {
  return (
    <Card className={`border-2 border-${color}-200 bg-${color}-50 p-6 lg:p-8`}>
      <div className="mb-4 flex items-start gap-3">
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-${color}-600`}>
          <Info className="h-5 w-5 text-white" />
        </div>
        <div>
          <h3 className={`mb-2 text-xl font-bold text-${color}-900`}>{title}</h3>
          <p className="text-slate-700">{description}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
        {visual.items.map((item, index) => (
          <div key={index} className="text-center">
            <div className="mb-2 flex items-center justify-center gap-1">
              {Array.from({ length: Math.min(item.count, 10) }).map((_, i) => (
                <span key={i} className="text-3xl">
                  {item.icon}
                </span>
              ))}
              {item.count > 10 && <span className={`text-2xl font-bold text-${color}-700`}>×{item.count}</span>}
            </div>
            <p className="text-sm font-medium text-slate-700">{item.label}</p>
          </div>
        ))}
      </div>
    </Card>
  )
}
