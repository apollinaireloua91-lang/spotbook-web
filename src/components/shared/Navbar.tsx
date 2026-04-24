'use client'

/**
 * Navbar
 * ------------------------------------------------------------------
 * Sticky, center-aligned glass navigation. Morphs on scroll:
 *   - container width shrinks (1280 → 780 px)
 *   - backdrop saturates and acquires a 1px violet hairline
 *   - vertical padding tightens
 *
 * Mobile: slide-in drawer from the right with blurred backdrop.
 */

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from '@/components/ui/Logo'
import MagneticButton from '@/components/ui/MagneticButton'

const LINKS = [
  { href: '#features',     label: 'Features' },
  { href: '#comment',      label: 'Comment ça marche' },
  { href: '/pro',          label: 'Pour les Pros' },
  { href: '#temoignages',  label: 'Témoignages' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 24)
  })

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1], delay: 0.15 }}
        className="fixed inset-x-0 top-0 z-[60] flex justify-center"
      >
        <motion.nav
          animate={{
            maxWidth: scrolled ? 820 : 1280,
            paddingTop: scrolled ? 10 : 16,
            paddingBottom: scrolled ? 10 : 16,
            marginTop: scrolled ? 14 : 0,
          }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className={[
            'mx-4 flex w-full items-center justify-between px-5 md:px-7',
            'rounded-full',
            scrolled
              ? 'glass border-[rgba(142,5,194,0.35)] shadow-[0_18px_40px_-20px_rgba(142,5,194,0.55)]'
              : 'border border-transparent bg-transparent',
          ].join(' ')}
        >
          <Link href="/" aria-label="Spotbook" className="shrink-0">
            <Logo className="text-[22px]" />
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="link-reveal text-[14px] font-medium tracking-tight"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <MagneticButton
              href="#download"
              className="cta hidden text-[14px] md:inline-flex"
              strength={0.28}
            >
              Télécharger l&apos;app
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M7 17L17 7" />
                <path d="M8 7h9v9" />
              </svg>
            </MagneticButton>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 md:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </motion.nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[59] bg-black/60 backdrop-blur-xs md:hidden"
            />
            <motion.aside
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 z-[61] flex h-full w-[82%] max-w-sm flex-col gap-1 bg-[#0C0C0C] p-6 md:hidden"
              style={{
                borderLeft: '1px solid rgba(142,5,194,0.28)',
                boxShadow: '-20px 0 60px -10px rgba(142,5,194,0.4)',
              }}
            >
              <div className="mb-6 flex items-center justify-between">
                <Logo className="text-xl" />
                <button
                  aria-label="Fermer"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5"
                >
                  <X size={18} />
                </button>
              </div>

              <ul className="flex flex-col gap-1">
                {LINKS.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, ease: [0.19, 1, 0.22, 1] }}
                  >
                    <Link
                      onClick={() => setOpen(false)}
                      href={l.href}
                      className="block py-3 font-display text-[32px] leading-tight tracking-[-0.02em]"
                    >
                      {l.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto">
                <Link
                  href="#download"
                  onClick={() => setOpen(false)}
                  className="cta w-full justify-center"
                >
                  Télécharger l&apos;app
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
