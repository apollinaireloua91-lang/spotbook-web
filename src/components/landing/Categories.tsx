"use client";

import { motion } from "framer-motion";

const categories = [
  { name: "Coiffure", emoji: "💇" },
  { name: "Barber", emoji: "💈" },
  { name: "Esthétique", emoji: "✨" },
  { name: "Massage", emoji: "💆" },
  { name: "Fitness", emoji: "💪" },
  { name: "Photographie", emoji: "📸" },
  { name: "DJ", emoji: "🎧" },
  { name: "Traiteur", emoji: "🍽" },
  { name: "Tatouage", emoji: "🎨" },
  { name: "Maquillage", emoji: "💄" },
  { name: "Coach", emoji: "🏋" },
  { name: "Nails", emoji: "💅" },
];

export default function Categories() {
  const doubled = [...categories, ...categories];

  return (
    <section className="py-16 overflow-hidden border-y border-white/5">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-8 text-center"
      >
        <p className="text-sm text-white/30 uppercase tracking-widest font-medium">
          Explorez par catégorie
        </p>
      </motion.div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="flex animate-scroll-left">
          {doubled.map((cat, i) => (
            <div
              key={`${cat.name}-${i}`}
              className="flex-shrink-0 mx-3 px-6 py-3 rounded-full glass glass-hover transition-all duration-300 hover:border-violet-500/30 cursor-pointer group"
            >
              <span className="text-lg mr-2 group-hover:scale-110 inline-block transition-transform">
                {cat.emoji}
              </span>
              <span className="text-sm font-medium text-white/60 group-hover:text-white/90 transition-colors">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
