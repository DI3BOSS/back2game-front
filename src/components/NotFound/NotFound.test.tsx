import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import NotFound from "./NotFound";

describe("Given a NotFound component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the 'back2game error logo'", () => {
      render(
        <ThemeProvider theme={theme}>
          <NotFound />
        </ThemeProvider>
      );

      const expectedHtmlTag = "back2game-error-logo";
      const back2gameErrorLogo = screen.getByTestId(expectedHtmlTag);
      expect(back2gameErrorLogo).toBeInTheDocument();
    });

    test("Then it should show the error message 'Page Not Found'", () => {
      render(
        <ThemeProvider theme={theme}>
          <NotFound />
        </ThemeProvider>
      );

      const errorMessage = "Page Not Found";

      const expected404ErrorTitle = screen.getByText(errorMessage);

      expect(expected404ErrorTitle).toBeInTheDocument();
    });
  });

  describe("When the user clicks the button 'Go back!'", () => {
    test("should call goBack function when button is clicked", () => {
      const mockedGoBack = jest.fn();
      window.history.back = mockedGoBack;

      render(
        <ThemeProvider theme={theme}>
          <NotFound />
        </ThemeProvider>
      );
      const button = screen.getByRole("button");
      fireEvent.click(button);

      expect(mockedGoBack).toHaveBeenCalled();
    });
  });
});
