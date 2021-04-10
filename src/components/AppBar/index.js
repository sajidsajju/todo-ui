import React from "react";
import {
  makeStyles,
  Toolbar,
  AppBar,
  Typography,
  Button,
} from "@material-ui/core";
import { auth } from "../../util/firebase";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  grow: {
    flexGrow: 1,
    position: "relative",
  },
  appBar: {
    background: "#696969",
  },
  title: {
    textTransform: "capitalize",
  },
  logout: {
    position: "absolute",
    right: "40px",
    textTransform: "capitalize",
    background: "#FFFFFF",
    "&:hover": {
      background: "#F0FFFF",
      border: "1px solid black",
    },
  },
});

const TodoAppBar = props => {
  const { username } = props;
  const classes = useStyles();
  const history = useHistory();

  const signout = () => {
    auth.signOut();
    history.push("/login");
  };

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Welcome, {username}
          </Typography>
          <Button className={classes.logout} onClick={signout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TodoAppBar;
