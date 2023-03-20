import { PreloadedState } from "@reduxjs/toolkit";
import { RenderOptions } from "@testing-library/react";
import { AppStore, RootState } from "./store";

export interface UserStateStructure extends UserStructure {
  isLogged: boolean;
}
export interface UserStructure {
  username: string | null;
  token: string;
}
export interface UserLoginCredentials {
  username: string;
  password: string;
}

export interface UiStateStructure {
  isLoading: boolean;
  feedbackModal: FeedbackModal;
  toggleBurguer: BurguerStructure;
}

export interface FeedbackModal {
  title?: string;
  message?: string;
  isSuccess?: boolean;
  isWrong?: boolean;
}

export interface BurguerStructure {
  isOpen: boolean;
}

export interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}
