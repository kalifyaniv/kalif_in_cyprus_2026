import { Building2 } from "lucide-react";
import { SectionHeading } from "../components/common/SectionHeading";
import { BackLink } from "../components/common/BackLink";
import { AccommodationCard } from "../components/overview/AccommodationCard";
import { accommodations } from "../data/accommodations";

export function AccommodationPage() {
  return (
    <div className="space-y-4">
      <BackLink to="/info" label="Trip Info" />
      <SectionHeading icon={<Building2 size={18} />} title="Accommodation" />
      <div className="grid gap-3 sm:grid-cols-2">
        {accommodations.map((accommodation) => (
          <AccommodationCard key={accommodation.id} accommodation={accommodation} />
        ))}
      </div>
    </div>
  );
}
