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
  },
});

export const { logInUser: logInUserActionCreator } = userSlice.actions;
export const userReducer = userSlice.reducer;
