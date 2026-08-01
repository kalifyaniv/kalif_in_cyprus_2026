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
}

export interface DayPlan {
  day: number;
  date: string;
  title: string;
  region: Region;
  isShabbat: boolean;
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
  locationId?: string;
  status: "confirmed" | "to-book";
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
