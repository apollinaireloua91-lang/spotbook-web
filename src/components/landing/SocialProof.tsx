"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { value: 500, suffix: "+", label: "Pros" },
  { value: 10000, suffix: "+", label: "Reservations" },
  { value: 4.9, suffix: "", label: "Note", isDecimal: true, starSuffix: true },
  { value: 50, suffix: "+", label: "Categories" },
];

export default function SocialProof() {
  return (
    <section className="relative py-20">
      {/* Top divider */}
      <div className="section-divider" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm text-white/30 uppercase tracking-[0.2em] font-medium mb-14"
        >
          Des milliers de professionnels font confiance a Spotbook
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="font-display text-4xl md:text-5xl font-extrabold mb-2 tracking-tight">
                {stat.isDecimal ? (
                  <span className="text-white">
                    {stat.value}
                    {stat.starSuffix && (
                      <span className="text-yellow-400 ml-1 text-3xl md:text-4xl">★</span>
                    )}
                  </span>
                ) : (
                  <span className="text-white">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </span>
                )}
              </div>
              <p className="text-sm text-white/30">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="section-divider" />
    </section>
  );
}
