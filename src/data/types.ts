export type Region = "paphos" | "platres-troodos" | "ayia-napa" | "larnaca";

export type LocationCategory =
  | "beach"
  | "historic"
  | "nature"
  | "town"
  | "waterpark"
  | "restaurant"
  | "accommodation"
  | "transport"
  | "shopping"
  | "misc";

export interface Location {
  id: string;
  name: string;
  category: LocationCategory;
  region: Region;
  lat: number;
  lng: number;
  /** Best-effort real-world coordinates transcribed from public map data — spot-check before relying on them for driving. */
  verified: boolean;
  notes?: string;
}

export type EventType =
  | "flight"
  | "drive"
  | "checkin"
  | "checkout"
  | "meal"
  | "activity"
  | "beach"
  | "hike"
  | "waterpark"
  | "rest"
  | "shabbat"
  | "free-time"
  | "shopping";

export interface ItineraryEvent {
  time?: string;
  endTime?: string;
  type: EventType;
  title: string;
  locationId?: string;
  description?: string;
  driveDurationMinutes?: number;
  isOptional?: boolean;
  /** The one "this is definitely happening" event of a flexible day. */
  isAnchor?: boolean;
  /** Events sharing the same string are alternatives to each other — pick one, not both. */
  choiceGroup?: string;
}

export interface DayPlan {
  day: number;
  date: string;
  title: string;
  region: Region;
  isShabbat: boolean;
  /** No fixed clock schedule — one anchor event, everything else is a loose pick. */
  flexible?: boolean;
  events: ItineraryEvent[];
}

export interface Flight {
  direction: "outbound" | "return";
  flightNumber: string;
  route: string;
  date: string;
  departTime: string;
  arriveTime: string;
  note?: string;
  bookingUrl?: string;
  driveFileId?: string;
}

export interface CarRental {
  provider: string;
  bookingRef: string;
  vehicle: string;
  pickup: { locationId: string; date: string; time: string };
  dropoff: { locationId: string; date: string; time: string };
  mainDriver: string;
  openItems: string[];
  bookingUrl?: string;
  driveFileId?: string;
}

export interface Accommodation {
  id: string;
  name: string;
  region: Region;
  address: string;
  locationId: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  confirmationNumber: string;
  pin: string;
  cancellationPolicy: string;
  warnings?: string[];
  bookingUrl?: string;
  driveFileId?: string;
}

export interface TodoItem {
  id: string;
  label: string;
  done: boolean;
  /** 0 = must resolve before departure; 1-15 = must resolve by that trip day at the latest. */
  dueDay: number;
}

export interface Restaurant {
  id: string;
  name: string;
  /** Short area/town label, used to build a reliable Google search link (e.g. "Coral Bay, Paphos"). */
  area: string;
  locationId?: string;
  /**
   * "planned" = the settled pick for its meal slot, no reservation needed (walk-in style).
   * "to-book" = the pick, but needs an actual reservation call before you go.
   * "undecided" = competing with another restaurant for the same meal slot — not chosen yet.
   */
  status: "planned" | "to-book" | "undecided";
  /** Kosher status, where known. "unknown" means not stated anywhere in our sources — assume not certified for meat. */
  kosher?: "certified-meat" | "certified-dairy" | "certified-parve" | "not-certified" | "unknown";
  /** Google rating out of 5, from a web search — spot-check before relying on it, ratings drift. */
  googleRating?: number;
  googleReviewCount?: number;
  notes?: string;
}

export interface Insurance {
  provider: string;
  policyNumber: string;
  coverageStart: string;
  coverageEnd: string;
  emergencyPhone: string;
  emergencyEmail: string;
  coverageSummary: string[];
  bookingUrl?: string;
  driveFileId?: string;
}
