import { Route, ListChecks, UtensilsCrossed, Map as MapIcon } from "lucide-react";
import { HeroBanner } from "../components/overview/HeroBanner";
import { RouteOverviewStrip } from "../components/overview/RouteOverviewStrip";
import { TodoChecklist } from "../components/overview/TodoChecklist";
import { RestaurantList } from "../components/overview/RestaurantList";
import { DayNavStrip } from "../components/layout/DayNavStrip";
import { TripMap } from "../components/map/TripMap";
import { SectionHeading } from "../components/common/SectionHeading";

export function OverviewPage() {
  return (
    <div className="space-y-10">
      <HeroBanner />

      <section>
        <SectionHeading icon={<Route size={18} />} title="Route Overview" subtitle="15 days, 14 nights" />
        <RouteOverviewStrip />
      </section>

      <section>
        <SectionHeading icon={<MapIcon size={18} />} title="The Whole Trip" subtitle="Tap a day below to jump straight to it" />
        <TripMap />
        <div className="mt-3 rounded-3xl border border-line bg-surface">
          <DayNavStrip />
        </div>
      </section>

      <section>
        <SectionHeading icon={<ListChecks size={18} />} title="Open To-Dos" />
        <TodoChecklist />
      </section>

      <section>
        <SectionHeading
          icon={<UtensilsCrossed size={18} />}
          title="Restaurant Shortlist"
          subtitle="Kosher meat only — dairy/parve is fine anywhere"
        />
        <RestaurantList />
      </section>
    </div>
  );
}
