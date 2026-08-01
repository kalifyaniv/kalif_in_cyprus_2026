import { Compass } from "lucide-react";

export function FlexibleDayBanner() {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-teal/40 bg-teal-soft p-4 text-sm text-ink">
      <Compass className="mt-0.5 shrink-0 text-teal" size={20} />
      <div>
        <p className="font-semibold">Flexible day</p>
        <p className="text-ink-soft">The anchor below is the one sure thing — everything else is your call.</p>
      </div>
    </div>
  );
}
