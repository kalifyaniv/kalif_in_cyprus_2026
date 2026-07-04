import type { Region } from "../../data/types";
import { regionStyles } from "../../utils/regionColors";

const REGION_ORDER: Region[] = ["paphos", "platres-troodos", "ayia-napa", "larnaca"];

export function MapLegend() {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-1 px-1 pt-2 text-xs text-sea-700">
      {REGION_ORDER.map((region) => {
        const style = regionStyles[region];
        return (
          <span key={region} className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: style.hex }} />
            {style.label}
          </span>
        );
      })}
    </div>
  );
}
