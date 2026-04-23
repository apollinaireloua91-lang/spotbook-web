'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Phone3DProps {
  screenContent?: 'feed' | 'booking' | 'event' | 'dashboard'
  videoSrc?: string
  videoSrcs?: string[]
  className?: string
}

export default function Phone3D({ screenContent = 'feed', videoSrc, videoSrcs, className = '' }: Phone3DProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const sources = videoSrcs || (videoSrc ? [videoSrc] : [])
  const hasVideo = sources.length > 0
  const isCarousel = sources.length > 1

  const handleVideoEnded = useCallback(() => {
    if (isCarousel) {
      setCurrentVideoIndex((prev) => (prev + 1) % sources.length)
    }
  }, [isCarousel, sources.length])

  useEffect(() => {
    if (videoRef.current && isCarousel) {
      videoRef.current.load()
      videoRef.current.play().catch(() => {})
    }
  }, [currentVideoIndex, isCarousel])

  // Mock screens use the neon purple palette
  const screenColors: Record<string, { bg: string; items: string[] }> = {
    feed: {
      bg: 'from-[#1A0330] to-[#3E065F]',
      items: ['#C026D3', '#8E05C2', '#700B97', '#B026E8', '#3E065F'],
    },
    booking: {
      bg: 'from-[#3E065F] to-[#1A0330]',
      items: ['#8E05C2', '#B026E8', '#700B97', '#C026D3', '#3E065F'],
    },
    event: {
      bg: 'from-[#1A0330] via-[#3E065F] to-[#700B97]',
      items: ['#B026E8', '#C026D3', '#8E05C2', '#700B97', '#3E065F'],
    },
    dashboard: {
      bg: 'from-[#3E065F] to-[#1A0330]',
      items: ['#C026D3', '#8E05C2', '#B026E8', '#700B97', '#3E065F'],
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
        {/* Neon rim glow behind phone */}
        <div className="absolute -inset-4 rounded-[3.5rem] bg-brand-green/20 blur-2xl pointer-events-none" />

        {/* Phone frame */}
        <div className="relative w-[280px] h-[580px] rounded-[3rem] bg-black border-[6px] border-[#0a0012] shadow-neon-lg overflow-hidden">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-b-2xl z-20" />

          {/* Screen */}
          <div className={`absolute inset-[3px] rounded-[2.5rem] bg-gradient-to-b ${screen.bg} overflow-hidden`}>
            {hasVideo ? (
              <>
                {/* Video feed */}
                <AnimatePresence mode="wait">
                  <motion.video
                    key={sources[currentVideoIndex]}
                    ref={videoRef}
                    src={sources[currentVideoIndex]}
                    autoPlay
                    loop={!isCarousel}
                    muted
                    playsInline
                    onEnded={isCarousel ? handleVideoEnded : undefined}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Gradient overlay top */}
                <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/60 to-transparent z-10" />

                {/* Status bar over video */}
                <div className="relative z-10 flex justify-between items-center px-8 pt-4 pb-2">
                  <span className="text-[10px] font-semibold text-white/80">9:41</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-2 rounded-sm bg-white/40" />
                    <div className="w-4 h-2 rounded-sm bg-white/30" />
                    <div className="w-6 h-3 rounded-sm bg-white/50" />
                  </div>
                </div>

                {/* Gradient overlay bottom */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent z-10" />

                {/* Feed UI overlay — like/comment/share */}
                <div className="absolute right-3 bottom-20 z-10 flex flex-col items-center gap-4">
                  {['♥', '💬', '↗'].map((icon, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + i * 0.15 }}
                      className="flex flex-col items-center gap-1"
                    >
                      <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-sm">
                        {icon}
                      </div>
                      <span className="text-[8px] text-white/70 font-medium">
                        {i === 0 ? '2.4k' : i === 1 ? '89' : ''}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Pro info overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute left-3 bottom-16 z-10"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, #B026E8, #700B97)',
                        boxShadow: '0 0 10px rgba(192,38,211,0.6)',
                      }}
                    >
                      <span className="text-[9px] font-bold text-white">S</span>
                    </div>
                    <span className="text-[11px] font-semibold text-white">Spotbook Pro</span>
                  </div>
                  <p className="text-[9px] text-white/70 max-w-[140px] leading-tight">
                    Réservez en un tap ✨
                  </p>
                </motion.div>

                {/* Carousel dots */}
                {isCarousel && (
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
                    {sources.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          i === currentVideoIndex ? 'w-4 bg-brand-neon shadow-neon' : 'w-1.5 bg-white/40'
                        }`}
                      />
                    ))}
                  </div>
                )}

                {/* Bottom nav */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-black/60 backdrop-blur-lg border-t border-brand-green/20 z-10 flex items-center justify-around px-6">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={`w-5 h-5 rounded-lg ${i === 0 ? 'bg-brand-neon shadow-neon' : 'bg-white/25'}`}
                    />
                  ))}
                </div>
              </>
            ) : (
              <>
                {/* Status bar */}
                <div className="flex justify-between items-center px-8 pt-4 pb-2">
                  <span className="text-[10px] font-semibold text-white/70">9:41</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-2 rounded-sm bg-white/30" />
                    <div className="w-4 h-2 rounded-sm bg-white/20" />
                    <div className="w-6 h-3 rounded-sm bg-brand-neon/70" />
                  </div>
                </div>

                {/* Mock content */}
                <div className="px-4 pt-6 space-y-3">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-16 h-4 rounded-full"
                      style={{ backgroundColor: screen.items[0], opacity: 0.9 }}
                    />
                    <div className="w-8 h-8 rounded-full bg-brand-card border-2 border-brand-green/50" />
                  </div>

                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.2 }}
                      className="rounded-2xl p-3 space-y-2"
                      style={{ backgroundColor: `${screen.items[i]}20`, border: `1px solid ${screen.items[i]}40` }}
                    >
                      <div className="flex gap-2 items-center">
                        <div
                          className="w-8 h-8 rounded-full"
                          style={{ backgroundColor: screen.items[i], opacity: 0.6 }}
                        />
                        <div className="space-y-1 flex-1">
                          <div
                            className="h-2 rounded-full w-20"
                            style={{ backgroundColor: screen.items[i], opacity: 0.7 }}
                          />
                          <div
                            className="h-1.5 rounded-full w-14"
                            style={{ backgroundColor: screen.items[i], opacity: 0.4 }}
                          />
                        </div>
                      </div>
                      <div
                        className="h-24 rounded-xl"
                        style={{ backgroundColor: screen.items[i], opacity: 0.18 }}
                      />
                      <div className="flex gap-2">
                        <div
                          className="h-6 rounded-lg flex-1"
                          style={{ backgroundColor: screen.items[0], opacity: 0.35 }}
                        />
                        <div
                          className="h-6 w-6 rounded-lg"
                          style={{ backgroundColor: screen.items[1], opacity: 0.25 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom nav */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-black/60 backdrop-blur-lg border-t border-brand-green/20 flex items-center justify-around px-6">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={`w-6 h-6 rounded-lg ${i === 0 ? 'bg-brand-neon shadow-neon' : 'bg-white/20'}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Reflection */}
        <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/15 via-transparent to-transparent pointer-events-none" />

        {/* Shadow */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[220px] h-[24px] bg-brand-green/40 rounded-full blur-2xl" />
      </motion.div>
    </div>
  )
}
