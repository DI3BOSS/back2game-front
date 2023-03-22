import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import decodeToken from "jwt-decode";
import { UserLoginCredentials } from "../../types";
import {
  CustomTokenPayload,
  LogInUserResponse,
  UseUserStructure,
} from "./types";
import { logInUserActionCreator } from "../../store/features/userSlice/userSlice";
import {
  loaderOffActionCreator,
  loaderOnActionCreator,
  showFeedbackActionCreator,
} from "../../store/features/uiSlice/uiSlice";
import { useCallback } from "react";
import endpoints from "../../router/endpoints";

const useUser = (): UseUserStructure => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const userLoginEndpoint = endpoints.apiLogIn;

  const redirect = useNavigate();

  const dispatch = useAppDispatch();

  const logInUser = useCallback(
    async (userLoginCredentials: UserLoginCredentials) => {
      try {
        dispatch(loaderOnActionCreator());

        const response = await fetch(`${apiUrl}${userLoginEndpoint}`, {
          method: "POST",
          body: JSON.stringify(userLoginCredentials),
          headers: {
            "Content-type": "application/json",
          },
        });

        const { token }: LogInUserResponse = await response.json();

        const tokenPayload: CustomTokenPayload = decodeToken(token);
        const { username } = tokenPayload;

        dispatch(logInUserActionCreator({ token, username, isLogged: false }));

        localStorage.setItem("token", token);
        localStorage.setItem("username", username);

        dispatch(loaderOffActionCreator());
        dispatch(
          showFeedbackActionCreator({
            title: `Hi there, ${username}!`,
            message: "Let's see your game list!",
            isSuccess: true,
            isWrong: false,
          })
        );

        redirect(endpoints.root);
      } catch {
        dispatch(loaderOffActionCreator());
        dispatch(
          showFeedbackActionCreator({
            title: "Opps...",
            message: "Wrong user or password. Please, try again.",
            isSuccess: false,
            isWrong: true,
          })
        );
      }
    },
    [apiUrl, dispatch, redirect, userLoginEndpoint]
  );

  return { logInUser };
};

export default useUser;
