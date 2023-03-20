import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import mockedGames from "../../../mocks/mockedGames";
import renderWithProviders from "../../../testUtils";
import UploadGameFrom from "./UploadGameForm";

const mockedCreateGame = jest.fn();

jest.mock("../../../hooks/useGames/useGames.ts", () => () => ({
  createGame: mockedCreateGame,
}));

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("Given the UploadGameFrom component", () => {
  const placeHolderTitleText = "Game title";
  const PlaceHolderGenreText = "Genre";

  describe("When it's rendered", () => {
    test("Then it should show the input field with placeholder 'Title' from UploadForm component", () => {
      renderWithProviders(<UploadGameFrom />);

      const inputField = screen.getByPlaceholderText(placeHolderTitleText);

      expect(inputField).toBeInTheDocument();
    });
  });

  test("Then it should show the input field with placeholder 'password' from UploadForm component", () => {
    renderWithProviders(<UploadGameFrom />);

    const inputField = screen.getByPlaceholderText(PlaceHolderGenreText);
    expect(inputField).toBeInTheDocument();
  });

  test("Then it should show a title with the text 'Upload Game'", () => {
    renderWithProviders(<UploadGameFrom />);

    const expectedTitle = "Upload Game!";

    const logInTitle = screen.getByText(expectedTitle);

    expect(logInTitle).toBeInTheDocument();
  });

  describe("When it is rendered with the button 'Upload Game!' from UploadForm component", () => {
    test("Then it should show a button with the aria label text 'Upload Game!'", () => {
      renderWithProviders(<UploadGameFrom />);

      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent("Upload Game!");
    });
  });

  describe("When the user types 'Legend of Dragoon' in the 'Game title' input", () => {
    test("Then it should show that text inside the input", async () => {
      renderWithProviders(<UploadGameFrom />);

      const typeGameTitle = "Legend of Dragoon";
      const placeholderText = "Game title";

      const usernameInputField: HTMLInputElement =
        screen.getByPlaceholderText(placeholderText);

      await userEvent.type(usernameInputField, typeGameTitle);

      expect(usernameInputField.value).toBe(typeGameTitle);
    });
  });

  describe("When the user submits the form", () => {
    test("Then it should call the handleSubmit function", async () => {
      const placeHolderTexts = [
        "Game title",
        "Platform",
        "Genre",
        "Description",
        "Price (with taxes)",
        "Cover image (url)",
      ];

      renderWithProviders(<UploadGameFrom />);

      const loginButton = screen.getByText("Upload Game!");

      const titleInput = screen.getByPlaceholderText(placeHolderTexts[0]);
      const platformInput = screen.getByPlaceholderText(placeHolderTexts[1]);
      const genreInput = screen.getByPlaceholderText(placeHolderTexts[2]);
      const priceInput = screen.getByPlaceholderText(placeHolderTexts[3]);
      const descriptionInput = screen.getByPlaceholderText(placeHolderTexts[4]);
      const coverInput = screen.getByPlaceholderText(placeHolderTexts[5]);

      await waitFor(
        async () => {
          await userEvent.type(titleInput, mockedGames[0].title);
          await userEvent.type(platformInput, mockedGames[0].platform);
          await userEvent.type(genreInput, mockedGames[0].genre);
          await userEvent.type(priceInput, mockedGames[0].price);
          await userEvent.type(descriptionInput, mockedGames[0].description);
          await userEvent.type(coverInput, mockedGames[0].cover);
          await userEvent.click(loginButton);
        },
        { timeout: 10000 }
      );

      expect(mockedCreateGame).toHaveBeenCalled();
    });
  });
});
