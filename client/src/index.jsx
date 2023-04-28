import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { ThemeProvider } from "styled-components";
import { theme } from "./config/theme";
import { GlobalStyle } from "./Style/GlobalStyle";
import "@fontsource/inter/800.css";
import "normalize.css";

const root = createRoot(document.getElementById("root"));

root.render(
  // <StrictMode>
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
  // </StrictMode>
);
