import { screen } from "@testing-library/react";
import renderWithProviders from "../../testUtils";
import BurguerMenu from "./BurguerMenu";

describe("Given the BurguerMenu component", () => {
  describe("When it is rendered", () => {
    test("Then, it should show a button with the character '☰'", () => {
      const burguerCharacter = "☰";

      renderWithProviders(<BurguerMenu />);

      const expectedBuguerCaracther = screen.getByText(burguerCharacter);

      expect(expectedBuguerCaracther).toBeInTheDocument();
    });
  });
});
