import { Link } from "react-router-dom";
import { Moon } from "lucide-react";
import { buildMonthGrid } from "../../utils/calendarGrid";
import { getDayByDate } from "../../data/days";
import { regionStyles } from "../../utils/regionColors";
import { toISODate } from "../../utils/dateFormat";

const WEEKDAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// The whole trip (12–26 Aug 2026) fits inside a single month, so the calendar is fixed to it.
const YEAR = 2026;
const MONTH = 7; // August (0-indexed)

export function TripCalendar() {
  const weeks = buildMonthGrid(YEAR, MONTH);
  const todayIso = toISODate(new Date());

  return (
    <div className="glass rounded-3xl p-3 sm:p-4">
      <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-bold uppercase tracking-wide text-ink-soft/60 sm:gap-2">
        {WEEKDAY_LABELS.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
      <div className="mt-1 grid grid-cols-7 gap-1 sm:gap-2">
        {weeks.flatMap((week, weekIndex) =>
          week.map((cellDate, cellIndex) => {
            const key = `${weekIndex}-${cellIndex}`;
            if (!cellDate) return <div key={key} className="aspect-square" />;

            const iso = toISODate(cellDate);
            const day = getDayByDate(iso);
            const isToday = iso === todayIso;
            const dateNumber = cellDate.getDate();

            if (!day) {
              return (
                <div
                  key={key}
                  className={`flex aspect-square items-center justify-center rounded-xl text-xs text-ink-soft/30 ${
                    isToday ? "ring-2 ring-accent" : ""
                  }`}
                >
                  {dateNumber}
                </div>
              );
            }

            const style = regionStyles[day.region];
            return (
              <Link
                key={key}
                to={`/day/${day.day}`}
                className={`flex aspect-square flex-col items-center justify-center gap-0.5 rounded-xl border px-1 text-center transition-transform active:scale-95 ${
                  isToday ? "border-accent ring-2 ring-accent-soft" : "border-line"
                }`}
                style={{ backgroundColor: `${style.hex}1a` }}
              >
                <span className="flex items-center gap-0.5 text-xs font-bold text-ink">
                  {dateNumber}
                  {day.isShabbat && <Moon size={10} className={style.text} />}
                </span>
                <span className={`hidden text-[9px] font-medium leading-tight sm:line-clamp-2 ${style.text}`}>
                  {day.title}
                </span>
              </Link>
            );
          }),
        )}
      </div>
    </div>
  );
}
