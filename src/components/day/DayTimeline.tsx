import type { ItineraryEvent } from "../../data/types";
import { TimelineItem } from "./TimelineItem";

export function DayTimeline({ events }: { events: ItineraryEvent[] }) {
  return (
    <ol className="glass rounded-3xl p-5">
      {events.map((event, index) => (
        <TimelineItem key={index} event={event} />
      ))}
    </ol>
  );
}
