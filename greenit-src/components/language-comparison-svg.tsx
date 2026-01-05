"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

const languages = [
  { name: "C", energy: 1.0, color: "#A8B9CC", description: "Le plus efficace" },
  { name: "Rust", energy: 1.03, color: "#CE412B", description: "Moderne et sûr" },
  { name: "C++", energy: 1.34, color: "#00599C", description: "Performance élevée" },
  { name: "Go", energy: 2.83, color: "#00ADD8", description: "Concurrent natif" },
  { name: "Java", energy: 1.98, color: "#ED8B00", description: "Universel" },
  { name: "JavaScript", energy: 4.45, color: "#F7DF1E", description: "Langage du web" },
  { name: "TypeScript", energy: 4.48, color: "#3178C6", description: "JS avec types" },
  { name: "PHP", energy: 29.3, color: "#777BB4", description: "Serveur web" },
  { name: "Python", energy: 75.88, color: "#3776AB", description: "Polyvalent" },
  { name: "Ruby", energy: 69.91, color: "#CC342D", description: "Expressif" },
]

export function LanguageComparisonSVG() {
  const [hoveredLang, setHoveredLang] = useState<string | null>(null)
  const maxEnergy = Math.max(...languages.map((l) => l.energy))

  return (
    <Card className="p-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Comparaison énergétique des langages
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Consommation énergétique relative (base 1.0 = C) - Source: Energy Efficiency across Programming Languages 2025
        </p>
      </div>

      <svg
        viewBox="0 0 800 500"
        className="w-full h-auto"
        role="img"
        aria-label="Graphique de comparaison énergétique des langages de programmation"
      >
        {/* Grille de fond */}
        <defs>
          <pattern id="grid" width="80" height="40" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="800" height="400" fill="url(#grid)" />

        {/* Axes */}
        <line x1="80" y1="380" x2="780" y2="380" stroke="#374151" strokeWidth="2" />
        <line x1="80" y1="20" x2="80" y2="380" stroke="#374151" strokeWidth="2" />

        {/* Labels Y */}
        {[0, 20, 40, 60, 80].map((val) => (
          <g key={val}>
            <line x1="75" y1={380 - val * 4.5} x2="80" y2={380 - val * 4.5} stroke="#374151" strokeWidth="1" />
            <text x="65" y={385 - val * 4.5} textAnchor="end" fontSize="12" fill="#6b7280">
              {val}x
            </text>
          </g>
        ))}

        {/* Barres */}
        {languages.map((lang, i) => {
          const x = 110 + i * 65
          const barHeight = Math.min((lang.energy / maxEnergy) * 340, 360)
          const y = 380 - barHeight
          const isHovered = hoveredLang === lang.name

          return (
            <g
              key={lang.name}
              onMouseEnter={() => setHoveredLang(lang.name)}
              onMouseLeave={() => setHoveredLang(null)}
              className="cursor-pointer transition-all duration-300"
            >
              {/* Barre */}
              <rect
                x={x}
                y={y}
                width="50"
                height={barHeight}
                fill={lang.color}
                opacity={isHovered || !hoveredLang ? 0.9 : 0.4}
                rx="4"
                className="transition-all duration-300"
              />

              {/* Valeur */}
              <text
                x={x + 25}
                y={y - 8}
                textAnchor="middle"
                fontSize="14"
                fontWeight="600"
                fill="#374151"
                opacity={isHovered || !hoveredLang ? 1 : 0.5}
              >
                {lang.energy}x
              </text>

              {/* Nom du langage */}
              <text
                x={x + 25}
                y={400}
                textAnchor="middle"
                fontSize="13"
                fontWeight={isHovered ? "700" : "500"}
                fill="#1f2937"
              >
                {lang.name}
              </text>

              {/* Tooltip */}
              {isHovered && (
                <g>
                  <rect x={x - 30} y={y - 50} width="110" height="35" fill="#1f2937" rx="6" opacity="0.95" />
                  <text x={x + 25} y={y - 33} textAnchor="middle" fontSize="11" fill="white" fontWeight="600">
                    {lang.description}
                  </text>
                  <text x={x + 25} y={y - 20} textAnchor="middle" fontSize="10" fill="#d1d5db">
                    {lang.energy}x plus d'énergie que C
                  </text>
                </g>
              )}
            </g>
          )
        })}

        {/* Légende */}
        <text x="400" y="450" textAnchor="middle" fontSize="14" fill="#6b7280" fontWeight="500">
          Langages de programmation
        </text>
      </svg>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3 text-xs">
        <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
          <div className="font-semibold text-green-800 dark:text-green-300 mb-1">Très efficaces (1-3x)</div>
          <div className="text-green-700 dark:text-green-400">C, Rust, C++, Java, Go</div>
        </div>
        <div className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-lg">
          <div className="font-semibold text-yellow-800 dark:text-yellow-300 mb-1">Moyens (3-10x)</div>
          <div className="text-yellow-700 dark:text-yellow-400">JavaScript, TypeScript</div>
        </div>
        <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-lg">
          <div className="font-semibold text-red-800 dark:text-red-300 mb-1">Gourmands (20x+)</div>
          <div className="text-red-700 dark:text-red-400">PHP, Python, Ruby</div>
        </div>
      </div>
    </Card>
  )
}
