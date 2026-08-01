import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import { useDayNavigation } from "../../hooks/useDayNavigation";

interface DayPrevNextBarProps {
  currentDay: number;
}

export function DayPrevNextBar({ currentDay }: DayPrevNextBarProps) {
  const { prevDay, nextDay } = useDayNavigation(currentDay);

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-stretch gap-1 border-t border-line bg-surface-strong p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      {prevDay ? (
        <Link
          to={`/day/${prevDay}`}
          className="flex flex-1 items-center justify-center gap-1 rounded-xl bg-accent-soft py-3 text-ink active:scale-95"
        >
          <ChevronLeft size={18} /> Day {prevDay}
        </Link>
      ) : (
        <Link to="/" className="flex flex-1 items-center justify-center gap-1 rounded-xl bg-accent-soft py-3 text-ink active:scale-95">
          <Home size={18} /> Overview
        </Link>
      )}
      {nextDay ? (
        <Link
          to={`/day/${nextDay}`}
          className="flex flex-1 items-center justify-center gap-1 rounded-xl bg-accent py-3 font-semibold text-on-accent active:scale-95"
        >
          Day {nextDay} <ChevronRight size={18} />
        </Link>
      ) : (
        <Link
          to="/"
          className="flex flex-1 items-center justify-center gap-1 rounded-xl bg-accent py-3 font-semibold text-on-accent active:scale-95"
        >
          Overview <Home size={18} />
        </Link>
      )}
    </div>
  );
}
