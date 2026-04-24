'use client'

/**
 * Testimonials v2 — cinematic carousel
 * ------------------------------------------------------------------
 * One quote at a time. Auto-advances every 7s, paused when the
 * section isn't in view. Manual prev/next + dot navigation.
 * Large pull-quote typography, gradient opening mark.
 */

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Quote = {
  body: string
  author: string
  role: string
  avatar: string
}

const QUOTES: Quote[] = [
  {
    body:
      'Avant Spotbook, je passais 2h par jour à gérer mes DMs. Maintenant mon agenda se remplit tout seul, je peux me concentrer sur le service.',
    author: 'Jordan L.',
    role: 'Barbier — Montréal',
    avatar: 'linear-gradient(135deg, #B026E8, #3E065F)',
  },
  {
    body:
      'La billetterie événementielle a changé ma game. Mes soirées se remplissent en 48h et j’ai zéro no-show grâce aux rappels.',
    author: 'Maëva R.',
    role: 'DJ résidente — Québec',
    avatar: 'linear-gradient(135deg, #FDF2C3, #B026E8)',
  },
  {
    body:
      'Je choisis le pro en regardant la vidéo, pas juste les étoiles. C’est la première app où je sens que j’ai vraiment le bon feeling avant de booker.',
    author: 'Camille T.',
    role: 'Cliente — Laval',
    avatar: 'linear-gradient(135deg, #8E05C2, #0C0C0C)',
  },
  {
    body:
      'Stripe, agenda, messagerie, rappels — tout est intégré. Je n’ai plus jamais à jongler entre 4 apps pour gérer mon business.',
    author: 'Rémi D.',
    role: 'Coach privé — Gatineau',
    avatar: 'linear-gradient(135deg, #B026E8, #FDF2C3)',
  },
]

const AUTO_MS = 7000

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const isVisibleRef = useRef(true)
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting
      },
      { threshold: 0.35 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const tick = () => {
      if (isVisibleRef.current) {
        setIndex((i) => (i + 1) % QUOTES.length)
      }
    }
    timerRef.current = window.setInterval(tick, AUTO_MS)
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
    }
  }, [])

  const go = (dir: 1 | -1) => {
    setIndex((i) => (i + dir + QUOTES.length) % QUOTES.length)
  }

  const q = QUOTES[index]

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative overflow-hidden py-32 md:py-40"
    >
      {/* Ambient violet wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 30%, rgba(176,38,232,0.2), transparent 70%)',
        }}
      />

      <div className="mx-auto max-w-[1080px] px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
          className="text-center"
        >
          <span className="eyebrow">· Témoignages ·</span>
          <h2 className="display-lg font-display mt-5 text-balance">
            Ce qu’en disent{' '}
            <span className="bg-gradient-to-r from-[#FDF2C3] via-[#B026E8] to-[#8E05C2] bg-clip-text text-transparent">
              nos pros et clients.
            </span>
          </h2>
        </motion.div>

        <div className="relative mt-20 min-h-[360px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -30, filter: 'blur(8px)' }}
              transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
              className="mx-auto max-w-[860px] text-center"
            >
              <span
                aria-hidden
                className="font-display block text-[120px] leading-[0.6] tracking-tighter"
                style={{
                  background:
                    'linear-gradient(135deg, #FDF2C3 0%, #B026E8 55%, #8E05C2 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  marginBottom: 24,
                }}
              >
                “
              </span>
              <p className="font-display text-balance text-[26px] font-medium leading-[1.35] tracking-[-0.02em] text-[color:var(--fg)] md:text-[34px]">
                {q.body}
              </p>

              <footer className="mt-10 flex flex-col items-center gap-3">
                <span
                  aria-hidden
                  className="h-14 w-14 rounded-full border border-white/10"
                  style={{ background: q.avatar }}
                />
                <div className="text-center">
                  <div className="font-display text-[16px] font-semibold text-[color:var(--fg)]">
                    {q.author}
                  </div>
                  <div className="text-[13px] text-[color:var(--fg-faint)]">
                    {q.role}
                  </div>
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Témoignage précédent"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-[color:var(--fg-muted)] transition-all hover:border-[rgba(176,38,232,0.45)] hover:text-[color:var(--fg)]"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex items-center gap-2 px-3">
            {QUOTES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Aller au témoignage ${i + 1}`}
                className="relative h-[6px] rounded-full transition-all"
                style={{
                  width: i === index ? 32 : 6,
                  background:
                    i === index
                      ? 'linear-gradient(90deg, #FDF2C3, #B026E8)'
                      : 'rgba(255,255,255,0.18)',
                }}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Témoignage suivant"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-[color:var(--fg-muted)] transition-all hover:border-[rgba(176,38,232,0.45)] hover:text-[color:var(--fg)]"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
