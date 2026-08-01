import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

export function BackLink({ to, label }: { to: string; label: string }) {
  return (
    <Link to={to} className="inline-flex items-center gap-1 text-sm font-medium text-ink-soft hover:text-ink">
      <ChevronLeft size={16} /> {label}
    </Link>
  );
}
