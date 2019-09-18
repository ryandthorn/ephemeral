import { useState, useEffect } from "react";

export default function useTodos() {
  const storedTodos = JSON.parse(window.localStorage.getItem("todos"));
  const base = [{ id: 0, text: "Example", isCompleted: false }];
  const [todos, setTodos] = useState(storedTodos || base);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  });

  // Helper
  const generateTimestamps = duration => {
    const id = Date.now();
    const expiration = id + duration;
    return { id, expiration };
  };

  // API
  const createTodo = (text, duration) => {
    const { id, expiration } = generateTimestamps(duration);
    const todo = {
      id,
      expiration,
      text,
      isCompleted: false
    };
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  const deleteTodo = id => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  const completeTodo = id => {
    const newTodos = todos.map(todo =>
      todo.id === id ? { ...todo, isCompleted: true } : todo
    );
    setTodos(newTodos);
  };

  return [todos, createTodo, deleteTodo, completeTodo, setTodos];
}
