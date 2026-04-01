import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

const isConfigured =
  supabaseUrl.length > 0 &&
  supabaseAnonKey.length > 0 &&
  !supabaseUrl.startsWith("your-");

export const supabase = isConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export function getSupabase() {
  return supabase;
}

export type Profile = {
  id: string;
  username: string;
  full_name: string;
  avatar_url: string | null;
  cover_url: string | null;
  bio: string | null;
  category: string;
  location: string | null;
  is_verified: boolean;
  rating: number;
  review_count: number;
  booking_count: number;
  follower_count: number;
  tiktok_url: string | null;
  instagram_url: string | null;
  created_at: string;
};

export type Service = {
  id: string;
  profile_id: string;
  name: string;
  description: string | null;
  duration_minutes: number;
  price: number;
  currency: string;
};

export type Video = {
  id: string;
  profile_id: string;
  cloudflare_video_id: string;
  title: string;
  description: string | null;
  thumbnail_url: string | null;
  tags: string[];
  created_at: string;
  profile?: Profile;
};

export type Event = {
  id: string;
  profile_id: string;
  title: string;
  description: string | null;
  cover_url: string | null;
  date: string;
  time: string;
  venue: string;
  address: string;
  price: number;
  currency: string;
  tickets_total: number;
  tickets_sold: number;
  created_at: string;
  profile?: Profile;
};

export type Review = {
  id: string;
  profile_id: string;
  client_name: string;
  rating: number;
  text: string;
  created_at: string;
};
