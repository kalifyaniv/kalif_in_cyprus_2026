import { Plane } from "lucide-react";
import { SectionHeading } from "../components/common/SectionHeading";
import { BackLink } from "../components/common/BackLink";
import { FlightCard } from "../components/overview/FlightCard";
import { flights } from "../data/flights";

export function FlightsPage() {
  return (
    <div className="space-y-4">
      <BackLink to="/info" label="Trip Info" />
      <SectionHeading icon={<Plane size={18} />} title="Flights" />
      <div className="flex flex-col gap-3 sm:flex-row">
        {flights.map((flight) => (
          <FlightCard key={flight.flightNumber} flight={flight} />
        ))}
      </div>
    </div>
  );
}
