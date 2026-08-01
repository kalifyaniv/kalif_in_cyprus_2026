import type { ReactNode } from "react";

interface SectionHeadingProps {
  icon?: ReactNode;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ icon, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-4 flex items-center gap-3">
      {icon && (
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-accent text-on-accent shadow-sm">
          {icon}
        </span>
      )}
      <div>
        <h2 className="text-xl font-bold text-ink sm:text-2xl">{title}</h2>
        {subtitle && <p className="text-sm text-ink-soft/80">{subtitle}</p>}
      </div>
    </div>
  );
}
