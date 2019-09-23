import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Container from "@material-ui/core/Container";
import TabPanel from "./TabPanel";
import TodoList from "./TodoList";

export default function TodoNav({ todos, deleteTodo, completeTodo }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container className="TodoContainer">
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Active" index={0} />
          <Tab label="Completed" index={1} />
          <Tab label="Missed" index={2} />
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
    </Container>
  );
}
