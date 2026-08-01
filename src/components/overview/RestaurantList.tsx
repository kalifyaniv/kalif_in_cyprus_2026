import { UtensilsCrossed, Star, ExternalLink, ShieldCheck } from "lucide-react";
import { restaurants } from "../../data/restaurants";
import { Badge } from "../common/Badge";
import { mapsSearchByNameUrl } from "../../utils/googleMaps";

const KOSHER_LABELS: Record<string, string> = {
  "certified-meat": "Kosher (meat)",
  "certified-dairy": "Kosher (dairy)",
  "certified-parve": "Kosher (parve)",
};

const STATUS_CONFIG = {
  planned: { label: "Planned", tone: "forest" as const },
  "to-book": { label: "To book", tone: "sun" as const },
  undecided: { label: "Undecided", tone: "terracotta" as const },
};

export function RestaurantList() {
  return (
    <div className="glass rounded-2xl p-4">
      <ul className="divide-y divide-line">
        {restaurants.map((restaurant) => {
          const kosherLabel = restaurant.kosher ? KOSHER_LABELS[restaurant.kosher] : undefined;
          const status = STATUS_CONFIG[restaurant.status];
          return (
            <li key={restaurant.id} className="flex items-start justify-between gap-3 py-2.5">
              <div className="flex items-start gap-2">
                <UtensilsCrossed size={16} className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <p className="text-sm font-medium text-ink">
                    {restaurant.name} <span className="font-normal text-ink-soft/60">· {restaurant.area}</span>
                  </p>
                  {restaurant.notes && <p className="mt-0.5 text-xs text-ink-soft/70">{restaurant.notes}</p>}
                  <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                    {restaurant.googleRating && (
                      <span className="flex items-center gap-0.5 font-mono tabular-nums text-ink-soft">
                        <Star size={11} className="fill-highlight text-highlight" />
                        {restaurant.googleRating}
                        {restaurant.googleReviewCount ? ` (${restaurant.googleReviewCount})` : ""}
                      </span>
                    )}
                    <a
                      href={mapsSearchByNameUrl(`${restaurant.name} ${restaurant.area} Cyprus`)}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 font-semibold text-teal hover:underline"
                    >
                      <ExternalLink size={11} /> View on Google
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex shrink-0 flex-col items-end gap-1.5">
                {kosherLabel && (
                  <span className="flex items-center gap-1 rounded-full bg-teal px-2.5 py-1 text-xs font-bold text-on-accent shadow-sm">
                    <ShieldCheck size={12} /> {kosherLabel}
                  </span>
                )}
                <Badge tone={status.tone}>{status.label}</Badge>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
