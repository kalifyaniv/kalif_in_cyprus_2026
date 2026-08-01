import { Link, NavLink } from "react-router-dom";
import { Palmtree, CalendarClock, LayoutGrid, CalendarDays, Info, Sun, Moon } from "lucide-react";
import { tripMeta } from "../../data/tripMeta";
import { useTheme } from "../../hooks/useTheme";

const NAV_ITEMS = [
  { to: "/today", label: "Today", icon: CalendarClock },
  { to: "/overview", label: "Overview", icon: LayoutGrid },
  { to: "/calendar", label: "Calendar", icon: CalendarDays },
  { to: "/info", label: "Trip Info", icon: Info },
];

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-page/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold text-ink">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-on-accent">
            <Palmtree size={18} />
          </span>
          {tripMeta.title}
        </Link>
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-line-strong active:scale-90"
        >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
      <nav
        aria-label="Main"
        className="no-scrollbar flex gap-2 overflow-x-auto px-4 pb-3 sm:flex-wrap sm:justify-center sm:overflow-visible"
      >
        {NAV_ITEMS.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition-colors active:scale-95 ${
                isActive
                  ? "border-transparent bg-accent text-on-accent shadow-[0_4px_16px_var(--color-glow)]"
                  : "border-line bg-surface text-ink-soft hover:border-line-strong"
              }`
            }
          >
            <Icon size={15} />
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
