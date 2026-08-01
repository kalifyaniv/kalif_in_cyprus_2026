import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppShell } from "./components/layout/AppShell";
import { HomeRoute } from "./pages/HomeRoute";
import { TodayPage } from "./pages/TodayPage";
import { OverviewPage } from "./pages/OverviewPage";
import { CalendarPage } from "./pages/CalendarPage";
import { TripInfoPage } from "./pages/TripInfoPage";
import { FlightsPage } from "./pages/FlightsPage";
import { CarRentalPage } from "./pages/CarRentalPage";
import { InsurancePage } from "./pages/InsurancePage";
import { AccommodationPage } from "./pages/AccommodationPage";
import { DayPage } from "./pages/DayPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <AppShell>
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/today" element={<TodayPage />} />
          <Route path="/overview" element={<OverviewPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/info" element={<TripInfoPage />} />
          <Route path="/flights" element={<FlightsPage />} />
          <Route path="/car-rental" element={<CarRentalPage />} />
          <Route path="/insurance" element={<InsurancePage />} />
          <Route path="/accommodation" element={<AccommodationPage />} />
          <Route path="/day/:dayNumber" element={<DayPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
}

export default App;
