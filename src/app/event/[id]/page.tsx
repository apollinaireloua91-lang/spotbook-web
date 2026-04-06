import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { supabase, Event } from '@/lib/supabase'
import AppStoreButtons from '@/components/ui/AppStoreButtons'

export const runtime = 'edge'

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const event = await fetchEvent(id)

  return {
    title: event?.title || 'Événement',
    description: event?.description || 'Découvrez cet événement sur Spotbook',
    openGraph: {
      title: event?.title,
      description: event?.description || undefined,
      images: event?.cover_url ? [{ url: event.cover_url }] : [],
    },
  }
}

const DEMO_EVENT: Event = {
  id: '1',
  pro_id: 'pro_2',
  title: 'Atelier Photographie - Portrait Professionnel',
  description: 'Apprenez les fondamentaux de la photographie portrait en 3 heures avec une professionnelle. Au programme : composition, lumière, interaction avec le modèle, et retouche basique.\n\nCet atelier inclut :\n- Exercices pratiques en studio\n- Démonstrations en direct\n- Retours personnalisés sur vos photos\n- Accès à un groupe privé de suivi\n\nTous les niveaux sont bienvenus ! Apportez votre appareil photo ou votre téléphone.',
  cover_url: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=400&fit=crop',
  venue: 'Studio Lumière MTL',
  address: '123 rue de la Montagne, Montréal, QC H3G 1Z1',
  date: '2024-04-15',
  time: '14:00',
  price: 89.99,
  total_tickets: 15,
  tickets_sold: 8,
  created_at: '2024-03-01',
  pro: {
    id: 'pro_2',
    username: 'marie_photographie',
    full_name: 'Marie Dubois',
    avatar_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    cover_url: null,
    bio: 'Photographe spécialisée en portraits et événements. J&apos;aime capturer vos moments précieux.',
    category: 'Photographe',
    location: 'Montréal, QC',
    rating: 4.8,
    review_count: 87,
    booking_count: 310,
    follower_count: 856,
    is_verified: true,
    social_links: {
      instagram: 'marie_photographie',
    },
    created_at: '2023-03-22',
  },
}

async function fetchEvent(id: string): Promise<Event | null> {
  if (!supabase) {
    return DEMO_EVENT
  }

  try {
    const { data, error } = await supabase
      .from('events')
      .select(`
        *,
        pro:pro_profiles(*)
      `)
      .eq('id', id)
      .single()

    if (error || !data) {
      return DEMO_EVENT
    }

    return data as Event
  } catch {
    return DEMO_EVENT
  }
}

function formatDate(dateString: string): string {
  const date = new Date(dateString + 'T00:00:00')
  return new Intl.DateTimeFormat('fr-CA', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date)
}

function formatTime(timeString: string): string {
  const [hours, minutes] = timeString.split(':')
  return `${hours}h${minutes}`
}

export default async function EventPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const event = await fetchEvent(id)

  if (!event) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-brand-text text-lg mb-4">Événement non trouvé</p>
          <Link href="/explore" className="text-brand-green hover:underline">
            Retour à l&apos;exploration
          </Link>
        </div>
      </div>
    )
  }

  const ticketsRemaining = event.total_tickets - event.tickets_sold

  return (
    <div className="min-h-screen bg-white">
      {/* Cover Image */}
      {event.cover_url && (
        <div className="relative w-full h-80 bg-brand-card/50">
          <Image
            src={event.cover_url}
            alt={event.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Title */}
        <h1 className="text-4xl font-bold text-brand-text mb-6">{event.title}</h1>

        {/* Key Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Date */}
          <div className="p-4 bg-brand-card border border-brand-border rounded-xl">
            <p className="text-brand-muted text-sm mb-1">Date</p>
            <p className="text-lg font-semibold text-brand-text">
              {formatDate(event.date)}
            </p>
          </div>

          {/* Time */}
          <div className="p-4 bg-brand-card border border-brand-border rounded-xl">
            <p className="text-brand-muted text-sm mb-1">Heure</p>
            <p className="text-lg font-semibold text-brand-text">
              {formatTime(event.time)}
            </p>
          </div>

          {/* Price */}
          <div className="p-4 bg-brand-card border border-brand-border rounded-xl">
            <p className="text-brand-muted text-sm mb-1">Prix par billet</p>
            <p className="text-lg font-semibold text-brand-text">
              ${event.price.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Venue Info */}
        <div className="mb-8 p-6 bg-brand-card border border-brand-border rounded-2xl">
          <h3 className="text-xl font-bold text-brand-text mb-4">📍 Lieu</h3>
          <p className="text-lg font-semibold text-brand-text mb-2">{event.venue}</p>
          <p className="text-brand-text">{event.address}</p>
        </div>

        {/* Google Maps Placeholder */}
        <div className="mb-8 rounded-2xl overflow-hidden border border-brand-border bg-brand-card/50 h-80 flex items-center justify-center">
          <div className="text-center">
            <p className="text-brand-muted text-lg">Carte interactive à venir</p>
          </div>
        </div>

        {/* Availability Info */}
        <div className="mb-8 p-6 bg-brand-card border border-brand-border rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-brand-text">Billets disponibles</h3>
            <span className="text-2xl font-bold text-brand-green">
              {ticketsRemaining}
            </span>
          </div>
          <div className="w-full bg-brand-border rounded-full h-2">
            <div
              className="bg-brand-green h-2 rounded-full transition-all"
              style={{
                width: `${((event.total_tickets - ticketsRemaining) / event.total_tickets) * 100}%`,
              }}
            />
          </div>
          <p className="text-brand-muted text-sm mt-3">
            {event.total_tickets - event.tickets_sold} billets restants sur {event.total_tickets}
          </p>
        </div>

        {/* Organizer */}
        {event.pro && (
          <div className="mb-8 p-6 bg-brand-card border border-brand-border rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-4">
              {event.pro.avatar_url && (
                <Image
                  src={event.pro.avatar_url}
                  alt={event.pro.full_name}
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                />
              )}
              <div>
                <p className="text-brand-muted text-sm mb-1">Organisateur</p>
                <Link
                  href={`/pro/${event.pro.username}`}
                  className="text-xl font-semibold text-brand-text hover:text-brand-green transition"
                >
                  {event.pro.full_name}
                </Link>
                <p className="text-brand-muted text-sm">
                  ⭐ {event.pro.rating.toFixed(1)} ({event.pro.review_count} avis)
                </p>
              </div>
            </div>
            <Link
              href={`/pro/${event.pro.username}`}
              className="px-6 py-3 bg-brand-green text-white rounded-xl font-semibold hover:bg-brand-green/90 transition"
            >
              Voir le profil
            </Link>
          </div>
        )}

        {/* Description */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-brand-text mb-4">À propos de l&apos;événement</h2>
          <p className="text-brand-text leading-relaxed whitespace-pre-wrap">
            {event.description}
          </p>
        </div>

        {/* CTA */}
        <div className="mb-12 p-6 bg-brand-card border border-brand-border rounded-2xl">
          <h3 className="text-xl font-bold text-brand-text mb-4">
            Prêt à participer ?
          </h3>
          <p className="text-brand-muted mb-6">
            Achetez votre billet directement via l&apos;app Spotbook.
          </p>
          <AppStoreButtons />
        </div>
      </div>
    </div>
  )
}
