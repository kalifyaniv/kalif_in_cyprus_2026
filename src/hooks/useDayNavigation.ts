import { days } from "../data/days";

export function useDayNavigation(currentDay: number) {
  const totalDays = days.length;
  const prevDay = currentDay > 1 ? currentDay - 1 : null;
  const nextDay = currentDay < totalDays ? currentDay + 1 : null;
  return { prevDay, nextDay, totalDays };
}
