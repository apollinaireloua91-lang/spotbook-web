import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'À propos — Spotbook, la super-app des services et événements',
  description:
    'La mission Spotbook : transformer le marché informel des services locaux et des événements au Québec en un écosystème structuré, fluide et humain.',
  alternates: { canonical: 'https://getspotbook.app/a-propos' },
  openGraph: {
    title: 'À propos de Spotbook',
    description:
      'La super-app qui combine feed vidéo, réservation de services et billetterie événementielle pour les indépendants du Québec et de la Côte d’Ivoire.',
    url: 'https://getspotbook.app/a-propos',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <main className="relative">
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden pt-[140px] pb-24 md:pt-[180px] md:pb-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 70% at 30% 10%, rgba(176,38,232,0.38), transparent 60%), radial-gradient(ellipse 50% 70% at 100% 20%, rgba(176,38,232,0.22), transparent 65%)',
          }}
        />
        <div className="bg-grid-fine pointer-events-none absolute inset-0 opacity-60" />

        <div className="relative mx-auto max-w-[1080px] px-6 md:px-12">
          <span className="chip mb-8">
            <Sparkles size={12} className="text-[color:var(--sb-cream)]" />
            Notre histoire
          </span>

          <h1 className="display-xl font-display text-balance">
            Transformer l’inspiration en{' '}
            <span className="bg-gradient-to-r from-[#FDF2C3] via-[#B026E8] to-[#8E05C2] bg-clip-text text-transparent">
              réservation confirmée,
            </span>{' '}
            en quelques secondes.
          </h1>

          <p className="mt-10 max-w-[680px] text-[19px] leading-[1.6] text-[color:var(--fg-muted)] md:text-[22px]">
            Spotbook est une super-app mobile qui combine l’inspiration visuelle
            de TikTok, la réservation de services de Planity et la billetterie
            d’Eventbrite — en une seule plateforme fluide. Notre mission :
            digitaliser le marché encore très informel des services locaux et
            des événements indépendants.
          </p>
        </div>
      </section>

      {/* ---------- Stats band ---------- */}
      <section className="relative py-16 md:py-20">
        <div className="mx-auto max-w-[1240px] px-6 md:px-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <BigStat
              value="8M+"
              label="Réservations beauté/mois au Canada"
            />
            <BigStat
              value="2,1 Md$"
              label="Marché de la billetterie canadienne"
            />
            <BigStat
              value="350K+"
              label="Prestataires cibles (CA + CI)"
            />
          </div>
        </div>
      </section>

      {/* ---------- Vision ---------- */}
      <section className="relative py-28 md:py-36">
        <div className="mx-auto max-w-[1080px] px-6 md:px-12">
          <div className="grid gap-14 md:grid-cols-[1fr_1.2fr] md:gap-20">
            <div>
              <span className="eyebrow">· Notre vision ·</span>
              <h2 className="display-lg font-display mt-5 text-balance">
                Un écosystème{' '}
                <span className="bg-gradient-to-r from-[#FDF2C3] via-[#B026E8] to-[#8E05C2] bg-clip-text text-transparent">
                  structuré
                </span>{' '}
                pour un marché informel.
              </h2>
            </div>
            <div className="flex flex-col gap-6 text-[17px] leading-[1.7] text-[color:var(--fg-muted)] md:text-[18px]">
              <p>
                Au Québec comme en Côte d’Ivoire, une grande partie des
                prestataires indépendants — coiffeurs, barbiers, esthéticiennes,
                coachs, DJs, photographes — fonctionnent encore via des canaux
                fragmentés : Instagram DMs, WhatsApp, virements Interac ou
                Mobile Money, captures d’écran, carnets papier.
              </p>
              <p>
                Cette fragmentation crée de la friction, fait perdre du temps et
                empêche la professionnalisation. Nous construisons la plateforme
                qui regroupe découverte, réservation, paiement et billetterie
                dans une seule expérience — pensée pour l’indépendant d’abord.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Problem → Solution ---------- */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6 md:px-12">
          <div className="mx-auto mb-16 max-w-[720px] text-center">
            <span className="eyebrow">· Avant / Après ·</span>
            <h2 className="display-md font-display mt-5 text-balance">
              Ce qu’on remplace.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <SideCard
              variant="before"
              title="Sans Spotbook"
              items={[
                'DMs chronophages pour connaître disponibilités et tarifs',
                'Agenda papier ou Google Calendar non synchronisé',
                'Virements Interac / Mobile Money sans garantie',
                'No-shows à 15-20% des rendez-vous',
                'Billetterie bricolée : Excel + screenshots',
                'Outils éclatés sur 5+ canaux différents',
              ]}
            />
            <SideCard
              variant="after"
              title="Avec Spotbook"
              items={[
                'Feed vidéo vertical pour découvrir et inspirer',
                'Calendrier temps réel, zéro double-booking',
                'Paiement intégré (Stripe + Mobile Money)',
                'Acomptes + rappels → −70% de no-shows',
                'Billetterie QR code infalsifiable',
                'Services + événements dans une seule app',
              ]}
            />
          </div>
        </div>
      </section>

      {/* ---------- Markets ---------- */}
      <section className="relative py-28 md:py-36">
        <div className="mx-auto max-w-[1240px] px-6 md:px-12">
          <div className="mx-auto mb-16 max-w-[720px] text-center">
            <span className="eyebrow">· Deux marchés, une plateforme ·</span>
            <h2 className="display-lg font-display mt-5 text-balance">
              Au Québec et en{' '}
              <span className="bg-gradient-to-r from-[#FDF2C3] via-[#B026E8] to-[#8E05C2] bg-clip-text text-transparent">
                Côte d’Ivoire.
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-[560px] text-[17px] leading-[1.6] text-[color:var(--fg-muted)]">
              Une plateforme conçue pour deux réalités : un marché mature porté
              par la digitalisation, et un marché émergent où le mobile money
              domine déjà.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <MarketCard
              flag="🇨🇦"
              name="Canada — Québec"
              tagline="Marché mature en pleine digitalisation"
              points={[
                ['8M+', 'Réservations beauté / mois'],
                ['180K+', 'Prestataires indépendants'],
                ['2,1 Md$', 'Marché billetterie canadienne'],
                ['+12%/an', 'Croissance du secteur'],
              ]}
            />
            <MarketCard
              flag="🇨🇮"
              name="Côte d’Ivoire"
              tagline="Adoption massive du Mobile Money"
              points={[
                ['28M', 'Habitants'],
                ['12M+', 'Utilisateurs Mobile Money'],
                ['170K+', 'Prestataires informels'],
                ['65%', 'Pénétration smartphone'],
              ]}
            />
          </div>
        </div>
      </section>

      {/* ---------- Pillars ---------- */}
      <section className="relative py-28 md:py-36">
        <div className="mx-auto max-w-[1240px] px-6 md:px-12">
          <div className="mx-auto mb-16 max-w-[720px] text-center">
            <span className="eyebrow">· Nos 6 piliers ·</span>
            <h2 className="display-md font-display mt-5 text-balance">
              Ce qui nous rend uniques.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
            {PILLARS.map((p) => (
              <div
                key={p.title}
                className="group relative flex flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[rgba(255,255,255,0.02)] p-7 transition-colors duration-500 hover:border-[rgba(176,38,232,0.45)]"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-[1px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      'linear-gradient(90deg, transparent, rgba(253,242,195,0.7), rgba(176,38,232,0.9), transparent)',
                  }}
                />
                <span
                  className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-2xl"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(176,38,232,0.22), rgba(62,6,95,0.45))',
                    boxShadow:
                      '0 0 0 1px rgba(176,38,232,0.4) inset, 0 0 20px -4px rgba(176,38,232,0.5)',
                  }}
                  aria-hidden
                >
                  {p.emoji}
                </span>
                <h3 className="font-display text-[20px] font-semibold tracking-[-0.02em] text-[color:var(--fg)]">
                  {p.title}
                </h3>
                <p className="mt-2 text-[15px] leading-[1.55] text-[color:var(--fg-muted)]">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Values ---------- */}
      <section className="relative py-28 md:py-36">
        <div className="mx-auto max-w-[1080px] px-6 md:px-12">
          <span className="eyebrow">· Nos valeurs ·</span>
          <h2 className="display-lg font-display mt-5 text-balance">
            On construit pour{' '}
            <span className="bg-gradient-to-r from-[#FDF2C3] via-[#B026E8] to-[#8E05C2] bg-clip-text text-transparent">
              les gens qui servent.
            </span>
          </h2>

          <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-x-20">
            {VALUES.map((v) => (
              <div key={v.title}>
                <h3 className="font-display text-[22px] font-semibold tracking-[-0.02em] text-[color:var(--fg)]">
                  {v.title}
                </h3>
                <p className="mt-3 text-[16px] leading-[1.7] text-[color:var(--fg-muted)]">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Team ---------- */}
      <section className="relative py-28 md:py-36">
        <div className="mx-auto max-w-[1080px] px-6 md:px-12">
          <div className="mx-auto mb-16 max-w-[720px] text-center">
            <span className="eyebrow">· L’équipe ·</span>
            <h2 className="display-lg font-display mt-5 text-balance">
              Une équipe produit, business et terrain.
            </h2>
            <p className="mx-auto mt-5 max-w-[560px] text-[17px] leading-[1.6] text-[color:var(--fg-muted)]">
              Un noyau fondateur qui combine expertise technique, réseau
              beauté/événementiel, et connaissance fine des marchés
              canadiens et ivoiriens.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m) => (
              <article
                key={m.role}
                className="flex flex-col overflow-hidden rounded-2xl border border-white/10 p-6"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(176,38,232,0.08) 0%, transparent 60%)',
                }}
              >
                <span
                  aria-hidden
                  className="mb-4 h-14 w-14 rounded-full"
                  style={{ background: m.avatar }}
                />
                <div className="font-display text-[17px] font-semibold text-[color:var(--fg)]">
                  {m.role}
                </div>
                <div className="mt-1 text-[13px] uppercase tracking-[0.14em] text-[color:var(--sb-cream)]">
                  {m.focus}
                </div>
                <p className="mt-4 text-[14px] leading-[1.55] text-[color:var(--fg-muted)]">
                  {m.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Final CTA ---------- */}
      <section className="relative py-28 md:py-36">
        <div className="mx-auto max-w-[960px] px-6 md:px-12">
          <div
            className="relative overflow-hidden rounded-[36px] border border-[rgba(176,38,232,0.35)] p-10 text-center md:p-16"
            style={{
              background:
                'radial-gradient(ellipse 80% 80% at 50% 0%, rgba(176,38,232,0.32), transparent 65%), linear-gradient(180deg, rgba(62,6,95,0.4) 0%, rgba(12,12,12,0.9) 100%)',
            }}
          >
            <div className="bg-grid-fine pointer-events-none absolute inset-0 opacity-40" />

            <div className="relative">
              <span className="chip">
                <span className="chip-dot" />
                On construit en ce moment
              </span>
              <h2 className="display-lg font-display mt-6 text-balance">
                Rejoignez l’aventure.
              </h2>
              <p className="mx-auto mt-5 max-w-[520px] text-[17px] leading-[1.6] text-[color:var(--fg-muted)]">
                Vous êtes pro, investisseur, journaliste ou simplement curieux
                du projet ? On adore les rencontres — écrivez-nous directement.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/#download"
                  className="cta inline-flex items-center gap-2"
                >
                  Télécharger l’app
                  <ArrowUpRight size={18} />
                </Link>
                <Link
                  href="/support#contact"
                  className="cta-ghost inline-flex items-center gap-2"
                >
                  Nous contacter
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

