'use client'

/**
 * LenisProvider
 * ------------------------------------------------------------------
 * Wraps the app with a global Lenis instance and drives GSAP's ticker
 * from Lenis' scroll position. This keeps ScrollTrigger pixel-perfect
 * when smooth-scroll is active.
 *
 * Respects prefers-reduced-motion automatically (Lenis becomes inert
 * and native scrolling is restored).
 */

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
      smoothWheel: true,
    })
    lenisRef.current = lenis

    lenis.on('scroll', ScrollTrigger.update)

    const raf = (time: number) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    // Intercept same-page anchor clicks so Lenis handles the scroll
    // (native hash navigation fights smooth-scroll). Offsets below the
    // sticky nav header so the target isn't hidden under it.
    const NAV_OFFSET = 96
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target) return
      const anchor = target.closest<HTMLAnchorElement>('a[href^="#"]')
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (!href || href === '#' || href.length < 2) return

      const el = document.querySelector(href)
      if (!el) return

      e.preventDefault()
      lenis.scrollTo(el as HTMLElement, { offset: -NAV_OFFSET, duration: 1.4 })
      // Update URL without jumping
      try {
        history.replaceState(null, '', href)
      } catch {
        /* ignore */
      }
    }
    document.addEventListener('click', handleAnchorClick)

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      gsap.ticker.remove(raf)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  return <>{children}</>
}
