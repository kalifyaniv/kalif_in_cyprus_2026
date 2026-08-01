import { Moon } from "lucide-react";
import { tripMeta } from "../../data/tripMeta";

export function ShabbatBanner() {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-highlight/40 bg-highlight-soft p-4 text-sm text-ink">
      <Moon className="mt-0.5 shrink-0 text-highlight" size={20} />
      <div>
        <p className="font-semibold">Shabbat rest day</p>
        <p className="text-ink-soft">{tripMeta.shabbatRule}</p>
      </div>
    </div>
  );
}
