import { Link } from "react-router-dom";
import { Compass } from "lucide-react";

export function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-24 text-center">
      <Compass size={40} className="text-accent" />
      <h1 className="font-display text-2xl font-bold text-ink">Off the map</h1>
      <p className="text-ink-soft">That day doesn't exist on this trip.</p>
      <Link to="/" className="rounded-full bg-accent px-5 py-2.5 font-semibold text-on-accent">
        Back to overview
      </Link>
    </div>
  );
}
