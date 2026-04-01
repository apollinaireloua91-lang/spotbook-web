import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatPrice(price: number, currency: string = "CAD"): string {
  return new Intl.NumberFormat("fr-CA", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(price);
}

export function formatDate(date: string): string {
  return new Intl.DateTimeFormat("fr-CA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export function formatTime(time: string): string {
  const [hours, minutes] = time.split(":");
  return `${hours}h${minutes}`;
}

export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + "...";
}

export const APP_STORE_URL = "https://apps.apple.com/app/spotbook";
export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=app.getspotbook";
