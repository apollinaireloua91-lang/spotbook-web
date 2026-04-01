import { MetadataRoute } from "next";
import { supabase } from "@/lib/supabase";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://getspotbook.app";

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/explore`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/support`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];

  if (!supabase) return staticPages;

  // Dynamic: Pro profiles
  const { data: profiles } = await supabase
    .from("profiles_pro")
    .select("username, created_at")
    .eq("is_active", true);

  const proPages: MetadataRoute.Sitemap = (profiles || []).map((p) => ({
    url: `${baseUrl}/pro/${p.username}`,
    lastModified: new Date(p.created_at),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Dynamic: Videos
  const { data: videos } = await supabase
    .from("videos")
    .select("id, created_at");

  const videoPages: MetadataRoute.Sitemap = (videos || []).map((v) => ({
    url: `${baseUrl}/video/${v.id}`,
    lastModified: new Date(v.created_at),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Dynamic: Events
  const { data: events } = await supabase
    .from("events")
    .select("id, created_at")
    .gte("date", new Date().toISOString().split("T")[0]);

  const eventPages: MetadataRoute.Sitemap = (events || []).map((e) => ({
    url: `${baseUrl}/event/${e.id}`,
    lastModified: new Date(e.created_at),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...proPages, ...videoPages, ...eventPages];
}
