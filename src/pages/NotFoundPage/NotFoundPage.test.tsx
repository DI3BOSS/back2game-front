import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the error message 'Page Not Found' of NotFound Component", () => {
      render(
        <ThemeProvider theme={theme}>
          <NotFoundPage />
        </ThemeProvider>
      );

      const errorMessage = "Page Not Found";

      const expected404ErrorTitle = screen.getByText(errorMessage);

      expect(expected404ErrorTitle).toBeInTheDocument();
    });
  });
});
