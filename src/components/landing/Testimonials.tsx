'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah K.',
    role: 'Coiffeuse',
    text: "Depuis que j'utilise Spotbook, j'ai doublé ma clientèle en 3 mois. L'interface est intuitive et mes clientes adorent réserver directement après avoir vu mes créations.",
    rating: 5,
    avatar: 'S',
  },
  {
    name: 'Marcus R.',
    role: 'Barber',
    text: "L'app est incroyable. Mes clients réservent directement après avoir vu mes vidéos. Le dashboard me permet de tout gérer depuis mon téléphone.",
    rating: 5,
    avatar: 'M',
  },
  {
    name: 'DJ Nova',
    role: 'DJ & Producteur',
    text: "J'ai organisé mon premier événement sur Spotbook et vendu 200 billets en une semaine. La billetterie avec QR code est vraiment pratique.",
    rating: 5,
    avatar: 'D',
  },
  {
    name: 'Amina L.',
    role: 'Photographe',
    text: "Spotbook a transformé mon business. Le feed vidéo me permet de montrer mon portfolio de manière dynamique et les réservations arrivent toutes seules.",
    rating: 5,
    avatar: 'A',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((c) => (c + 1) % testimonials.length)
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-text mb-4">
            Ce qu&apos;ils en disent
          </h2>
          <p className="text-brand-muted text-lg">
            Des professionnels qui font confiance à Spotbook
          </p>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card p-10 sm:p-14 text-center relative"
            >
              <Quote size={40} className="text-brand-green/10 mx-auto mb-6" />

              <p className="text-xl sm:text-2xl text-brand-text leading-relaxed mb-8 font-light">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>

              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-brand-green text-brand-green" />
                ))}
              </div>

              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-brand-green flex items-center justify-center text-white font-bold text-lg">
                  {testimonials[current].avatar}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-brand-text">{testimonials[current].name}</div>
                  <div className="text-sm text-brand-muted">{testimonials[current].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-brand-card border border-brand-border flex items-center justify-center hover:bg-brand-green/5 transition-colors"
            >
              <ChevronLeft size={20} className="text-brand-green" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 bg-brand-green' : 'w-2 bg-brand-border'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-brand-card border border-brand-border flex items-center justify-center hover:bg-brand-green/5 transition-colors"
            >
              <ChevronRight size={20} className="text-brand-green" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
