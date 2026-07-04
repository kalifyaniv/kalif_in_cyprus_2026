import type { Restaurant } from "./types";

export const restaurants: Restaurant[] = [
  { id: "oniro-by-the-sea", name: "Oniro By The Sea", locationId: "oniro-by-the-sea", status: "confirmed", notes: "Paphos" },
  { id: "seriani-restaurant", name: "Seriani Restaurant", locationId: "seriani-restaurant", status: "confirmed", notes: "Coral Bay" },
  { id: "st-georges-tavern", name: "St. Georges Tavern", locationId: "st-georges-tavern", status: "to-book", notes: "Paphos — ask about live music" },
  { id: "isaac-tavern", name: "Isaac Tavern", locationId: "isaac-tavern", status: "to-book", notes: "Ayia Napa — ask about live music" },
  { id: "andama-tavern", name: "Andama Tavern", locationId: "andama-tavern", status: "confirmed", notes: "Protaras" },
  { id: "zephyros-restaurant", name: "Zephyros Restaurant", locationId: "zephyros-restaurant", status: "confirmed", notes: "Larnaca" },
];
