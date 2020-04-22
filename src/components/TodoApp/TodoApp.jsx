import React, { useState, useEffect } from "react";
import s from "./TodoApp.styles.scss";

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

import useTodosStateFunction from "../../utilis/useTodosStateFunction";
import useLocalStorageHook from "../../utilis/useLocalStorageHook";

import TodosList from "../TodosList/TodosList";
import TodoForm from "../TodoForm/TodoForm";

const TodoApp = (props) => {
  const initialTodos = [{ id: 1, task: "first task", completed: false }];

  const {
    todos,
    addTodo,
    removeTodo,
    toggleTodo,
    editTodo,
  } = useTodosStateFunction(initialTodos);

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">SOME TEXT</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodosList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoApp;
