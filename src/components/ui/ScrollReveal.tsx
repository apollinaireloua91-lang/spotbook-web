'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  duration?: number
}

export default function ScrollReveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.6,
}: ScrollRevealProps) {
  const directionMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  }

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        x: directionMap[direction].x,
        y: directionMap[direction].y,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
