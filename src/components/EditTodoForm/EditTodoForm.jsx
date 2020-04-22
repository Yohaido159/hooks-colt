import React, { useState } from "react";
import s from "./EditTodoForm.styles.scss";

import TextField from "@material-ui/core/TextField";

import inputUserChange from "../../utilis/useFormState";

const EditTodoForm = ({ id, editTodo, task, toggle }) => {
  const [value, handleChange, reset] = inputUserChange(task);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggle();
      }}
    >
      <TextField value={value} onChange={handleChange} fullWidth />
    </form>
  );
};

export default EditTodoForm;
