import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { PartyPopper, Palmtree } from "lucide-react";
import { getDayByDate } from "../data/days";
import { tripMeta } from "../data/tripMeta";
import { DayDetail } from "../components/day/DayDetail";
import { daysUntil, formatShortDate, toISODate } from "../utils/dateFormat";

function StatusCard({ children }: { children: ReactNode }) {
  return <div className="glass mx-auto mt-10 max-w-md rounded-3xl p-8 text-center">{children}</div>;
}

export function TodayPage() {
  const now = new Date();
  const todayIso = toISODate(now);
  const day = getDayByDate(todayIso);

  if (day) {
    return <DayDetail day={day} />;
  }

  if (todayIso < tripMeta.startDate) {
    const remaining = daysUntil(tripMeta.startDate, now);
    return (
      <StatusCard>
        <Palmtree size={40} className="mx-auto text-accent" />
        <h1 className="mt-4 font-display text-2xl font-extrabold text-ink">
          {remaining} day{remaining === 1 ? "" : "s"} to go
        </h1>
        <p className="mt-2 text-sm text-ink-soft">
          {tripMeta.title} kicks off {formatShortDate(tripMeta.startDate)}. Come back here once you land — this page will
          switch to whatever day you're on automatically.
        </p>
        <Link
          to="/overview"
          className="mt-5 inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent active:scale-95"
        >
          See the full trip overview
        </Link>
      </StatusCard>
    );
  }

  return (
    <StatusCard>
      <PartyPopper size={40} className="mx-auto text-highlight" />
      <h1 className="mt-4 font-display text-2xl font-extrabold text-ink">That's a wrap!</h1>
      <p className="mt-2 text-sm text-ink-soft">
        {tripMeta.title} ran {formatShortDate(tripMeta.startDate)} → {formatShortDate(tripMeta.endDate)}. Hope it was a good
        one — the full itinerary and calendar are still here if you want to relive it.
      </p>
      <Link
        to="/calendar"
        className="mt-5 inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent active:scale-95"
      >
        Browse the calendar
      </Link>
    </StatusCard>
  );
}
