import { Plane } from "lucide-react";
import type { Flight } from "../../data/types";
import { formatShortDate } from "../../utils/dateFormat";
import { CardLinks } from "../common/CardLinks";

export function FlightCard({ flight }: { flight: Flight }) {
  return (
    <div className="glass flex-1 rounded-2xl p-4">
      <div className="flex items-center gap-2 text-accent">
        <Plane size={18} className={flight.direction === "return" ? "-scale-x-100" : ""} />
        <span className="text-xs font-bold uppercase tracking-wide">
          {flight.direction === "outbound" ? "Outbound" : "Return"}
        </span>
      </div>
      <p className="mt-1 font-semibold text-ink">{flight.flightNumber}</p>
      <p className="text-sm text-ink-soft">{flight.route}</p>
      <p className="mt-1 font-mono text-sm tabular-nums text-ink">
        {formatShortDate(flight.date)} · {flight.departTime} → {flight.arriveTime}
      </p>
      {flight.note && <p className="mt-2 text-xs text-accent">⚠️ {flight.note}</p>}
      <CardLinks bookingUrl={flight.bookingUrl} bookingLabel="Manage booking" driveFileId={flight.driveFileId} />
    </div>
  );
}
