import React, { useState } from "react";
import { makeStyles, TextField } from "@material-ui/core";
import firebase from "../../util/firebase";
import { addTodo } from "../Api";

const useStyles = makeStyles({
  form: {
    textAlign: "center",
    width: "40em",
    margin: "auto",
  },
  textField: {
    "&&&:before": {
      borderBottom: "none",
    },
    "&&:after": {
      borderBottom: "none",
    },
    color: "#000000",
    borderRadius: "25px",
    border: "5px solid #696969",
    fontSize: "1.4em",
    paddingLeft: "10px",
    background: "#FFFFFF",
    overflow: "hidden",
  },
});

function TodoForm(props) {
  const classes = useStyles();
  const { user } = props;
  const [text, setText] = useState("");

  const handleChange = event => {
    if (event.target.value.length < 30) {
      const value = event.target.value;
      setText(value);
    }
  };

  const onSubmit = event => {
    event.preventDefault();
    const todo = {
      date: firebase.firestore.FieldValue.serverTimestamp(),
      text: text,
      completed: false,
    };
    addTodo(user.uid, todo);
    setText("");
  };

  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <TextField
        InputProps={{ className: classes.textField }}
        margin="normal"
        placeholder="what needs to be added ? "
        fullWidth
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
