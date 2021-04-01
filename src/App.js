import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import TodoList from "./components/TodoList";

const theme = createMuiTheme({
  typography: {
    fontFamily: "poppins",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TodoList text={"random text"} />
    </ThemeProvider>
  );
}

export default App;
