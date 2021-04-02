import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  h1: {
    textAlign: "center",
    fontSize: "4em",
    letterSpacing: "7px",
    color: "#4d4d4d",
  },
});

function Main() {
  const classes = useStyles();

  return (
    <>
      <h1 className={classes.h1}>TODO</h1>
    </>
  );
}

export default Main;
