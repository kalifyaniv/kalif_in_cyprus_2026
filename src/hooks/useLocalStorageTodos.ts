import { useCallback, useState } from "react";
import type { TodoItem } from "../data/types";

const STORAGE_KEY = "cyprus-trip-todos-v1";

function loadDoneMap(): Record<string, boolean> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveDoneMap(map: Record<string, boolean>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
  } catch {
    // localStorage unavailable (private mode, etc.) — todo state just won't persist.
  }
}

export function useLocalStorageTodos(seed: TodoItem[]) {
  const [todos, setTodos] = useState<TodoItem[]>(() => {
    const doneMap = loadDoneMap();
    return seed.map((item) => ({ ...item, done: doneMap[item.id] ?? item.done }));
  });

  const toggle = useCallback((id: string) => {
    setTodos((prev) => {
      const next = prev.map((item) => (item.id === id ? { ...item, done: !item.done } : item));
      saveDoneMap(Object.fromEntries(next.map((item) => [item.id, item.done])));
      return next;
    });
  }, []);

  return { todos, toggle };
}
