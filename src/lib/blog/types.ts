/**
 * Blog content types
 * ------------------------------------------------------------------
 * Posts are authored as structured block lists (not MDX) so they can
 * live in plain TypeScript modules — no build-time parsing required,
 * full type-safety, and the rendering component picks the right tag
 * per block.
 */

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'quote'; text: string; attribution?: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'stat'; value: string; label: string }
  | { type: 'callout'; title: string; text: string }
  | { type: 'table'; headers: string[]; rows: string[][] }

export type BlogPost = {
  slug: string
  title: string
  description: string // meta description (150-160 chars)
  excerpt: string // card preview (shorter)
  category:
    | 'Pros'
    | 'Clients'
    | 'Billetterie'
    | 'Marché'
    | 'Comparatif'
    | 'Guide'
  author: string
  date: string // ISO yyyy-mm-dd
  readMinutes: number
  keywords: string[] // SEO
  hero: {
    eyebrow: string
    gradient: string // CSS linear-gradient
    emoji: string
  }
  blocks: Block[]
}
