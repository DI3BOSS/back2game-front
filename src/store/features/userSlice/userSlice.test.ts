import { UserStateStructure } from "../../../types";
import {
  logInUserActionCreator,
  userReducer,
  logOutUserActionCreator,
} from "./userSlice";

describe("Given the userReducer", () => {
  const mockedInitialUserState: UserStateStructure = {
    username: "",
    token: "",
    isLogged: false,
  };

  const mockedUnlogged: UserStateStructure = {
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
      const loginUserAction = logInUserActionCreator(mockedUnlogged);

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
