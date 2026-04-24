'use client'

/**
 * Marquee
 * ------------------------------------------------------------------
 * CSS-only infinite horizontal scroller. The content is duplicated
 * once so a -50% translate loops seamlessly. Direction-agnostic and
 * pausable on hover.
 */

import { type ReactNode } from 'react'
import clsx from 'clsx'

type Props = {
  children: ReactNode
  speed?: number // seconds for a full loop
  reverse?: boolean
  pauseOnHover?: boolean
  className?: string
  gap?: number
}

export default function Marquee({
  children,
  speed = 38,
  reverse = false,
  pauseOnHover = true,
  className,
  gap = 48,
}: Props) {
  return (
    <div
      className={clsx('relative flex w-full overflow-hidden', className)}
      style={{
        maskImage:
          'linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)',
        WebkitMaskImage:
          'linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)',
      }}
    >
      <div
        className={clsx(
          'flex shrink-0 items-center',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
        style={{
          gap: `${gap}px`,
          paddingRight: `${gap}px`,
          animation: `${reverse ? 'marquee-x-reverse' : 'marquee-x'} ${speed}s linear infinite`,
        }}
      >
        {children}
        {children}
      </div>
    </div>
  )
}
