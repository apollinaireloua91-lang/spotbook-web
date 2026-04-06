import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

function isValidUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

// Only create a real client if we have valid credentials
export const supabase: SupabaseClient | null = isValidUrl(supabaseUrl)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

export type ProProfile = {
  id: string
  username: string
  full_name: string
  avatar_url: string | null
  cover_url: string | null
  bio: string | null
  category: string
  location: string | null
  rating: number
  review_count: number
  booking_count: number
  follower_count: number
  is_verified: boolean
  social_links: {
    instagram?: string
    tiktok?: string
    twitter?: string
  } | null
  created_at: string
}

export type Service = {
  id: string
  pro_id: string
  name: string
  description: string | null
  duration_minutes: number
  price: number
  deposit_required: boolean
  deposit_amount: number | null
  category: string
}

export type Video = {
  id: string
  pro_id: string
  cloudflare_video_id: string
  title: string
  description: string | null
  tags: string[]
  thumbnail_url: string | null
  view_count: number
  created_at: string
  pro?: ProProfile
}

export type Event = {
  id: string
  pro_id: string
  title: string
  description: string | null
  cover_url: string | null
  venue: string
  address: string
  date: string
  time: string
  price: number
  total_tickets: number
  tickets_sold: number
  created_at: string
  pro?: ProProfile
}

export type Review = {
  id: string
  pro_id: string
  client_name: string
  rating: number
  text: string
  created_at: string
}
