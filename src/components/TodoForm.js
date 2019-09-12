import React from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

const TodoForm = props => {
  const [todoText, setTodoText] = React.useState("");

  const handleSubmit = event => {
    event.preventDefault();
    const newTodo = { text: todoText, isCompleted: false };
    const updatedTodos = [...props.todos, newTodo];
    props.setTodos(updatedTodos);
    setTodoText("");
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <fieldset>
        <legend>Enter a task</legend>
        <Input
          value={todoText}
          autoFocus
          onChange={e => setTodoText(e.target.value)}
        ></Input>
        <Button variant="contained" color="primary" type="submit">
          Add
        </Button>
      </fieldset>
    </form>
  );
};
export default TodoForm;
