import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  main: {
    width: "40em",
    margin: "auto",
    background: "#696969",
    borderRadius: "25px",
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
  const { todos, setFilter } = props;

  const filterHandler = filter => {
    setFilter(filter);
  };

  return (
    <>
      <div className={classes.main}>
        <div className={classes.wrapper}>
          <span>{todos.length} items left</span>
          <div className={classes.links}>
            <span className={classes.span} onClick={() => filterHandler("all")}>
              All
            </span>
            <span
              className={classes.span}
              onClick={() => filterHandler("active")}
            >
              Active
            </span>
            <span
              className={classes.span}
              onClick={() => filterHandler("completed")}
            >
              Completed
            </span>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
}

export default TodoStats;
