import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "normalize.css";
import { App } from "./App";
import { ThemeProvider } from "styled-components";
import { theme } from "./config/theme";
import "@fontsource/inter/800.css";
import { GlobalStyle } from "./components/GlobalStyle";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>
);
