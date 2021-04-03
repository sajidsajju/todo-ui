import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";

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
  strikeOff: {
    textDecoration: "line-through",
    color: "#808080",
  },
  strikeOffIcon: {
    display: "inline",
    cursor: "pointer",
    float: "left",
    paddingTop: "0.2em",
    paddingLeft: "0.2em",
  },
  icon: {
    display: "inline",
    cursor: "pointer",
    float: "right",
    paddingTop: "1em",
    paddingRight: "1em",
  },
});

const List = props => {
  const classes = useStyles();
  const { todo, removeTodo } = props;

  const [text, setText] = useState("");
  const [editable, setEditable] = useState(false);
  const [strike, setStrike] = useState(false);

  const deleteTodo = (id, removeTodo) => {
    removeTodo(id);
  };

  const Icons = (
    <>
      <span
        className={classes.icon}
        onClick={() => {
          deleteTodo(todo.id, removeTodo);
        }}
      >
        <ClearIcon />
      </span>
    </>
  );

  return (
    <div className={classes.todo}>
      <div className={classes.wrapper}>
        <span
          className={classes.strikeOffIcon}
          onClick={() => setStrike(!strike)}
        >
          <DoneOutlineIcon style={{ fontSize: "0.9em" }} />
        </span>
        {editable ? (
          <input
            type="text"
            className={classes.input}
            value={text}
            onChange={e => setText(e.target.value)}
            data-testid="input-field"
          />
        ) : (
          <span className={strike ? classes.strikeOff : ""}>{todo.text}</span>
        )}
      </div>
      {Icons}
      <hr />
    </div>
  );
};

function TodoList(props) {
  const { todos, removeTodo } = props;

  return (
    <>
      {todos.map((todo, index) => (
        <List todo={todo} key={index} removeTodo={removeTodo} />
      ))}
    </>
  );
}

export default TodoList;
