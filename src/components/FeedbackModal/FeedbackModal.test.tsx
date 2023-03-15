import FeedbackModal from "./FeedbackModal";
import renderWithProviders from "../../testUtils";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Given the FeedbackModal component", () => {
  describe("When it is called with the title 'Opps..'", () => {
    test("Then it should show the text 'Opps'", () => {
      const titleText = "Opps...";

      renderWithProviders(<FeedbackModal title={titleText} />);

      const expectedTitleText = screen.getByText(titleText);

      expect(expectedTitleText).toBeInTheDocument();
    });
  });

  describe("When it is called with the message 'Opps..'", () => {
    test("Then it should show the text 'Something was wrong. Please, try again.'", () => {
      const messageText = "Something was wrong. Please, try again.";

      renderWithProviders(<FeedbackModal message={messageText} />);

      const expectedTitleText = screen.getByText(messageText);

      expect(expectedTitleText).toBeInTheDocument();
    });
  });

  describe("When it is clicked on", () => {
    test("Then it should dispatch the showFeedbackActionCreator and toggle isWrong to false'", async () => {
      const messageText = "Something was wrong. Please, try again.";

      renderWithProviders(<FeedbackModal message={messageText} />);

      const closeModal = screen.getByText(messageText);

      await waitFor(async () => await userEvent.click(closeModal));

      expect(closeModal).not.toBeInTheDocument();
    });
  });
});
