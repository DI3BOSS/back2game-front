import { screen, waitFor } from "@testing-library/react";
import LogInForm from "./LogInForm";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../testUtils";
import { UserLoginCredentials } from "../../types";

const mockedUserLogin = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  logInUser: mockedUserLogin,
}));

describe("Given the LogInForm component", () => {
  const placeHolderUsernameText = "username";
  const PlaceHolderPasswordText = "password";
  const typedUsername = "di3boss";

  describe("When it's rendered", () => {
    test("Then it should show an input field with placeholder 'username'", () => {
      renderWithProviders(<LogInForm />);

      const inputField = screen.getByPlaceholderText(placeHolderUsernameText);

      expect(inputField).toBeInTheDocument();
    });
  });

  test("Then it should show an input field with placeholder 'password'", () => {
    renderWithProviders(<LogInForm />);

    const inputField = screen.getByPlaceholderText(PlaceHolderPasswordText);
    expect(inputField).toBeInTheDocument();
  });

  describe("When it is rendered with a button inside as submit button", () => {
    test("Then it should show a button with the aria label text 'Log in!'", () => {
      renderWithProviders(<LogInForm />);

      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent("Log in!");
    });
  });

  describe("When the user types 'di3boss' in the 'username' input", () => {
    test("Then it should show that text inside the input", async () => {
      renderWithProviders(<LogInForm />);

      const usernameInputField: HTMLInputElement = screen.getByPlaceholderText(
        placeHolderUsernameText
      );

      await userEvent.type(usernameInputField, typedUsername);

      expect(usernameInputField.value).toBe(typedUsername);
    });
  });

  describe("When the user submits the form", () => {
    test("Then it should call the handleSubmit function", async () => {
      const mockedUser: UserLoginCredentials = {
        username: "di3boss",
        password: "123456789",
      };

      renderWithProviders(<LogInForm />);

      const loginButton = screen.getByText("Log in!");

      const usernameInput = screen.getByPlaceholderText(
        placeHolderUsernameText
      );
      const passswordInput = screen.getByPlaceholderText(
        PlaceHolderPasswordText
      );

      await waitFor(async () => {
        await userEvent.type(usernameInput, mockedUser.username);
        await userEvent.type(passswordInput, mockedUser.password);
        await userEvent.click(loginButton);
      });

      expect(mockedUserLogin).toHaveBeenCalledWith(mockedUser);
    });
  });
});
