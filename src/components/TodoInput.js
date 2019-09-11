import React from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

const TodoInput = () => (
  <form>
    <fieldset>
      <legend>Enter a task</legend>
      <Input autoFocus></Input>
      <Button variant="contained" color="primary">
        Add
      </Button>
    </fieldset>
  </form>
);
export default TodoInput;
