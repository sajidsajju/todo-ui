import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Container, CssBaseline } from "@material-ui/core";
import TodoList from "./components/TodoList";

const theme = createMuiTheme({
  typography: {
    fontFamily: "poppins",
  },
});

const body = `
body {background: #DFCAA0}
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <style>{body}</style>
        <TodoList text={"random text"} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
