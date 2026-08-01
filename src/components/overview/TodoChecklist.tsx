import { useMemo } from "react";
import { CheckCircle2, Circle } from "lucide-react";
import { todos as seedTodos } from "../../data/todos";
import { useLocalStorageTodos } from "../../hooks/useLocalStorageTodos";
import { getDay } from "../../data/days";
import { tripMeta } from "../../data/tripMeta";
import { formatShortDate, formatRelativeDue } from "../../utils/dateFormat";
import type { TodoItem } from "../../data/types";

function groupLabel(dueDay: number): string {
  if (dueDay === 0) return "Before You Leave";
  const day = getDay(dueDay);
  return day ? `Day ${dueDay} · ${formatShortDate(day.date)} · ${day.title}` : `Day ${dueDay}`;
}

function groupDueDate(dueDay: number): string {
  return dueDay === 0 ? tripMeta.startDate : getDay(dueDay)?.date ?? tripMeta.startDate;
}

export function TodoChecklist() {
  const { todos, toggle } = useLocalStorageTodos(seedTodos);
  const doneCount = todos.filter((t) => t.done).length;
  const now = useMemo(() => new Date(), []);

  const groups = useMemo(() => {
    const byDueDay = new Map<number, TodoItem[]>();
    for (const todo of todos) {
      const list = byDueDay.get(todo.dueDay) ?? [];
      list.push(todo);
      byDueDay.set(todo.dueDay, list);
    }
    return Array.from(byDueDay.entries()).sort(([a], [b]) => a - b);
  }, [todos]);

  return (
    <div className="glass rounded-2xl p-4">
      <p className="mb-3 text-xs font-semibold text-ink-soft/80">
        {doneCount} of {todos.length} done
      </p>
      <div className="space-y-4">
        {groups.map(([dueDay, items]) => (
          <div key={dueDay}>
            <div className="mb-1.5 flex items-center justify-between gap-2">
              <p className="text-xs font-bold uppercase tracking-wide text-accent">{groupLabel(dueDay)}</p>
              <span className="shrink-0 font-mono text-xs font-medium text-ink-soft/60">{formatRelativeDue(groupDueDate(dueDay), now)}</span>
            </div>
            <ul className="space-y-1">
              {items.map((todo) => (
                <li key={todo.id}>
                  <button
                    type="button"
                    onClick={() => toggle(todo.id)}
                    className={`flex w-full items-start gap-2.5 rounded-xl px-2 py-1.5 text-left text-sm transition-colors active:scale-[0.99] ${
                      todo.done ? "text-ink-soft/50 line-through" : "text-ink hover:bg-accent-soft"
                    }`}
                  >
                    {todo.done ? (
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-teal" />
                    ) : (
                      <Circle size={18} className="mt-0.5 shrink-0 text-ink-soft/40" />
                    )}
                    {todo.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
