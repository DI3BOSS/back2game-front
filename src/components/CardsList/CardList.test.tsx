import renderWithProviders from "../../testUtils";
import { screen } from "@testing-library/react";
import CardList from "./CardList";
import mockedGames from "../../mocks/mockedGames";

describe("Given the CardList component", () => {
  describe("When its rendered receiving a list of games", () => {
    test("Then it should show a title with the text 'Showing 0 games'", () => {
      const expectedTitle = /\bShowing\b/;

      renderWithProviders(<CardList games={mockedGames} />);

      const CardListTitle = screen.getByText(expectedTitle);

      expect(CardListTitle).toBeInTheDocument();
    });
  });

  test("Then it should show a list of games'", () => {
    renderWithProviders(<CardList games={mockedGames} />);

    const listItemClass = "card";

    const gameCards = screen.getAllByRole("listitem");

    expect(gameCards[0]).toHaveClass(listItemClass);
    expect(gameCards[1]).toHaveClass(listItemClass);
  });
});
