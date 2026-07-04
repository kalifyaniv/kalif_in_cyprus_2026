import { useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import type { DayPlan } from "../../data/types";
import { regionStyles } from "../../utils/regionColors";
import { routeForDay } from "../../utils/mapRoute";
import { createMarkerIcon } from "./markerIcon";
import { FitBounds } from "./FitBounds";

export function DayMap({ day }: { day: DayPlan }) {
  const route = useMemo(() => routeForDay(day), [day]);
  const positions = useMemo<[number, number][]>(() => route.map((loc) => [loc.lat, loc.lng]), [route]);
  const color = regionStyles[day.region].hex;

  if (route.length === 0) {
    return (
      <div className="flex h-56 items-center justify-center rounded-3xl border border-sea-100 bg-sea-50 text-sm text-sea-700">
        No mapped stops for this day yet.
      </div>
    );
  }

  return (
    <div>
      <div className="h-64 w-full overflow-hidden rounded-3xl border border-sea-100 shadow-sm sm:h-80">
        <MapContainer
          center={[route[0].lat, route[0].lng]}
          zoom={13}
          scrollWheelZoom={false}
          className="h-full w-full"
          attributionControl={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {route.length > 1 && (
            <Polyline positions={positions} pathOptions={{ color, weight: 4, opacity: 0.85 }} />
          )}
          {route.map((loc, index) => (
            <Marker key={`${loc.id}-${index}`} position={[loc.lat, loc.lng]} icon={createMarkerIcon(color, index + 1)}>
              <Popup>
                <strong>
                  {index + 1}. {loc.name}
                </strong>
              </Popup>
            </Marker>
          ))}
          <FitBounds positions={positions} />
        </MapContainer>
      </div>
      {route.length === 1 && (
        <p className="pt-2 text-center text-xs font-medium text-sea-700">Resting today — no route to plot 🌴</p>
      )}
    </div>
  );
}
