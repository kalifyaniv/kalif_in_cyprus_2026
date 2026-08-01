import { Navigate, useParams } from "react-router-dom";
import { getDay } from "../data/days";
import { DayDetail } from "../components/day/DayDetail";

export function DayPage() {
  const { dayNumber } = useParams();
  const parsed = Number(dayNumber);

  if (!Number.isInteger(parsed)) {
    return <Navigate to="/404" replace />;
  }

  const day = getDay(parsed);
  if (!day) {
    return <Navigate to="/404" replace />;
  }

  return <DayDetail day={day} />;
}
