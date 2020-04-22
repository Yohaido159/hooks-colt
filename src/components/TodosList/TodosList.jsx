import React, { useState } from "react";
import s from "./TodosList.styles.scss";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import Todo from "../Todo/Todo";

const TodosList = ({ todos, removeTodo, toggleTodo, editTodo }) => {
  return (
    <Paper>
      <List>
        {todos.map((todo) => (
          <>
            <Todo
              {...todo}
              completed={todo.completed}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
};

export default TodosList;
