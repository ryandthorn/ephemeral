import { useState, useEffect } from "react";

export default function useTodos() {
  const storedTodos = JSON.parse(window.localStorage.getItem("todos"));
  const base = [{ id: 0, text: "Example", isCompleted: false }];
  const [todos, setTodos] = useState(storedTodos || base);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  });

  // Helper
  const generateID = _todos => {
    const greatestID = _todos.reduce(
      (greatestID, todo) => (todo.id > greatestID ? todo.id : greatestID),
      0
    );
    return 1 + greatestID(_todos);
  };

  // API
  const createTodo = text => {
    const id = generateID(todos);
    const todo = {
      id,
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

  return [todos, createTodo, deleteTodo, completeTodo];
}
