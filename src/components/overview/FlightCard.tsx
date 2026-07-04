import { Plane } from "lucide-react";
import type { Flight } from "../../data/types";
import { formatShortDate } from "../../utils/dateFormat";

export function FlightCard({ flight }: { flight: Flight }) {
  return (
    <div className="flex-1 rounded-2xl border border-sea-100 bg-white/70 p-4">
      <div className="flex items-center gap-2 text-sea-600">
        <Plane size={18} className={flight.direction === "return" ? "-scale-x-100" : ""} />
        <span className="text-xs font-bold uppercase tracking-wide">
          {flight.direction === "outbound" ? "Outbound" : "Return"}
        </span>
      </div>
      <p className="mt-1 font-semibold text-sea-900">{flight.flightNumber}</p>
      <p className="text-sm text-sea-700">{flight.route}</p>
      <p className="mt-1 font-mono text-sm text-sea-900">
        {formatShortDate(flight.date)} · {flight.departTime} → {flight.arriveTime}
      </p>
      {flight.note && <p className="mt-2 text-xs text-terracotta-600">⚠️ {flight.note}</p>}
    </div>
  );
}
