import { Link } from "react-router-dom";
import { Palmtree } from "lucide-react";
import { tripMeta } from "../../data/tripMeta";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-sea-100 bg-sand-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold text-sea-900">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sea-600 text-sand-50">
            <Palmtree size={18} />
          </span>
          {tripMeta.title}
        </Link>
      </div>
    </header>
  );
}
