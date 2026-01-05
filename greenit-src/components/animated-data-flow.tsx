"use client"

export function AnimatedDataFlow() {
  return (
    <div className="w-full overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-teal-50 p-8">
      <svg viewBox="0 0 800 400" className="w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>

        {/* Smartphone */}
        <g>
          <rect x="50" y="150" width="100" height="180" rx="15" fill="#334155" />
          <rect x="60" y="165" width="80" height="120" rx="5" fill="#64748b" />
          <circle cx="100" cy="310" r="12" fill="#475569" />
          <text x="100" y="360" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="600">
            Smartphone
          </text>
        </g>

        {/* Data waves */}
        {[0, 1, 2, 3].map((i) => (
          <path
            key={i}
            d="M 150,200 Q 300,150 450,200 T 750,200"
            stroke="#3b82f6"
            strokeWidth="3"
            fill="none"
            opacity="0.6"
          >
            <animate
              attributeName="stroke-dasharray"
              from="0,1000"
              to="1000,0"
              dur="3s"
              begin={`${i * 0.5}s`}
              repeatCount="indefinite"
            />
            <animate attributeName="opacity" values="0;0.8;0" dur="3s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
          </path>
        ))}

        {/* Datacenter */}
        <g>
          <rect x="650" y="100" width="120" height="200" rx="10" fill="#334155" />
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={i}>
              <rect x="665" y={120 + i * 35} width="90" height="25" rx="3" fill="#10b981" opacity="0.8" />
              <circle cx="685" cy={132 + i * 35} r="3" fill="#22c55e">
                <animate
                  attributeName="opacity"
                  values="1;0.3;1"
                  dur="2s"
                  begin={`${i * 0.3}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          ))}
          <text x="710" y="330" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="600">
            Datacenter
          </text>
        </g>

        {/* CO2 emissions */}
        {[0, 1, 2].map((i) => (
          <g key={i} opacity="0">
            <circle cx="710" cy="80" r="8" fill="#64748b" />
            <animate attributeName="opacity" values="0;0.6;0" dur="4s" begin={`${i * 1.3}s`} repeatCount="indefinite" />
            <animateTransform
              attributeName="transform"
              type="translate"
              from="0,0"
              to="0,-60"
              dur="4s"
              begin={`${i * 1.3}s`}
              repeatCount="indefinite"
            />
          </g>
        ))}

        <text x="400" y="50" textAnchor="middle" fill="#334155" fontSize="18" fontWeight="600">
          Flux de données : Appareil → Datacenter
        </text>
      </svg>
    </div>
  )
}
