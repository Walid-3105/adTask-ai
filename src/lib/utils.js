import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Combine Tailwind classes efficiently
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
