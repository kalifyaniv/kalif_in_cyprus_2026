import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { DayPlan } from "../../data/types";
import { useDayNavigation } from "../../hooks/useDayNavigation";
import { formatDayOfWeek, formatShortDate } from "../../utils/dateFormat";
import { regionStyle } from "../../utils/regionColors";

export function DayHeader({ day }: { day: DayPlan }) {
  const { prevDay, nextDay, totalDays } = useDayNavigation(day.day);
  const style = regionStyle(day.region);

  return (
    <div className="mb-6 flex items-center justify-between gap-3">
      <Link
        to={prevDay ? `/day/${prevDay}` : "/"}
        className="hidden shrink-0 items-center gap-1 rounded-full border border-sea-100 bg-white px-3 py-2 text-sm font-medium text-sea-700 md:flex"
      >
        <ChevronLeft size={16} /> {prevDay ? `Day ${prevDay}` : "Overview"}
      </Link>

      <div className="text-center">
        <p className={`text-xs font-bold uppercase tracking-wide ${style.text}`}>
          {style.label} · Day {day.day} of {totalDays}
        </p>
        <h1 className="font-display text-2xl font-extrabold text-sea-900 sm:text-3xl">{day.title}</h1>
        <p className="text-sm text-sea-700/80">
          {formatDayOfWeek(day.date)}, {formatShortDate(day.date)}
        </p>
      </div>

      <Link
        to={nextDay ? `/day/${nextDay}` : "/"}
        className="hidden shrink-0 items-center gap-1 rounded-full border border-sea-100 bg-white px-3 py-2 text-sm font-medium text-sea-700 md:flex"
      >
        {nextDay ? `Day ${nextDay}` : "Overview"} <ChevronRight size={16} />
      </Link>
    </div>
  );
}
