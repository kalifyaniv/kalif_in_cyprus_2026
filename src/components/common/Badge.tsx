import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  tone?: "sea" | "sun" | "terracotta" | "forest" | "neutral";
}

const toneClasses: Record<NonNullable<BadgeProps["tone"]>, string> = {
  sea: "bg-sea-100 text-sea-700",
  sun: "bg-sun-300/60 text-sea-900",
  terracotta: "bg-terracotta-400/20 text-terracotta-600",
  forest: "bg-forest-400/20 text-forest-600",
  neutral: "bg-sand-100 text-sea-700",
};

export function Badge({ children, tone = "neutral" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${toneClasses[tone]}`}
    >
      {children}
    </span>
  );
}
