'use client'

/**
 * RevenueCalculator
 * ------------------------------------------------------------------
 * Two sliders: clients/week + avg ticket. Animates the projected
 * monthly revenue and the annualized net. Designed for pros — baked
 * assumption: Spotbook is 0% commission, so gross = net.
 */

import { useState } from 'react'
import { motion } from 'framer-motion'

const CURRENCY = new Intl.NumberFormat('fr-CA', {
  style: 'currency',
  currency: 'CAD',
  maximumFractionDigits: 0,
})

export default function RevenueCalculator() {
  const [clientsPerWeek, setClientsPerWeek] = useState(18)
  const [avgTicket, setAvgTicket] = useState(65)

  const weeklyGross = clientsPerWeek * avgTicket
  const monthlyGross = Math.round(weeklyGross * 4.33)
  const yearlyGross = Math.round(weeklyGross * 52)

  return (
    <section id="calculator" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-[1080px] px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
          className="mx-auto max-w-[720px] text-center"
        >
          <span className="eyebrow">· Simulateur ·</span>
          <h2 className="display-lg font-display mt-5 text-balance">
            Combien tu pourrais{' '}
            <span className="bg-gradient-to-r from-[#FDF2C3] via-[#B026E8] to-[#8E05C2] bg-clip-text text-transparent">
              encaisser
            </span>{' '}
            avec Spotbook.
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-[17px] leading-[1.55] text-[color:var(--fg-muted)]">
            0% de commission, paiement direct via Stripe Connect. Tout ce que
            tu vois ici, tu le gardes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
          className="relative mt-16 overflow-hidden rounded-[32px] border border-white/10 p-8 md:p-12"
          style={{
            background:
              'linear-gradient(180deg, rgba(176,38,232,0.08) 0%, rgba(12,12,12,0.9) 55%)',
            boxShadow:
              '0 0 0 1px rgba(176,38,232,0.14) inset, 0 40px 80px -40px rgba(176,38,232,0.45)',
          }}
        >
          {/* Ambient glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-20"
            style={{
              background:
                'radial-gradient(ellipse 50% 55% at 50% 0%, rgba(176,38,232,0.35), transparent 70%)',
              filter: 'blur(30px)',
            }}
          />

          <div className="relative grid gap-10 md:grid-cols-2 md:gap-14">
            <div className="flex flex-col gap-8">
              <Slider
                label="Clients par semaine"
                value={clientsPerWeek}
                onChange={setClientsPerWeek}
                min={1}
                max={60}
                unit={clientsPerWeek > 1 ? 'clients' : 'client'}
              />
              <Slider
                label="Panier moyen"
                value={avgTicket}
                onChange={setAvgTicket}
                min={15}
                max={500}
                step={5}
                unit="$"
              />

              <div className="grid grid-cols-2 gap-3 pt-2">
                <Stat label="Par semaine" value={CURRENCY.format(weeklyGross)} />
                <Stat label="Par année" value={CURRENCY.format(yearlyGross)} />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <span className="eyebrow text-[color:var(--sb-cream)]">
                · Revenu mensuel estimé ·
              </span>
              <motion.div
                key={monthlyGross}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.19, 1, 0.22, 1] }}
                className="font-display mt-4 text-[68px] font-semibold leading-none tracking-[-0.05em] md:text-[88px]"
                style={{
                  background:
                    'linear-gradient(135deg, #FDF2C3 0%, #B026E8 55%, #8E05C2 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  filter: 'drop-shadow(0 8px 30px rgba(176,38,232,0.35))',
                }}
              >
                {CURRENCY.format(monthlyGross)}
              </motion.div>
              <p className="mt-5 max-w-[300px] text-[13px] leading-[1.5] text-[color:var(--fg-faint)]">
                Estimation brute = net. Aucun frais de plateforme, pas de
                commission sur service.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Slider({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  unit,
}: {
  label: string
  value: number
  onChange: (n: number) => void
  min: number
  max: number
  step?: number
  unit?: string
}) {
  const pct = ((value - min) / (max - min)) * 100
  return (
    <label className="flex flex-col gap-3">
      <div className="flex items-baseline justify-between">
        <span className="text-[13px] uppercase tracking-[0.18em] text-[color:var(--fg-faint)]">
          {label}
        </span>
        <span className="font-display text-[22px] font-semibold tabular-nums tracking-[-0.02em] text-[color:var(--fg)]">
          {unit === '$' ? `${value}$` : `${value} ${unit ?? ''}`.trim()}
        </span>
      </div>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="peer relative z-10 h-2 w-full cursor-pointer appearance-none bg-transparent focus:outline-none [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-[color:var(--sb-cream)] [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[color:var(--sb-violet)] [&::-webkit-slider-thumb]:bg-[color:var(--sb-cream)] [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(176,38,232,0.25),0_0_20px_rgba(253,242,195,0.6)] [&::-webkit-slider-thumb]:transition-transform hover:[&::-webkit-slider-thumb]:scale-110"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-white/10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full"
          style={{
            width: `${pct}%`,
            background:
              'linear-gradient(90deg, #B026E8 0%, #FDF2C3 100%)',
            boxShadow: '0 0 12px rgba(176,38,232,0.6)',
          }}
        />
      </div>
    </label>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
      <div className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--fg-faint)]">
        {label}
      </div>
      <div className="mt-2 font-display text-[22px] font-semibold tabular-nums tracking-[-0.02em] text-[color:var(--fg)]">
        {value}
      </div>
    </div>
  )
}
