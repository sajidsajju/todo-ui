import React from "react";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Todo from "./containers/Todo";
import Login from "./containers/Login";
import NotFoundPage from "./components/NotFoundPage";
import { AuthProvider } from "./containers/Login/AuthProvider";
import PrivateRoute from "./containers/Login/privateRoute";

const theme = createMuiTheme({
  typography: {
    fontFamily: "poppins",
  },
});

const useStyles = makeStyles({
  "@global": {
    body: {
      position: "relative",
      width: "100vw",
      height: "100vh",
      background: "#e2e2e3",
      overflowX: "hidden",
    },
  },
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.body}>
        <AuthProvider>
          <Router>
            <Switch>
              <PrivateRoute exact path="/" component={Todo} />
              <Route path="/login" component={Login} />
              <Route component={NotFoundPage} />
            </Switch>
          </Router>
        </AuthProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
