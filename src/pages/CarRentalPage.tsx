import { Car } from "lucide-react";
import { SectionHeading } from "../components/common/SectionHeading";
import { BackLink } from "../components/common/BackLink";
import { CarRentalCard } from "../components/overview/CarRentalCard";
import { carRental } from "../data/carRental";

export function CarRentalPage() {
  return (
    <div className="space-y-4">
      <BackLink to="/info" label="Trip Info" />
      <SectionHeading icon={<Car size={18} />} title="Car Rental" />
      <CarRentalCard carRental={carRental} />
    </div>
  );
}
