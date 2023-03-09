import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Loader from "./Loader";
import theme from "../../styles/theme";
import GlobalStyles from "../../styles/GlobalStyles";

describe("Given a Loader component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the 'Back2Game SVG logo'", () => {
      render(
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Loader />
        </ThemeProvider>
      );

      const htmlExpectedTag = "back2game-logo";
      const back2gameLogo = screen.getByTestId(htmlExpectedTag);
      expect(back2gameLogo).toBeInTheDocument();
    });
  });
});
