import renderWithProviders from "../../testUtils";
import Card from "./Card";
import { ReactComponent as ViewIcon } from "../../assets/icons/view.svg";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import Button from "../Button/Button";
import userEvent from "@testing-library/user-event";

describe("Given the Card component", () => {
  const mockedGame = {
    id: "1",
    title: "Suicide Squad: Kill the Justice League",
    platform: "PlayStation 5",
    genre: "Action",
    description:
      "Fuentes cercanas al proyecto de Suicide Squad: Kill The Justice League han adelantado que el nuevo juego de Rocksteady y Warner Bros. Games retrasará otra vez su lanzamiento. Así lo ha informado el periodista Jason Schreier en un artículo de Bloomberg en el que relaciona esta decisión con las recientes y duras críticas que sufrió el juego de superhéroes tras presentar un extenso gameplay durante el último State of Play de Sony.",
    price: "54.95",
    cover: "image.jpg",
    owner: "di3boss",
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
      const expectedPrice = `${mockedGame.price} €`;

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

    test("Then it should show the delete button when the logged user is the game's owner", async () => {
      const buttonName = "delete";

      renderWithProviders(
        <Card
          game={mockedGame}
          viewButton={mockedIcon}
          deleteButton={<Button icon={mockedIcon} ariaLabel="delete" />}
        />,
        {
          preloadedState: {
            user: { username: mockedGame.owner, isLogged: true, token: "" },
          },
        }
      );

      const deleteButton = screen.getByRole("button", { name: buttonName });

      fireEvent.click(deleteButton);

      expect(deleteButton).toBeInTheDocument();
    });

    test("Then it should show the description when view button is clicked", async () => {
      const buttonName = "view description";

      renderWithProviders(
        <Card
          game={mockedGame}
          viewButton={mockedIcon}
          deleteButton={mockedIcon}
        />,
        {
          preloadedState: {
            user: { username: mockedGame.owner, isLogged: true, token: "" },
          },
        }
      );

      const showDescriptionButton = screen.getByRole("button", {
        name: buttonName,
      });

      userEvent.click(showDescriptionButton);

      const gameDescription = await screen.findByText(mockedGame.description);
      expect(gameDescription).toBeInTheDocument();
    });
  });

  test("Then it should hide the description when hide button is clicked", async () => {
    const hideButton = "hide description";
    const showButton = "view description";

    renderWithProviders(
      <Card
        game={mockedGame}
        viewButton={mockedIcon}
        deleteButton={mockedIcon}
      />,
      {
        preloadedState: {
          user: { username: mockedGame.owner, isLogged: true, token: "" },
        },
      }
    );

    const showDescriptionButton = screen.getByRole("button", {
      name: showButton,
    });

    await userEvent.click(showDescriptionButton);

    const hideDescriptionButton = await screen.findByLabelText(hideButton);

    await userEvent.click(hideDescriptionButton);

    await waitFor(() => expect(hideDescriptionButton).not.toBeInTheDocument());
  });
});
