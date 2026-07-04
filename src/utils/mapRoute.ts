import type { DayPlan, Location } from "../data/types";
import { getLocation } from "../data/locations";

/** Ordered, de-duplicated (no consecutive repeats) list of locations visited across the given days. */
export function routeForDays(dayPlans: DayPlan[]): Location[] {
  const route: Location[] = [];
  for (const day of dayPlans) {
    for (const event of day.events) {
      const loc = getLocation(event.locationId);
      if (loc && route[route.length - 1]?.id !== loc.id) {
        route.push(loc);
      }
    }
  }
  return route;
}

export function routeForDay(day: DayPlan): Location[] {
  return routeForDays([day]);
}

let hasWarned = false;

/** One-time dev console warning listing any location whose coordinates haven't been spot-checked yet. */
export function warnUnverifiedLocations(locations: Record<string, Location>) {
  if (hasWarned || !import.meta.env.DEV) return;
  hasWarned = true;
  const unverified = Object.values(locations).filter((loc) => !loc.verified);
  if (unverified.length > 0) {
    console.warn(
      `[trip-map] ${unverified.length} location(s) have unverified coordinates — spot-check before trusting for driving:\n` +
        unverified.map((loc) => `  - ${loc.name} (${loc.id})`).join("\n"),
    );
  }
}
