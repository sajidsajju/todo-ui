import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Container, CssBaseline } from "@material-ui/core";
import Main from "./components/Main";

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
      <style>{body}</style>
      <CssBaseline />
      <Container>
        <Main />
      </Container>
    </ThemeProvider>
  );
}

export default App;
