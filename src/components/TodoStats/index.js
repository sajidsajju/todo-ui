import React, { useState } from "react";
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
  const {} = props;

  return (
    <div className={classes.main}>
      <div className={classes.wrapper}>
        <span>0 items left</span>
        <div className={classes.links}>
          <span className={classes.span}>All</span>
          <span className={classes.span}>Active</span>
          <span className={classes.span}>Completed</span>
        </div>
      </div>
    </div>
  );
}

export default TodoStats;
