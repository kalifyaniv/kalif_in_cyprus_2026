import type { Region } from "../data/types";

interface RegionStyle {
  label: string;
  hex: string;
  bg: string;
  text: string;
  ring: string;
}

export const regionStyles: Record<Region, RegionStyle> = {
  paphos: { label: "Paphos", hex: "#0e7490", bg: "bg-sea-600", text: "text-sea-700", ring: "ring-sea-400" },
  "platres-troodos": { label: "Platres & Troodos", hex: "#3c6e47", bg: "bg-forest-600", text: "text-forest-600", ring: "ring-forest-400" },
  "ayia-napa": { label: "Ayia Napa", hex: "#c85f45", bg: "bg-terracotta-600", text: "text-terracotta-600", ring: "ring-terracotta-400" },
  larnaca: { label: "Larnaca", hex: "#f7b733", bg: "bg-sun-500", text: "text-sun-500", ring: "ring-sun-400" },
};

export function regionStyle(region: Region): RegionStyle {
  return regionStyles[region];
}
