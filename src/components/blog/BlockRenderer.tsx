/**
 * BlockRenderer
 * ------------------------------------------------------------------
 * Renders a BlogPost["blocks"] array using the v2 token system.
 * Server component — no client-side interactivity needed.
 */

import type { Block } from '@/lib/blog'

export default function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <div className="flex flex-col gap-6">
      {blocks.map((block, i) => (
        <BlockView key={i} block={block} />
      ))}
    </div>
  )
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case 'p':
      return (
        <p className="text-[17px] leading-[1.75] text-[color:var(--fg-muted)] md:text-[18px]">
          {block.text}
        </p>
      )

    case 'h2':
      return (
        <h2 className="font-display mt-6 text-[28px] font-semibold tracking-[-0.03em] text-[color:var(--fg)] md:text-[34px]">
          {block.text}
        </h2>
      )

    case 'h3':
      return (
        <h3 className="font-display mt-2 text-[22px] font-semibold tracking-[-0.02em] text-[color:var(--fg)] md:text-[26px]">
          {block.text}
        </h3>
      )

    case 'quote':
      return (
        <blockquote
          className="relative my-2 rounded-2xl border-l-2 pl-8 pr-6 py-5"
          style={{
            borderColor: 'rgba(176,38,232,0.55)',
            background:
              'linear-gradient(90deg, rgba(176,38,232,0.08), transparent 85%)',
          }}
        >
          <p className="font-display text-[22px] font-medium italic leading-[1.4] tracking-[-0.01em] text-[color:var(--fg)] md:text-[26px]">
            “{block.text}”
          </p>
          {block.attribution && (
            <footer className="mt-3 text-[13px] uppercase tracking-[0.18em] text-[color:var(--fg-faint)]">
              — {block.attribution}
            </footer>
          )}
        </blockquote>
      )

    case 'ul':
      return (
        <ul className="flex flex-col gap-3">
          {block.items.map((it, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-[17px] leading-[1.6] text-[color:var(--fg-muted)] md:text-[18px]"
            >
              <span
                aria-hidden
                className="mt-[11px] inline-block h-[6px] w-[6px] shrink-0 rounded-full"
                style={{
                  background:
                    'linear-gradient(135deg, #FDF2C3 0%, #B026E8 100%)',
                  boxShadow: '0 0 8px rgba(176,38,232,0.65)',
                }}
              />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      )

    case 'ol':
      return (
        <ol className="flex flex-col gap-3">
          {block.items.map((it, i) => (
            <li
              key={i}
              className="flex items-start gap-4 text-[17px] leading-[1.6] text-[color:var(--fg-muted)] md:text-[18px]"
            >
              <span
                aria-hidden
                className="font-display mt-[2px] inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[13px] font-semibold tabular-nums text-[color:var(--sb-cream)]"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(176,38,232,0.35), rgba(62,6,95,0.5))',
                  boxShadow:
                    '0 0 0 1px rgba(176,38,232,0.45) inset, 0 0 14px -4px rgba(176,38,232,0.55)',
                }}
              >
                {i + 1}
              </span>
              <span>{it}</span>
            </li>
          ))}
        </ol>
      )

    case 'stat':
      return (
        <div
          className="flex flex-col items-center gap-2 rounded-3xl border border-white/10 p-10 text-center"
          style={{
            background:
              'radial-gradient(ellipse 80% 80% at 50% 0%, rgba(176,38,232,0.22), transparent 70%)',
          }}
        >
          <span
            className="font-display text-[64px] font-semibold leading-none tracking-[-0.05em] md:text-[84px]"
            style={{
              background:
                'linear-gradient(135deg, #FDF2C3 0%, #B026E8 55%, #8E05C2 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              filter: 'drop-shadow(0 6px 24px rgba(176,38,232,0.4))',
            }}
          >
            {block.value}
          </span>
          <span className="mt-2 max-w-[420px] text-[14px] uppercase tracking-[0.18em] text-[color:var(--fg-faint)]">
            {block.label}
          </span>
        </div>
      )

    case 'callout':
      return (
        <aside
          className="relative overflow-hidden rounded-2xl border border-[rgba(176,38,232,0.35)] p-6"
          style={{
            background:
              'linear-gradient(135deg, rgba(176,38,232,0.12) 0%, rgba(12,12,12,0.65) 100%)',
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-[1px]"
            style={{
              background:
                'linear-gradient(90deg, transparent, rgba(253,242,195,0.8), rgba(176,38,232,0.9), transparent)',
            }}
          />
          <div className="mb-2 text-[12px] uppercase tracking-[0.22em] text-[color:var(--sb-cream)]">
            {block.title}
          </div>
          <p className="text-[16px] leading-[1.6] text-[color:var(--fg)]/85">
            {block.text}
          </p>
        </aside>
      )

    case 'table':
      return (
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[15px] text-[color:var(--fg-muted)]">
              <thead>
                <tr
                  style={{
                    background:
                      'linear-gradient(90deg, rgba(176,38,232,0.18), rgba(62,6,95,0.28))',
                  }}
                >
                  {block.headers.map((h) => (
                    <th
                      key={h}
                      className="px-4 py-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-[color:var(--fg)]"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, ri) => (
                  <tr
                    key={ri}
                    className="border-t border-white/5 transition-colors hover:bg-white/[0.02]"
                  >
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        className={[
                          'px-4 py-3 align-top',
                          ci === 0
                            ? 'font-medium text-[color:var(--fg)]'
                            : '',
                        ].join(' ')}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )

    default:
      return null
  }
}
