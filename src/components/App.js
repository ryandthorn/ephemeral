import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Container from "@material-ui/core/Container";

const App = () => {
  const [todos, setTodos] = React.useState([
    { text: "Example", isCompleted: false }
  ]);

  return (
    <Container className="App" maxWidth="sm">
      <TodoForm todos={todos} setTodos={setTodos}></TodoForm>
      <TodoList todos={todos} setTodos={setTodos}></TodoList>
    </Container>
  );
};

export default App;
