import React, { useState } from "react";
import { makeStyles, TextField } from "@material-ui/core";
import firebase from "../../util/firebase";

const todoRef = firebase.database().ref("Todo");

const useStyles = makeStyles({
  form: {
    textAlign: "center",
    width: "40em",
    margin: "auto",
    background: "#654321",
  },
  textField: {
    "&&&:before": {
      borderBottom: "none",
    },
    "&&:after": {
      borderBottom: "none",
    },
    color: "#000000",
    fontSize: "1.5em",
    paddingLeft: "10px",
    border: "1px solid black",
    background: "#FFFFFF",
  },
});

function TodoForm() {
  const classes = useStyles();
  const [text, setText] = useState("");

  const handleChange = event => {
    const value = event.target.value;
    setText(value);
  };

  const onSubmit = event => {
    event.preventDefault();
    const todo = {
      text: text,
      completed: false,
    };
    todoRef.push(todo);
    setText("");
  };

  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <TextField
        InputProps={{ className: classes.textField }}
        margin="normal"
        placeholder="what needs to be added ? "
        fullWidth
        label=" "
        value={text}
        onChange={handleChange}
        autoComplete="off"
        required
        data-testid="input-field"
      />
    </form>
  );
}

export default TodoForm;
