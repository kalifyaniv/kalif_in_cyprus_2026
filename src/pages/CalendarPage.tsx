import { CalendarDays } from "lucide-react";
import { SectionHeading } from "../components/common/SectionHeading";
import { TripCalendar } from "../components/calendar/TripCalendar";
import { MapLegend } from "../components/map/MapLegend";

export function CalendarPage() {
  return (
    <div className="space-y-4">
      <SectionHeading icon={<CalendarDays size={18} />} title="Trip Calendar" subtitle="Tap a day to see its plan · 🌙 marks Shabbat" />
      <TripCalendar />
      <MapLegend />
    </div>
  );
}
