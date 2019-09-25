import React from "react";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";
import TabPanel from "./TabPanel";
import TodoList from "./TodoList";

const useStyles = makeStyles({
  container: {
    marginTop: "1rem",
    maxWidth: "100vw"
  },
  tab: {
    width: "33%"
  }
});

export default function TodoNav({ todos, deleteTodo, completeTodo }) {
  const classes = useStyles();
  const [value, setValue] = React.useState("active");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.container}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} centered>
          <Tab className={classes.tab} label="Active" value={"active"} />
          <Tab className={classes.tab} label="Completed" value={"completed"} />
          <Tab className={classes.tab} label="Missed" value={"missed"} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={"active"}>
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
          activeTab={"active"}
        />
      </TabPanel>
      <TabPanel value={value} index={"completed"}>
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
          activeTab={"completed"}
        />
      </TabPanel>
      <TabPanel value={value} index={"missed"}>
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
          activeTab={"missed"}
        />
      </TabPanel>
    </Paper>
  );
}
