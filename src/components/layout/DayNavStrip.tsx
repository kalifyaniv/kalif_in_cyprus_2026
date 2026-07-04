import { Link } from "react-router-dom";
import { days } from "../../data/days";
import { formatShortDate } from "../../utils/dateFormat";
import { regionStyle } from "../../utils/regionColors";

interface DayNavStripProps {
  activeDay?: number;
}

export function DayNavStrip({ activeDay }: DayNavStripProps) {
  return (
    <nav
      aria-label="Jump to day"
      className="no-scrollbar flex gap-2 overflow-x-auto scroll-px-4 px-4 py-3 sm:flex-wrap sm:justify-center sm:overflow-visible"
    >
      {days.map((day) => {
        const isActive = day.day === activeDay;
        const style = regionStyle(day.region);
        return (
          <Link
            key={day.day}
            to={`/day/${day.day}`}
            className={`flex shrink-0 snap-start flex-col items-center gap-1 rounded-2xl border px-3 py-2 text-center transition-transform active:scale-95 ${
              isActive
                ? "border-sea-600 bg-sea-600 text-sand-50 shadow-md"
                : "border-sea-100 bg-white/80 text-sea-900 hover:border-sea-400"
            }`}
          >
            <span className={`h-1.5 w-6 rounded-full ${style.bg}`} aria-hidden />
            <span className="text-xs font-bold">Day {day.day}</span>
            <span className="text-[11px] opacity-80">{formatShortDate(day.date)}</span>
          </Link>
        );
      })}
    </nav>
  );
}
