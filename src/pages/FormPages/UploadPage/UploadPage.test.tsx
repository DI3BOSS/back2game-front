import { screen } from "@testing-library/react";
import renderWithProviders from "../../../testUtils";
import UploadPage from "./UploadPage";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("Given the UploadPage component", () => {
  const placeHolderTitleText = "Game title";
  const PlaceHolderGenreText = "Genre";

  describe("When it's rendered", () => {
    test("Then it should show the input field with placeholder 'Title' from UploadForm component", () => {
      renderWithProviders(<UploadPage />);

      const inputField = screen.getByPlaceholderText(placeHolderTitleText);

      expect(inputField).toBeInTheDocument();
    });
  });

  test("Then it should show the input field with placeholder 'password' from UploadForm component", () => {
    renderWithProviders(<UploadPage />);

    const inputField = screen.getByPlaceholderText(PlaceHolderGenreText);
    expect(inputField).toBeInTheDocument();
  });

  test("Then it should show a title with the text 'Upload Game'", () => {
    renderWithProviders(<UploadPage />);

    const expectedTitle = "Upload Game!";

    const logInTitle = screen.getByText(expectedTitle);

    expect(logInTitle).toBeInTheDocument();
  });

  describe("When it is rendered with the button 'Upload Game!' from UploadForm component", () => {
    test("Then it should show a button with the aria label text 'Upload Game!'", () => {
      renderWithProviders(<UploadPage />);

      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent("Upload Game!");
    });
  });
});
