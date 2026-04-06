'use client'

export default function Logo({ className = '', dark = false }: { className?: string; dark?: boolean }) {
  return (
    <span className={`font-display font-bold tracking-tight ${dark ? 'text-white' : 'text-brand-green'} ${className}`}>
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
            <path
              d="M1 4.5C10 1.5 40 1.5 49 4.5"
              stroke={dark ? '#FFF3DA' : '#043603'}
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.4"
            />
          </svg>
        </span>
      </span>
    </span>
  )
}
