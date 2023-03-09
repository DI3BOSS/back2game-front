import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import LogInForm from "./LogInForm";

describe("Given the LogInForm component", () => {
  describe("When it's rendered", () => {
    test("Then it should show an input field with label 'username'", () => {
      const fieldName = "username";

      render(
        <ThemeProvider theme={theme}>
          <LogInForm />
        </ThemeProvider>
      );

      const inputField = screen.getByLabelText(fieldName);

      expect(inputField).toBeInTheDocument();
    });

    test("Then it should show an input field with label 'password'", () => {
      const fieldName = "password";

      render(
        <ThemeProvider theme={theme}>
          <LogInForm />
        </ThemeProvider>
      );

      const inputField = screen.getByLabelText(fieldName);
      expect(inputField).toBeInTheDocument();
    });
  });
});
