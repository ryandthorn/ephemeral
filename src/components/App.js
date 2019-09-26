import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Hero from "./Hero";
import TodoForm from "./TodoForm";
import TodoContainer from "./TodoContainer";
import Container from "@material-ui/core/Container";
import useTodos from "../hooks/useTodos";
import useInterval from "../hooks/useInterval";

const App = () => {
  const [todos, createTodo, deleteTodo, completeTodo, setTodos] = useTodos();
  const [timer, setTimer] = useState(0);

  function handleExpiration() {
    const now = Date.now();
    const checked = todos.map(todo => {
      if (now >= todo.expiration) {
        todo.isExpired = true;
      }
      return todo;
    });
    setTodos(checked);
  }

  useInterval(() => {
    handleExpiration();
    setTimer(timer + 1);
  }, 1000);

  return (
    <BrowserRouter>
      <Container className="App" maxWidth="sm">
        <Hero />
        <TodoForm createTodo={createTodo}></TodoForm>
        <TodoContainer
          todos={todos}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
        ></TodoContainer>
      </Container>
    </BrowserRouter>
  );
};

export default App;
