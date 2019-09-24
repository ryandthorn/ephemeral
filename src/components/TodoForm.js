import React from "react";
import { makeStyles } from "@material-ui/styles";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles({
  root: {
    margin: "1rem auto",
    padding: 0
  },
  textInput: {
    width: "100%"
  }
});

const TodoForm = ({ createTodo }) => {
  const classes = useStyles();

  const handleSubmit = event => {
    event.preventDefault();
    const todoText = document.getElementById("todoText");
    const text = todoText.value;
    todoText.value = "";

    const minutes = document.getElementById("minutes").value;
    const duration = minutes * 60000;
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
      alignItems="center"
      className={classes.root}
      spacing={3}
      xs={12}
    >
      <Grid item className={classes.gridItem} xs={6}>
        <InputLabel htmlFor="todoText">Enter a task</InputLabel>
        <Input
          id="todoText"
          className={classes.textInput}
          autoFocus
          required
        ></Input>
      </Grid>
      <Grid item xs={3}>
        <InputLabel htmlFor="minutes">Minutes</InputLabel>
        <Input
          id="minutes"
          required
          className={classes.timeInput}
          type="number"
          defaultValue={25}
        />
      </Grid>
      <Grid item xs={3}>
        <Button
          className={classes.buttonAdd}
          variant="contained"
          color="secondary"
          type="submit"
          fullWidth
        >
          Add
        </Button>
      </Grid>
    </Grid>
  );
};
export default TodoForm;
