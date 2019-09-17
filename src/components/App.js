import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Container from "@material-ui/core/Container";
import useTodos from "../hooks/useTodos";

const App = () => {
  const [todos, createTodo, deleteTodo, completeTodo] = useTodos();
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
