import type { ItineraryEvent } from "../../data/types";
import { getLocation } from "../../data/locations";
import { eventIcons } from "../../utils/eventIcons";
import { Badge } from "../common/Badge";
import { LocationLinks } from "../common/LocationLinks";

export function TimelineItem({ event }: { event: ItineraryEvent }) {
  const Icon = eventIcons[event.type];
  const location = getLocation(event.locationId);
  const isDrive = event.type === "drive";

  return (
    <li className="relative flex gap-4 pb-8 last:pb-0">
      <div className="flex flex-col items-center">
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-on-accent shadow-sm ${
            isDrive ? "bg-teal" : "bg-accent"
          }`}
        >
          <Icon size={16} />
        </span>
        <span className="mt-1 w-px flex-1 bg-line last:hidden" aria-hidden />
      </div>

      <div className="flex-1 pt-1">
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          {event.time && (
            <span className="font-mono text-sm font-semibold tabular-nums text-ink-soft">
              {event.time}
              {event.endTime ? `–${event.endTime}` : ""}
            </span>
          )}
          <span className="font-semibold text-ink">{event.title}</span>
          {event.isOptional && <Badge tone="sun">Optional</Badge>}
          {event.driveDurationMinutes && <Badge tone="sea">{event.driveDurationMinutes} min drive</Badge>}
        </div>
        {location && <p className="text-sm text-ink-soft/80">{location.name}</p>}
        {event.description && <p className="mt-1 text-sm text-ink-soft">{event.description}</p>}
        {location && (
          <div className="mt-1.5">
            <LocationLinks lat={location.lat} lng={location.lng} />
          </div>
        )}
      </div>
    </li>
  );
}
