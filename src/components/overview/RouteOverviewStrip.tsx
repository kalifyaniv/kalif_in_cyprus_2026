import { ArrowRight } from "lucide-react";
import { accommodations } from "../../data/accommodations";
import { regionStyle } from "../../utils/regionColors";

export function RouteOverviewStrip() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {accommodations.map((stop, index) => {
        const style = regionStyle(stop.region);
        return (
          <div key={stop.id} className="flex items-center gap-2">
            <span className={`rounded-full px-3 py-1.5 text-sm font-semibold text-sand-50 ${style.bg}`}>
              {style.label} <span className="opacity-80">· {stop.nights}n</span>
            </span>
            {index < accommodations.length - 1 && <ArrowRight size={16} className="text-sea-400" />}
          </div>
        );
      })}
    </div>
  );
}
