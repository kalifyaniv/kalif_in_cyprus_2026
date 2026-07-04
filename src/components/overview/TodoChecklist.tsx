import { CheckCircle2, Circle } from "lucide-react";
import { todos as seedTodos } from "../../data/todos";
import { useLocalStorageTodos } from "../../hooks/useLocalStorageTodos";

export function TodoChecklist() {
  const { todos, toggle } = useLocalStorageTodos(seedTodos);
  const doneCount = todos.filter((t) => t.done).length;

  return (
    <div className="rounded-2xl border border-sea-100 bg-white/70 p-4">
      <p className="mb-3 text-xs font-semibold text-sea-700/80">
        {doneCount} of {todos.length} done
      </p>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li key={todo.id}>
            <button
              type="button"
              onClick={() => toggle(todo.id)}
              className={`flex w-full items-start gap-2.5 rounded-xl px-2 py-1.5 text-left text-sm transition-colors active:scale-[0.99] ${
                todo.done ? "text-sea-700/50 line-through" : "text-sea-900 hover:bg-sea-50"
              }`}
            >
              {todo.done ? (
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-forest-500" />
              ) : (
                <Circle size={18} className="mt-0.5 shrink-0 text-sea-300" />
              )}
              {todo.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
