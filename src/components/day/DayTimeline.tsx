import type { ItineraryEvent } from "../../data/types";
import { TimelineItem } from "./TimelineItem";
import { ChoiceGroup } from "./ChoiceGroup";

function groupByChoice(events: ItineraryEvent[]): (ItineraryEvent | ItineraryEvent[])[] {
  const groups: (ItineraryEvent | ItineraryEvent[])[] = [];
  for (const event of events) {
    const last = groups[groups.length - 1];
    if (event.choiceGroup && Array.isArray(last) && last[0].choiceGroup === event.choiceGroup) {
      last.push(event);
      continue;
    }
    groups.push(event.choiceGroup ? [event] : event);
  }
  return groups;
}

export function DayTimeline({ events }: { events: ItineraryEvent[] }) {
  const groups = groupByChoice(events);

  return (
    <ol className="glass rounded-3xl p-5">
      {groups.map((group, index) =>
        Array.isArray(group) ? (
          <ChoiceGroup key={index} events={group} />
        ) : (
          <TimelineItem key={index} event={group} />
        ),
      )}
    </ol>
  );
}
