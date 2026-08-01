import { MapPin, Navigation } from "lucide-react";
import { mapsViewUrl, mapsDirectionsUrl } from "../../utils/googleMaps";

export function LocationLinks({ lat, lng }: { lat: number; lng: number }) {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-semibold">
      <a
        href={mapsViewUrl(lat, lng)}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-1 text-teal hover:underline"
      >
        <MapPin size={12} /> View in Google Maps
      </a>
      <a
        href={mapsDirectionsUrl(lat, lng)}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-1 text-teal hover:underline"
      >
        <Navigation size={12} /> Navigate
      </a>
    </div>
  );
}
