'use client'

/**
 * PhoneMockup
 * ------------------------------------------------------------------
 * Realistic iPhone-shaped frame that loops muted videos on the screen.
 * Videos cross-fade every `intervalMs` to simulate a live app feed.
 *
 * - Plays inline, muted, autoplay, playsInline (autoplay-safe on iOS)
 * - Lazy: only starts when in viewport
 * - Accepts an array of video sources for looped storytelling
 */

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

type Props = {
  sources: string[]
  poster?: string
  className?: string
  intervalMs?: number
  priority?: boolean
}

export default function PhoneMockup({
  sources,
  poster,
  className,
  intervalMs = 4200,
  priority = false,
}: Props) {
  const [idx, setIdx] = useState(0)
  const [visible, setVisible] = useState(priority)
  const frameRef = useRef<HTMLDivElement>(null)

  // Lazy activate when in viewport
  useEffect(() => {
    if (priority) return
    const el = frameRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [priority])

  // Cycle sources
  useEffect(() => {
    if (!visible || sources.length <= 1) return
    const id = window.setInterval(() => {
      setIdx((i) => (i + 1) % sources.length)
    }, intervalMs)
    return () => window.clearInterval(id)
  }, [visible, sources.length, intervalMs])

  return (
    <motion.div
      ref={frameRef}
      className={clsx('phone-frame relative select-none', className)}
      initial={{ opacity: 0, y: 40, rotate: -3 }}
      animate={{ opacity: 1, y: 0, rotate: -1.2 }}
      transition={{ duration: 1.1, ease: [0.19, 1, 0.22, 1], delay: 0.3 }}
      style={{
        width: 'min(320px, 78vw)',
        animation: 'float-phone 7s ease-in-out infinite',
      }}
    >
      <div className="phone-screen">
        {visible &&
          sources.map((src, i) => (
            <video
              key={src}
              src={src}
              poster={poster}
              autoPlay
              muted
              loop
              playsInline
              preload={priority ? 'auto' : 'metadata'}
              className={clsx(
                'absolute inset-0 h-full w-full object-cover transition-opacity duration-700',
                i === idx ? 'opacity-100' : 'opacity-0'
              )}
            />
          ))}

        {/* subtle screen vignette */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 90% 60% at 50% 10%, transparent 60%, rgba(0,0,0,0.5) 100%)',
          }}
        />
      </div>
      {/* side button + volume slivers for realism */}
      <span className="absolute -right-[3px] top-[120px] h-[64px] w-[3px] rounded-l-sm bg-neutral-800" />
      <span className="absolute -left-[3px] top-[96px] h-[32px] w-[3px] rounded-r-sm bg-neutral-800" />
      <span className="absolute -left-[3px] top-[140px] h-[56px] w-[3px] rounded-r-sm bg-neutral-800" />
    </motion.div>
  )
}
