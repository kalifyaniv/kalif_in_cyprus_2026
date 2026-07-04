import { useMemo } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Users } from "lucide-react";
import { tripMeta } from "../../data/tripMeta";
import { daysUntil, formatShortDate } from "../../utils/dateFormat";
import { WaveDivider } from "./WaveDivider";

interface HeroBannerProps {
  heroImageUrl?: string;
}

export function HeroBanner({ heroImageUrl }: HeroBannerProps) {
  const remaining = useMemo(() => daysUntil(tripMeta.startDate, new Date()), []);

  const countdownLabel =
    remaining > 0 ? `${remaining} day${remaining === 1 ? "" : "s"} to go` : remaining === 0 ? "We're off today! ✈️" : "Trip in progress 🌊";

  return (
    <div className="overflow-hidden rounded-b-[2.5rem] sm:rounded-[2.5rem]">
      <div
        className="relative px-6 pb-12 pt-10 text-sand-50 sm:px-10 sm:pt-14"
        style={{
          backgroundImage: heroImageUrl
            ? `linear-gradient(rgba(11,61,76,0.55), rgba(11,61,76,0.55)), url(${heroImageUrl})`
            : "linear-gradient(135deg, #0e7490 0%, #22a6d9 35%, #ffd166 72%, #f2a65a 100%)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur">
            {countdownLabel}
          </span>
          <h1 className="mt-3 font-display text-3xl font-extrabold drop-shadow-sm sm:text-5xl">{tripMeta.title}</h1>
          <p className="mt-1 text-base font-medium text-sand-50/90 sm:text-lg">{tripMeta.subtitle}</p>

          <div className="mt-5 flex flex-wrap gap-3 text-sm font-medium">
            <span className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 backdrop-blur">
              <CalendarDays size={16} />
              {formatShortDate(tripMeta.startDate)} → {formatShortDate(tripMeta.endDate)}
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 backdrop-blur">
              <Users size={16} />
              {tripMeta.travelers}
            </span>
          </div>
        </motion.div>
      </div>
      <WaveDivider />
    </div>
  );
}
