import { UserStateStructure } from "../../../types";
import {
  logInUserActionCreator,
  userReducer,
  logOutUserActionCreator,
} from "./userSlice";

describe("Given an userReducer", () => {
  const mockedInitialUserState: UserStateStructure = {
    username: "di3boss",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    isLogged: false,
  };

  const mockedLoggedUser: UserStateStructure = {
    username: "di3boss",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    isLogged: true,
  };

  describe("When it receives an user not logged in and the action to login", () => {
    test("Then it should return the user with the isLogged property as 'true'", () => {
      const loginUserAction = logInUserActionCreator(mockedInitialUserState);

      const loggedUser = userReducer(mockedInitialUserState, loginUserAction);

      expect(loggedUser).toStrictEqual(mockedLoggedUser);
    });
  });

  describe("When it receives an user logged in and the action to log out", () => {
    test("Then it should return the user with the isLogged porperty as 'false", () => {
      const logOutUserAction = logOutUserActionCreator();

      const loggedOutUser = userReducer(mockedLoggedUser, logOutUserAction);

      expect(loggedOutUser).toStrictEqual(mockedInitialUserState);
    });
  });
});
