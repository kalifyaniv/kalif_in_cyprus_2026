import type { CarRental } from "./types";

export const carRental: CarRental = {
  provider: "Keddy by Europcar (via Booking.com)",
  bookingRef: "770752095",
  vehicle: "Kia Sportage or similar (SUV, automatic, 4 doors / 5 seats), Full Protection included",
  pickup: { locationId: "larnaca-airport", date: "2026-08-12", time: "17:00" },
  dropoff: { locationId: "larnaca-airport", date: "2026-08-26", time: "13:30" },
  mainDriver: "Yaniv Gidon Kalif",
  openItems: ["Confirm child car seats (x3)", "Confirm insurance details"],
};
