import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  tone?: "sea" | "sun" | "terracotta" | "forest" | "neutral";
}

const toneClasses: Record<NonNullable<BadgeProps["tone"]>, string> = {
  sea: "bg-teal-soft text-teal",
  sun: "bg-highlight-soft text-highlight",
  terracotta: "bg-accent-soft text-accent",
  forest: "bg-teal-soft text-teal",
  neutral: "bg-line text-ink-soft",
};

export function Badge({ children, tone = "neutral" }: BadgeProps) {
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${toneClasses[tone]}`}>
      {children}
    </span>
  );
}
