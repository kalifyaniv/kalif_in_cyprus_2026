import L from "leaflet";

/**
 * Custom DivIcon markers — avoids react-leaflet's well-known broken default
 * marker image path under Vite, and lets us color-code by region.
 */
export function createMarkerIcon(color: string, label?: string | number): L.DivIcon {
  return L.divIcon({
    className: "trip-marker",
    html: `
      <div style="
        background:${color};
        width:${label !== undefined ? 28 : 18}px;
        height:${label !== undefined ? 28 : 18}px;
        border-radius:9999px;
        border:2px solid white;
        box-shadow:0 1px 4px rgba(0,0,0,0.35);
        display:flex;
        align-items:center;
        justify-content:center;
        color:white;
        font-family:system-ui, sans-serif;
        font-size:12px;
        font-weight:700;
      ">${label ?? ""}</div>
    `,
    iconSize: label !== undefined ? [28, 28] : [18, 18],
    iconAnchor: label !== undefined ? [14, 14] : [9, 9],
  });
}
