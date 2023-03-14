import renderWithProviders from "../../testUtils";
import Card from "./Card";
import { ReactComponent as ViewIcon } from "../../assets/icons/view.svg";
import { screen } from "@testing-library/react";

describe("Given the Card component", () => {
  const mockedGame = {
    title: "Suicide Squad: Kill the Justice League",
    platform: "PlayStation 5",
    genre: "Action",
    description:
      "Fuentes cercanas al proyecto de Suicide Squad: Kill The Justice League han adelantado que el nuevo juego de Rocksteady y Warner Bros. Games retrasará otra vez su lanzamiento. Así lo ha informado el periodista Jason Schreier en un artículo de Bloomberg en el que relaciona esta decisión con las recientes y duras críticas que sufrió el juego de superhéroes tras presentar un extenso gameplay durante el último State of Play de Sony.",
    price: "54.95",
    cover:
      "https://static.xtralife.com/conversions/4MCP-5M85426180-medium_w640_h480_q75-ps5suicidesquad-1670580108.webp",
  };

  const mockedIcon: JSX.Element = <ViewIcon />;

  describe("When its rendered", () => {
    test("Then it should show the name of a game", () => {
      const expectedName = mockedGame.title;

      renderWithProviders(<Card game={mockedGame} viewButton={mockedIcon} />);

      const gameName = screen.getByText(expectedName);

      expect(gameName).toBeInTheDocument();
    });

    test("Then it should show the platform of a game and its genre", () => {
      const expectedPlataformAndGenre = `${mockedGame.platform} | ${mockedGame.genre}`;

      renderWithProviders(<Card game={mockedGame} viewButton={mockedIcon} />);

      const gamePlataformAndGenre = screen.getByText(expectedPlataformAndGenre);

      expect(gamePlataformAndGenre).toBeInTheDocument();
    });

    test("Then it should show the price of a game", () => {
      const expectedPrice = mockedGame.price;

      renderWithProviders(<Card game={mockedGame} viewButton={mockedIcon} />);

      const gamePrice = screen.getByText(expectedPrice);

      expect(gamePrice).toBeInTheDocument();
    });

    test("Then it should show the image of a game", () => {
      const expectedAltText = mockedGame.title;

      renderWithProviders(<Card game={mockedGame} viewButton={mockedIcon} />);

      const gameName = screen.getByAltText(expectedAltText);

      expect(gameName).toBeInTheDocument();
    });
  });
});
