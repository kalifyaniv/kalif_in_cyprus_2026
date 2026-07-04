import { UtensilsCrossed } from "lucide-react";
import { restaurants } from "../../data/restaurants";
import { Badge } from "../common/Badge";

export function RestaurantList() {
  return (
    <div className="rounded-2xl border border-sea-100 bg-white/70 p-4">
      <ul className="divide-y divide-sea-100">
        {restaurants.map((restaurant) => (
          <li key={restaurant.id} className="flex items-center justify-between gap-2 py-2.5">
            <div className="flex items-center gap-2">
              <UtensilsCrossed size={16} className="shrink-0 text-sea-500" />
              <div>
                <p className="text-sm font-medium text-sea-900">{restaurant.name}</p>
                {restaurant.notes && <p className="text-xs text-sea-700/70">{restaurant.notes}</p>}
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
