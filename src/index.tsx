import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { store } from "./store";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
