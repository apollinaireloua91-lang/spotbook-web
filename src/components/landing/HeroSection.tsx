'use client'

/**
 * HeroSection v2 — premium
 * ------------------------------------------------------------------
 * - Headline "Découvrez. Réservez. Vivez." with per-letter reveal,
 *   one word highlighted by a pulsing gradient underline that
 *   advances every 2.8s.
 * - Pulsing "Disponible au Québec" chip (cream accent, not green).
 * - App Store + Google Play CTAs, magnetized.
 * - Right side: floating iPhone mockup, looping hero videos.
 * - Background: radial gradient + fine grid + ambient particles.
 * - Scroll hint at the bottom.
 */

import { useEffect, useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import PhoneMockup from '@/components/ui/PhoneMockup'
import MagneticButton from '@/components/ui/MagneticButton'

const HEADLINE = ['Découvrez.', 'Réservez.', 'Vivez.']

const EASE_OUT_EXPO = [0.19, 1, 0.22, 1] as const

const letterVariant: Variants = {
  hidden: { y: '110%', opacity: 0 },
  show: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.4 + i * 0.012, duration: 0.9, ease: EASE_OUT_EXPO },
  }),
}

export default function HeroSection() {
  const [activeWord, setActiveWord] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveWord((w) => (w + 1) % HEADLINE.length)
    }, 2800)
    return () => window.clearInterval(id)
  }, [])

  // build a flat index across words so stagger is continuous
  let globalIndex = 0

  return (
    <section
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden pb-20 pt-[120px] md:pt-[140px]"
      aria-label="Hero"
    >
      {/* --- Background scaffolding --- */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 80% at 20% 10%, rgba(142,5,194,0.38), transparent 60%), radial-gradient(ellipse 50% 80% at 100% 0%, rgba(176,38,232,0.22), transparent 65%), radial-gradient(circle at 80% 100%, rgba(62,6,95,0.55), transparent 55%)',
          }}
        />
        <div className="bg-grid-fine absolute inset-0" />
        <Particles />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#0C0C0C]" />
      </div>

      {/* --- Content grid --- */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-10 px-6 md:grid-cols-[1.15fr_1fr] md:gap-14 md:px-12">
        <div className="flex flex-col items-start">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
            className="chip mb-7"
          >
            <span className="chip-dot" />
            Disponible au Québec
          </motion.span>

          <h1 className="display-xl font-display">
            {HEADLINE.map((word, wi) => (
              <span
                key={word}
                className="relative mr-[0.22em] inline-flex"
                style={{ willChange: 'transform' }}
              >
                <motion.span
                  aria-hidden
                  animate={{
                    opacity: activeWord === wi ? 1 : 0,
                    scaleX: activeWord === wi ? 1 : 0.1,
                  }}
                  transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
                  style={{
                    position: 'absolute',
                    left: 0,
                    right: '0.15em',
                    bottom: '0.06em',
                    height: '0.14em',
                    transformOrigin: 'left',
                    background:
                      'linear-gradient(90deg, #FDF2C3 0%, #B026E8 50%, #8E05C2 100%)',
                    borderRadius: 999,
                    filter: 'drop-shadow(0 0 14px rgba(176,38,232,0.65))',
                  }}
                />

                <span className="relative inline-block overflow-hidden pb-[0.12em] pr-[0.04em]">
                  {word.split('').map((ch) => {
                    const i = globalIndex++
                    return (
                      <motion.span
                        key={`${word}-${i}`}
                        custom={i}
                        variants={letterVariant}
                        initial="hidden"
                        animate="show"
                        className="inline-block"
                        style={{ willChange: 'transform' }}
                      >
                        {ch === ' ' ? '\u00A0' : ch}
                      </motion.span>
                    )
                  })}
                </span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1], delay: 0.9 }}
            className="mt-7 max-w-[520px] text-balance text-[17px] leading-[1.55] text-[color:var(--fg-muted)] md:text-[19px]"
          >
            La super-app qui connecte les clients aux meilleurs professionnels
            indépendants du Québec. Feed vidéo, réservation instantanée,
            billetterie — dans une même app.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1], delay: 1.05 }}
            className="mt-9 flex flex-wrap items-center gap-3"
            id="download"
          >
            <MagneticButton href="#download" className="cta" strength={0.3}>
              <AppleMark />
              <span className="flex flex-col items-start leading-none">
                <span className="text-[10px] font-normal opacity-80">Télécharger sur</span>
                <span className="text-[15px] font-semibold">App Store</span>
              </span>
            </MagneticButton>

            <MagneticButton href="#download" className="cta-ghost" strength={0.28}>
              <GooglePlayMark />
              <span className="flex flex-col items-start leading-none">
                <span className="text-[10px] font-normal opacity-75">Disponible sur</span>
                <span className="text-[15px] font-semibold">Google Play</span>
              </span>
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="mt-10 flex items-center gap-4 text-[13px] text-[color:var(--fg-faint)]"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((n) => (
                <span
                  key={n}
                  className="h-6 w-6 rounded-full border border-[#0C0C0C]"
                  style={{
                    background: `linear-gradient(135deg, hsl(${280 + n * 6} 70% 55%), hsl(${320 - n * 8} 70% 45%))`,
                  }}
                />
              ))}
            </div>
            <span>
              <strong className="text-[color:var(--fg)] font-semibold">500+</strong> pros déjà actifs · 4.9 ★
            </span>
          </motion.div>
        </div>

        <div className="relative flex items-center justify-center md:justify-end">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                'radial-gradient(ellipse 55% 65% at 55% 45%, rgba(176,38,232,0.55), transparent 70%)',
              filter: 'blur(40px)',
              animation: 'glow-pulse 5s ease-in-out infinite',
            }}
          />
          <PhoneMockup
            sources={[
              '/videos/demo-reservez.mp4',
              '/videos/demo-barber.mp4',
              '/videos/demo-coach.mp4',
              '/videos/hero-a.mp4',
              '/videos/hero-b.mp4',
            ]}
            priority
            className="md:translate-y-[-2%]"
          />
        </div>
      </div>

      <motion.div
        aria-hidden
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute inset-x-0 bottom-6 flex justify-center"
      >
        <div className="flex flex-col items-center gap-2 text-[11px] tracking-[0.22em] text-[color:var(--fg-faint)]">
          <span className="uppercase">Scroll</span>
          <span className="relative block h-7 w-[1px] overflow-hidden bg-white/10">
            <span
              className="absolute left-0 top-0 block h-1/2 w-full"
              style={{
                background: 'linear-gradient(180deg, transparent, #FDF2C3)',
                animation: 'scrollhint 1.8s ease-in-out infinite',
              }}
            />
          </span>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes scrollhint {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  )
}

