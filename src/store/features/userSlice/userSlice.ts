import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import UserStructure from "../../../types";

const initialUserState = {} as UserStructure;
const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    logInUser: (
      currentUserState: UserStructure,
      action: PayloadAction<UserStructure>
    ) => ({ ...action.payload, isLogged: true }),
    logOutUser: (currentUserState: UserStructure) => ({
      ...currentUserState,
      isLogged: false,
    }),
  },
});

export const {
  logInUser: logInUserActionCreator,
  logOutUser: logOutUserActionCreator,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
