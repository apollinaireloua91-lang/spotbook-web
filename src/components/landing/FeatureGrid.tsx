"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Feed Video",
    description:
      "Comme TikTok, mais pour decouvrir des talents. Scrollez, likez, reservez — le tout dans un feed personnalise.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
      </svg>
    ),
    span: "md:col-span-2 md:row-span-2",
    large: true,
    mockup: (
      <div className="mt-6 relative h-[180px] rounded-xl overflow-hidden bg-gradient-to-br from-violet-900/30 via-violet-800/20 to-black border border-white/[0.04]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <svg className="w-5 h-5 text-white/70 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        {/* Fake UI elements */}
        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-white/20" />
          <div>
            <div className="w-16 h-1.5 bg-white/20 rounded" />
            <div className="w-10 h-1 bg-white/10 rounded mt-1" />
          </div>
        </div>
        <div className="absolute bottom-3 right-3 flex gap-2">
          <div className="w-6 h-6 rounded-full bg-white/10" />
          <div className="w-6 h-6 rounded-full bg-white/10" />
        </div>
        {/* Animated shimmer bar */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 shimmer" />
      </div>
    ),
  },
  {
    title: "Paiement Securise",
    description:
      "Stripe Connect integre. Paiement complet ou acompte. Remboursement automatique.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    span: "md:col-span-2 md:row-span-2",
    large: true,
    mockup: (
      <div className="mt-6 flex items-center gap-4">
        <div className="flex-1 bg-white/[0.04] rounded-xl p-4 border border-white/[0.06]">
          <div className="flex items-center gap-2 mb-3">
            {/* Stripe logo simplified */}
            <div className="w-8 h-8 rounded-lg bg-[#635BFF]/20 flex items-center justify-center">
              <span className="text-[#635BFF] font-bold text-xs">S</span>
            </div>
            <span className="text-[10px] text-white/40">Stripe Connect</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-green-400/20 flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <span className="text-[10px] text-white/40">Chiffre SSL</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-green-400/20 flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <span className="text-[10px] text-white/40">3D Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-green-400/20 flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <span className="text-[10px] text-white/40">Virement auto</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Reservation Instantanee",
    description: "Service, date, paiement — tout en 3 taps.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    span: "md:col-span-1",
    large: false,
  },
  {
    title: "Billetterie",
    description: "Evenements locaux avec QR code instantane.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
      </svg>
    ),
    span: "md:col-span-1",
    large: false,
  },
  {
    title: "Messagerie",
    description: "Discutez directement avec votre prestataire.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    span: "md:col-span-1",
    large: false,
  },
  {
    title: "Dashboard Pro",
    description: "Gerez tout : agenda, services, revenus, analytics.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    span: "md:col-span-1",
    large: false,
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="py-24 md:py-40 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-rose-500/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Tout ce qu&apos;il vous faut
          </h2>
          <p className="text-white/30 text-base md:text-lg max-w-xl mx-auto">
            Une plateforme complete pour les clients et les professionnels
          </p>
        </motion.div>

        {/* Bento grid: 4 columns, 2 large cards span 2 cols + 2 rows, 4 small cards fill rest */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5, ease: "easeOut" }}
              className={feature.span}
            >
              <div className={`bento-card p-6 h-full ${feature.large ? "md:p-8" : ""}`}>
                <div
                  className={`${
                    feature.large ? "w-12 h-12" : "w-10 h-10"
                  } rounded-xl bg-gradient-to-br from-violet-500/10 to-rose-500/10 border border-violet-500/10 flex items-center justify-center mb-4 text-violet-400 transition-transform duration-300 group-hover:scale-110`}
                >
                  {feature.icon}
                </div>
                <h3 className={`font-display font-bold mb-2 ${feature.large ? "text-xl" : "text-lg"}`}>
                  {feature.title}
                </h3>
                <p className="text-white/35 text-sm leading-relaxed">
                  {feature.description}
                </p>
                {feature.large && "mockup" in feature && feature.mockup}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
