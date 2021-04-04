import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import TodoList from "../TodoList";
import TodoForm from "../TodoForm";
import TodoStats from "../TodoStats";

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
  const [displayTodos, setDisplayTodos] = useState(initialState);

  const sort = Todos => {
    setDisplayTodos(Todos);
  };

  const addTodo = todo => {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    setDisplayTodos(newTodos);
  };

  const removeTodo = id => {
    const newTodos = [...todos].filter(todo => todo.id !== id);

    setTodos(newTodos);
    setDisplayTodos(newTodos);
  };

  const editTodo = Todo => {
    const newTodos = [...todos].map(todo => {
      if (todo.id === Todo.id) {
        todo.text = Todo.text;
        todo.completed = Todo.completed;
      }
      return todo;
    });
    setTodos(newTodos);
    setDisplayTodos(newTodos);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <h1 className={classes.h1}>TODO</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={displayTodos}
        removeTodo={removeTodo}
        editTodo={editTodo}
      />
      <TodoStats todos={todos} displayTodos={displayTodos} sort={sort} />
    </>
  );
}

export default Main;
