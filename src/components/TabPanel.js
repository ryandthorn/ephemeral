import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function TabPanel({ children, value, index }) {
  return (
    <Typography component="div" role="tabpanel" hidden={value !== index}>
      <Box>{children}</Box>
    </Typography>
  );
}
