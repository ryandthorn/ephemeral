import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";

const TodoList = ({ todos, deleteTodo, completeTodo, activeTab }) => {
  const handleDone = event => {
    const id = Number(event.currentTarget.value);
    completeTodo(id);
  };
  const handleDelete = event => {
    const id = Number(event.currentTarget.value);
    deleteTodo(id);
  };

  let filteredTodos;
  switch (activeTab) {
    case 0:
      filteredTodos = todos.filter(
        todo => todo.isCompleted === false && todo.isExpired === false
      );
      break;
    case 1:
      filteredTodos = todos.filter(todo => todo.isCompleted === true);
      break;
    case 2:
      filteredTodos = todos.filter(
        todo => todo.isCompleted === false && todo.isExpired === true
      );
      break;
    default:
      break;
  }

  const renderCompleteButton = todo =>
    todo.isCompleted === true || todo.isExpired === true ? false : true;

  const listItems = filteredTodos.map(todo => (
    <ListItem key={todo.id} role={undefined} dense>
      <ListItemText id={todo.id} primary={todo.text} />
      {renderCompleteButton(todo) && (
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

  return <List>{listItems}</List>;
};

export default TodoList;
