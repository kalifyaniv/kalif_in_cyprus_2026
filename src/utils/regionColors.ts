import type { Region } from "../data/types";

interface RegionStyle {
  label: string;
  hex: string;
  bg: string;
  text: string;
  ring: string;
}

// Fixed categorical hues, one per leg of the trip — deliberately decoupled from the
// light/dark UI tokens (surface/ink/accent/teal/highlight) so region colors stay
// recognizable on the map and calendar regardless of theme.
export const regionStyles: Record<Region, RegionStyle> = {
  paphos: { label: "Paphos", hex: "#1f6f78", bg: "bg-[#1f6f78]", text: "text-[#1f6f78]", ring: "ring-[#1f6f78]" },
  "platres-troodos": {
    label: "Platres & Troodos",
    hex: "#4a7c4e",
    bg: "bg-[#4a7c4e]",
    text: "text-[#4a7c4e]",
    ring: "ring-[#4a7c4e]",
  },
  "ayia-napa": { label: "Ayia Napa", hex: "#d1477a", bg: "bg-[#d1477a]", text: "text-[#d1477a]", ring: "ring-[#d1477a]" },
  larnaca: { label: "Larnaca", hex: "#c98a1f", bg: "bg-[#c98a1f]", text: "text-[#c98a1f]", ring: "ring-[#c98a1f]" },
};

export function regionStyle(region: Region): RegionStyle {
  return regionStyles[region];
}
