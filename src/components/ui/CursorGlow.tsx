'use client'

/**
 * CursorGlow
 * ------------------------------------------------------------------
 * A lightweight custom cursor that follows the mouse with spring
 * smoothing and scales up over interactive elements (anchors, buttons,
 * anything with [data-cursor="expand"]). Purely decorative — native
 * cursor remains visible underneath for click precision.
 *
 * - Hidden on touch devices (pointer: coarse).
 * - Disabled with prefers-reduced-motion.
 */

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorGlow() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 320, damping: 32, mass: 0.45 })
  const sy = useSpring(y, { stiffness: 320, damping: 32, mass: 0.45 })

  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!canHover || reduced) return

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, [data-cursor="expand"]'
      )
      if (ringRef.current) {
        ringRef.current.dataset.hover = interactive ? 'true' : 'false'
      }
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [x, y])

  return (
    <>
      {/* soft halo */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
        style={{ x: sx, y: sy, translateX: '-50%', translateY: '-50%' }}
      >
        <div
          ref={ringRef}
          className="relative h-6 w-6 rounded-full transition-[width,height,background,border-color] duration-300"
          style={{
            background: 'radial-gradient(circle, rgba(176,38,232,0.35), rgba(176,38,232,0) 70%)',
            border: '1px solid rgba(253, 242, 195, 0.55)',
            mixBlendMode: 'screen',
          }}
        />
      </motion.div>
      <style jsx>{`
        div[data-hover='true'] {
          width: 42px !important;
          height: 42px !important;
          border-color: rgba(253, 242, 195, 0.85) !important;
          background: radial-gradient(circle, rgba(176, 38, 232, 0.5), rgba(176, 38, 232, 0) 70%) !important;
        }
      `}</style>
    </>
  )
}
