'use client'

/**
 * SplashScreen v2
 * ------------------------------------------------------------------
 * Brand-aligned intro:
 *   - Dark Spotbook background (#0C0C0C)
 *   - Animated "Sb" monogram with violet halo that breathes then
 *     expands outward before the veil lifts
 *   - Violet aurora glow + ambient grain
 *   - Guaranteed dismissal in 1100ms (or immediately on click)
 *   - Skipped entirely when prefers-reduced-motion
 *   - Only shown on first page load of the session (sessionStorage)
 */

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const HOLD_MS = 1100

export default function SplashScreen({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    // Skip if already seen this session
    try {
      if (sessionStorage.getItem('sb_splash') === '1') {
        setShow(false)
        return
      }
      sessionStorage.setItem('sb_splash', '1')
    } catch {
      /* sessionStorage can throw in private mode — ignore */
    }

    // Honour reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShow(false)
      return
    }

    const t = window.setTimeout(() => setShow(false), HOLD_MS)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.55, ease: [0.19, 1, 0.22, 1] } }}
            onClick={() => setShow(false)}
            className="fixed inset-0 z-[10000] flex items-center justify-center"
            style={{ background: '#0C0C0C', cursor: 'pointer' }}
            aria-label="Chargement"
          >
            {/* Ambient violet aurora */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              initial={{ opacity: 0.2, scale: 0.9 }}
              animate={{ opacity: 0.85, scale: 1.1 }}
              transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
              style={{
                background:
                  'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(176,38,232,0.5), rgba(142,5,194,0.2) 40%, transparent 70%)',
                filter: 'blur(30px)',
              }}
            />

            {/* Monogram */}
            <motion.div
              className="relative flex flex-col items-center gap-5"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            >
              <div
                className="relative flex h-[92px] w-[92px] items-center justify-center rounded-[28px]"
                style={{
                  background:
                    'linear-gradient(135deg, #B026E8 0%, #8E05C2 55%, #3E065F 100%)',
                  boxShadow:
                    '0 0 0 1px rgba(255,255,255,0.14) inset, 0 0 60px -4px rgba(176,38,232,0.7), 0 20px 60px -20px rgba(0,0,0,0.8)',
                  animation: 'splash-pulse 1.1s ease-in-out infinite',
                }}
              >
                <span
                  className="font-display font-semibold text-white"
                  style={{
                    fontSize: 52,
                    letterSpacing: '-0.06em',
                    lineHeight: 1,
                    textShadow: '0 2px 10px rgba(0,0,0,0.35)',
                  }}
                >
                  Sb
                </span>
              </div>

              <motion.span
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="font-display text-[15px] tracking-[0.32em] text-[color:var(--fg-faint)]"
                style={{ textTransform: 'uppercase' }}
              >
                SPOTBOOK
              </motion.span>
            </motion.div>

            {/* Progress shimmer */}
            <motion.div
              aria-hidden
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: (HOLD_MS - 100) / 1000, ease: 'linear' }}
              className="absolute bottom-0 left-0 right-0 h-[2px] origin-left"
              style={{
                background:
                  'linear-gradient(90deg, transparent, #FDF2C3 40%, #B026E8 70%, transparent)',
              }}
            />

            <style jsx>{`
              @keyframes splash-pulse {
                0%, 100% {
                  transform: scale(1);
                  box-shadow:
                    0 0 0 1px rgba(255, 255, 255, 0.14) inset,
                    0 0 60px -4px rgba(176, 38, 232, 0.7),
                    0 20px 60px -20px rgba(0, 0, 0, 0.8);
                }
                50% {
                  transform: scale(1.06);
                  box-shadow:
                    0 0 0 1px rgba(255, 255, 255, 0.2) inset,
                    0 0 100px -4px rgba(176, 38, 232, 0.95),
                    0 20px 70px -18px rgba(142, 5, 194, 0.6);
                }
              }
            `}</style>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  )
}