/* ----------- inline marks ----------- */

function AppleMark() {
  return (
    <svg width="18" height="22" viewBox="0 0 18 22" fill="currentColor" aria-hidden>
      <path d="M14.94 11.72c-.03-2.8 2.29-4.14 2.39-4.2-1.3-1.9-3.33-2.16-4.05-2.19-1.72-.17-3.36 1.01-4.23 1.01-.87 0-2.22-.99-3.65-.96C3.55 5.42 1.94 6.48 1.04 8.1c-1.92 3.33-.49 8.24 1.38 10.94.92 1.31 2 2.79 3.43 2.74 1.37-.06 1.9-.89 3.56-.89 1.67 0 2.14.89 3.61.86 1.49-.03 2.43-1.34 3.35-2.65 1.05-1.52 1.48-2.99 1.5-3.07-.03-.01-2.9-1.12-2.93-4.43zM12.18 3.85c.76-.92 1.27-2.2 1.13-3.47-1.09.04-2.41.72-3.19 1.63-.7.8-1.31 2.1-1.15 3.35 1.22.09 2.45-.62 3.21-1.51z" />
    </svg>
  )
}

function GooglePlayMark() {
  return (
    <svg width="18" height="20" viewBox="0 0 18 20" aria-hidden>
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FDF2C3" />
          <stop offset="1" stopColor="#B026E8" />
        </linearGradient>
      </defs>
      <path
        fill="url(#g1)"
        d="M1.42.43a1.1 1.1 0 0 0-.42.87v17.4c0 .35.16.67.42.87L11.1 10 1.42.43zm10.76 10.69l2.62 2.59-10.12 5.72 7.5-8.31zm0-2.24l-7.5-8.31L14.8 6.3l-2.62 2.58zm4.26 2.34l-2.89 1.64-2.84-2.86 2.84-2.86 2.89 1.64c1.03.58 1.03 1.85 0 2.44z"
      />
    </svg>
  )
}

/* ----------- particles ----------- */

function Particles() {
  const points = Array.from({ length: 28 })
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {points.map((_, i) => {
        const size = 1 + (i % 5) * 0.6
        const left = (i * 37) % 100
        const top = (i * 53) % 100
        const delay = (i * 0.37) % 6
        const dur = 9 + ((i * 1.3) % 10)
        return (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
              background:
                i % 4 === 0
                  ? 'rgba(253, 242, 195, 0.85)'
                  : 'rgba(176, 38, 232, 0.65)',
              boxShadow: i % 4 === 0 ? '0 0 8px rgba(253,242,195,0.8)' : '0 0 10px rgba(176,38,232,0.7)',
              animation: `particle-float ${dur}s ease-in-out ${delay}s infinite`,
              opacity: 0.5,
            }}
          />
        )
      })}
      <style jsx>{`
        @keyframes particle-float {
          0%, 100% { transform: translate3d(0, 0, 0); opacity: 0.12; }
          50%      { transform: translate3d(14px, -24px, 0); opacity: 0.7; }
        }
      `}</style>
    </div>
  )
}
