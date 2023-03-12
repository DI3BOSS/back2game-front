import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Button from "./Button";
import theme from "../../styles/theme";
import GlobalStyles from "../../styles/GlobalStyles";

describe("Given the Button component", () => {
  describe("When it is call with the text 'Log in!'", () => {
    test("Then it should show a button with the text 'Log in!'", () => {
      const buttonText = "Log in!";

      render(
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Button text={buttonText} />
        </ThemeProvider>
      );

      const expectedButton = screen.getByRole("button", {
        name: buttonText,
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
