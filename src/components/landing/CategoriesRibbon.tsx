'use client'

import { Scissors, UserCheck, Sparkles, Heart, Dumbbell, Camera, Music, UtensilsCrossed, Pen, Palette, Trophy, Hand } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'

const categories = [
  { icon: Scissors, label: 'Coiffure' },
  { icon: UserCheck, label: 'Barber' },
  { icon: Sparkles, label: 'Esthétique' },
  { icon: Heart, label: 'Massage' },
  { icon: Dumbbell, label: 'Fitness' },
  { icon: Camera, label: 'Photographie' },
  { icon: Music, label: 'DJ' },
  { icon: UtensilsCrossed, label: 'Traiteur' },
  { icon: Pen, label: 'Tatouage' },
  { icon: Palette, label: 'Maquillage' },
  { icon: Trophy, label: 'Coach' },
  { icon: Hand, label: 'Nails' },
]

export default function CategoriesRibbon() {
  const doubled = [...categories, ...categories]

  return (
    <section className="py-20 overflow-hidden">
      <ScrollReveal className="text-center mb-12">
        <span className="text-xs tracking-[0.3em] uppercase text-brand-green-light font-semibold mb-4 inline-block">
          · Catégories ·
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Toutes les <span className="gradient-text">catégories</span>
        </h2>
      </ScrollReveal>

      <div className="relative">
        {/* Black fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />

        <div className="flex animate-scroll-left">
          {doubled.map((cat, i) => (
            <div
              key={`${cat.label}-${i}`}
              className="flex-shrink-0 mx-3 px-6 py-4 rounded-2xl bg-brand-card/40 border border-brand-green/25 backdrop-blur-md flex items-center gap-3 hover:border-brand-green-light/60 hover:shadow-neon hover:bg-brand-card/60 transition-all duration-300 cursor-default group"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-green/20 border border-brand-green/30 flex items-center justify-center group-hover:bg-brand-green/30 transition-colors">
                <cat.icon size={18} className="text-brand-green-light" />
              </div>
              <span className="font-medium text-white whitespace-nowrap">{cat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
