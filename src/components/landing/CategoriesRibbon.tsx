'use client'

/**
 * CategoriesRibbon v2
 * ------------------------------------------------------------------
 * Two counter-rotating marquees of category cards, wrapped in a
 * perspective container so the whole strip feels like a tilted carousel.
 * Each card: gradient border, emoji glyph, category name, short tag.
 */

import { motion } from 'framer-motion'
import Marquee from '@/components/ui/Marquee'

type Cat = { emoji: string; name: string; tag: string }

const ROW_A: Cat[] = [
  { emoji: '💈', name: 'Barbiers', tag: 'Fade, shave, beard grooming' },
  { emoji: '💅', name: 'Manucure', tag: 'Gel, acrylique, nail art' },
  { emoji: '📸', name: 'Photographes', tag: 'Portrait, mariage, lifestyle' },
  { emoji: '🎧', name: 'DJs', tag: 'Mariages, clubs, privés' },
  { emoji: '💪', name: 'Coachs', tag: 'Privé, groupe, à domicile' },
  { emoji: '🍽️', name: 'Traiteurs', tag: 'Événements, entreprise, privé' },
  { emoji: '💇', name: 'Coiffure', tag: 'Coupe, couleur, balayage' },
]

const ROW_B: Cat[] = [
  { emoji: '🎨', name: 'Tatoueurs', tag: 'Fineline, traditionnel, color' },
  { emoji: '💄', name: 'Maquillage', tag: 'Mariée, éditorial, soirée' },
  { emoji: '🧘', name: 'Yoga & bien-être', tag: 'Cours privé ou en studio' },
  { emoji: '🍸', name: 'Mixologie', tag: 'Bar mobile, cocktails signature' },
  { emoji: '🎂', name: 'Pâtissiers', tag: 'Gâteaux, desserts sur mesure' },
  { emoji: '✂️', name: 'Esthétique', tag: 'Épilation, soins, relaxation' },
  { emoji: '🎤', name: 'Animateurs', tag: 'MC, karaoké, événementiel' },
]

export default function CategoriesRibbon() {
  return (
    <section className="relative overflow-hidden py-32 md:py-40">
      <div className="mx-auto max-w-[1240px] px-6 text-center md:px-12">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className="eyebrow"
        >
          · Catégories ·
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1], delay: 0.05 }}
          className="display-lg font-display mx-auto mt-5 max-w-[780px] text-balance"
        >
          50+ catégories.{' '}
          <span className="bg-gradient-to-r from-[#FDF2C3] via-[#B026E8] to-[#8E05C2] bg-clip-text text-transparent">
            Toutes vérifiées.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
          className="mx-auto mt-5 max-w-[560px] text-[17px] leading-[1.55] text-[color:var(--fg-muted)]"
        >
          De la coupe en salon au DJ pour votre mariage, chaque pro passe
          par une validation manuelle avant d’entrer dans le feed.
        </motion.p>
      </div>

      <div
        className="mt-16 flex flex-col gap-5"
        style={{
          perspective: '1400px',
        }}
      >
        <div
          style={{
            transform: 'rotateX(14deg) rotateZ(-2deg)',
            transformOrigin: 'center center',
          }}
        >
          <Marquee speed={52} gap={20}>
            {ROW_A.map((c) => (
              <CategoryCard key={c.name} cat={c} />
            ))}
          </Marquee>
        </div>
        <div
          style={{
            transform: 'rotateX(-14deg) rotateZ(2deg)',
            transformOrigin: 'center center',
          }}
        >
          <Marquee speed={58} gap={20} reverse>
            {ROW_B.map((c) => (
              <CategoryCard key={c.name} cat={c} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}

function CategoryCard({ cat }: { cat: Cat }) {
  return (
    <div
      className="group relative flex h-[132px] w-[260px] shrink-0 items-center gap-4 rounded-2xl px-5 transition-transform duration-500 hover:-translate-y-1"
      style={{
        background:
          'linear-gradient(135deg, rgba(176,38,232,0.12) 0%, rgba(12,12,12,0.8) 55%, rgba(142,5,194,0.18) 100%)',
        boxShadow:
          '0 0 0 1px rgba(255,255,255,0.06) inset, 0 20px 40px -24px rgba(176,38,232,0.35)',
      }}
    >
      <span
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-3xl"
        style={{
          background:
            'linear-gradient(135deg, rgba(176,38,232,0.25), rgba(62,6,95,0.5))',
          boxShadow: '0 0 20px -4px rgba(176,38,232,0.55)',
        }}
      >
        {cat.emoji}
      </span>
      <div className="flex flex-col">
        <span className="font-display text-[17px] font-semibold tracking-[-0.02em] text-[color:var(--fg)]">
          {cat.name}
        </span>
        <span className="mt-1 text-[12px] leading-[1.4] text-[color:var(--fg-faint)]">
          {cat.tag}
        </span>
      </div>
    </div>
  )
}
