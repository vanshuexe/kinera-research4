import React, { useState, useEffect } from "react";

interface Pin {
  id: string;
  x: number;
  y: number;
  flag: string;
  label: string;
  isHub?: boolean;
}

const PINS: Pin[] = [
  { id: "usa",         x: 170, y: 188, flag: "🇺🇸", label: "USA" },
  { id: "uk",          x: 452, y: 108, flag: "🇬🇧", label: "United Kingdom" },
  { id: "ireland",     x: 437, y: 118, flag: "🇮🇪", label: "Ireland" },
  { id: "portugal",    x: 430, y: 148, flag: "🇵🇹", label: "Portugal", isHub: true },
  { id: "switzerland", x: 474, y: 112, flag: "🇨🇭", label: "Switzerland" },
  { id: "uae",         x: 575, y: 208, flag: "🇦🇪", label: "UAE" },
  { id: "india",       x: 646, y: 200, flag: "🇮🇳", label: "India" },
];

const HUB = PINS.find(p => p.isHub)!;
const OTHER_PINS = PINS.filter(p => !p.isHub);

function getArcPath(from: Pin, to: Pin): string {
  const mx = (from.x + to.x) / 2;
  const my = (from.y + to.y) / 2;
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const dist = Math.sqrt(dx * dx + dy * dy);
  return `M ${from.x} ${from.y} Q ${mx} ${my - dist * 0.18} ${to.x} ${to.y}`;
}

const CONTINENTS = [
  { id: "na", d: "M 72 85 L 135 68 L 262 60 L 352 76 L 362 108 L 346 136 L 312 186 L 256 212 L 216 208 L 178 190 L 148 170 L 136 142 L 128 118 L 100 100 Z" },
  { id: "sa", d: "M 272 230 L 328 216 L 374 222 L 400 258 L 410 312 L 378 366 L 340 408 L 310 392 L 288 342 L 266 278 Z" },
  { id: "eu", d: "M 430 155 L 455 160 L 512 162 L 546 158 L 588 148 L 600 126 L 596 90 L 558 84 L 546 100 L 530 112 L 500 104 L 490 74 L 468 74 L 450 94 L 440 118 L 430 140 Z" },
  { id: "af", d: "M 436 170 L 510 162 L 552 162 L 592 172 L 634 216 L 640 250 L 612 290 L 598 330 L 554 370 L 520 354 L 496 298 L 480 262 L 444 230 L 438 200 Z" },
  { id: "as", d: "M 596 126 L 650 80 L 722 70 L 800 64 L 878 68 L 944 58 L 984 62 L 984 148 L 938 166 L 894 162 L 860 186 L 836 214 L 806 238 L 780 254 L 754 254 L 714 242 L 694 216 L 670 202 L 648 198 L 624 178 L 588 148 Z" },
  { id: "au", d: "M 820 302 L 864 288 L 906 294 L 932 320 L 928 348 L 906 366 L 876 370 L 846 356 L 820 338 Z" },
  { id: "gl", d: "M 332 28 L 366 22 L 398 28 L 408 52 L 394 68 L 364 72 L 336 60 Z" },
];

export const WorldMapBanner: React.FC<{ className?: string }> = ({ className = "" }) => {
  const [activePinIndex, setActivePinIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActivePinIndex(prev => (prev + 1) % OTHER_PINS.length);
    }, 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <div className={`relative w-full h-full overflow-hidden bg-white ${className}`}>
      <svg viewBox="60 55 880 350" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          <filter id="lm-pin-shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#94a3b8" floodOpacity="0.35"/>
          </filter>
          <filter id="lm-arc-glow" x="-10%" y="-30%" width="120%" height="160%">
            <feGaussianBlur stdDeviation="1.5" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        <rect x="60" y="55" width="880" height="350" fill="#f0f5fa"/>

        {CONTINENTS.map(c => (
          <path key={c.id} d={c.d} fill="#dce6f0" stroke="#b8cad8" strokeWidth="1" strokeLinejoin="round"/>
        ))}

        {OTHER_PINS.map(pin => (
          <path key={`arc-${pin.id}`} d={getArcPath(pin, HUB)} fill="none" stroke="#5a9fd4" strokeWidth="1.4" strokeDasharray="6 4" strokeLinecap="round" opacity="0.5"/>
        ))}

        {OTHER_PINS.map((pin, i) => {
          if (i !== activePinIndex) return null;
          const path = getArcPath(pin, HUB);
          return (
            <g key={`active-${pin.id}`}>
              <path d={path} fill="none" stroke="#2575c4" strokeWidth="1.8" strokeDasharray="6 4" strokeLinecap="round" opacity="0.9" filter="url(#lm-arc-glow)"/>
              <circle r="4" fill="#2575c4" opacity="0.85">
                <animateMotion path={path} dur="1.8s" repeatCount="indefinite"/>
              </circle>
            </g>
          );
        })}

        {PINS.map((pin, _i) => {
          const isHub = pin.isHub;
          const isActive = !isHub && OTHER_PINS[activePinIndex]?.id === pin.id;
          const r = isHub ? 20 : 18;
          return (
            <g key={pin.id}>
              <line x1={pin.x} y1={pin.y + r} x2={pin.x} y2={pin.y + r + 10} stroke={isActive || isHub ? "#2575c4" : "#6aacdf"} strokeWidth="2"/>
              <circle cx={pin.x} cy={pin.y + r + 12} r="2.5" fill={isActive || isHub ? "#2575c4" : "#6aacdf"}/>
              {(isActive) && (
                <circle cx={pin.x} cy={pin.y} r={r + 6} fill="none" stroke="#2575c4" strokeWidth="1" opacity="0.3">
                  <animate attributeName="r" values={`${r};${r + 10};${r}`} dur="2s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite"/>
                </circle>
              )}
              <circle cx={pin.x} cy={pin.y} r={r} fill="white" stroke={isActive || isHub ? "#2575c4" : "#7ab8e0"} strokeWidth={isActive || isHub ? 2.5 : 2} filter="url(#lm-pin-shadow)"/>
              <text x={pin.x} y={pin.y + (isHub ? 7 : 6)} textAnchor="middle" fontSize={isHub ? 18 : 16} style={{ userSelect: "none", fontFamily: "Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif" }}>
                {pin.flag}
              </text>
              <text x={pin.x} y={pin.y + r + 26} textAnchor="middle" fontSize="9.5" fontWeight="600" fill="#475569" fontFamily="Plus Jakarta Sans, system-ui, sans-serif">
                {pin.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};
