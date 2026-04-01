"use client";

import { motion } from "framer-motion";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/utils";

export default function DownloadCTA() {
  return (
    <section id="download" className="py-24 md:py-40 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-violet-500/[0.12] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-rose-500/[0.06] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-white">
            Pret a commencer ?
          </h2>
          <p className="text-white/40 text-base md:text-lg mb-12 max-w-lg mx-auto leading-relaxed">
            Telechargez Spotbook gratuitement et decouvrez les meilleurs
            professionnels pres de chez vous.
          </p>

          {/* App store badges */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-black font-medium transition-all duration-300 glow-white hover:glow-white-hover"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] opacity-50 leading-none">
                  Telecharger sur
                </div>
                <div className="text-base font-semibold leading-tight">
                  App Store
                </div>
              </div>
            </motion.a>

            <motion.a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-white/[0.1] bg-white/[0.03] backdrop-blur-sm font-medium transition-all duration-300 hover:bg-white/[0.08] hover:border-white/[0.15]"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] opacity-50 leading-none">
                  Disponible sur
                </div>
                <div className="text-base font-semibold leading-tight">
                  Google Play
                </div>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
