import { renderHook } from "@testing-library/react";
import useToken from "./useToken";
import { useAppDispatch } from "../../store/hooks";
import Wrapper from "../../mocks/Wrapper";
import { logInUserActionCreator } from "../../store/features/userSlice/userSlice";

jest.mock("../../store/hooks");

describe("Given the useToken custom hook", () => {
  const mockedDispatch = jest.fn();
  const mockedUseAppDispatch = useAppDispatch as jest.Mock;

  describe("When its getToken function is called", () => {
    test("Then it should call logInUserActionCreator decoding the token", () => {
      const mockedToken = "Whoah!legendofdragoon";
      const username = "di3boss";

      localStorage.setItem("token", mockedToken);
      localStorage.setItem("username", username);

      mockedUseAppDispatch.mockReturnValue(mockedDispatch);

      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useToken(), {
        wrapper: Wrapper,
      });

      getToken();

      expect(mockedDispatch).toHaveBeenCalledWith(
        logInUserActionCreator({
          token: mockedToken,
          isLogged: true,
          username: "di3boss",
        })
      );

      localStorage.clear();
    });
  });

  describe("When its getToken function is called but no token is found", () => {
    test("Then it should not call 'logInUserActionCreator'", () => {
      mockedUseAppDispatch.mockReturnValue(mockedDispatch);

      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useToken(), {
        wrapper: Wrapper,
      });

      getToken();

      expect(mockedDispatch).not.toHaveBeenCalled();
    });
  });

  describe("When its removeToken function is called", () => {
    test("Then it should remove the token from local storage", () => {
      const {
        result: {
          current: { removeToken },
        },
      } = renderHook(() => useToken(), {
        wrapper: Wrapper,
      });

      removeToken();

      expect(localStorage.getItem("token")).toBeNull();
    });
  });
});
