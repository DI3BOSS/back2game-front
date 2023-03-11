import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FeedbackModal, UiStateStructure } from "../../../types";

const intitialUiState: UiStateStructure = {
  isLoading: false,
  feedbackModal: { isSuccess: false, message: "" },
  isOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: intitialUiState,
  reducers: {
    loaderOn: (currentUiState: UiStateStructure) => ({
      ...currentUiState,
      isLoading: true,
    }),
    loaderOff: (currentUiState: UiStateStructure) => ({
      ...currentUiState,
      isLoading: false,
    }),
    showFeedback: (
      currentUiState: UiStateStructure,
      action: PayloadAction<FeedbackModal>
    ) => ({ ...currentUiState, feedbackModal: action.payload }),
  },
});

export const {
  loaderOn: loaderOnActionCreator,
  loaderOff: loaderOffActionCreator,
  showFeedback: showFeedbackActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
