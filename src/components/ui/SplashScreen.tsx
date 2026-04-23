'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Max time we'll ever show the splash — even if the video fails/loops/stalls.
const MAX_SPLASH_MS = 3000

export default function SplashScreen({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Safety timeout — always dismiss the splash after MAX_SPLASH_MS
    const timeout = setTimeout(() => setShow(false), MAX_SPLASH_MS)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            key="splash"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
          >
            <video
              ref={videoRef}
              src="/videos/splash.mp4"
              autoPlay
              muted
              playsInline
              onEnded={() => setShow(false)}
              onError={() => setShow(false)}
              className="w-full h-full object-cover"
            />
            {/* Click-to-skip: failsafe if user is impatient or video hangs */}
            <button
              type="button"
              onClick={() => setShow(false)}
              aria-label="Passer l'intro"
              className="absolute inset-0 w-full h-full cursor-pointer"
            />
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  )
}
