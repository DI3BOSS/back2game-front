import { screen } from "@testing-library/react";
import Header from "./Header";
import renderWithProviders from "../../testUtils";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the 'Back2Game SVG logo'", () => {
      renderWithProviders(<Header />);

      const expectedHtmlTag = "back2game-logo";
      const back2gameLogo = screen.getByTestId(expectedHtmlTag);
      expect(back2gameLogo).toBeInTheDocument();
    });

    test("Then it should show the 'Back2Game SVG text'", () => {
      renderWithProviders(<Header />);

      const expectedHtmlTag = "back2game-text";
      const back2gameLogo = screen.getByTestId(expectedHtmlTag);
      expect(back2gameLogo).toBeInTheDocument();
    });

    test("Then, it should show a button with the icon '☰'", () => {
      renderWithProviders(<Header />);

      const expectedIcon = "burguer-menu";
      const back2gameBurguer = screen.getByTestId(expectedIcon);
      expect(back2gameBurguer).toBeInTheDocument();
    });
  });
});
