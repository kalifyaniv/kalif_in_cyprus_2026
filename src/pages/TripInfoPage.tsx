import { Link } from "react-router-dom";
import { Plane, Car, ShieldCheck, Building2, ChevronRight, Info } from "lucide-react";
import type { ReactNode } from "react";
import { SectionHeading } from "../components/common/SectionHeading";

interface InfoLinkProps {
  to: string;
  icon: ReactNode;
  title: string;
  summary: string;
}

function InfoLink({ to, icon, title, summary }: InfoLinkProps) {
  return (
    <Link
      to={to}
      className="glass flex items-center gap-3 rounded-2xl p-4 transition-colors active:scale-[0.99] hover:border-line-strong"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-accent text-on-accent">{icon}</span>
      <span className="flex-1">
        <span className="block font-semibold text-ink">{title}</span>
        <span className="block text-sm text-ink-soft/80">{summary}</span>
      </span>
      <ChevronRight size={18} className="shrink-0 text-ink-soft/50" />
    </Link>
  );
}

export function TripInfoPage() {
  return (
    <div className="space-y-4">
      <SectionHeading icon={<Info size={18} />} title="Trip Info" subtitle="Bookings & logistics" />
      <div className="space-y-3">
        <InfoLink to="/flights" icon={<Plane size={18} />} title="Flights" summary="Cyprus Airways · CY111 / CY110" />
        <InfoLink to="/car-rental" icon={<Car size={18} />} title="Car Rental" summary="Keddy by Europcar · Kia Sportage" />
        <InfoLink to="/insurance" icon={<ShieldCheck size={18} />} title="Travel Insurance" summary="PassportCard · Policy 310716847" />
        <InfoLink
          to="/accommodation"
          icon={<Building2 size={18} />}
          title="Accommodation"
          summary="4 stays · Paphos → Platres → Ayia Napa → Larnaca"
        />
      </div>
    </div>
  );
}
