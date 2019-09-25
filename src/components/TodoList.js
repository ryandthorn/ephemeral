import React from "react";
import { makeStyles } from "@material-ui/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";

const useStyles = makeStyles({
  text: {
    overflowWrap: "break-word"
  },
  empty: {
    color: "grey",
    textAlign: "center"
  }
});

const TodoList = ({ todos, deleteTodo, completeTodo, activeTab }) => {
  const classes = useStyles();

  // Event handlers
  const handleDone = event => {
    const id = Number(event.currentTarget.value);
    completeTodo(id);
  };
  const handleDelete = event => {
    const id = Number(event.currentTarget.value);
    deleteTodo(id);
  };

  // Filter collection of todos into active, completed, or missed todos
  const filterActiveTodos = todos =>
    todos.filter(
      todo => todo.isCompleted === false && todo.isExpired === false
    );
  const filterCompletedTodos = todos =>
    todos.filter(todo => todo.isCompleted === true);
  const filterMissedTodos = todos =>
    todos.filter(todo => todo.isCompleted === false && todo.isExpired === true);

  let filteredTodos;
  switch (activeTab) {
    case "active":
      filteredTodos = filterActiveTodos(todos);
      break;
    case "completed":
      filteredTodos = filterCompletedTodos(todos);
      break;
    case "missed":
      filteredTodos = filterMissedTodos(todos);
      break;
    default:
      break;
  }

  // Helper functions for generating list
  const shouldRenderCompleteButton = todo =>
    todo.isCompleted === false && todo.isExpired === false;
  const displayTimeRemaining = todo => {
    // Convert milliseconds to minutes
    const minutes = Math.floor((todo.expiration - Date.now()) / 60000) + 1;
    return `${minutes} minutes remaining`;
  };
  const timeRemaining = todo =>
    todo.isCompleted === false &&
    todo.isExpired === false &&
    displayTimeRemaining(todo);

  // Generate list of filtered todos
  const listItems = filteredTodos.map(todo => (
    <ListItem key={todo.id} role={undefined} dense>
      <ListItemText
        id={todo.id}
        primary={todo.text}
        secondary={timeRemaining(todo)}
        className={classes.text}
      />
      {shouldRenderCompleteButton(todo) && (
        <ListItemIcon>
          <IconButton aria-label="done" value={todo.id} onClick={handleDone}>
            <DoneIcon />
          </IconButton>
        </ListItemIcon>
      )}
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="delete"
          value={todo.id}
          onClick={handleDelete}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  ));

  const empty = <ListItem className={classes.empty}>- empty -</ListItem>;
  // If there are no todos in category, display [- empty -]
  return <List>{listItems.length === 0 ? empty : listItems}</List>;
};

export default TodoList;