/* --------------------------- Data --------------------------- */

const PILLARS = [
  {
    emoji: '🎬',
    title: 'Feed vidéo TikTok-style',
    body: 'Un fil de contenus courts où les pros présentent leur travail. Discovery ludique, levier marketing intégré.',
  },
  {
    emoji: '⚡',
    title: 'Réservation instantanée',
    body: 'Depuis une vidéo, choisir un service, une date et réserver. Conversion en quelques clics.',
  },
  {
    emoji: '💳',
    title: 'Paiement sécurisé',
    body: 'Stripe au Canada, Orange Money / Wave en Côte d’Ivoire. Acompte possible pour réduire les no-shows.',
  },
  {
    emoji: '🎟️',
    title: 'Tickets QR code',
    body: 'QR signé numériquement côté serveur, PDF auto-généré, infalsifiable, validation instantanée.',
  },
  {
    emoji: '📱',
    title: 'Scan temps réel',
    body: 'Interface de scan pour organisateurs avec compteur d’entrées temps réel.',
  },
  {
    emoji: '🤝',
    title: '2-en-1 services + événements',
    body: 'Un seul outil pour les prestations régulières ET les billets. Unique sur le marché.',
  },
]

const VALUES = [
  {
    title: 'L’indépendant d’abord',
    body: 'Pas de commission sur les services, aucun engagement, 5 minutes pour s’inscrire. Si l’indé ne gagne pas, on ne gagne pas.',
  },
  {
    title: 'Le produit avant le buzz',
    body: 'On préfère livrer une app qui fait gagner 8 heures par semaine plutôt qu’une landing qui promet tout. Chaque feature est pensée pour le revenu réel du pro.',
  },
  {
    title: 'Transparent sur tout',
    body: 'Prix, commission, données, politique d’annulation : tout est visible avant que vous cliquiez. Pas de clauses cachées, pas de vente de données.',
  },
  {
    title: 'Conçu pour deux mondes',
    body: 'Spotbook marche aussi bien avec Stripe au Québec qu’avec Wave en Côte d’Ivoire. L’infrastructure s’adapte aux habitudes locales — pas l’inverse.',
  },
]

