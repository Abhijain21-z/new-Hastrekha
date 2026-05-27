"use client";

import { useMemo } from "react";

export function ZodiacWheel({ className }: { className?: string }) {
  const signs = [
    "\u2648", "\u2649", "\u264A", "\u264B", "\u264C", "\u264D",
    "\u264E", "\u264F", "\u2650", "\u2651", "\u2652", "\u2653",
  ];

  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <circle cx="100" cy="100" r="90" fill="none" stroke="hsl(38 85% 48% / 0.25)" strokeWidth="1" />
      <circle cx="100" cy="100" r="70" fill="none" stroke="hsl(38 85% 48% / 0.18)" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="50" fill="none" stroke="hsl(38 85% 48% / 0.12)" strokeWidth="0.5" />
      {signs.map((sign, i) => {
        const angle = (i * 30 - 90) * (Math.PI / 180);
        const x = Number((100 + 80 * Math.cos(angle)).toFixed(3));
        const y = Number((100 + 80 * Math.sin(angle)).toFixed(3));
        return (
          <text
            key={i}
            x={x}
            y={y}
            textAnchor="middle"
            dominantBaseline="central"
            fill="hsl(38 85% 48% / 0.55)"
            fontSize="12"
          >
            {sign}
          </text>
        );
      })}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30) * (Math.PI / 180);
        const x1 = Number((100 + 60 * Math.cos(angle)).toFixed(3));
        const y1 = Number((100 + 60 * Math.sin(angle)).toFixed(3));
        const x2 = Number((100 + 68 * Math.cos(angle)).toFixed(3));
        const y2 = Number((100 + 68 * Math.sin(angle)).toFixed(3));
        return (
          <line
            key={`line-${i}`}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="hsl(38 85% 48% / 0.35)"
            strokeWidth="0.5"
          />
        );
      })}
    </svg>
  );
}

