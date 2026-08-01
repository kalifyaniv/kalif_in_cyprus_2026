/**
 * Fetches a real driving route (road geometry) between an ordered list of waypoints,
 * using the public OSRM demo server. This is a free, unauthenticated routing API —
 * fine for a low-traffic family trip site, not meant for production-scale use.
 * Results are cached in-memory per coordinate sequence so repeated renders/navigations
 * don't refetch. Callers should fall back to a straight line if this returns null
 * (network failure, no route found, etc).
 */

const OSRM_BASE = "https://router.project-osrm.org/route/v1/driving/";
const cache = new Map<string, [number, number][] | null>();

function cacheKey(positions: [number, number][]): string {
  return positions.map(([lat, lng]) => `${lat.toFixed(5)},${lng.toFixed(5)}`).join(";");
}

export async function fetchRoadRoute(
  positions: [number, number][],
  signal?: AbortSignal,
): Promise<[number, number][] | null> {
  if (positions.length < 2) return null;

  const key = cacheKey(positions);
  if (cache.has(key)) return cache.get(key) ?? null;

  const coordsParam = positions.map(([lat, lng]) => `${lng},${lat}`).join(";");
  const url = `${OSRM_BASE}${coordsParam}?overview=full&geometries=geojson`;

  try {
    const res = await fetch(url, { signal });
    if (!res.ok) throw new Error(`OSRM ${res.status}`);
    const data = await res.json();
    if (data.code !== "Ok" || !data.routes?.[0]?.geometry?.coordinates) {
      throw new Error(`OSRM response: ${data.code}`);
    }
    const route: [number, number][] = data.routes[0].geometry.coordinates.map(
      ([lng, lat]: [number, number]) => [lat, lng],
    );
    cache.set(key, route);
    return route;
  } catch (err) {
    if ((err as Error).name !== "AbortError") {
      console.warn("[trip-map] Road routing failed, falling back to straight line:", err);
    }
    cache.set(key, null);
    return null;
  }
}
