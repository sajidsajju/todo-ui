import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

import { auth } from "../../util/firebase";
import todoist from "./todoist.jpg";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { useHistory } from "react-router";
import { user } from "../../components/Api";

const useStyles = makeStyles({
  container: {
    width: "40vw",
    height: "55vh",
    background: "#FFFAFA",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    borderRadius: "25px",
  },
  image: {
    width: "90%",
    height: "85%",
    marginTop: "-50px",
    borderRadius: "25px",
    marginBottom: "7%",
  },
});

const Login = () => {
  const classes = useStyles();
  const history = useHistory();

  const [logged, setLogged] = useState(false);

  useEffect(() => {
    if (logged) {
      history.push("/");
    }
  }, [history, logged]);

  auth.onAuthStateChanged(function (user) {
    if (user) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  });

  return (
    <div className={classes.container}>
      <img className={classes.image} src={todoist} alt="img" />
      <Button
        style={{ backgroundColor: "#696969", color: "#FFFFFF" }}
        variant="contained"
        onClick={user}
        startIcon={<MailOutlineIcon />}
      >
        Login with Google
      </Button>
    </div>
  );
};

export default Login;
