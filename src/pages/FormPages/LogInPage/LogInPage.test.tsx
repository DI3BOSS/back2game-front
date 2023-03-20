import { screen } from "@testing-library/react";
import renderWithProviders from "../../../testUtils";
import LogInPage from "./LogInPage";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("Given the LogInPage component", () => {
  const placeHolderUsernameText = "username";
  const PlaceHolderPasswordText = "password";

  describe("When it's rendered", () => {
    test("Then it should show the input field with placeholder 'username' from LogInForm component", () => {
      renderWithProviders(<LogInPage />);

      const inputField = screen.getByPlaceholderText(placeHolderUsernameText);

      expect(inputField).toBeInTheDocument();
    });
  });

  test("Then it should show the input field with placeholder 'password' from LogInForm component", () => {
    renderWithProviders(<LogInPage />);

    const inputField = screen.getByPlaceholderText(PlaceHolderPasswordText);
    expect(inputField).toBeInTheDocument();
  });

  test("Then it should show a title with the text 'Log In'", () => {
    renderWithProviders(<LogInPage />);

    const expectedTitle = "Log In";

    const logInTitle = screen.getByText(expectedTitle);

    expect(logInTitle).toBeInTheDocument();
  });

  describe("When it is rendered with the button 'Log In!' from LogInForm component", () => {
    test("Then it should show a button with the aria label text 'Log in!'", () => {
      renderWithProviders(<LogInPage />);

      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent("Log in!");
    });
  });
});
