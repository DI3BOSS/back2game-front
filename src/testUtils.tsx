import { configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { gamesReducer } from "./store/features/gamesSlice/gamesSlice";
import { uiReducer } from "./store/features/uiSlice/uiSlice";
import { userReducer } from "./store/features/userSlice/userSlice";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";
import { ExtendedRenderOptions } from "./types";

const renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState = {
      user: {
        username: "di3boss",
        token: "mocken",
        isLogged: true,
      },
      ui: {
        isLoading: false,
        feedbackModal: {
          isSuccess: true,
          isWrong: true,
          message: "",
        },
        toggleBurguer: { isOpen: false },
      },
    },
    store = configureStore({
      reducer: { user: userReducer, ui: uiReducer, games: gamesReducer },
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  const Wrapper = ({ children }: PropsWithChildren): JSX.Element => {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </Provider>
    );
  };

  return render(ui, { wrapper: Wrapper });
};

export default renderWithProviders;
