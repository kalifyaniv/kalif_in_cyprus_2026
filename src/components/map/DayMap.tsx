import { useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import type { DayPlan } from "../../data/types";
import { regionStyles } from "../../utils/regionColors";
import { routeForDay } from "../../utils/mapRoute";
import { useRoadRoute } from "../../hooks/useRoadRoute";
import { createMarkerIcon } from "./markerIcon";
import { FitBounds } from "./FitBounds";

export function DayMap({ day }: { day: DayPlan }) {
  const route = useMemo(() => routeForDay(day), [day]);
  const waypoints = useMemo<[number, number][]>(() => route.map((loc) => [loc.lat, loc.lng]), [route]);
  const { positions, isRoadRoute } = useRoadRoute(waypoints);
  const color = regionStyles[day.region].hex;

  if (route.length === 0) {
    return (
      <div className="flex h-56 items-center justify-center rounded-3xl border border-line bg-surface text-sm text-ink-soft">
        No mapped stops for this day yet.
      </div>
    );
  }

  return (
    <div>
      <div className="h-64 w-full overflow-hidden rounded-3xl border border-line shadow-sm sm:h-80">
        <MapContainer
          center={[route[0].lat, route[0].lng]}
          zoom={13}
          scrollWheelZoom={false}
          className="h-full w-full"
          attributionControl={false}
        >
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
            attribution="Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ"
          />
          {route.length > 1 && (
            <Polyline
              positions={positions}
              pathOptions={
                isRoadRoute
                  ? { color, weight: 4, opacity: 0.85 }
                  : { color, weight: 4, opacity: 0.8, dashArray: "6 8" }
              }
            />
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
          <FitBounds positions={waypoints} />
        </MapContainer>
      </div>
      {route.length === 1 && (
        <p className="pt-2 text-center text-xs font-medium text-ink-soft">Resting today — no route to plot 🌴</p>
      )}
    </div>
  );
}
