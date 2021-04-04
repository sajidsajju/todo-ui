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
  const { filteredTodos, setStatus } = props;

  const statusHandler = status => {
    setStatus(status);
  };

  return (
    <div className={classes.main}>
      <div className={classes.wrapper}>
        <span>{filteredTodos.length} items left</span>
        <div className={classes.links}>
          <span className={classes.span} onClick={() => statusHandler("all")}>
            All
          </span>
          <span
            className={classes.span}
            onClick={() => statusHandler("active")}
          >
            Active
          </span>
          <span
            className={classes.span}
            onClick={() => statusHandler("completed")}
          >
            Completed
          </span>
        </div>
      </div>
    </div>
  );
}

export default TodoStats;
