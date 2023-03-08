import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Button from "./Button";
import theme from "../../styles/theme";
import GlobalStyles from "../../styles/GlobalStyles";

describe("Given a Button component", () => {
  describe("When it is call with the text 'Sign up!'", () => {
    test("Then it should show a button with the text 'Sign up!'", () => {
      const buttonText = "Sign up!";

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