const TEAM = [
  {
    role: 'Fondateur principal',
    focus: 'Product · Tech',
    body: 'Développement mobile, architecture technique, vision produit. Bâtit Spotbook depuis le premier wireframe.',
    avatar: 'linear-gradient(135deg, #B026E8 0%, #3E065F 100%)',
  },
  {
    role: 'Co-fondateur',
    focus: 'Business · Réseau',
    body: 'Expertise beauté et événementiel, stratégie partenariats et opérations terrain au Québec.',
    avatar: 'linear-gradient(135deg, #FDF2C3 0%, #B026E8 100%)',
  },
  {
    role: 'Équipe technique',
    focus: 'Flutter · UI/UX',
    body: 'Développeurs Flutter et designer produit. Une seule codebase, iOS + Android, ergonomie léchée.',
    avatar: 'linear-gradient(135deg, #8E05C2 0%, #0C0C0C 100%)',
  },
  {
    role: 'Marketing',
    focus: 'Growth · Community',
    body: 'Acquisition utilisateurs, partenariats influenceurs et animation de la communauté Canada + Côte d’Ivoire.',
    avatar: 'linear-gradient(135deg, #B026E8 0%, #FDF2C3 100%)',
  },
]

/* --------------------------- Atoms --------------------------- */

function BigStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center text-center md:items-start md:text-left">
      <span
        className="font-display text-[72px] font-semibold leading-none tracking-[-0.05em] md:text-[92px]"
        style={{
          background:
            'linear-gradient(135deg, #FDF2C3 0%, #B026E8 55%, #8E05C2 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
        }}
      >
        {value}
      </span>
      <span className="mt-3 max-w-[260px] text-[13px] uppercase tracking-[0.18em] text-[color:var(--fg-faint)]">
        {label}
      </span>
    </div>
  )
}

