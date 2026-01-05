"use client"

import { Card } from "@/components/ui/card"

interface ScaleComparisonProps {
  type: "co2" | "water" | "energy" | "distance"
  value: number
  unit: string
  comparisons: {
    icon: any
    label: string
    equivalent: string
    description: string
  }[]
}

export function ScaleComparison({ type, value, unit, comparisons }: ScaleComparisonProps) {
  const getColor = () => {
    switch (type) {
      case "co2":
        return "emerald"
      case "water":
        return "blue"
      case "energy":
        return "amber"
      case "distance":
        return "teal"
      default:
        return "slate"
    }
  }

  const color = getColor()

  return (
    <Card className="border-2 border-slate-200 p-6 lg:p-8">
      <div className="mb-6 text-center">
        <div className={`mb-2 text-4xl font-bold text-${color}-700`}>
          {value} {unit}
        </div>
        <p className="text-slate-600">C'est l'équivalent de...</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {comparisons.map((comparison, index) => {
          const Icon = comparison.icon
          return (
            <div key={index} className={`rounded-xl bg-${color}-50 p-4`}>
              <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-${color}-100`}>
                <Icon className={`h-6 w-6 text-${color}-700`} />
              </div>
              <div className={`mb-2 text-xl font-bold text-${color}-900`}>{comparison.equivalent}</div>
              <div className="mb-1 text-sm font-semibold text-slate-900">{comparison.label}</div>
              <p className="text-xs text-slate-600">{comparison.description}</p>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
