import { FeedbackModal, UiStateStructure } from "../../../types";
import {
  showFeedbackActionCreator,
  toggleBurguerMenuActionCreator,
  uiReducer,
} from "./uiSlice";

const intitialUiState: UiStateStructure = {
  isLoading: false,
  feedbackModal: { title: "", isSuccess: false, isWrong: false, message: "" },
  toggleBurguer: { isOpen: false },
};

const previousUiPayload: UiStateStructure = {
  isLoading: false,
  feedbackModal: { title: "", isSuccess: false, isWrong: false, message: "" },
  toggleBurguer: { isOpen: false },
};

describe("Give the 'loaderOn' reducer", () => {
  describe("When it receives a previous UI state with 'isLoading' set to false", () => {
    test("Then it should return a new state with 'isLoading set to true", () => {
      const UiPayloadType = {
        type: "ui/loaderOn",
      };

      const expectedlUiState: UiStateStructure = {
        isLoading: true,
        feedbackModal: {
          title: "",
          isSuccess: false,
          isWrong: false,
          message: "",
        },
        toggleBurguer: { isOpen: false },
      };

      const newUiState = uiReducer(previousUiPayload, UiPayloadType);

      expect(newUiState).toStrictEqual(expectedlUiState);
    });
  });
});

describe("Give the 'loaderOff' reducer", () => {
  describe("When it receives a previous UI state with 'isLoading' set to true", () => {
    test("Then it should return a new state with 'isLoading set to false", () => {
      const UiPayloadType = {
        type: "ui/loaderOff",
      };

      const expectedlUiState: UiStateStructure = {
        isLoading: false,
        feedbackModal: {
          title: "",
          isSuccess: false,
          isWrong: false,
          message: "",
        },
        toggleBurguer: { isOpen: false },
      };

      const newUiState = uiReducer(previousUiPayload, UiPayloadType);

      expect(newUiState).toStrictEqual(expectedlUiState);
    });
  });
});

describe("Given a 'showFeedback' reducer", () => {
  describe("When it is called with the feedback text 'Invalid credentials. Please try again.'", () => {
    test("Then it should show a feedback text 'Invalid credentials. Please try again.'", () => {
      const feedbackText: FeedbackModal = {
        title: "Opps...",
        message: "Something was wrong. Please, try again.",
        isSuccess: false,
        isWrong: true,
      };

      const expectedlUiState: UiStateStructure = {
        isLoading: false,
        feedbackModal: {
          title: "Opps...",
          isSuccess: false,
          isWrong: true,
          message: "Something was wrong. Please, try again.",
        },
        toggleBurguer: { isOpen: false },
      };

      const newUiAction = showFeedbackActionCreator(feedbackText);
      const newFeedbackText = uiReducer(intitialUiState, newUiAction);

      expect(newFeedbackText).toStrictEqual(expectedlUiState);
    });
  });
});

describe("Given a 'toggleBurguerMenu' reducer", () => {
  describe("When it receives a previous UI state with 'toggleBurguer' set to true", () => {
    test("Then it should set its state to false'", () => {
      const expectedlUiState: UiStateStructure = {
        isLoading: false,
        feedbackModal: {
          title: "",
          isSuccess: false,
          isWrong: false,
          message: "",
        },
        toggleBurguer: { isOpen: true },
      };

      const newUiAction = toggleBurguerMenuActionCreator({ isOpen: true });
      const newFeedbackText = uiReducer(intitialUiState, newUiAction);

      expect(newFeedbackText).toStrictEqual(expectedlUiState);
    });
  });
});
