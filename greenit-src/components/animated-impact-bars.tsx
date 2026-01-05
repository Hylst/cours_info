"use client"

import { useEffect, useState } from "react"

interface ImpactData {
  label: string
  value: number
  color: string
  icon: string
}

export function AnimatedImpactBars() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
  }, [])

  const impacts: ImpactData[] = [
    { label: "Extraction", value: 15, color: "#f59e0b", icon: "⛏️" },
    { label: "Fabrication", value: 60, color: "#64748b", icon: "🏭" },
    { label: "Transport", value: 5, color: "#3b82f6", icon: "🚢" },
    { label: "Usage", value: 18, color: "#10b981", icon: "📱" },
    { label: "Recyclage", value: 2, color: "#14b8a6", icon: "♻️" },
  ]

  return (
    <div className="w-full rounded-2xl bg-white p-8 shadow-lg">
      <h3 className="mb-8 text-center text-2xl font-bold text-slate-900">
        Répartition de l'empreinte carbone par phase
      </h3>

      <div className="space-y-6">
        {impacts.map((impact, index) => (
          <div key={impact.label} className="flex items-center gap-4">
            <div className="flex w-32 items-center gap-2">
              <span className="text-2xl">{impact.icon}</span>
              <span className="text-sm font-medium text-slate-700">{impact.label}</span>
            </div>

            <div className="relative flex-1">
              <div className="h-12 overflow-hidden rounded-xl bg-slate-100">
                <div
                  className="flex h-full items-center justify-end px-4 transition-all duration-1000 ease-out"
                  style={{
                    width: animate ? `${impact.value}%` : "0%",
                    backgroundColor: impact.color,
                    transitionDelay: `${index * 200}ms`,
                  }}
                >
                  <span className="text-lg font-bold text-white">{impact.value}%</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl bg-emerald-50 p-4 text-center">
        <p className="text-sm text-slate-700">
          <span className="font-bold">Point clé :</span> La fabrication concentre 60% de l'impact total
        </p>
      </div>
    </div>
  )
}
