import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import { useDayNavigation } from "../../hooks/useDayNavigation";

interface DayPrevNextBarProps {
  currentDay: number;
}

export function DayPrevNextBar({ currentDay }: DayPrevNextBarProps) {
  const { prevDay, nextDay } = useDayNavigation(currentDay);

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-stretch gap-1 border-t border-sea-100 bg-white/95 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      {prevDay ? (
        <Link
          to={`/day/${prevDay}`}
          className="flex flex-1 items-center justify-center gap-1 rounded-xl bg-sea-50 py-3 text-sea-700 active:scale-95"
        >
          <ChevronLeft size={18} /> Day {prevDay}
        </Link>
      ) : (
        <Link to="/" className="flex flex-1 items-center justify-center gap-1 rounded-xl bg-sea-50 py-3 text-sea-700 active:scale-95">
          <Home size={18} /> Overview
        </Link>
      )}
      {nextDay ? (
        <Link
          to={`/day/${nextDay}`}
          className="flex flex-1 items-center justify-center gap-1 rounded-xl bg-sea-600 py-3 font-semibold text-sand-50 active:scale-95"
        >
          Day {nextDay} <ChevronRight size={18} />
        </Link>
      ) : (
        <Link
          to="/"
          className="flex flex-1 items-center justify-center gap-1 rounded-xl bg-sea-600 py-3 font-semibold text-sand-50 active:scale-95"
        >
          Overview <Home size={18} />
        </Link>
      )}
    </div>
  );
}
