'use client'

/**
 * TrustBar
 * ------------------------------------------------------------------
 * Three-row trust strip that appears right after the hero:
 *   - Top: numeric markers (pros, bookings, categories, rating)
 *   - Middle: hairline divider
 *   - Bottom: infinite marquee of service categories (wordmarks)
 *
 * Uses v2 tokens only — no legacy .glass-card / .gradient-text.
 */

import { motion } from 'framer-motion'
import Marquee from '@/components/ui/Marquee'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

type Stat = {
  value: number
  suffix: string
  label: string
  decimal?: boolean
}

const STATS: Stat[] = [
  { value: 500, suffix: '+', label: 'Professionnels actifs' },
  { value: 10000, suffix: '+', label: 'Réservations confirmées' },
  { value: 50, suffix: '+', label: 'Catégories de services' },
  { value: 4.9, suffix: '★', label: 'Note moyenne', decimal: true },
]

const CATEGORIES = [
  'Barbier',
  'Coiffure',
  'Manucure',
  'Maquillage',
  'Coaching',
  'Photographie',
  'DJ',
  'Traiteur',
  'Tatouage',
  'Esthétique',
  'Massage',
  'Yoga',
  'Événementiel',
  'Mixologie',
]

export default function TrustBar() {
  return (
    <section className="relative py-20 md:py-24" aria-label="Chiffres et catégories">
      <div className="mx-auto max-w-[1240px] px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className="eyebrow mb-10 text-center"
        >
          · La plateforme de confiance au Québec ·
        </motion.p>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.8,
                ease: [0.19, 1, 0.22, 1],
                delay: i * 0.08,
              }}
              className="group relative flex flex-col items-center text-center"
            >
              <span className="font-display text-[44px] font-semibold leading-none tracking-[-0.04em] text-[color:var(--fg)] md:text-[60px]">
                {s.decimal ? (
                  <span className="tabular-nums">
                    {s.value.toLocaleString('fr-FR')}
                    <span className="ml-1 text-[color:var(--sb-cream)]">★</span>
                  </span>
                ) : (
                  <>
                    <AnimatedCounter target={s.value} />
                    <span className="text-[color:var(--sb-violet-glow)]">{s.suffix}</span>
                  </>
                )}
              </span>
              <span className="mt-3 max-w-[180px] text-[13px] uppercase tracking-[0.18em] text-[color:var(--fg-faint)]">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="hairline mx-auto my-14 w-full" />

        <Marquee speed={42} gap={64} className="text-[color:var(--fg-muted)]">
          {CATEGORIES.map((c) => (
            <span
              key={c}
              className="font-display text-[22px] font-medium tracking-[-0.02em] md:text-[28px]"
            >
              <span className="mr-5 inline-block h-[6px] w-[6px] translate-y-[-6px] rounded-full bg-[color:var(--sb-violet-glow)] align-middle" />
              {c}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
