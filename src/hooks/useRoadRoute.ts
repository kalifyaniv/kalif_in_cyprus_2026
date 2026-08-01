import { useEffect, useState } from "react";
import { fetchRoadRoute } from "../utils/roadRoute";

/**
 * Resolves an ordered list of waypoints to a road-following polyline.
 * Returns the straight-line waypoints immediately (so the map never looks empty),
 * then swaps in the real road geometry once it loads. Falls back silently to the
 * straight line if routing fails.
 */
export function useRoadRoute(positions: [number, number][]) {
  const [roadRoute, setRoadRoute] = useState<[number, number][] | null>(null);
  const key = JSON.stringify(positions);

  useEffect(() => {
    setRoadRoute(null);
    if (positions.length < 2) return;

    const controller = new AbortController();
    fetchRoadRoute(positions, controller.signal).then((route) => {
      if (!controller.signal.aborted) setRoadRoute(route);
    });

    return () => controller.abort();
    // oxlint-disable-next-line react-hooks/exhaustive-deps -- keyed on `key` (stringified positions) intentionally, since `positions` is a fresh array reference every render
  }, [key]);

  return {
    positions: roadRoute ?? positions,
    isRoadRoute: roadRoute !== null,
  };
}
