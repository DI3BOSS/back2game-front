import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  FeedbackModal,
  UiStateStructure,
  BurguerStructure,
} from "../../../types";

const intitialUiState: UiStateStructure = {
  isLoading: false,
  feedbackModal: { title: "", isSuccess: false, isWrong: false, message: "" },
  toggleBurguer: { isOpen: false },
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

    toggleBurguerMenu: (
      currentUiState: UiStateStructure,
      action: PayloadAction<BurguerStructure>
    ) => ({
      ...currentUiState,
      toggleBurguer: action.payload,
    }),
  },
});

export const {
  loaderOn: loaderOnActionCreator,
  loaderOff: loaderOffActionCreator,
  showFeedback: showFeedbackActionCreator,
  toggleBurguerMenu: toggleBurguerMenuActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
