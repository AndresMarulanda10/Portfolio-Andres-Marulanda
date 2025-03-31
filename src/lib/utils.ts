// Import necessary functions from external libraries
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function to merge Tailwind CSS classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Function to format dates into a human-readable string with relative time
export function formatDate(date: string) {
  if (!date.includes("T")) date += "T00:00:00";
  const targetTime = new Date(date).getTime();
  const currentTime = Date.now();
  const daysDiff = Math.floor(Math.abs(currentTime - targetTime) / (1000 * 60 * 60 * 24));
  const fullDate = new Date(date).toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (daysDiff < 1) return "Today";
  if (daysDiff < 7) return `${fullDate} (${daysDiff}d ago)`;
  if (daysDiff < 30) return `${fullDate} (${Math.floor(daysDiff / 7)}w ago)`;
  if (daysDiff < 365) return `${fullDate} (${Math.floor(daysDiff / 30)}mo ago)`;
  return `${fullDate} (${Math.floor(daysDiff / 365)}y ago)`;
}
