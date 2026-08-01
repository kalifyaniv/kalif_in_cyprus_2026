import { motion } from "framer-motion";
import { Map as MapIcon } from "lucide-react";
import type { DayPlan } from "../../data/types";
import { DayHeader } from "./DayHeader";
import { DayTimeline } from "./DayTimeline";
import { ShabbatBanner } from "./ShabbatBanner";
import { FlexibleDayBanner } from "./FlexibleDayBanner";
import { DayNavStrip } from "../layout/DayNavStrip";
import { DayPrevNextBar } from "../layout/DayPrevNextBar";
import { DayMap } from "../map/DayMap";
import { SectionHeading } from "../common/SectionHeading";

export function DayDetail({ day }: { day: DayPlan }) {
  return (
    <motion.div
      key={day.day}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="space-y-6"
    >
      <div className="-mx-4 border-b border-line bg-surface">
        <DayNavStrip activeDay={day.day} />
      </div>

      <DayHeader day={day} />

      {day.isShabbat && <ShabbatBanner />}
      {day.flexible && <FlexibleDayBanner />}

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
