"use client"

import { useState, useEffect } from "react"

export function AnimatedLifecycleSVG() {
  const [activePhase, setActivePhase] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % 5)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const phases = [
    { id: 0, name: "Extraction", cx: 100, cy: 200, color: "#f59e0b" },
    { id: 1, name: "Fabrication", cx: 250, cy: 100, color: "#64748b" },
    { id: 2, name: "Transport", cx: 400, cy: 150, color: "#3b82f6" },
    { id: 3, name: "Usage", cx: 500, cy: 250, color: "#10b981" },
    { id: 4, name: "Recyclage", cx: 300, cy: 300, color: "#14b8a6" },
  ]

  return (
    <div className="w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <svg viewBox="0 0 600 400" className="w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connection lines */}
        {phases.map((phase, index) => {
          const nextPhase = phases[(index + 1) % phases.length]
          const isActive = activePhase === index || activePhase === (index + 1) % phases.length
          return (
            <line
              key={`line-${index}`}
              x1={phase.cx}
              y1={phase.cy}
              x2={nextPhase.cx}
              y2={nextPhase.cy}
              stroke={isActive ? "#10b981" : "#cbd5e1"}
              strokeWidth={isActive ? "4" : "2"}
              strokeDasharray={isActive ? "0" : "5,5"}
              className="transition-all duration-500"
            />
          )
        })}

        {/* Phase circles */}
        {phases.map((phase) => {
          const isActive = activePhase === phase.id
          return (
            <g key={phase.id}>
              <circle
                cx={phase.cx}
                cy={phase.cy}
                r={isActive ? "50" : "40"}
                fill={phase.color}
                opacity={isActive ? "1" : "0.7"}
                filter={isActive ? "url(#glow)" : ""}
                className="cursor-pointer transition-all duration-500"
                onClick={() => setActivePhase(phase.id)}
              />
              <text
                x={phase.cx}
                y={phase.cy}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontSize={isActive ? "16" : "14"}
                fontWeight="bold"
                className="pointer-events-none"
              >
                {phase.name}
              </text>
            </g>
          )
        })}

        {/* Animated particle */}
        <circle r="8" fill="#10b981" filter="url(#glow)">
          <animateMotion dur="15s" repeatCount="indefinite">
            <mpath href="#circlePath" />
          </animateMotion>
        </circle>
        <path
          id="circlePath"
          d={`M ${phases[0].cx},${phases[0].cy} 
              L ${phases[1].cx},${phases[1].cy}
              L ${phases[2].cx},${phases[2].cy}
              L ${phases[3].cx},${phases[3].cy}
              L ${phases[4].cx},${phases[4].cy} Z`}
          fill="none"
        />
      </svg>

      <div className="mt-6 text-center">
        <p className="text-sm font-medium text-slate-700">
          Phase actuelle : <span className="font-bold text-emerald-600">{phases[activePhase].name}</span>
        </p>
      </div>
    </div>
  )
}
