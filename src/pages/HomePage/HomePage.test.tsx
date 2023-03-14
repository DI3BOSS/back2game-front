import renderWithProviders from "../../testUtils";
import { screen } from "@testing-library/react";
import HomePage from "./HomePage";

describe("Given the CardList component", () => {
  describe("When its rendered receiving a list of games", () => {
    test("Then it should show a title with the text 'Showing 0 games'", () => {
      const expectedTitle = "Showing 0 games";

      renderWithProviders(<HomePage />);

      const CardListTitle = screen.getByText(expectedTitle);

      expect(CardListTitle).toBeInTheDocument();
    });
  });
});
