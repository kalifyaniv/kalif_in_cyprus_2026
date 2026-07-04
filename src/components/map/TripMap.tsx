import { useEffect, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import { days } from "../../data/days";
import { locations } from "../../data/locations";
import { regionStyles } from "../../utils/regionColors";
import { routeForDays, warnUnverifiedLocations } from "../../utils/mapRoute";
import { createMarkerIcon } from "./markerIcon";
import { FitBounds } from "./FitBounds";
import { MapLegend } from "./MapLegend";

export function TripMap() {
  useEffect(() => warnUnverifiedLocations(locations), []);

  const route = useMemo(() => routeForDays(days), []);
  const positions = useMemo<[number, number][]>(() => route.map((loc) => [loc.lat, loc.lng]), [route]);

  return (
    <div>
      <div className="h-72 w-full overflow-hidden rounded-3xl border border-sea-100 shadow-sm sm:h-96">
        <MapContainer
          center={[34.95, 33.1]}
          zoom={9}
          scrollWheelZoom={false}
          className="h-full w-full"
          attributionControl={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Polyline positions={positions} pathOptions={{ color: "#0e7490", weight: 3, dashArray: "6 8", opacity: 0.7 }} />
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
          <FitBounds positions={positions} />
        </MapContainer>
      </div>
      <MapLegend />
    </div>
  );
}
