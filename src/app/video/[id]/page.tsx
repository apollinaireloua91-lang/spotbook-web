import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { supabase, Video } from '@/lib/supabase'
import AppStoreButtons from '@/components/ui/AppStoreButtons'

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const video = await fetchVideo(id)

  return {
    title: video?.title || 'Vidéo',
    description: video?.description || 'Découvrez cette vidéo sur Spotbook',
    openGraph: {
      title: video?.title,
      description: video?.description || undefined,
      images: video?.thumbnail_url ? [{ url: video.thumbnail_url }] : [],
    },
  }
}

const DEMO_VIDEO: Video = {
  id: '1',
  pro_id: 'pro_1',
  cloudflare_video_id: 'd79344ca41959e21201022b1624696e5',
  title: 'Coupe de cheveux tendance - Tutoriel',
  description: 'Découvrez comment réaliser une coupe moderne et stylée avec les bons outils. Dans cette vidéo, je vous montre les techniques essentielles pour obtenir un résultat professionnel à la maison.',
  tags: ['coiffure', 'tutoriel', 'coupe', 'tendance'],
  thumbnail_url: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=225&fit=crop',
  view_count: 2341,
  created_at: '2024-03-15',
  pro: {
    id: 'pro_1',
    username: 'alex_coiffeur',
    full_name: 'Alex Chen',
    avatar_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    cover_url: null,
    bio: 'Coiffeur professionnel avec 10 ans d&apos;expérience. Spécialisé en coupes modernes et coloration.',
    category: 'Coiffure',
    location: 'Montréal, QC',
    rating: 4.9,
    review_count: 142,
    booking_count: 520,
    follower_count: 1280,
    is_verified: true,
    social_links: {
      instagram: 'alex_coiffeur',
    },
    created_at: '2023-01-15',
  },
}

const DEMO_RELATED_VIDEOS: Video[] = [
  {
    id: '2',
    pro_id: 'pro_1',
    cloudflare_video_id: 'a79344ca41959e21201022b1624696e6',
    title: 'Coloration cheveux - Guide complet',
    description: 'Tout ce que vous devez savoir sur la coloration des cheveux',
    tags: ['coloration', 'couleur', 'soin'],
    thumbnail_url: 'https://images.unsplash.com/photo-1559599810-46d1d26b13af?w=400&h=225&fit=crop',
    view_count: 1850,
    created_at: '2024-03-10',
  },
  {
    id: '3',
    pro_id: 'pro_1',
    cloudflare_video_id: 'b79344ca41959e21201022b1624696e7',
    title: 'Soin des cheveux - Astuces au quotidien',
    description: 'Les meilleures pratiques pour prendre soin de vos cheveux',
    tags: ['soin', 'cheveux', 'beauté'],
    thumbnail_url: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=225&fit=crop',
    view_count: 1620,
    created_at: '2024-03-05',
  },
  {
    id: '4',
    pro_id: 'pro_2',
    cloudflare_video_id: 'c79344ca41959e21201022b1624696e8',
    title: 'Photographie portrait - Lumière naturelle',
    description: 'Apprenez à utiliser la lumière naturelle pour des portraits magnifiques',
    tags: ['photographie', 'portrait', 'lumière'],
    thumbnail_url: 'https://images.unsplash.com/photo-1606011591437-51c77e271583?w=400&h=225&fit=crop',
    view_count: 3120,
    created_at: '2024-02-28',
  },
]

async function fetchVideo(id: string): Promise<Video | null> {
  if (!supabase) {
    return DEMO_VIDEO
  }

  try {
    const { data, error } = await supabase
      .from('videos')
      .select(`
        *,
        pro:pro_profiles(*)
      `)
      .eq('id', id)
      .single()

    if (error || !data) {
      return DEMO_VIDEO
    }

    return data as Video
  } catch {
    return DEMO_VIDEO
  }
}

