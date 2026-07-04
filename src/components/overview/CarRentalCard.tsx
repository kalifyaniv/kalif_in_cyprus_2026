import { Car } from "lucide-react";
import type { CarRental } from "../../data/types";
import { getLocation } from "../../data/locations";

export function CarRentalCard({ carRental }: { carRental: CarRental }) {
  const pickupLocation = getLocation(carRental.pickup.locationId);

  return (
    <div className="rounded-2xl border border-sea-100 bg-white/70 p-4">
      <div className="flex items-center gap-2 text-sea-600">
        <Car size={18} />
        <span className="text-xs font-bold uppercase tracking-wide">Car Rental</span>
      </div>
      <p className="mt-1 font-semibold text-sea-900">{carRental.vehicle}</p>
      <p className="text-sm text-sea-700">
        {carRental.provider} · booking #{carRental.bookingRef}
      </p>
      <p className="mt-1 text-sm text-sea-700">
        Pickup {pickupLocation?.name} · {carRental.pickup.date} {carRental.pickup.time} — Drop-off{" "}
        {carRental.dropoff.date} {carRental.dropoff.time}
      </p>
      <p className="text-sm text-sea-700">Main driver: {carRental.mainDriver}</p>
      {carRental.openItems.length > 0 && (
        <ul className="mt-2 space-y-1 text-xs text-terracotta-600">
          {carRental.openItems.map((item) => (
            <li key={item}>⚠️ {item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
