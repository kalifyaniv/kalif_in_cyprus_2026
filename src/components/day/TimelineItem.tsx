import type { ItineraryEvent } from "../../data/types";
import { getLocation } from "../../data/locations";
import { eventIcons } from "../../utils/eventIcons";
import { Badge } from "../common/Badge";

export function TimelineItem({ event }: { event: ItineraryEvent }) {
  const Icon = eventIcons[event.type];
  const location = getLocation(event.locationId);
  const isDrive = event.type === "drive";

  return (
    <li className="relative flex gap-4 pb-8 last:pb-0">
      <div className="flex flex-col items-center">
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white shadow-sm ${
            isDrive ? "bg-sea-400" : "bg-sea-600"
          }`}
        >
          <Icon size={16} />
        </span>
        <span className="mt-1 w-px flex-1 bg-sea-100 last:hidden" aria-hidden />
      </div>

      <div className="flex-1 pt-1">
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          {event.time && (
            <span className="font-mono text-sm font-semibold text-sea-700">
              {event.time}
              {event.endTime ? `–${event.endTime}` : ""}
            </span>
          )}
          <span className="font-semibold text-sea-900">{event.title}</span>
          {event.isOptional && <Badge tone="sun">Optional</Badge>}
          {event.driveDurationMinutes && <Badge tone="sea">{event.driveDurationMinutes} min drive</Badge>}
        </div>
        {location && <p className="text-sm text-sea-700/80">{location.name}</p>}
        {event.description && <p className="mt-1 text-sm text-sea-700">{event.description}</p>}
      </div>
    </li>
  );
}
