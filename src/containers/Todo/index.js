import React, { useEffect, useMemo, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core";
import SyncLoader from "react-spinners/SyncLoader";

import TodoList from "../../components/TodoList";
import TodoForm from "../../components/TodoForm";
import TodoStats from "../../components/TodoStats";
import { AuthContext } from "../Login/AuthProvider";
import TodoAppBar from "../../components/AppBar";
import { getTodos } from "../../components/Api";

const useStyles = makeStyles({
  h1: {
    textAlign: "center",
    fontSize: "4em",
    letterSpacing: "7px",
    color: "#4d4d4d",
    marginTop: "1.5em",
  },
  loading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
  },
});

function Todo() {
  const classes = useStyles();

  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    getTodos(user.uid, setData);
  }, [user]);

  const setData = todos => {
    setTodos(todos);
    setLoading(false);
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
      {loading ? (
        <div className={classes.loading}>
          <SyncLoader color={"#D02602"} loading={loading} size={15} />
        </div>
      ) : (
        <>
          <TodoAppBar username={user.displayName} />
          <h1 className={classes.h1}>TODO's</h1>
          <TodoForm user={user} />
          <TodoList todos={filteredTodos} user={user} />
          <TodoStats todos={filteredTodos} setFilter={setFilter} />
        </>
      )}
    </>
  );
}

export default Todo;
