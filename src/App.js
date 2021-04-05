import React from "react";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Main from "./components/Main";

const theme = createMuiTheme({
  typography: {
    fontFamily: "poppins",
  },
});

const useStyles = makeStyles({
  "@global": {
    body: {
      position: "absolute",
      width: "100vw",
      height: "100vh",
      background: "#DFCAA0",
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
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
