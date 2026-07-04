import {
  Plane,
  Car,
  LogIn,
  LogOut,
  UtensilsCrossed,
  Waves,
  Mountain,
  Droplets,
  Moon,
  Sparkles,
  ShoppingBag,
  MapPin,
  Landmark,
  TreePine,
  Building2,
  Ship,
  type LucideIcon,
} from "lucide-react";
import type { EventType, LocationCategory } from "../data/types";

export const eventIcons: Record<EventType, LucideIcon> = {
  flight: Plane,
  drive: Car,
  checkin: LogIn,
  checkout: LogOut,
  meal: UtensilsCrossed,
  activity: Sparkles,
  beach: Waves,
  hike: Mountain,
  waterpark: Droplets,
  rest: Moon,
  shabbat: Moon,
  "free-time": Sparkles,
  shopping: ShoppingBag,
};

export const categoryIcons: Record<LocationCategory, LucideIcon> = {
  beach: Waves,
  historic: Ship,
  nature: TreePine,
  town: Landmark,
  waterpark: Droplets,
  restaurant: UtensilsCrossed,
  accommodation: Building2,
  transport: Plane,
  shopping: ShoppingBag,
  misc: MapPin,
};
