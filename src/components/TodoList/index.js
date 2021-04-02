import React, { useState } from "react";
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

function TodoList(props) {
  const classes = useStyles();
  const { todos } = props;

  const [lists, setLists] = useState(todos);

  return (
    <div className={classes.todo}>
      <div className={classes.wrapper}>{lists}</div>
    </div>
  );
}

export default TodoList;
