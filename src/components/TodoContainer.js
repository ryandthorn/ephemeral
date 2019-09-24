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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.container}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} centered>
          <Tab className={classes.tab} label="Active" index={0} />
          <Tab className={classes.tab} label="Completed" index={1} />
          <Tab className={classes.tab} label="Missed" index={2} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
          activeTab={0}
          id="TodoList-active"
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
          activeTab={1}
          id="TodoList-completed"
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
          activeTab={2}
          id="TodoList-missed"
        />
      </TabPanel>
    </Paper>
  );
}
