import React from "react";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

export default function SetTodoTime() {
  return (
    <Grid container item justify="space-evenly">
      <Grid item>
        <InputLabel htmlFor="hours">Hours</InputLabel>
        <Input id="hours" className="Input__time" type="number" />
      </Grid>
      <Grid item>
        <InputLabel htmlFor="minutes">Minutes</InputLabel>
        <Input id="minutes" className="Input__time" type="number" />
      </Grid>
      <Grid item>
        <InputLabel htmlFor="seconds">Seconds</InputLabel>
        <Input id="seconds" className="Input__time" type="number" />
      </Grid>
    </Grid>
  );
}
