"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "J'ai double ma clientele en 3 mois grace aux videos.",
    name: "Sarah K.",
    role: "Coiffeuse",
    rating: 5,
    initials: "SK",
  },
  {
    quote: "Mes clients reservent directement apres avoir vu mon travail.",
    name: "Marcus R.",
    role: "Barber",
    rating: 5,
    initials: "MR",
  },
  {
    quote: "200 billets vendus pour mon premier evenement.",
    name: "DJ Nova",
    role: "DJ & Producteur",
    rating: 5,
    initials: "DN",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  // Auto-advance every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 md:py-40 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-500/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Ce qu&apos;ils en disent
          </h2>
          <p className="text-white/30 text-base md:text-lg">
            Des professionnels qui ont transforme leur activite
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[260px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-center"
              >
                {/* Avatar */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-500/20 to-rose-500/20 border border-white/[0.08] flex items-center justify-center mx-auto mb-6">
                  <span className="text-sm font-bold text-white/60">
                    {testimonials[active].initials}
                  </span>
                </div>

                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: testimonials[active].rating }).map(
                    (_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    )
                  )}
                </div>

                {/* Quote */}
                <blockquote className="font-display text-2xl md:text-4xl font-bold leading-snug mb-8 text-white/90 tracking-tight">
                  &ldquo;{testimonials[active].quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div>
                  <p className="font-semibold text-white/70 text-sm">
                    {testimonials[active].name}
                  </p>
                  <p className="text-xs text-white/30 mt-0.5">
                    {testimonials[active].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === active
                    ? "bg-white w-8"
                    : "bg-white/15 w-1.5 hover:bg-white/25"
                }`}
                aria-label={`Temoignage ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
