import { Building2, KeyRound, ExternalLink, FileText } from "lucide-react";
import type { Accommodation } from "../../data/types";
import { regionStyle } from "../../utils/regionColors";
import { getLocation } from "../../data/locations";
import { LocationLinks } from "../common/LocationLinks";

export function AccommodationCard({ accommodation }: { accommodation: Accommodation }) {
  const style = regionStyle(accommodation.region);
  const location = getLocation(accommodation.locationId);

  return (
    <div className="glass rounded-2xl p-4">
      <div className="flex items-start justify-between gap-2">
        <div className={`flex items-center gap-2 ${style.text}`}>
          <Building2 size={18} />
          <span className="text-xs font-bold uppercase tracking-wide">{style.label}</span>
        </div>
        <span className="text-xs font-semibold text-ink-soft">{accommodation.nights} nights</span>
      </div>
      <p className="mt-1 font-semibold text-ink">{accommodation.name}</p>
      <p className="text-sm text-ink-soft">{accommodation.address}</p>
      <p className="mt-1 font-mono text-sm tabular-nums text-ink">
        {accommodation.checkIn.slice(0, 10)} → {accommodation.checkOut.slice(0, 10)}
      </p>
      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs tabular-nums text-ink-soft">
        <span>Confirmation: {accommodation.confirmationNumber}</span>
        <span className="flex items-center gap-1">
          <KeyRound size={12} /> PIN {accommodation.pin}
        </span>
      </div>
      <p className="mt-2 text-xs text-ink-soft/70">{accommodation.cancellationPolicy}</p>
      {accommodation.warnings && accommodation.warnings.length > 0 && (
        <ul className="mt-2 space-y-1 text-xs text-accent">
          {accommodation.warnings.map((warning) => (
            <li key={warning}>⚠️ {warning}</li>
          ))}
        </ul>
      )}
      {(location || accommodation.bookingUrl || accommodation.driveFileId) && (
        <div className="mt-3 space-y-1.5 border-t border-line pt-2.5">
          {location && <LocationLinks lat={location.lat} lng={location.lng} />}
          {(accommodation.bookingUrl || accommodation.driveFileId) && (
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-semibold">
              {accommodation.bookingUrl && (
                <a
                  href={accommodation.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-accent hover:underline"
                >
                  <ExternalLink size={12} /> Manage booking
                </a>
              )}
              {accommodation.driveFileId && (
                <a
                  href={`https://drive.google.com/file/d/${accommodation.driveFileId}/view`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-teal hover:underline"
                >
                  <FileText size={12} /> Confirmation (Drive)
                </a>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
