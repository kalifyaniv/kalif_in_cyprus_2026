import { UtensilsCrossed } from "lucide-react";
import { restaurants } from "../../data/restaurants";
import { Badge } from "../common/Badge";

export function RestaurantList() {
  return (
    <div className="glass rounded-2xl p-4">
      <ul className="divide-y divide-line">
        {restaurants.map((restaurant) => (
          <li key={restaurant.id} className="flex items-center justify-between gap-2 py-2.5">
            <div className="flex items-center gap-2">
              <UtensilsCrossed size={16} className="shrink-0 text-accent" />
              <div>
                <p className="text-sm font-medium text-ink">{restaurant.name}</p>
                {restaurant.notes && <p className="text-xs text-ink-soft/70">{restaurant.notes}</p>}
              </div>
            </div>
            <Badge tone={restaurant.status === "confirmed" ? "forest" : "sun"}>
              {restaurant.status === "confirmed" ? "Confirmed" : "To book"}
            </Badge>
          </li>
        ))}
      </ul>
    </div>
  );
}
