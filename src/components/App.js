import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Container from "@material-ui/core/Container";
import useTodos from "../hooks/useTodos";
import useInterval from "../hooks/useInterval";

const App = () => {
  const [todos, createTodo, deleteTodo, completeTodo, setTodos] = useTodos();
  const [timer, setTimer] = useState(0);

  function handleExpiration() {
    const now = Date.now();
    const valid = todos.filter(todo => now < todo.expiration);
    // To do: maybe find a better way to update todos than exposing setTodos
    setTodos(valid);
  }

  useInterval(() => {
    handleExpiration();
    setTimer(timer + 1);
  }, 1000);

  return (
    <Container className="App" maxWidth="sm">
      <TodoForm createTodo={createTodo}></TodoForm>
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
      ></TodoList>
    </Container>
  );
};

export default App;
