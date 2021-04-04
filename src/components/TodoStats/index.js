import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  main: {
    width: "40em",
    margin: "auto",
    background: "#654321",
    marginBottom: "5em",
  },
  wrapper: {
    paddingLeft: "10px",
    fontSize: "0.8em",
    lineHeight: "1.5em",
    display: "inline",
    color: "#FFFFFF",
  },
  links: {
    display: "inline",
    float: "right",
    paddingRight: "10em",
  },
  span: {
    padding: "8px",
    cursor: "pointer",
    "&:hover": {
      color: "#A9A9A9",
    },
    "&:active": {
      color: "#00FFFF",
    },
  },
});

function TodoStats(props) {
  const classes = useStyles();
  const { todos, displayTodos, sort } = props;

  const allTodos = () => {
    const newTodos = [...todos];
    sort(newTodos);
  };
  const activeTodos = () => {
    const newTodos = [...todos].filter(todo => todo.completed === false);
    sort(newTodos);
  };

  const completedTodos = () => {
    const newTodos = [...todos].filter(todo => todo.completed !== false);

    sort(newTodos);
  };

  return (
    <div className={classes.main}>
      <div className={classes.wrapper}>
        <span>{displayTodos.length} items left</span>
        <div className={classes.links}>
          <span className={classes.span} onClick={allTodos}>
            All
          </span>
          <span className={classes.span} onClick={activeTodos}>
            Active
          </span>
          <span className={classes.span} onClick={completedTodos}>
            Completed
          </span>
        </div>
      </div>
    </div>
  );
}

export default TodoStats;
