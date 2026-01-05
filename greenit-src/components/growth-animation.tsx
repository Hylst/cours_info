"use client"

import { useEffect, useState } from "react"

export function GrowthAnimation() {
  const [year, setYear] = useState(2010)
  const [playing, setPlaying] = useState(true)

  useEffect(() => {
    if (!playing) return

    const interval = setInterval(() => {
      setYear((prev) => {
        if (prev >= 2026) {
          setPlaying(false)
          return 2026
        }
        return prev + 1
      })
    }, 400)

    return () => clearInterval(interval)
  }, [playing])

  const getValue = (year: number) => {
    const baseValue = 33.8
    const growth = 1.06
    return (baseValue * Math.pow(growth, year - 2010)).toFixed(1)
  }

  // Linear scale calculation (0-100 Mt map to 250-50 px)
  // Distance = 200px for 100 Mt => 1 Mt = 2px
  const currentVal = Number.parseFloat(getValue(year))
  const rectHeight = currentVal * 2
  const rectY = 250 - rectHeight

  return (
    <div className="w-full rounded-3xl bg-slate-50 dark:bg-slate-900/50 p-6 lg:p-10 border-2 border-slate-100 dark:border-slate-800">
      <h3 className="mb-8 text-center text-xl lg:text-2xl font-bold text-slate-900 dark:text-slate-100 italic">
        Croissance des e-déchets mondiaux
      </h3>

      <div className="relative mx-auto max-w-[500px] w-full aspect-[4/3]">
        <svg viewBox="0 0 400 300" className="w-full h-full overflow-visible" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="barGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--primary, #ef4444)" />
              <stop offset="100%" stopColor="#dc2626" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Grid lines */}
          {[0, 25, 50, 75, 100].map((val) => (
            <g key={val}>
              <line
                x1="50"
                y1={250 - val * 2}
                x2="350"
                y2={250 - val * 2}
                stroke="var(--border)"
                strokeWidth="1"
                strokeDasharray="4 4"
                opacity="0.3"
              />
              <text
                x="40"
                y={255 - val * 2}
                textAnchor="end"
                fontSize="12"
                className="fill-slate-500 font-medium"
              >
                {val} Mt
              </text>
            </g>
          ))}

          {/* Axes */}
          <line x1="50" y1="250" x2="355" y2="250" className="stroke-slate-400" strokeWidth="2" strokeLinecap="round" />
          <line x1="50" y1="50" x2="50" y2="255" className="stroke-slate-400" strokeWidth="2" strokeLinecap="round" />

          {/* Animated bar */}
          <rect
            x="125"
            y={rectY}
            width="150"
            height={rectHeight}
            fill="url(#barGradient)"
            rx="8"
            className="transition-all duration-300 ease-out"
            filter="url(#glow)"
          />

          {/* Value label with background */}
          <g className="transition-all duration-300 ease-out" style={{ transform: `translateY(${rectY}px)` }}>
            <rect
              x="160" y="-35" width="80" height="28" rx="6"
              className="fill-white dark:fill-slate-800 stroke-red-500"
              strokeWidth="1.5"
            />
            <text
              x="200"
              y="-16"
              textAnchor="middle"
              className="text-sm font-bold fill-red-600 dark:fill-red-400"
            >
              {getValue(year)} Mt
            </text>
          </g>

          {/* Year label */}
          <text
            x="200"
            y="285"
            textAnchor="middle"
            className="text-3xl font-black fill-slate-800 dark:fill-slate-100"
          >
            {year}
          </text>
        </svg>
      </div>

      <div className="mt-8 flex justify-center gap-4">
        <button
          onClick={() => {
            setYear(2010)
            setPlaying(true)
          }}
          className="rounded-full bg-red-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-red-500/30 hover:bg-red-700 hover:scale-105 active:scale-95 transition-all"
        >
          Rejouer
        </button>
        <button
          onClick={() => setPlaying(!playing)}
          className="rounded-full border-2 border-red-600 px-6 py-2.5 text-sm font-bold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 active:scale-95 transition-all"
        >
          {playing ? "Pause" : "Continuer"}
        </button>
      </div>
    </div>
  )
}
