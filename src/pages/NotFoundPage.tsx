import { Link } from "react-router-dom";
import { Compass } from "lucide-react";

export function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-24 text-center">
      <Compass size={40} className="text-sea-400" />
      <h1 className="font-display text-2xl font-bold text-sea-900">Off the map</h1>
      <p className="text-sea-700">That day doesn't exist on this trip.</p>
      <Link to="/" className="rounded-full bg-sea-600 px-5 py-2.5 font-semibold text-sand-50">
        Back to overview
      </Link>
    </div>
  );
}
