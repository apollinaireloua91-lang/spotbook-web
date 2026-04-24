import Link from 'next/link'
import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog Spotbook — Réservation, billetterie et business local au Québec',
  description:
    'Articles, guides et comparatifs pour les pros indépendants du Québec : digitaliser son business beauté, réduire les no-shows, vendre ses billets en ligne.',
  alternates: { canonical: 'https://getspotbook.app/blog' },
  openGraph: {
    title: 'Blog Spotbook — Réservation, billetterie et business local',
    description:
      'Guides pratiques pour coiffeurs, barbiers, DJs, coachs et organisateurs d’événements au Québec.',
    url: 'https://getspotbook.app/blog',
    type: 'website',
  },
}

export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <main className="relative pt-[140px] md:pt-[160px]">
      <section className="relative pb-16">
        <div className="mx-auto max-w-[1080px] px-6 md:px-12">
          <span className="eyebrow">· Journal ·</span>
          <h1 className="display-xl font-display mt-5 text-balance">
            Des idées pour faire grandir{' '}
            <span className="bg-gradient-to-r from-[#FDF2C3] via-[#B026E8] to-[#8E05C2] bg-clip-text text-transparent">
              votre business.
            </span>
          </h1>
          <p className="mt-6 max-w-[680px] text-[18px] leading-[1.6] text-[color:var(--fg-muted)] md:text-[20px]">
            Guides, comparatifs et bonnes pratiques pour les pros indépendants
            du Québec — coiffeurs, barbiers, DJs, coachs, organisateurs
            d’événements.
          </p>
        </div>
      </section>

      <section className="relative pb-32">
        <div className="mx-auto max-w-[1080px] px-6 md:px-12">
          <ul className="grid gap-6 md:grid-cols-2">
            {posts.map((post, i) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-white/10 transition-all duration-500 hover:-translate-y-1 hover:border-[rgba(176,38,232,0.5)]"
                >
                  {/* Cover */}
                  <div
                    className="relative flex aspect-[16/10] items-center justify-center overflow-hidden"
                    style={{ background: post.hero.gradient }}
                  >
                    <div className="bg-grid-fine pointer-events-none absolute inset-0 opacity-40" />
                    <span
                      className="relative text-[96px] transition-transform duration-700 group-hover:scale-110"
                      aria-hidden
                    >
                      {post.hero.emoji}
                    </span>
                    <span className="absolute bottom-4 left-4 chip text-[11px]">
                      <span className="chip-dot" />
                      {post.category}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <div className="mb-3 flex items-center gap-3 text-[12px] uppercase tracking-[0.18em] text-[color:var(--fg-faint)]">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('fr-CA', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </time>
                      <span aria-hidden>·</span>
                      <span>{post.readMinutes} min</span>
                    </div>

                    <h2 className="font-display text-[22px] font-semibold leading-[1.25] tracking-[-0.02em] text-[color:var(--fg)] md:text-[24px]">
                      {post.title}
                    </h2>

                    <p className="mt-3 text-[15px] leading-[1.55] text-[color:var(--fg-muted)]">
                      {post.excerpt}
                    </p>

                    <span className="mt-6 inline-flex items-center gap-1 text-[14px] font-medium text-[color:var(--sb-cream)] transition-all group-hover:gap-2">
                      Lire l’article
                      <span aria-hidden>→</span>
                    </span>
                  </div>

                  {/* Top hairline on hover */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 h-[1px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        'linear-gradient(90deg, transparent, rgba(253,242,195,0.8), rgba(176,38,232,0.95), transparent)',
                    }}
                  />
                  {/* hidden i for ordering feel */}
                  <span hidden>{i}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
