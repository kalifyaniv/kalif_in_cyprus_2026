import { tripMeta } from "../data/tripMeta";
import { toISODate } from "../utils/dateFormat";
import { TodayPage } from "./TodayPage";
import { OverviewPage } from "./OverviewPage";

export function HomeRoute() {
  const todayIso = toISODate(new Date());
  const inTrip = todayIso >= tripMeta.startDate && todayIso <= tripMeta.endDate;
  return inTrip ? <TodayPage /> : <OverviewPage />;
}
