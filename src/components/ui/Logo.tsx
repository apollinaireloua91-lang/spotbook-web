'use client'

export default function Logo({ className = '', dark = false }: { className?: string; dark?: boolean }) {
  // `dark` prop kept for API compatibility but the neon theme uses white text everywhere
  void dark

  return (
    <span
      className={`font-display font-bold tracking-tight text-white ${className}`}
      style={{ textShadow: '0 0 20px rgba(192, 38, 211, 0.35)' }}
    >
      <span className="relative">
        Spot
        <span className="relative">
          book
          <svg
            className="absolute -bottom-1 left-0 w-full"
            viewBox="0 0 50 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="logoStroke" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#C026D3" />
                <stop offset="50%" stopColor="#8E05C2" />
                <stop offset="100%" stopColor="#700B97" />
              </linearGradient>
            </defs>
            <path
              d="M1 4.5C10 1.5 40 1.5 49 4.5"
              stroke="url(#logoStroke)"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ filter: 'drop-shadow(0 0 4px rgba(192,38,211,0.8))' }}
            />
          </svg>
        </span>
      </span>
    </span>
  )
}
