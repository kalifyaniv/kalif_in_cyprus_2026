/** Google Maps "Universal URL" links — work without an API key, open the app on mobile. */

export function mapsViewUrl(lat: number, lng: number): string {
  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
}

export function mapsDirectionsUrl(lat: number, lng: number): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`;
}

/** Text-search link — more reliable than a lat/lng pin for finding the actual business listing (reviews, hours, rating). */
export function mapsSearchByNameUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
