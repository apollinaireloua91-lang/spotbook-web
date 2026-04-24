import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import {
  getPostBySlug,
  getPostSlugs,
  getRelatedPosts,
} from '@/lib/blog'
import BlockRenderer from '@/components/blog/BlockRenderer'

type Params = { slug: string }

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  const url = `https://getspotbook.app/blog/${post.slug}`
  return {
    title: `${post.title} | Spotbook`,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.keywords,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const related = getRelatedPosts(slug, 3)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: 'Spotbook',
      logo: {
        '@type': 'ImageObject',
        url: 'https://getspotbook.app/icon.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://getspotbook.app/blog/${post.slug}`,
    },
    keywords: post.keywords.join(', '),
  }

  return (
    <main className="relative">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

      {/* Hero */}
      <section
        className="relative overflow-hidden pt-[140px] pb-16 md:pt-[180px] md:pb-20"
        style={{ background: post.hero.gradient }}
      >
        <div className="bg-grid-fine pointer-events-none absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-[820px] px-6 md:px-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.18em] text-[color:var(--fg-faint)] transition-colors hover:text-[color:var(--fg)]"
          >
            <ArrowLeft size={14} /> Retour au blog
          </Link>

          <div className="mt-10">
            <span className="eyebrow text-[color:var(--sb-cream)]">
              {post.hero.eyebrow}
            </span>
            <h1 className="display-lg font-display mt-5 text-balance">
              {post.title}
            </h1>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-[13px] text-[color:var(--fg-faint)]">
              <span>{post.author}</span>
              <span aria-hidden>·</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('fr-CA', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
              <span aria-hidden>·</span>
              <span>{post.readMinutes} min de lecture</span>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="relative py-16 md:py-20">
        <div className="mx-auto max-w-[760px] px-6 md:px-12">
          <BlockRenderer blocks={post.blocks} />
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-20">
        <div className="mx-auto max-w-[760px] px-6 md:px-12">
          <div
            className="relative overflow-hidden rounded-[28px] border border-[rgba(176,38,232,0.35)] p-8 md:p-10"
            style={{
              background:
                'radial-gradient(ellipse 80% 80% at 50% 0%, rgba(176,38,232,0.25), transparent 65%), linear-gradient(180deg, rgba(62,6,95,0.3) 0%, rgba(12,12,12,0.9) 100%)',
            }}
          >
            <div className="bg-grid-fine pointer-events-none absolute inset-0 opacity-40" />
            <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="font-display text-[24px] font-semibold tracking-[-0.02em] text-[color:var(--fg)] md:text-[28px]">
                  Prêt à tester Spotbook ?
                </h3>
                <p className="mt-2 max-w-[460px] text-[15px] leading-[1.55] text-[color:var(--fg-muted)]">
                  Créez votre profil pro en 5 minutes. 0% de commission sur vos
                  services, paiement direct sur votre compte.
                </p>
              </div>
              <Link
                href="/#download"
                className="cta inline-flex shrink-0 items-center gap-2"
              >
                Télécharger l’app
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="relative py-20 md:py-28">
          <div className="mx-auto max-w-[1080px] px-6 md:px-12">
            <div className="flex items-end justify-between">
              <h2 className="font-display text-[28px] font-semibold tracking-[-0.02em] text-[color:var(--fg)] md:text-[34px]">
                À lire ensuite
              </h2>
              <Link
                href="/blog"
                className="text-[13px] uppercase tracking-[0.18em] text-[color:var(--fg-muted)] transition-colors hover:text-[color:var(--fg)]"
              >
                Tous les articles →
              </Link>
            </div>

            <ul className="mt-10 grid gap-5 md:grid-cols-3">
              {related.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 transition-all duration-500 hover:-translate-y-1 hover:border-[rgba(176,38,232,0.45)]"
                  >
                    <div
                      className="relative flex aspect-[16/10] items-center justify-center"
                      style={{ background: p.hero.gradient }}
                    >
                      <span aria-hidden className="text-[64px]">
                        {p.hero.emoji}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <span className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--fg-faint)]">
                        {p.category}
                      </span>
                      <h3 className="font-display mt-2 text-[17px] font-semibold leading-[1.3] tracking-[-0.01em] text-[color:var(--fg)]">
                        {p.title}
                      </h3>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </main>
  )
}
