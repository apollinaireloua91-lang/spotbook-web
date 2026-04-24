'use client'

/**
 * DownloadCTA v2
 * ------------------------------------------------------------------
 * Final scroll-target (#download). Big display headline, App Store +
 * Google Play magnetic buttons, cream/violet trust microcopy.
 */

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import MagneticButton from '@/components/ui/MagneticButton'

export default function DownloadCTA() {
  return (
    <section
      id="download"
      className="relative overflow-hidden py-32 md:py-40"
    >
      <div className="mx-auto max-w-[1080px] px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          className="relative overflow-hidden rounded-[36px] border border-white/10 p-10 text-center md:p-16"
          style={{
            background:
              'radial-gradient(ellipse 80% 80% at 50% 0%, rgba(176,38,232,0.32), transparent 65%), linear-gradient(180deg, rgba(62,6,95,0.5) 0%, rgba(12,12,12,0.9) 100%)',
            boxShadow:
              '0 0 0 1px rgba(176,38,232,0.2) inset, 0 40px 120px -50px rgba(176,38,232,0.55)',
          }}
        >
          {/* Rotating conic border */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-px rounded-[36px] opacity-40"
            style={{
              background:
                'conic-gradient(from 0deg, transparent 0deg, rgba(176,38,232,0.8) 70deg, rgba(253,242,195,0.8) 140deg, transparent 220deg)',
              maskImage:
                'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
              padding: '1px',
              animation: 'spin 16s linear infinite',
            }}
          />

          {/* Grid texture */}
          <div
            aria-hidden
            className="bg-grid-fine pointer-events-none absolute inset-0 opacity-60"
          />

          {/* Floating orbs */}
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              aria-hidden
              className="pointer-events-none absolute rounded-full"
              style={{
                width: 6 - (i % 3),
                height: 6 - (i % 3),
                left: `${10 + i * 11}%`,
                top: `${20 + (i % 3) * 28}%`,
                background:
                  i % 2 === 0 ? 'rgba(253,242,195,0.9)' : 'rgba(176,38,232,0.9)',
                boxShadow:
                  i % 2 === 0
                    ? '0 0 12px rgba(253,242,195,0.8)'
                    : '0 0 14px rgba(176,38,232,0.9)',
                animation: `particle-float ${8 + i}s ease-in-out ${i * 0.4}s infinite`,
                opacity: 0.55,
              }}
            />
          ))}

          <div className="relative z-10">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
              className="chip mb-8"
            >
              <Sparkles size={12} className="text-[color:var(--sb-cream)]" />
              Téléchargement gratuit
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1], delay: 0.06 }}
              className="display-xl font-display text-balance"
            >
              Prêt à{' '}
              <span className="bg-gradient-to-r from-[#FDF2C3] via-[#B026E8] to-[#8E05C2] bg-clip-text text-transparent">
                commencer
              </span>{' '}
              ?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1], delay: 0.15 }}
              className="mx-auto mt-6 max-w-[560px] text-[17px] leading-[1.55] text-[color:var(--fg-muted)] md:text-[19px]"
            >
              Téléchargez Spotbook et rejoignez la communauté qui redéfinit la
              réservation au Québec.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1], delay: 0.22 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-3"
            >
              <MagneticButton href="#" className="cta" strength={0.3}>
                <AppleMark />
                <span className="flex flex-col items-start leading-none">
                  <span className="text-[10px] font-normal opacity-80">
                    Télécharger sur
                  </span>
                  <span className="text-[15px] font-semibold">App Store</span>
                </span>
              </MagneticButton>
              <MagneticButton href="#" className="cta-ghost" strength={0.28}>
                <GooglePlayMark />
                <span className="flex flex-col items-start leading-none">
                  <span className="text-[10px] font-normal opacity-75">
                    Disponible sur
                  </span>
                  <span className="text-[15px] font-semibold">Google Play</span>
                </span>
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-5 text-[12px] uppercase tracking-[0.18em] text-[color:var(--fg-faint)]"
            >
              <Dot>Sans engagement</Dot>
              <Dot>Paiement sécurisé</Dot>
              <Dot hideOnMobile>Support 7/7</Dot>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Dot({
  children,
  hideOnMobile,
}: {
  children: React.ReactNode
  hideOnMobile?: boolean
}) {
  return (
    <span
      className={[
        'inline-flex items-center gap-2',
        hideOnMobile ? 'hidden sm:inline-flex' : '',
      ].join(' ')}
    >
      <span
        aria-hidden
        className="h-[5px] w-[5px] rounded-full bg-[color:var(--sb-violet-glow)]"
      />
      {children}
    </span>
  )
}

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
        <linearGradient id="gpg2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FDF2C3" />
          <stop offset="1" stopColor="#B026E8" />
        </linearGradient>
      </defs>
      <path
        fill="url(#gpg2)"
        d="M1.42.43a1.1 1.1 0 0 0-.42.87v17.4c0 .35.16.67.42.87L11.1 10 1.42.43zm10.76 10.69l2.62 2.59-10.12 5.72 7.5-8.31zm0-2.24l-7.5-8.31L14.8 6.3l-2.62 2.58zm4.26 2.34l-2.89 1.64-2.84-2.86 2.84-2.86 2.89 1.64c1.03.58 1.03 1.85 0 2.44z"
      />
    </svg>
  )
}
