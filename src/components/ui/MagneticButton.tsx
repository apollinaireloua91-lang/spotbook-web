'use client'

/**
 * MagneticButton
 * ------------------------------------------------------------------
 * Renders any element (defaults to <a>) with a magnetic pull effect:
 * the element translates slightly toward the cursor while hovered,
 * using a spring for natural easing.
 *
 * Usage:
 *   <MagneticButton href="...">Télécharger</MagneticButton>
 */

import { useRef, type ReactNode, type MouseEvent as ReactMouseEvent } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import clsx from 'clsx'

type Props = {
  children: ReactNode
  href?: string
  className?: string
  strength?: number
  as?: 'a' | 'button'
  onClick?: () => void
  ariaLabel?: string
}

export default function MagneticButton({
  children,
  href,
  className,
  strength = 0.35,
  as = href ? 'a' : 'button',
  onClick,
  ariaLabel,
}: Props) {
  const ref = useRef<HTMLElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.5 })
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.5 })

  const handleMouseMove = (e: ReactMouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const mx = e.clientX - rect.left - rect.width / 2
    const my = e.clientY - rect.top - rect.height / 2
    x.set(mx * strength)
    y.set(my * strength)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const MotionTag = (as === 'a' ? motion.a : motion.button) as typeof motion.a

  return (
    <MotionTag
      ref={ref as never}
      href={href}
      aria-label={ariaLabel}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: sx, y: sy }}
      className={clsx('inline-flex select-none', className)}
    >
      <span className="pointer-events-none inline-flex items-center gap-2">{children}</span>
    </MotionTag>
  )
}
