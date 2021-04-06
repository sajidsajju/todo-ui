import React, { useEffect, useMemo, useState } from "react";
import { makeStyles } from "@material-ui/core";
import firebase from "../../util/firebase";

import TodoList from "../TodoList";
import TodoForm from "../TodoForm";
import TodoStats from "../TodoStats";

const todoRef = firebase.database().ref("Todo");

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
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    data();
  }, []);

  const data = () => {
    todoRef.on("value", snapshot => {
      const todos = snapshot.val();
      const todoList = [];
      for (let id in todos) {
        todoList.push({ id, ...todos[id] });
      }
      setTodos(todoList.reverse());
    });
  };

  const filteredTodos = useMemo(
    () =>
      todos.filter(todo => {
        switch (filter) {
          case "completed":
            return todo.completed === true;

          case "active":
            return todo.completed === false;

          default:
            return todo;
        }
      }),
    [todos, filter],
  );

  return (
    <>
      <h1 className={classes.h1}>TODO</h1>
      <TodoForm />
      <TodoList todos={filteredTodos} />
      <TodoStats todos={filteredTodos} setFilter={setFilter} />
    </>
  );
}

export default Main;
