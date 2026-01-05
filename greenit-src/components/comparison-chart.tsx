"use client"

import { Card } from "@/components/ui/card"

interface ComparisonItem {
  label: string
  value: number
  color: string
  icon?: any
  description?: string
}

interface ComparisonChartProps {
  title: string
  subtitle?: string
  items: ComparisonItem[]
  unit: string
  maxValue?: number
}

export function ComparisonChart({ title, subtitle, items, unit, maxValue }: ComparisonChartProps) {
  const max = maxValue || Math.max(...items.map((item) => item.value))

  return (
    <Card className="border-2 border-slate-200 p-6 lg:p-8">
      <div className="mb-6">
        <h3 className="mb-2 text-2xl font-bold text-slate-900">{title}</h3>
        {subtitle && <p className="text-slate-600">{subtitle}</p>}
      </div>

      <div className="space-y-4">
        {items.map((item, index) => {
          const percentage = (item.value / max) * 100
          const Icon = item.icon

          return (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {Icon && <Icon className="h-5 w-5 text-slate-600" />}
                  <span className="font-semibold text-slate-900">{item.label}</span>
                </div>
                <span className="text-lg font-bold text-slate-900">
                  {item.value} {unit}
                </span>
              </div>
              <div className="h-8 w-full overflow-hidden rounded-lg bg-slate-100">
                <div
                  className="flex h-full items-center justify-end rounded-lg px-3 text-sm font-semibold text-white transition-all"
                  style={{
                    width: `${percentage}%`,
                    backgroundColor: item.color,
                  }}
                >
                  {percentage > 20 && `${Math.round(percentage)}%`}
                </div>
              </div>
              {item.description && <p className="text-sm text-slate-600">{item.description}</p>}
            </div>
          )
        })}
      </div>
    </Card>
  )
}
