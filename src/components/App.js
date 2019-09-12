import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = React.useState([
    { text: "Example", isCompleted: false }
  ]);

  return (
    <div className="App">
      <TodoForm todos={todos} setTodos={setTodos}></TodoForm>
      <TodoList todos={todos} setTodos={setTodos}></TodoList>
    </div>
  );
};

export default App;