async function fetchRelatedVideos(proId: string): Promise<Video[]> {
  if (!supabase) {
    return DEMO_RELATED_VIDEOS
  }

  try {
    const { data, error } = await supabase
      .from('videos')
      .select(`
        *,
        pro:pro_profiles(*)
      `)
      .eq('pro_id', proId)
      .limit(3)

    if (error || !data) {
      return DEMO_RELATED_VIDEOS
    }

    return data as Video[]
  } catch {
    return DEMO_RELATED_VIDEOS
  }
}

export default async function VideoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const video = await fetchVideo(id)
  const relatedVideos = video?.pro ? await fetchRelatedVideos(video.pro.id) : DEMO_RELATED_VIDEOS

  if (!video) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-brand-text text-lg mb-4">Vidéo non trouvée</p>
          <Link href="/explore" className="text-brand-green hover:underline">
            Retour à l&apos;exploration
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Video Player */}
        <div className="mb-8 rounded-2xl overflow-hidden bg-brand-card/50 border border-brand-border aspect-video">
          <iframe
            src={`https://customer-h264ptvhh9jzqj0j.cloudflarestream.com/${video.cloudflare_video_id}/iframe`}
            loading="lazy"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        {/* Video Title & Info */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-brand-text mb-4">{video.title}</h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {video.tags?.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-brand-card border border-brand-border text-brand-text text-sm rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* View Count */}
          <p className="text-brand-muted text-sm mb-6">
            {video.view_count?.toLocaleString('fr-CA') || 0} vues
          </p>
        </div>

        {/* Pro Info Card */}
        {video.pro && (
          <div className="mb-8 p-6 bg-brand-card border border-brand-border rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-4">
              {video.pro.avatar_url && (
                <Image
                  src={video.pro.avatar_url}
                  alt={video.pro.full_name}
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                />
              )}
              <div>
                <Link
                  href={`/pro/${video.pro.username}`}
                  className="text-xl font-semibold text-brand-text hover:text-brand-green transition"
                >
                  {video.pro.full_name}
                </Link>
                <p className="text-brand-muted text-sm">{video.pro.category}</p>
                <p className="text-brand-muted text-sm mt-1">
                  ⭐ {video.pro.rating.toFixed(1)} ({video.pro.review_count} avis)
                </p>
              </div>
            </div>
            <Link
              href={`/pro/${video.pro.username}`}
              className="px-6 py-3 bg-brand-green text-white rounded-xl font-semibold hover:bg-brand-green/90 transition"
            >
              Visiter le profil
            </Link>
          </div>
        )}

        {/* Description */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-brand-text mb-4">À propos</h2>
          <p className="text-brand-text leading-relaxed whitespace-pre-wrap">
            {video.description}
          </p>
        </div>

        {/* CTA */}
        <div className="mb-12 p-6 bg-brand-card border border-brand-border rounded-2xl">
          <h3 className="text-xl font-bold text-brand-text mb-4">
            Intéressé par ce service ?
          </h3>
          <p className="text-brand-muted mb-6">
            Téléchargez l&apos;app Spotbook pour réserver directement avec ce professionnel.
          </p>
          <AppStoreButtons />
        </div>

        {/* Related Videos */}
        {relatedVideos.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-brand-text mb-6">Vidéos associées</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedVideos.slice(0, 3).map((relatedVideo) => (
                <Link
                  key={relatedVideo.id}
                  href={`/video/${relatedVideo.id}`}
                  className="group rounded-xl overflow-hidden border border-brand-border hover:border-brand-green transition"
                >
                  <div className="relative aspect-video bg-brand-card/50 overflow-hidden">
                    {relatedVideo.thumbnail_url && (
                      <Image
                        src={relatedVideo.thumbnail_url}
                        alt={relatedVideo.title}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-300"
                      />
                    )}
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-semibold text-brand-text group-hover:text-brand-green transition line-clamp-2">
                      {relatedVideo.title}
                    </h3>
                    <p className="text-brand-muted text-sm mt-2">
                      {relatedVideo.view_count?.toLocaleString('fr-CA') || 0} vues
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
