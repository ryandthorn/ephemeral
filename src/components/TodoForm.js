import React from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";

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
    <Grid
      container
      component="form"
      onSubmit={e => handleSubmit(e)}
      direction="row"
      justify="space-evenly"
      alignItems="center"
    >
      <Grid item>
        <InputLabel htmlFor="Input">Enter a task</InputLabel>
        <Input
          id="Input"
          value={todoText}
          autoFocus
          onChange={e => setTodoText(e.target.value)}
        ></Input>
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" type="submit">
          Add
        </Button>
      </Grid>
    </Grid>
  );
};
export default TodoForm;
