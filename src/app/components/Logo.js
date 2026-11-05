"use client";

/**
 * Shree Mahalaxmi Engineering (SME) - Official Vector Brand Emblem
 * Precision geometric S-M-E triangular monogram with industrial gold gradient.
 */
export default function Logo({
  className = "h-12 w-auto",
  scrolled = false,
  showText = false,
  textDark = false,
}) {
  return (
    <div className="flex items-center gap-3 sm:gap-4 select-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 314 286"
        className={`${className} transition-transform duration-300 drop-shadow-md`}
        fill="none"
        aria-label="Shree Mahalaxmi Engineering Logo"
      >
        <defs>
          {/* Metallic Industrial Amber/Gold Gradient */}
          <linearGradient id="smeBrandGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FEF08A" />
            <stop offset="22%" stop-color="#FBBF24" />
            <stop offset="55%" stop-color="#F59E0B" />
            <stop offset="85%" stop-color="#D97706" />
            <stop offset="100%" stop-color="#92400E" />
          </linearGradient>

          {/* Crisp Shadow */}
          <filter id="smeShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="2"
              stdDeviation="2"
              flood-color="#000000"
              flood-opacity={scrolled ? "0.3" : "0.55"}
            />
          </filter>
        </defs>

        <g
          filter="url(#smeShadow)"
          fill="url(#smeBrandGold)"
          stroke={scrolled ? "#92400E" : "#78350F"}
          strokeWidth="2.2"
          strokeLinejoin="round"
          strokeMiterlimit="3"
        >
          {/* 'S' Piece (Apex & Upper Loop) */}
          <path
            d="M 157 7
               L 197 73
               L 165 73
               L 157 56
               L 149 73
               L 149 84
               L 204 84
               L 217 110
               L 226 125
               L 236 148
               L 78 148
               L 89 125
               L 190 125
               L 190 110
               L 99 110
               L 115 84
               L 129 55
               Z"
          />

          {/* Corner Wedge (Bottom Left) */}
          <polygon points="42,212 42,277 5,277" />

          {/* 'M' Piece (Bottom Left Body) */}
          <path
            d="M 70 160
               L 152 160
               L 152 277
               L 126 277
               L 126 188
               L 115 188
               L 115 277
               L 90 277
               L 90 188
               L 79 188
               L 79 277
               L 53 277
               L 53 188
               Z"
          />

          {/* 'E' Piece (Bottom Right Body) */}
          <path
            d="M 163 160
               L 245 160
               L 261 188
               L 189 188
               L 189 204
               L 271 204
               L 284 232
               L 189 232
               L 189 252
               L 296 252
               L 310 277
               L 163 277
               Z"
          />
        </g>
      </svg>

      {showText && (
        <div className="flex flex-col justify-center">
          <span
            className={`font-[var(--font-heading)] font-extrabold tracking-tight text-base sm:text-lg lg:text-xl leading-none transition-colors duration-300 ${
              textDark || scrolled ? "text-gray-950" : "text-white"
            }`}
          >
            SHREE MAHALAXMI
          </span>
          <span
            className={`text-[10px] sm:text-xs tracking-[0.22em] font-bold uppercase mt-1 transition-colors duration-300 ${
              scrolled ? "text-amber-600" : "text-amber-400"
            }`}
          >
            ENGINEERING
          </span>
        </div>
      )}
    </div>
  );
}

