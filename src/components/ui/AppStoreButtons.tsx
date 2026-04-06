'use client'

import { motion } from 'framer-motion'

export default function AppStoreButtons({ size = 'default' }: { size?: 'default' | 'large' }) {
  const h = size === 'large' ? 'h-16' : 'h-14'

  return (
    <div className="flex flex-wrap gap-4">
      <motion.a
        href="https://apps.apple.com/app/spotbook"
        target="_blank"
        rel="noopener"
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={`${h} px-6 bg-brand-green rounded-2xl flex items-center gap-3 text-white shadow-lg shadow-brand-green/20 transition-shadow hover:shadow-xl hover:shadow-brand-green/30`}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
        <div className="text-left">
          <div className="text-[10px] opacity-80 leading-none">Télécharger sur</div>
          <div className="text-base font-semibold leading-tight">App Store</div>
        </div>
      </motion.a>

      <motion.a
        href="https://play.google.com/store/apps/details?id=com.spotbook"
        target="_blank"
        rel="noopener"
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={`${h} px-6 bg-brand-card border border-brand-border rounded-2xl flex items-center gap-3 text-brand-green shadow-lg shadow-black/5 transition-shadow hover:shadow-xl`}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.296l2.465 1.428a1 1 0 0 1 0 1.723l-2.465 1.428-2.537-2.537 2.537-2.042zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
        </svg>
        <div className="text-left">
          <div className="text-[10px] opacity-60 leading-none">Disponible sur</div>
          <div className="text-base font-semibold leading-tight">Google Play</div>
        </div>
      </motion.a>
    </div>
  )
}
