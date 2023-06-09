import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserStateStructure } from "../../../types";

const initialUserState: UserStateStructure = {
  username: null,
  token: "",
  isLogged: false,
};
const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    logInUser: (
      currentUserState: UserStateStructure,
      action: PayloadAction<UserStateStructure>
    ) => ({ ...currentUserState, ...action.payload, isLogged: true }),

    logOutUser: (currentUserState: UserStateStructure) => ({
      ...currentUserState,
      username: "",
      token: "",
      isLogged: false,
    }),
  },
});

export const {
  logInUser: logInUserActionCreator,
  logOutUser: logOutUserActionCreator,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
