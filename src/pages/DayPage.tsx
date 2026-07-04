import { Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { getDay } from "../data/days";
import { DayHeader } from "../components/day/DayHeader";
import { DayTimeline } from "../components/day/DayTimeline";
import { ShabbatBanner } from "../components/day/ShabbatBanner";
import { DayNavStrip } from "../components/layout/DayNavStrip";
import { DayPrevNextBar } from "../components/layout/DayPrevNextBar";
import { DayMap } from "../components/map/DayMap";
import { SectionHeading } from "../components/common/SectionHeading";
import { Map as MapIcon } from "lucide-react";

export function DayPage() {
  const { dayNumber } = useParams();
  const parsed = Number(dayNumber);

  if (!Number.isInteger(parsed)) {
    return <Navigate to="/404" replace />;
  }

  const day = getDay(parsed);
  if (!day) {
    return <Navigate to="/404" replace />;
  }

  return (
    <motion.div
      key={day.day}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="space-y-6"
    >
      <div className="-mx-4 border-b border-sea-100 bg-white/60">
        <DayNavStrip activeDay={day.day} />
      </div>

      <DayHeader day={day} />

      {day.isShabbat && <ShabbatBanner />}

      <section>
        <SectionHeading icon={<MapIcon size={18} />} title="Today's Map" />
        <DayMap day={day} />
      </section>

      <section>
        <SectionHeading title="Timeline" />
        <DayTimeline events={day.events} />
      </section>

      <DayPrevNextBar currentDay={day.day} />
    </motion.div>
  );
}
