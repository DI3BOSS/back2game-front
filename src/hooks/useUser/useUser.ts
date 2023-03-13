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

const useUser = (): UseUserStructure => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const userLoginEndpoint = "/users/login";

  const dispatch = useAppDispatch();

  const logInUser = async (userLoginCredentials: UserLoginCredentials) => {
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
    } catch {
      dispatch(loaderOffActionCreator());
      dispatch(
        showFeedbackActionCreator({
          title: "Opps...",
          message: "Something was wrong. Please, try again.",
          isSuccess: false,
          isWrong: true,
        })
      );
    }
  };

  return { logInUser };
};

export default useUser;
