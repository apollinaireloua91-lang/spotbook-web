'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface AnimatedCounterProps {
  target: number
  suffix?: string
  prefix?: string
  duration?: number
}

export default function AnimatedCounter({ target, suffix = '', prefix = '', duration = 2 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const end = target
    const stepTime = (duration * 1000) / end
    const timer = setInterval(() => {
      start += Math.ceil(end / 60)
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, stepTime)
    return () => clearInterval(timer)
  }, [isInView, target, duration])

  return (
    <motion.span
      ref={ref}
      className="tabular-nums"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {prefix}{count.toLocaleString('fr-FR')}{suffix}
    </motion.span>
  )
}
