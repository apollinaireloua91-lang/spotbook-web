"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/* ── Phone screen mockups for each section ── */
function DiscoverScreen() {
  return (
    <div className="w-full h-full bg-black flex flex-col">
      <div className="flex items-center justify-between px-5 pt-3 pb-1">
        <span className="text-[9px] text-white/50 font-medium">9:41</span>
        <div className="flex gap-1">
          <div className="w-3.5 h-2 rounded-sm bg-white/30" />
        </div>
      </div>
      {/* Feed cards stacked */}
      <div className="flex-1 px-2 pb-2 flex flex-col gap-2 overflow-hidden">
        {[
          { name: "Jade M.", role: "Coiffeuse", color: "from-violet-600/40 to-violet-900/40" },
          { name: "Alex D.", role: "Coach", color: "from-rose-600/40 to-rose-900/40" },
          { name: "Nina K.", role: "Photographe", color: "from-violet-500/40 to-rose-600/40" },
        ].map((card, i) => (
          <div
            key={card.name}
            className={`flex-1 rounded-2xl bg-gradient-to-b ${card.color} p-3 flex flex-col justify-between min-h-0`}
            style={{ opacity: 1 - i * 0.15 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-white/20 ring-1 ring-white/10" />
              <div>
                <div className="text-[9px] font-semibold text-white">{card.name}</div>
                <div className="text-[7px] text-white/50">{card.role}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <div className="flex-1 h-5 rounded-md bg-white/10 flex items-center justify-center">
                <span className="text-[7px] text-white/60 font-medium">Reserver</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-around items-center py-2 px-4 border-t border-white/[0.06]">
        <div className="w-4 h-4 rounded bg-white/30" />
        <div className="w-4 h-4 rounded bg-white/10" />
        <div className="w-4 h-4 rounded bg-white/10" />
        <div className="w-4 h-4 rounded bg-white/10" />
      </div>
    </div>
  );
}

function BookingScreen() {
  return (
    <div className="w-full h-full bg-black flex flex-col">
      <div className="flex items-center justify-between px-5 pt-3 pb-1">
        <span className="text-[9px] text-white/50 font-medium">9:41</span>
        <div className="flex gap-1">
          <div className="w-3.5 h-2 rounded-sm bg-white/30" />
        </div>
      </div>
      <div className="flex-1 px-4 pb-3 flex flex-col gap-3 overflow-hidden">
        {/* Service selection */}
        <div className="mt-2">
          <div className="text-[10px] text-white/40 mb-2">Service</div>
          <div className="bg-white/[0.06] rounded-xl p-3 border border-violet-500/20">
            <div className="flex justify-between items-center">
              <span className="text-[11px] font-semibold text-white">Coupe Homme</span>
              <span className="text-[11px] font-bold text-white">35$</span>
            </div>
            <span className="text-[8px] text-white/40">30 min</span>
          </div>
        </div>
        {/* Date grid */}
        <div>
          <div className="text-[10px] text-white/40 mb-2">Date</div>
          <div className="grid grid-cols-7 gap-1">
            {["L", "M", "M", "J", "V", "S", "D"].map((d, i) => (
              <div key={`h-${d}-${i}`} className="text-[7px] text-white/30 text-center py-1">{d}</div>
            ))}
            {Array.from({ length: 14 }, (_, i) => i + 1).map((d) => (
              <div
                key={d}
                className={`text-[9px] text-center py-1.5 rounded-lg ${
                  d === 8
                    ? "bg-white text-black font-bold"
                    : d > 14
                    ? "text-white/20"
                    : "text-white/50 hover:bg-white/5"
                }`}
              >
                {d}
              </div>
            ))}
          </div>
        </div>
        {/* Time slots */}
        <div>
          <div className="text-[10px] text-white/40 mb-2">Heure</div>
          <div className="grid grid-cols-3 gap-1.5">
            {["10:00", "11:30", "14:00", "15:30", "16:00", "17:30"].map((t) => (
              <div
                key={t}
                className={`text-[9px] text-center py-2 rounded-lg ${
                  t === "11:30"
                    ? "bg-violet-500 text-white font-semibold"
                    : "bg-white/[0.04] text-white/50 border border-white/[0.06]"
                }`}
              >
                {t}
              </div>
            ))}
          </div>
        </div>
        {/* CTA */}
        <div className="mt-auto">
          <div className="bg-white rounded-xl py-3 text-center">
            <span className="text-[11px] font-bold text-black">Confirmer &middot; 35$</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function EventScreen() {
  return (
    <div className="w-full h-full bg-black flex flex-col">
      <div className="flex items-center justify-between px-5 pt-3 pb-1">
        <span className="text-[9px] text-white/50 font-medium">9:41</span>
        <div className="flex gap-1">
          <div className="w-3.5 h-2 rounded-sm bg-white/30" />
        </div>
      </div>
      <div className="flex-1 px-3 pb-3 flex flex-col gap-3 overflow-hidden">
        {/* Event header image area */}
        <div className="h-[120px] rounded-2xl bg-gradient-to-br from-rose-600/30 via-violet-600/30 to-violet-900/30 flex items-end p-3 mt-1 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="relative z-10">
            <div className="text-[12px] font-bold text-white leading-tight">Summer Vibes</div>
            <div className="text-[8px] text-white/60">DJ Nova &middot; 15 Avril 2026</div>
          </div>
        </div>
        {/* Event details */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-violet-500/20 flex items-center justify-center">
              <svg className="w-3 h-3 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <div className="text-[9px] text-white/70">Club Soda, Montreal</div>
              <div className="text-[7px] text-white/30">1225 Boul St-Laurent</div>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="px-2 py-1 rounded-md bg-white/[0.06] text-[8px] text-white/50">General &middot; 25$</div>
            <div className="px-2 py-1 rounded-md bg-violet-500/20 border border-violet-500/30 text-[8px] text-violet-300">VIP &middot; 55$</div>
          </div>
        </div>
        {/* QR Ticket */}
        <div className="mt-auto bg-white/[0.04] rounded-2xl p-3 border border-white/[0.06]">
          <div className="text-[9px] text-white/40 text-center mb-2">Votre billet</div>
          <div className="w-20 h-20 mx-auto bg-white rounded-xl flex items-center justify-center">
            <div className="grid grid-cols-5 gap-[2px]">
              {Array.from({ length: 25 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-[5px] h-[5px] ${Math.random() > 0.4 ? "bg-black" : "bg-white"}`}
                />
              ))}
            </div>
          </div>
          <div className="text-[8px] text-white/30 text-center mt-2">Presentez a l&apos;entree</div>
        </div>
        {/* CTA */}
        <div className="bg-white rounded-xl py-3 text-center">
          <span className="text-[11px] font-bold text-black">Acheter &middot; 25$</span>
        </div>
      </div>
    </div>
  );
}

/* ── Section data ── */
const sections = [
  {
    id: "discover",
    number: "01",
    title: "Parcourez. Likez. Reservez.",
    subtitle: "Decouvrez",
    description:
      "Un feed video personnalise pour decouvrir les meilleurs professionnels pres de chez vous — barbers, coachs, photographes, traiteurs, DJs.",
    screen: <DiscoverScreen />,
    phoneFrom: "left" as const,
  },
  {
    id: "book",
    number: "02",
    title: "3 taps. C'est reserve.",
    subtitle: "Reservez",
    description:
      "Choisissez un service, une date, payez en ligne ou versez un acompte. Confirmation instantanee.",
    screen: <BookingScreen />,
    phoneFrom: "right" as const,
  },
  {
    id: "experience",
    number: "03",
    title: "Vos evenements. Votre ville.",
    subtitle: "Vivez",
    description:
      "Achetez des billets pour les meilleurs evenements locaux. QR code instantane. Presentez et entrez.",
    screen: <EventScreen />,
    phoneFrom: "left" as const,
  },
];

/* ── Single section with parallax ── */
function HowItWorksSection({
  section,
  index,
}: {
  section: (typeof sections)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const phoneY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const isReversed = index % 2 !== 0;

  return (
    <div ref={ref} className="min-h-screen flex items-center py-20 md:py-0">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div
          className={`flex flex-col ${
            isReversed ? "md:flex-row-reverse" : "md:flex-row"
          } items-center gap-16 md:gap-24`}
        >
          {/* Phone */}
          <motion.div
            style={{ y: phoneY }}
            initial={{
              opacity: 0,
              x: section.phoneFrom === "left" ? -60 : 60,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0"
          >
            <div className="relative w-[260px] h-[530px] rounded-[3rem] border-[2px] border-white/[0.08] bg-[#0A0A0A] shadow-2xl overflow-hidden">
              {/* Dynamic Island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[80px] h-[24px] bg-black rounded-full z-20" />
              {section.screen}
              {/* Home indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[90px] h-[4px] bg-white/20 rounded-full z-20" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            style={{ y: textY }}
            initial={{
              opacity: 0,
              x: section.phoneFrom === "left" ? 40 : -40,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 text-center md:text-left"
          >
            <span className="font-display text-7xl md:text-9xl font-extrabold text-white/[0.03] block mb-2 select-none">
              {section.number}
            </span>
            <div className="text-sm font-medium text-violet-400 uppercase tracking-[0.15em] mb-3">
              {section.subtitle}
            </div>
            <h3 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-white leading-[1.1]">
              {section.title}
            </h3>
            <p className="text-white/40 text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
              {section.description}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative">
      {/* Background glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-violet-500/[0.04] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-rose-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      {sections.map((section, i) => (
        <HowItWorksSection key={section.id} section={section} index={i} />
      ))}
    </section>
  );
}
