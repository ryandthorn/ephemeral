import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = React.useState([]);

  return (
    <div className="App">
      <TodoInput todos={todos} setTodos={setTodos}></TodoInput>
      <TodoList todos={todos} setTodos={setTodos}></TodoList>
    </div>
  );
};

export default App;
