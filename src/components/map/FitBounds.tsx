import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

export function FitBounds({ positions }: { positions: [number, number][] }) {
  const map = useMap();

  useEffect(() => {
    if (positions.length === 0) return;
    if (positions.length === 1) {
      map.setView(positions[0], 12);
      return;
    }
    map.fitBounds(L.latLngBounds(positions), { padding: [32, 32] });
  }, [map, positions]);

  return null;
}
