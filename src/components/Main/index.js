import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import TodoList from "../TodoList";

const useStyles = makeStyles({
  h1: {
    textAlign: "center",
    fontSize: "4em",
    letterSpacing: "7px",
    color: "#4d4d4d",
  },
});

function Main() {
  const classes = useStyles();
  const [todos, setTodos] = useState([]);

  return (
    <>
      <h1 className={classes.h1}>TODO</h1>
      <TodoList todos={todos} />
    </>
  );
}

export default Main;