function SideCard({
  variant,
  title,
  items,
}: {
  variant: 'before' | 'after'
  title: string
  items: string[]
}) {
  const isAfter = variant === 'after'
  return (
    <div
      className="relative overflow-hidden rounded-[24px] border p-8"
      style={{
        borderColor: isAfter ? 'rgba(176,38,232,0.45)' : 'rgba(255,255,255,0.1)',
        background: isAfter
          ? 'linear-gradient(180deg, rgba(176,38,232,0.12) 0%, rgba(12,12,12,0.6) 60%)'
          : 'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, transparent 80%)',
      }}
    >
      <div
        className="mb-6 text-[12px] uppercase tracking-[0.22em]"
        style={{
          color: isAfter ? 'var(--sb-cream)' : 'var(--fg-faint)',
        }}
      >
        {title}
      </div>
      <ul className="flex flex-col gap-3">
        {items.map((it) => (
          <li
            key={it}
            className="flex items-start gap-3 text-[16px] leading-[1.55]"
            style={{
              color: isAfter ? 'var(--fg)' : 'rgba(255,255,255,0.55)',
              textDecoration: isAfter ? undefined : 'line-through',
            }}
          >
            <span
              aria-hidden
              className="mt-[8px] inline-block h-[5px] w-[5px] shrink-0 rounded-full"
              style={{
                background: isAfter ? '#FDF2C3' : 'rgba(255,255,255,0.3)',
                boxShadow: isAfter ? '0 0 8px rgba(253,242,195,0.6)' : 'none',
              }}
            />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function MarketCard({
  flag,
  name,
  tagline,
  points,
}: {
  flag: string
  name: string
  tagline: string
  points: [string, string][]
}) {
  return (
    <div
      className="relative overflow-hidden rounded-[28px] border border-white/10 p-8 md:p-10"
      style={{
        background:
          'linear-gradient(180deg, rgba(176,38,232,0.08) 0%, rgba(12,12,12,0.7) 60%)',
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[1px]"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(176,38,232,0.8), transparent)',
        }}
      />
      <div className="flex items-center gap-4">
        <span className="text-[40px]" aria-hidden>
          {flag}
        </span>
        <div>
          <h3 className="font-display text-[22px] font-semibold tracking-[-0.02em] text-[color:var(--fg)]">
            {name}
          </h3>
          <p className="mt-1 text-[13px] uppercase tracking-[0.18em] text-[color:var(--sb-cream)]">
            {tagline}
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">
        {points.map(([v, l]) => (
          <div key={l} className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
            <div className="font-display text-[24px] font-semibold tabular-nums tracking-[-0.03em] text-[color:var(--fg)] md:text-[28px]">
              {v}
            </div>
            <div className="mt-1 text-[12px] uppercase tracking-[0.14em] text-[color:var(--fg-faint)]">
              {l}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
