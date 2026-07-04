import { Building2, KeyRound } from "lucide-react";
import type { Accommodation } from "../../data/types";
import { regionStyle } from "../../utils/regionColors";

export function AccommodationCard({ accommodation }: { accommodation: Accommodation }) {
  const style = regionStyle(accommodation.region);

  return (
    <div className="rounded-2xl border border-sea-100 bg-white/70 p-4">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 text-sea-600">
          <Building2 size={18} />
          <span className="text-xs font-bold uppercase tracking-wide">{style.label}</span>
        </div>
        <span className="text-xs font-semibold text-sea-700">{accommodation.nights} nights</span>
      </div>
      <p className="mt-1 font-semibold text-sea-900">{accommodation.name}</p>
      <p className="text-sm text-sea-700">{accommodation.address}</p>
      <p className="mt-1 text-sm text-sea-700">
        {accommodation.checkIn.slice(0, 10)} → {accommodation.checkOut.slice(0, 10)}
      </p>
      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-sea-700/90">
        <span>Confirmation: {accommodation.confirmationNumber}</span>
        <span className="flex items-center gap-1">
          <KeyRound size={12} /> PIN {accommodation.pin}
        </span>
      </div>
      <p className="mt-2 text-xs text-sea-700/70">{accommodation.cancellationPolicy}</p>
    </div>
  );
}
