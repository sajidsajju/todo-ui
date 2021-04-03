import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import TodoList from "../TodoList";
import TodoForm from "../TodoForm";

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
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];

  const [todos, setTodos] = useState(initialState);

  const addTodo = (todo) => {
    const newTodo = [todo, ...todos];
    setTodos(newTodo);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <h1 className={classes.h1}>TODO</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </>
  );
}

export default Main;
