import { useEffect, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import { days } from "../../data/days";
import { locations } from "../../data/locations";
import { regionStyles } from "../../utils/regionColors";
import { routeForDays, warnUnverifiedLocations } from "../../utils/mapRoute";
import { useRoadRoute } from "../../hooks/useRoadRoute";
import { createMarkerIcon } from "./markerIcon";
import { FitBounds } from "./FitBounds";
import { MapLegend } from "./MapLegend";

export function TripMap() {
  useEffect(() => warnUnverifiedLocations(locations), []);

  const route = useMemo(() => routeForDays(days), []);
  const waypoints = useMemo<[number, number][]>(() => route.map((loc) => [loc.lat, loc.lng]), [route]);
  const { positions, isRoadRoute } = useRoadRoute(waypoints);

  return (
    <div>
      <div className="h-72 w-full overflow-hidden rounded-3xl border border-line shadow-sm sm:h-96">
        <MapContainer
          center={[34.95, 33.1]}
          zoom={9}
          scrollWheelZoom={false}
          className="h-full w-full"
          attributionControl={false}
        >
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
            attribution="Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ"
          />
          <Polyline
            positions={positions}
            pathOptions={
              isRoadRoute
                ? { color: "#0e7490", weight: 3, opacity: 0.75 }
                : { color: "#0e7490", weight: 3, dashArray: "6 8", opacity: 0.7 }
            }
          />
          {route.map((loc) => (
            <Marker
              key={loc.id}
              position={[loc.lat, loc.lng]}
              icon={createMarkerIcon(regionStyles[loc.region].hex, loc.category === "accommodation" ? "★" : undefined)}
            >
              <Popup>
                <strong>{loc.name}</strong>
                <br />
                {regionStyles[loc.region].label}
              </Popup>
            </Marker>
          ))}
          <FitBounds positions={waypoints} />
        </MapContainer>
      </div>
      <MapLegend />
    </div>
  );
}
