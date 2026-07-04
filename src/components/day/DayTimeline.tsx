import type { ItineraryEvent } from "../../data/types";
import { TimelineItem } from "./TimelineItem";

export function DayTimeline({ events }: { events: ItineraryEvent[] }) {
  return (
    <ol className="rounded-3xl border border-sea-100 bg-white/70 p-5">
      {events.map((event, index) => (
        <TimelineItem key={index} event={event} />
      ))}
    </ol>
  );
}
