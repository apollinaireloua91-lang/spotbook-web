import type { ProProfile, Event as SpotEvent, Video } from './supabase'

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Spotbook',
    url: 'https://getspotbook.app',
    logo: 'https://getspotbook.app/logo.png',
    description:
      'La super-app qui connecte les clients aux meilleurs professionnels indépendants.',
    sameAs: [
      'https://instagram.com/spotbook',
      'https://tiktok.com/@spotbook',
      'https://twitter.com/spotbook',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'support_spotbook@gmail.com',
      contactType: 'customer service',
      availableLanguage: ['French', 'English'],
    },
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'QC',
      addressCountry: 'CA',
    },
  }
}

export function localBusinessJsonLd(pro: ProProfile) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: pro.full_name,
    description: pro.bio || `${pro.category} professionnel sur Spotbook`,
    url: `https://getspotbook.app/pro/${pro.username}`,
    image: pro.avatar_url,
    address: {
      '@type': 'PostalAddress',
      addressLocality: pro.location,
      addressCountry: 'CA',
    },
    aggregateRating: pro.review_count > 0
      ? {
          '@type': 'AggregateRating',
          ratingValue: pro.rating,
          reviewCount: pro.review_count,
          bestRating: 5,
        }
      : undefined,
  }
}

export function eventJsonLd(event: SpotEvent) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    description: event.description,
    startDate: event.date,
    location: {
      '@type': 'Place',
      name: event.venue,
      address: {
        '@type': 'PostalAddress',
        streetAddress: event.address,
        addressCountry: 'CA',
      },
    },
    image: event.cover_url,
    offers: {
      '@type': 'Offer',
      price: event.price,
      priceCurrency: 'CAD',
      availability:
        event.total_tickets - event.tickets_sold > 0
          ? 'https://schema.org/InStock'
          : 'https://schema.org/SoldOut',
      url: `https://getspotbook.app/event/${event.id}`,
    },
    organizer: {
      '@type': 'Organization',
      name: 'Spotbook',
      url: 'https://getspotbook.app',
    },
  }
}

export function videoJsonLd(video: Video) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.title,
    description: video.description,
    thumbnailUrl: video.thumbnail_url,
    uploadDate: video.created_at,
    contentUrl: `https://customer-${video.cloudflare_video_id}.cloudflarestream.com/${video.cloudflare_video_id}/manifest/video.m3u8`,
    embedUrl: `https://customer-${video.cloudflare_video_id}.cloudflarestream.com/${video.cloudflare_video_id}/iframe`,
    interactionStatistic: {
      '@type': 'InteractionCounter',
      interactionType: 'https://schema.org/WatchAction',
      userInteractionCount: video.view_count,
    },
  }
}
