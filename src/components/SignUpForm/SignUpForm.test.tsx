import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import SignUpForm from "./SignUpForm";

describe("Given the SignUpForm component", () => {
  describe("When it's rendered", () => {
    test("Then it should show an input field with label 'username'", () => {
      const fieldName = "username";

      render(
        <ThemeProvider theme={theme}>
          <SignUpForm />
        </ThemeProvider>
      );

      const inputField = screen.getByLabelText(fieldName);

      expect(inputField).toBeInTheDocument();
    });

    test("Then it should show an input field with label 'password'", () => {
      const fieldName = "password";

      render(
        <ThemeProvider theme={theme}>
          <SignUpForm />
        </ThemeProvider>
      );

      const inputField = screen.getByLabelText(fieldName);
      expect(inputField).toBeInTheDocument();
    });
  });
});
