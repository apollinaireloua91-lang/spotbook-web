'use client'

import { motion } from 'framer-motion'

interface Phone3DProps {
  screenContent?: 'feed' | 'booking' | 'event' | 'dashboard'
  className?: string
}

export default function Phone3D({ screenContent = 'feed', className = '' }: Phone3DProps) {
  const screenColors: Record<string, { bg: string; items: string[] }> = {
    feed: {
      bg: 'from-brand-card to-white',
      items: ['#043603', '#0a5c07', '#E8E0D0', '#043603', '#FFF3DA'],
    },
    booking: {
      bg: 'from-white to-brand-card',
      items: ['#043603', '#E8E0D0', '#0a5c07', '#FFF3DA', '#043603'],
    },
    event: {
      bg: 'from-brand-card to-brand-beige-dark',
      items: ['#0a5c07', '#043603', '#FFF3DA', '#E8E0D0', '#043603'],
    },
    dashboard: {
      bg: 'from-white to-brand-card',
      items: ['#043603', '#FFF3DA', '#0a5c07', '#E8E0D0', '#043603'],
    },
  }

  const screen = screenColors[screenContent]

  return (
    <div className={`phone-3d ${className}`}>
      <motion.div
        className="phone-3d-inner relative"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {/* Phone frame */}
        <div className="relative w-[280px] h-[580px] rounded-[3rem] bg-brand-text border-[6px] border-brand-text shadow-[0_20px_80px_rgba(4,54,3,0.2),0_0_0_1px_rgba(4,54,3,0.05)] overflow-hidden">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-brand-text rounded-b-2xl z-20" />

          {/* Screen */}
          <div className={`absolute inset-[3px] rounded-[2.5rem] bg-gradient-to-b ${screen.bg} overflow-hidden`}>
            {/* Status bar */}
            <div className="flex justify-between items-center px-8 pt-4 pb-2">
              <span className="text-[10px] font-semibold text-brand-text/60">9:41</span>
              <div className="flex gap-1">
                <div className="w-4 h-2 rounded-sm bg-brand-text/30" />
                <div className="w-4 h-2 rounded-sm bg-brand-text/20" />
                <div className="w-6 h-3 rounded-sm bg-brand-green/40" />
              </div>
            </div>

            {/* Mock content */}
            <div className="px-4 pt-6 space-y-3">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-4 rounded-full" style={{ backgroundColor: screen.items[0], opacity: 0.8 }} />
                <div className="w-8 h-8 rounded-full bg-brand-card border-2 border-brand-border" />
              </div>

              {/* Cards */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.2 }}
                  className="rounded-2xl p-3 space-y-2"
                  style={{ backgroundColor: `${screen.items[i]}15` }}
                >
                  <div className="flex gap-2 items-center">
                    <div className="w-8 h-8 rounded-full" style={{ backgroundColor: screen.items[i], opacity: 0.3 }} />
                    <div className="space-y-1 flex-1">
                      <div className="h-2 rounded-full w-20" style={{ backgroundColor: screen.items[i], opacity: 0.4 }} />
                      <div className="h-1.5 rounded-full w-14" style={{ backgroundColor: screen.items[i], opacity: 0.2 }} />
                    </div>
                  </div>
                  <div className="h-24 rounded-xl" style={{ backgroundColor: screen.items[i], opacity: 0.08 }} />
                  <div className="flex gap-2">
                    <div className="h-6 rounded-lg flex-1" style={{ backgroundColor: screen.items[0], opacity: 0.15 }} />
                    <div className="h-6 w-6 rounded-lg" style={{ backgroundColor: screen.items[1], opacity: 0.1 }} />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom nav */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-lg border-t border-brand-border/50 flex items-center justify-around px-6">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className={`w-6 h-6 rounded-lg ${i === 0 ? 'bg-brand-green' : 'bg-brand-border/60'}`} />
              ))}
            </div>
          </div>
        </div>

        {/* Reflection */}
        <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />

        {/* Shadow */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[200px] h-[20px] bg-brand-green/10 rounded-full blur-xl" />
      </motion.div>
    </div>
  )
}
