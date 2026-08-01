import { Car } from "lucide-react";
import type { CarRental } from "../../data/types";
import { getLocation } from "../../data/locations";
import { CardLinks } from "../common/CardLinks";

export function CarRentalCard({ carRental }: { carRental: CarRental }) {
  const pickupLocation = getLocation(carRental.pickup.locationId);

  return (
    <div className="glass rounded-2xl p-4">
      <div className="flex items-center gap-2 text-accent">
        <Car size={18} />
        <span className="text-xs font-bold uppercase tracking-wide">Car Rental</span>
      </div>
      <p className="mt-1 font-semibold text-ink">{carRental.vehicle}</p>
      <p className="text-sm text-ink-soft">
        {carRental.provider} · booking #{carRental.bookingRef}
      </p>
      <p className="mt-1 font-mono text-sm tabular-nums text-ink-soft">
        Pickup {pickupLocation?.name} · {carRental.pickup.date} {carRental.pickup.time} — Drop-off{" "}
        {carRental.dropoff.date} {carRental.dropoff.time}
      </p>
      <p className="text-sm text-ink-soft">Main driver: {carRental.mainDriver}</p>
      {carRental.openItems.length > 0 && (
        <ul className="mt-2 space-y-1 text-xs text-accent">
          {carRental.openItems.map((item) => (
            <li key={item}>⚠️ {item}</li>
          ))}
        </ul>
      )}
      <CardLinks bookingUrl={carRental.bookingUrl} bookingLabel="Manage booking" driveFileId={carRental.driveFileId} />
    </div>
  );
}
