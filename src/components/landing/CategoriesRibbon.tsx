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
    <section className="py-16 overflow-hidden">
      <ScrollReveal className="text-center mb-10">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-text">
          Toutes les catégories
        </h2>
      </ScrollReveal>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex animate-scroll-left">
          {doubled.map((cat, i) => (
            <div
              key={`${cat.label}-${i}`}
              className="flex-shrink-0 mx-3 px-6 py-4 rounded-2xl bg-brand-card border border-brand-border flex items-center gap-3 hover:border-brand-green/20 hover:shadow-lg transition-all duration-300 cursor-default group"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center group-hover:bg-brand-green/15 transition-colors">
                <cat.icon size={18} className="text-brand-green" />
              </div>
              <span className="font-medium text-brand-text whitespace-nowrap">{cat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