export function PalmSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 260 380" className={className} aria-hidden="true">
      <defs>
        {/* Skin gradient */}
        <radialGradient id="skinGrad" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#FDDCB5" />
          <stop offset="60%" stopColor="#F5C69A" />
          <stop offset="100%" stopColor="#E8AD7A" />
        </radialGradient>
        {/* Shadow on palm */}
        <radialGradient id="palmShadow" cx="48%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D4956A" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#D4956A" stopOpacity="0" />
        </radialGradient>
        {/* Glow for active points */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Drop shadow for the hand */}
        <filter id="handShadow" x="-5%" y="-5%" width="110%" height="110%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#C4915A" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Full hand shape - realistic open palm with 5 fingers */}
      <path
        d="
        M 85 375
        Q 60 340 50 290
        Q 40 250 42 210
        Q 38 185 38 165
        Q 36 145 40 125
        Q 42 112 50 105
        Q 52 95 55 85
        L 56 60
        Q 57 42 65 38
        Q 73 34 78 42
        L 82 72
        Q 82 68 82 55
        L 84 30
        Q 85 10 95 8
        Q 105 6 108 25
        L 110 55
        Q 110 48 112 35
        L 114 14
        Q 115 -2 126 -2
        Q 137 -2 137 16
        L 134 50
        Q 134 42 136 30
        L 140 18
        Q 141 4 151 6
        Q 161 8 159 24
        L 153 62
        Q 155 55 160 45
        L 166 35
        Q 170 24 179 28
        Q 188 32 183 48
        L 172 80
        Q 178 88 182 100
        Q 192 130 190 160
        Q 188 195 185 220
        Q 188 260 178 300
        Q 168 340 155 375
        Z
        "
        fill="url(#skinGrad)"
        stroke="#D4956A"
        strokeWidth="1.2"
        filter="url(#handShadow)"
      />

      {/* Palm center shadow */}
      <ellipse cx="118" cy="175" rx="55" ry="60" fill="url(#palmShadow)" />

      {/* Finger joint creases - thumb */}
      <path d="M 60 80 Q 68 77 76 80" fill="none" stroke="#D4956A" strokeWidth="0.6" opacity="0.5" />

      {/* Finger joint creases - index */}
      <path d="M 83 62 Q 92 58 102 62" fill="none" stroke="#D4956A" strokeWidth="0.6" opacity="0.5" />
      <path d="M 85 45 Q 92 42 100 45" fill="none" stroke="#D4956A" strokeWidth="0.6" opacity="0.5" />

      {/* Finger joint creases - middle */}
      <path d="M 112 52 Q 122 48 132 52" fill="none" stroke="#D4956A" strokeWidth="0.6" opacity="0.5" />
      <path d="M 114 32 Q 122 28 130 32" fill="none" stroke="#D4956A" strokeWidth="0.6" opacity="0.5" />

      {/* Finger joint creases - ring */}
      <path d="M 138 55 Q 146 52 155 55" fill="none" stroke="#D4956A" strokeWidth="0.6" opacity="0.5" />
      <path d="M 140 38 Q 147 35 153 38" fill="none" stroke="#D4956A" strokeWidth="0.6" opacity="0.5" />

      {/* Finger joint creases - pinky */}
      <path d="M 162 62 Q 170 58 178 62" fill="none" stroke="#D4956A" strokeWidth="0.6" opacity="0.5" />

      {/* Fingernails - subtle arcs */}
      <ellipse cx="67" cy="40" rx="6" ry="4" fill="#F8DCC8" stroke="#D4956A" strokeWidth="0.4" opacity="0.7" />
      <ellipse cx="96" cy="12" rx="7" ry="4" fill="#F8DCC8" stroke="#D4956A" strokeWidth="0.4" opacity="0.7" />
      <ellipse cx="126" cy="2" rx="7" ry="4" fill="#F8DCC8" stroke="#D4956A" strokeWidth="0.4" opacity="0.7" />
      <ellipse cx="150" cy="10" rx="6" ry="4" fill="#F8DCC8" stroke="#D4956A" strokeWidth="0.4" opacity="0.7" />
      <ellipse cx="175" cy="30" rx="5" ry="3.5" fill="#F8DCC8" stroke="#D4956A" strokeWidth="0.4" opacity="0.7" />

      {/* === PALM LINES === */}

      {/* HEART LINE - red - top horizontal curve */}
      <path
        d="M 52 130 Q 75 110 105 118 Q 130 125 158 118 Q 172 114 182 108"
        fill="none"
        stroke="#C0392B"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.75"
      />

      {/* HEAD LINE - blue - middle horizontal curve */}
      <path
        d="M 48 155 Q 72 148 100 155 Q 125 162 150 155 Q 168 148 180 140"
        fill="none"
        stroke="#2E86C1"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.7"
      />

      {/* LIFE LINE - green - big arc from thumb to wrist */}
      <path
        d="M 82 100 Q 58 140 52 185 Q 48 230 55 270 Q 60 295 68 320"
        fill="none"
        stroke="#27AE60"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.7"
      />

      {/* FATE LINE - amber/gold - vertical from wrist upward */}
      <path
        d="M 120 330 Q 118 280 115 230 Q 112 190 115 155 Q 118 130 120 115"
        fill="none"
        stroke="#D4880F"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.65"
      />

      {/* SUN LINE - short line near ring finger */}
      <path
        d="M 148 170 Q 150 145 155 120"
        fill="none"
        stroke="#E67E22"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* MERCURY LINE - short line near pinky */}
      <path
        d="M 160 220 Q 168 185 175 155"
        fill="none"
        stroke="#8E44AD"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.4"
      />

      {/* Minor creases on palm */}
      <path d="M 55 200 Q 75 195 90 200" fill="none" stroke="#C89565" strokeWidth="0.5" opacity="0.35" />
      <path d="M 60 225 Q 80 220 95 225" fill="none" stroke="#C89565" strokeWidth="0.5" opacity="0.3" />
      <path d="M 140 200 Q 158 195 175 200" fill="none" stroke="#C89565" strokeWidth="0.4" opacity="0.3" />
      <path d="M 90 260 Q 115 252 140 258" fill="none" stroke="#C89565" strokeWidth="0.4" opacity="0.25" />

      {/* Wrist lines (bracelets) */}
      <path d="M 68 342 Q 110 332 155 342" fill="none" stroke="#C89565" strokeWidth="0.7" opacity="0.4" />
      <path d="M 72 354 Q 110 346 152 354" fill="none" stroke="#C89565" strokeWidth="0.7" opacity="0.35" />
      <path d="M 76 365 Q 112 358 148 365" fill="none" stroke="#C89565" strokeWidth="0.6" opacity="0.3" />

      {/* Glowing intersection points */}
      <circle cx="105" cy="118" r="4" fill="#C0392B" opacity="0.6" filter="url(#glow)">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="155" r="4" fill="#2E86C1" opacity="0.6" filter="url(#glow)">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="58" cy="185" r="4" fill="#27AE60" opacity="0.6" filter="url(#glow)">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="115" cy="230" r="4" fill="#D4880F" opacity="0.6" filter="url(#glow)">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3.5s" repeatCount="indefinite" />
      </circle>

      {/* Line labels */}
      <text x="188" y="108" fill="#C0392B" fontSize="8" fontWeight="600" opacity="0.85">Heart</text>
      <text x="185" y="140" fill="#2E86C1" fontSize="8" fontWeight="600" opacity="0.85">Head</text>
      <text x="25" y="260" fill="#27AE60" fontSize="8" fontWeight="600" opacity="0.85">Life</text>
      <text x="125" y="240" fill="#D4880F" fontSize="8" fontWeight="600" opacity="0.85">Fate</text>
    </svg>
  );
}

// Deterministic pseudo-random using a simple seeded generator to avoid hydration mismatches
function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

export function StarField({ className }: { className?: string }) {
  const starData = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      size: Math.round((seededRandom(i * 7 + 1) * 3 + 1) * 100) / 100,
      top: Math.round(seededRandom(i * 13 + 3) * 100 * 100) / 100,
      left: Math.round(seededRandom(i * 17 + 5) * 100 * 100) / 100,
      opacity: Math.round((seededRandom(i * 23 + 7) * 0.3 + 0.1) * 1000) / 1000,
      duration: Math.round((seededRandom(i * 29 + 11) * 3 + 2) * 1000) / 1000,
      delay: Math.round(seededRandom(i * 31 + 13) * 2 * 1000) / 1000,
    }));
  }, []);

  return (
    <div className={className} aria-hidden="true" suppressHydrationWarning>
      {starData.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.top}%`,
            left: `${star.left}%`,
            opacity: star.opacity,
            backgroundColor: "hsl(38 85% 48%)",
            animation: `pulse-glow ${star.duration}s ease-in-out infinite`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
}


