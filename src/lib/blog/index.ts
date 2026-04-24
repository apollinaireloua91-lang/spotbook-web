/**
 * Blog index — imports every post module and exposes helpers.
 */

import type { BlogPost } from './types'
import { digitaliserBeaute } from './posts/digitaliser-beaute'
import { reduireNoShows } from './posts/reduire-no-shows'
import { billetterieEvenements } from './posts/billetterie-evenements'
import { spotbookVsPlanity } from './posts/spotbook-vs-planity'

const ALL_POSTS: BlogPost[] = [
  digitaliserBeaute,
  reduireNoShows,
  billetterieEvenements,
  spotbookVsPlanity,
]

/** Sorted newest first. */
export function getAllPosts(): BlogPost[] {
  return [...ALL_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getPostBySlug(slug: string): BlogPost | null {
  return ALL_POSTS.find((p) => p.slug === slug) ?? null
}

export function getPostSlugs(): string[] {
  return ALL_POSTS.map((p) => p.slug)
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(slug)
  if (!current) return []
  return getAllPosts()
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      // Posts in the same category score higher
      const aScore = a.category === current.category ? 2 : 0
      const bScore = b.category === current.category ? 2 : 0
      return bScore - aScore
    })
    .slice(0, limit)
}

export type { BlogPost, Block } from './types'
