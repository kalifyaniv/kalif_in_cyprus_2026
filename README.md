# Cyprus 2026 🌊

A trip-companion site for our family's Cyprus trip, 12–26 August 2026 — itinerary, maps, bookings,
and a running to-do list, day by day.

Deployed via Vercel (see the project's Vercel dashboard for the live URL). This repo is public;
see [docs/TRIP_CONTEXT.md](./docs/TRIP_CONTEXT.md) for why that's a deliberate call, not an
oversight.

## What's here

- **Overview** (`/`) — hero, route summary, trip-wide map, date-grouped to-dos, restaurant shortlist
- **Today** (`/today`) — auto-shows the current day's plan during the trip; a countdown/wrap-up card otherwise
- **Calendar** (`/calendar`) — the 15 days as a month grid, color-coded by region
- **Day pages** (`/day/:n`) — per-day timeline, map with real road-routed directions (OSRM), Shabbat banner
- **Trip Info** (`/info`) — Flights, Car Rental, Insurance, Accommodation, each with links to the
  original booking and the matching confirmation doc in Drive
- Light/dark theme, persisted

## Content vs. code

Trip content (who's traveling, bookings, open decisions) lives in [`docs/`](./docs) as the
human-readable reference, and in `src/data/*.ts` as what the site actually renders. When one
changes, check the other — they're meant to stay in sync, not auto-derived from each other.

## Development

```bash
npm install
npm run dev      # local dev server
npm run lint      # oxlint
npm run build     # typecheck + production build
```

Stack: React 19 + TypeScript, Vite, Tailwind v4, React Router, Leaflet (via react-leaflet),
Framer Motion.
