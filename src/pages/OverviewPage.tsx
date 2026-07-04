import { Plane, Car, Route, Building2, ListChecks, UtensilsCrossed, Map as MapIcon } from "lucide-react";
import { HeroBanner } from "../components/overview/HeroBanner";
import { FlightCard } from "../components/overview/FlightCard";
import { CarRentalCard } from "../components/overview/CarRentalCard";
import { RouteOverviewStrip } from "../components/overview/RouteOverviewStrip";
import { AccommodationCard } from "../components/overview/AccommodationCard";
import { TodoChecklist } from "../components/overview/TodoChecklist";
import { RestaurantList } from "../components/overview/RestaurantList";
import { DayNavStrip } from "../components/layout/DayNavStrip";
import { TripMap } from "../components/map/TripMap";
import { SectionHeading } from "../components/common/SectionHeading";
import { flights } from "../data/flights";
import { carRental } from "../data/carRental";
import { accommodations } from "../data/accommodations";

export function OverviewPage() {
  return (
    <div className="space-y-10">
      <HeroBanner />

      <section>
        <SectionHeading icon={<Plane size={18} />} title="Flights" />
        <div className="flex flex-col gap-3 sm:flex-row">
          {flights.map((flight) => (
            <FlightCard key={flight.flightNumber} flight={flight} />
          ))}
        </div>
      </section>

      <section>
        <SectionHeading icon={<Car size={18} />} title="Car Rental" />
        <CarRentalCard carRental={carRental} />
      </section>

      <section>
        <SectionHeading icon={<Route size={18} />} title="Route Overview" subtitle="15 days, 14 nights" />
        <RouteOverviewStrip />
      </section>

      <section>
        <SectionHeading icon={<MapIcon size={18} />} title="The Whole Trip" subtitle="Tap a day below to jump straight to it" />
        <TripMap />
        <div className="mt-3 rounded-3xl border border-sea-100 bg-white/60">
          <DayNavStrip />
        </div>
      </section>

      <section>
        <SectionHeading icon={<Building2 size={18} />} title="Accommodation" />
        <div className="grid gap-3 sm:grid-cols-2">
          {accommodations.map((accommodation) => (
            <AccommodationCard key={accommodation.id} accommodation={accommodation} />
          ))}
        </div>
      </section>

      <section>
        <SectionHeading icon={<ListChecks size={18} />} title="Open To-Dos" />
        <TodoChecklist />
      </section>

      <section>
        <SectionHeading icon={<UtensilsCrossed size={18} />} title="Restaurant Shortlist" />
        <RestaurantList />
      </section>
    </div>
  );
}
