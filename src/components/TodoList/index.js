import React, { useState } from "react";
import { Checkbox, makeStyles } from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import DoneIcon from "@material-ui/icons/Done";

import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";

import { deleteTodo, editTodo } from "../Api";
import firebase from "../../util/firebase";

const useStyles = makeStyles({
  todo: {
    width: "40em",
    margin: "auto",
    background: "#FFFFFF",
    borderRadius: "25px",
  },
  wrapper: {
    paddingLeft: "10px",
    fontSize: "1.5em",
    lineHeight: "2em",
    display: "inline",
    borderRadius: "25px",
  },
  input: {
    border: "none",
    outline: "none",
    fontSize: "1em",
    borderRadius: "25px",
    width: "72%",
    "&:active, &:focus": {
      color: "#33BDFF",
    },
    DoneOutlineIcon: {
      fontSize: "55em",
    },
  },
  strikeOff: {
    textDecoration: "line-through",
    color: "#DC143C",
    textDecorationColor: "#DC143C",
    paddingTop: "5px",
  },
  strikeOffIcon: {
    display: "inline",
    cursor: "pointer",
    float: "left",
    paddingTop: "0.2em",
    paddingLeft: "0.2em",
    color: "",
  },
  icon: {
    display: "inline",
    cursor: "pointer",
    float: "right",
    paddingTop: "1em",
    paddingRight: "1em",
    "&:hover": {
      color: "#33BDFF",
    },
  },
  deleteIcon: {
    display: "inline",
    cursor: "pointer",
    float: "right",
    paddingTop: "1em",
    paddingRight: "1em",
    "&:hover": {
      color: "#DC143C",
    },
  },
});

const Todo = props => {
  const classes = useStyles();
  const { todo, user } = props;

  const [text, setText] = useState("");
  const [editable, setEditable] = useState(false);

  const handleChangeText = event => {
    if (event.target.value.length < 34) {
      const value = event.target.value;
      setText(value);
    }
  };

  const removeTodo = id => {
    deleteTodo(user.uid, id);
  };

  const updateTodo = () => {
    setText(todo.text);
    if (editable) {
      const data = {
        date: firebase.firestore.FieldValue.serverTimestamp(),
        id: todo.id,
        completed: todo.completed,
        text: text,
      };
      editTodo(user.uid, data);
    }
    setEditable(!editable);
  };

  const updateCompletedTodo = () => {
    const data = {
      date: todo.date,
      id: todo.id,
      completed: !todo.completed,
      text: todo.text,
    };
    editTodo(user.uid, data);
  };

  const Icons = (
    <>
      <span
        className={classes.deleteIcon}
        onClick={() => removeTodo(todo.id)}
        aria-label="delete-todo"
      >
        <DeleteIcon />
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
        <span className={classes.strikeOffIcon}>
          <Checkbox
            checked={todo.completed}
            onClick={updateCompletedTodo}
            inputProps={{ "aria-label": "secondary checkbox" }}
            icon={<CircleUnchecked />}
            checkedIcon={<CircleCheckedFilled />}
            aria-label="update-completed-todo"
          />
        </span>
        {editable ? (
          <input
            type="text"
            className={classes.input}
            value={text}
            onChange={handleChangeText}
            data-testid="input-field"
          />
        ) : (
          <span className={todo.completed ? classes.strikeOff : ""}>
            {todo.text}
          </span>
        )}
      </div>
      {Icons}
      <hr style={{ visibility: "hidden" }} />
    </div>
  );
};

function TodoList(props) {
  const { todos, user } = props;

  return (
    <>
      {todos.map((todo, index) => (
        <Todo todo={todo} key={index} user={user} />
      ))}
    </>
  );
}

export default TodoList;
