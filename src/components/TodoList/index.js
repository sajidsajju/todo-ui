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
  input: {
    border: "none ",
    outline: "none",
    fontSize: "1em",
    width: "72%",
    "&:active, &:focus": {
      color: "#00BFFF",
    },
    DoneOutlineIcon: {
      fontSize: "55em",
    },
  },
});

const List = props => {
  const classes = useStyles();
  const { todo } = props;

  const [text, setText] = useState("");
  const [inputField, setInputField] = useState(false);

  return (
    <div className={classes.todo}>
      <div className={classes.wrapper}>
        {inputField ? (
          <input
            type="text"
            className={classes.input}
            value={text}
            onChange={e => setText(e.target.value)}
            data-testid="input-field"
          />
        ) : (
          todo.text
        )}
      </div>
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
