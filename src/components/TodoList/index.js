import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import firebase from "../../util/firebase";

import ClearIcon from "@material-ui/icons/Clear";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import EditIcon from "@material-ui/icons/Edit";
import DoneIcon from "@material-ui/icons/Done";

const todoRef = firebase.database().ref("Todo");

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
    border: "none",
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
  const { todo } = props;

  const [text, setText] = useState("");
  const [editable, setEditable] = useState(false);

  const deleteTodo = id => {
    const Todo = todoRef.child(todo.id);
    Todo.remove();
  };

  const updateTodo = () => {
    setText(todo.text);
    if (editable) {
      const data = {
        completed: todo.completed,
        text: text,
      };
      const Todo = todoRef.child(todo.id);
      Todo.set(data);
    }
    setEditable(!editable);
  };

  const updateCompletedTodo = () => {
    const data = {
      completed: !todo.completed,
      text: todo.text,
    };
    const Todo = todoRef.child(todo.id);
    Todo.set(data);
  };

  const Icons = (
    <>
      <span
        className={classes.icon}
        onClick={deleteTodo}
        aria-label="delete-todo"
      >
        <ClearIcon />
      </span>
      <span
        className={classes.icon}
        onClick={updateTodo}
        aria-label="update-todo"
      >
        {editable ? <DoneIcon /> : <EditIcon />}
      </span>
    </>
  );

  return (
    <div className={classes.todo}>
      <div className={classes.wrapper}>
        <span
          className={classes.strikeOffIcon}
          onClick={updateCompletedTodo}
          aria-label="update-completed-todo"
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
          <span className={todo.completed ? classes.strikeOff : ""}>
            {todo.text}
          </span>
        )}
      </div>
      {Icons}
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
