import React, { useState } from "react";
import s from "./TodoForm.styles.scss";

import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import useFormState from "../../utilis/useFormState";

const TodoForm = ({ addTodo }) => {
  // console.log(addTodo);
  const [value, handleChange, reset] = useFormState("");
  return (
    <Paper>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(value);
          reset();
          // console.log("SD");
        }}
      >
        <TextField value={value} onChange={handleChange} />
        {/* <button>Submit</button> */}
      </form>
    </Paper>
  );
};

export default TodoForm;
