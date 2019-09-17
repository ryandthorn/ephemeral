import React from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";

const TodoForm = ({ createTodo }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const input = document.getElementById("Input");
    const todoText = input.value;
    input.value = "";
    createTodo(todoText);
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
        <InputLabel htmlFor="Input">Enter a task</InputLabel>
        <Input id="Input" autoFocus required></Input>
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
