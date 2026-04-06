import { MetadataRoute } from 'next'
import { supabase } from '@/lib/supabase'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://getspotbook.app'

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/explore`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/support`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ]

  if (!supabase) {
    return staticPages
  }

  let proPages: MetadataRoute.Sitemap = []
  try {
    const { data: pros } = await supabase
      .from('profiles_pro')
      .select('username, updated_at')
      .eq('is_active', true)

    if (pros) {
      proPages = pros.map((pro) => ({
        url: `${baseUrl}/pro/${pro.username}`,
        lastModified: new Date(pro.updated_at),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }))
    }
  } catch {}

  let videoPages: MetadataRoute.Sitemap = []
  try {
    const { data: videos } = await supabase
      .from('videos')
      .select('id, created_at')
      .eq('is_public', true)

    if (videos) {
      videoPages = videos.map((video) => ({
        url: `${baseUrl}/video/${video.id}`,
        lastModified: new Date(video.created_at),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }))
    }
  } catch {}

  let eventPages: MetadataRoute.Sitemap = []
  try {
    const { data: events } = await supabase
      .from('events')
      .select('id, created_at')
      .eq('is_published', true)

    if (events) {
      eventPages = events.map((event) => ({
        url: `${baseUrl}/event/${event.id}`,
        lastModified: new Date(event.created_at),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }))
    }
  } catch {}

  return [...staticPages, ...proPages, ...videoPages, ...eventPages]
}
