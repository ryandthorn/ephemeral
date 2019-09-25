import React from "react";
import { makeStyles } from "@material-ui/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    display: "block",
    color: "grey",
    padding: "1rem",
    margin: "0 auto",
    width: "fit-content"
  },
  title: {
    width: "fit-content"
  },
  subtitle: {
    marginLeft: "3rem",
    width: "fit-content"
  }
});

export default function Hero() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="h2" className={classes.title}>
        Ephemeral
      </Typography>
      <Typography variant="subtitle1" className={classes.subtitle}>
        To do in time
      </Typography>
    </Box>
  );
}
