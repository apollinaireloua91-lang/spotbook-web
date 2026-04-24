'use client'

/**
 * Navbar
 * ------------------------------------------------------------------
 * Minimal sticky nav — logo only. Glass pill that appears after
 * 24px of scroll and stays transparent above the fold.
 */

import { useState } from 'react'
import Link from 'next/link'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import Logo from '@/components/ui/Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 24)
  })

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1], delay: 0.15 }}
      className="fixed inset-x-0 top-0 z-[60] flex justify-center"
    >
      <motion.nav
        animate={{
          paddingTop: scrolled ? 10 : 16,
          paddingBottom: scrolled ? 10 : 16,
          paddingLeft: scrolled ? 22 : 28,
          paddingRight: scrolled ? 22 : 28,
          marginTop: scrolled ? 14 : 6,
        }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={[
          'flex items-center justify-center rounded-full',
          scrolled
            ? 'glass border-[rgba(142,5,194,0.35)] shadow-[0_18px_40px_-20px_rgba(142,5,194,0.55)]'
            : 'border border-transparent bg-transparent',
        ].join(' ')}
      >
        <Link href="/" aria-label="Spotbook">
          <Logo className="text-[22px]" />
        </Link>
      </motion.nav>
    </motion.header>
  )
}
