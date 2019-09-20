import React from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import SetTodoTime from "./SetTodoTime";

const TodoForm = ({ createTodo }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const todoText = document.getElementById("todoText");
    const text = todoText.value;
    todoText.value = "";

    const hours = document.getElementById("hours").value;
    const minutes = document.getElementById("minutes").value;
    const seconds = document.getElementById("seconds").value;
    const duration = hours * 3600000 + minutes * 60000 + seconds * 1000;
    if (!duration) {
      // To do
      console.log("Handle input of 0ms");
      return;
    }

    createTodo(text, duration);
  };

  return (
    <Grid
      container
      component="form"
      onSubmit={handleSubmit}
      direction="row"
      justify="space-evenly"
      alignItems="center"
    >
      <Grid item>
        <InputLabel htmlFor="todoText">Enter a task</InputLabel>
        <Input id="todoText" autoFocus required></Input>
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" type="submit">
          Add
        </Button>
      </Grid>
      <SetTodoTime />
    </Grid>
  );
};
export default TodoForm;
