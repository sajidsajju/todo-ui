import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  wrapper: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    minHeight: "320px",
  },
  title: {
    marginTop: "-8vh",
    fontWeight: "bold",
    fontSize: "3.375rem",
  },
  span: {
    fontSize: "3.125rem",
  },
});
const NotFoundPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>
        4
        <span className={classes.span} role="img" aria-label="Crying Face">
          😢
        </span>
        4
      </div>
      <span className={classes.span}>Page not found</span>
    </div>
  );
};

export default NotFoundPage;
