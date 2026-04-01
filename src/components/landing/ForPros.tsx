"use client";

import { motion } from "framer-motion";

const benefits = [
  "Publiez vos videos",
  "Gerez votre agenda",
  "Recevez vos paiements (virement automatique)",
  "Acompte en ligne, reste sur place",
  "Commission transparente : 12%",
];

function ProDashboardMockup() {
  return (
    <div className="relative w-[260px] h-[530px] rounded-[3rem] border-[2px] border-white/[0.08] bg-[#0A0A0A] shadow-2xl overflow-hidden">
      {/* Dynamic Island */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[80px] h-[24px] bg-black rounded-full z-20" />

      <div className="w-full h-full bg-black flex flex-col pt-10 px-4 pb-4">
        <p className="text-white/80 text-[11px] font-semibold mb-3">Tableau de bord</p>

        {/* Revenue card */}
        <div className="bg-white/[0.06] rounded-xl p-3 mb-3 border border-white/[0.04]">
          <p className="text-[9px] text-white/40">Revenus ce mois</p>
          <p className="text-xl font-extrabold mt-0.5 text-white">2 450 $</p>
          <div className="flex items-center gap-1.5 mt-1.5">
            <div className="w-4 h-4 rounded-full bg-green-400/20 flex items-center justify-center">
              <svg className="w-2.5 h-2.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
            <span className="text-[10px] text-green-400 font-medium">+23% vs mois dernier</span>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="bg-white/[0.04] rounded-lg p-2.5 border border-white/[0.04]">
            <p className="text-[8px] text-white/40">Reservations</p>
            <p className="text-base font-bold text-white">34</p>
          </div>
          <div className="bg-white/[0.04] rounded-lg p-2.5 border border-white/[0.04]">
            <p className="text-[8px] text-white/40">Note</p>
            <p className="text-base font-bold text-white">4.9 <span className="text-yellow-400 text-xs">★</span></p>
          </div>
        </div>

        {/* Schedule */}
        <div className="bg-white/[0.04] rounded-xl p-3 flex-1 border border-white/[0.04]">
          <p className="text-[9px] text-white/40 mb-2">Aujourd&apos;hui</p>
          {[
            { time: "10h00", service: "Coupe homme", color: "bg-violet-400" },
            { time: "11h30", service: "Barbe", color: "bg-rose-400" },
            { time: "14h00", service: "Coupe + Barbe", color: "bg-violet-400" },
            { time: "16h00", service: "Fade", color: "bg-rose-400" },
          ].map((apt) => (
            <div
              key={apt.time}
              className="flex items-center gap-2 py-1.5 border-b border-white/[0.04] last:border-0"
            >
              <div className={`w-1 h-4 rounded-full ${apt.color}`} />
              <span className="text-[9px] text-white/30 w-10">{apt.time}</span>
              <span className="text-[9px] text-white/60">{apt.service}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Home indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[90px] h-[4px] bg-white/20 rounded-full z-20" />
    </div>
  );
}

export default function ForPros() {
  return (
    <section id="pros" className="py-24 md:py-40 relative overflow-hidden bg-[#050505]">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-500/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1"
          >
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-violet-500/20 bg-violet-500/[0.06] text-xs font-medium text-violet-400">
              Pour les professionnels
            </div>

            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white leading-[1.1]">
              Vous etes{" "}
              <span className="gradient-text">professionnel</span> ?
            </h2>
            <p className="text-white/40 text-base md:text-lg mb-10 leading-relaxed max-w-lg">
              Developpez votre clientele avec Spotbook.
            </p>

            <ul className="space-y-4 mb-12">
              {benefits.map((benefit, i) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-violet-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <span className="text-white/50 text-sm md:text-base">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-8 py-4 rounded-full bg-white text-black font-semibold text-sm transition-all duration-300 glow-white hover:glow-white-hover"
            >
              Devenir Prestataire — C&apos;est gratuit
            </motion.a>
          </motion.div>

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0"
          >
            <ProDashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
