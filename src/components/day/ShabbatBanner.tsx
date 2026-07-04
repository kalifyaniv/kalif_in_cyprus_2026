import { Moon } from "lucide-react";
import { tripMeta } from "../../data/tripMeta";

export function ShabbatBanner() {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-sun-400/50 bg-sun-300/30 p-4 text-sm text-sea-900">
      <Moon className="mt-0.5 shrink-0 text-sea-700" size={20} />
      <div>
        <p className="font-semibold">Shabbat rest day</p>
        <p className="text-sea-700">{tripMeta.shabbatRule}</p>
      </div>
    </div>
  );
}
