import { screen, waitFor } from "@testing-library/react";
import renderWithProviders from "../../testUtils";
import BurguerMenu from "./BurguerMenu";
import userEvent from "@testing-library/user-event";

describe("Given the BurguerMenu component", () => {
  describe("When it is rendered", () => {
    test("Then, it should show a button with the icon '☰'", () => {
      renderWithProviders(<BurguerMenu />);

      const expectedIcon = "burguer-menu";
      const back2gameBurguer = screen.getByTestId(expectedIcon);
      expect(back2gameBurguer).toBeInTheDocument();
    });
  });
  describe("When it's open and it's clicked on", () => {
    test("Then it should dispatch the oggleBurguerMenuActionCreator and toggle isOpen to false'", async () => {
      renderWithProviders(<BurguerMenu />);

      const expectedOpenIcon = "burguer-menu";
      const back2gameBurguer = screen.getByTestId(expectedOpenIcon);

      await waitFor(async () => await userEvent.click(back2gameBurguer));

      expect(back2gameBurguer).not.toBeInTheDocument();
    });
  });

  describe("When it's close and it's clicked on", () => {
    test("Then it should dispatch the toggleBurguerMenuActionCreator and toggle isOpen to true'", async () => {
      renderWithProviders(<BurguerMenu />, {
        preloadedState: {
          user: {
            username: "",
            token: "",
            isLogged: true,
          },
          ui: {
            isLoading: false,
            feedbackModal: {
              isSuccess: false,
              isWrong: true,
              message: "",
            },
            toggleBurguer: { isOpen: true },
          },
        },
      });

      const openIcon = "burguer-menu-close";
      const closeIcon = screen.getByTestId(openIcon);

      await waitFor(async () => await userEvent.click(closeIcon));

      expect(closeIcon).not.toBeInTheDocument();
    });
  });
  describe("When it's cliked in the logout option", () => {
    test("Then it should dispatch the logOutUserActionCreator and toggle isOpen to true'", async () => {
      renderWithProviders(<BurguerMenu />, {
        preloadedState: {
          user: {
            username: "di3boss",
            token: "",
            isLogged: true,
          },
          ui: {
            isLoading: false,
            feedbackModal: {
              isSuccess: false,
              isWrong: true,
              message: "",
            },
            toggleBurguer: { isOpen: true },
          },
        },
      });

      const logOutOption = "logout";
      const logOutAction = screen.getByTestId(logOutOption);

      await waitFor(async () => await userEvent.click(logOutAction));

      expect(logOutAction).not.toBeInTheDocument();
    });
  });
});
