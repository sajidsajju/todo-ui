import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  todo: {
    width: "40em",
    margin: "auto",
    background: "#FFFFFF",
  },
  wrapper: {
    paddingLeft: "10px",
    fontSize: "1.5em",
    lineHeight: "2em",
    display: "inline",
  },
});

const List = (props) => {
  const classes = useStyles();
  const { todo } = props;

  return (
    <div className={classes.todo}>
      <div className={classes.wrapper}>{todo.text}</div>
      <hr />
    </div>
  );
};

function TodoList(props) {
  const { todos } = props;

  return (
    <>
      {todos.map((todo, index) => (
        <List todo={todo} key={index} />
      ))}
    </>
  );
}

export default TodoList;
