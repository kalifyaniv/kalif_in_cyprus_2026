import { useMemo } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Users } from "lucide-react";
import { tripMeta } from "../../data/tripMeta";
import { daysUntil, formatShortDate } from "../../utils/dateFormat";

export function HeroBanner() {
  const remaining = useMemo(() => daysUntil(tripMeta.startDate, new Date()), []);

  const countdownLabel =
    remaining > 0 ? `${remaining} day${remaining === 1 ? "" : "s"} to go` : remaining === 0 ? "We're off today! ✈️" : "Trip in progress 🌊";

  return (
    <div className="relative overflow-hidden rounded-[2rem] px-6 py-10 sm:px-10 sm:py-14">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(120% 100% at 50% -10%, var(--color-glow), transparent 60%)",
        }}
        aria-hidden
      />
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1 text-xs font-semibold text-ink-soft backdrop-blur">
          {countdownLabel}
        </span>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-5xl">
          15 days in <span className="text-accent">Cyprus</span>
        </h1>
        <p className="mt-1 text-base font-medium text-ink-soft sm:text-lg">{tripMeta.subtitle}</p>

        <div className="mt-5 flex flex-wrap gap-3 text-sm font-medium">
          <span className="flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-ink backdrop-blur">
            <CalendarDays size={16} />
            {formatShortDate(tripMeta.startDate)} → {formatShortDate(tripMeta.endDate)}
          </span>
          <span className="flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-ink backdrop-blur">
            <Users size={16} />
            {tripMeta.travelers}
          </span>
        </div>
      </motion.div>
    </div>
  );
}
