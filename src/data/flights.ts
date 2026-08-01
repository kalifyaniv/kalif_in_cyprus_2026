import type { Flight } from "./types";

export const flights: Flight[] = [
  {
    direction: "outbound",
    flightNumber: "Cyprus Airways CY111",
    route: "Tel Aviv → Larnaca",
    date: "2026-08-12",
    departTime: "16:10",
    arriveTime: "17:10",
    note: "Booking ref 86G6DZ: pushed back ~40 min from the original 15:30→16:30 — Day 1 plan below reflects the later landing.",
    bookingUrl: "https://book.cyprusairways.com/booking/managetrip",
    driveFileId: "1xrOCZQl_6LMUi5rZQEV0K3NDsdMrMCvR",
  },
  {
    direction: "return",
    flightNumber: "Cyprus Airways CY110",
    route: "Larnaca → Tel Aviv",
    date: "2026-08-26",
    departTime: "13:45",
    arriveTime: "14:45",
    bookingUrl: "https://book.cyprusairways.com/booking/managetrip",
    driveFileId: "1xrOCZQl_6LMUi5rZQEV0K3NDsdMrMCvR",
  },
];
