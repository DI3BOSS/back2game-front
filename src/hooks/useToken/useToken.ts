import { UseTokenStructure } from "./types";
import { useCallback } from "react";
import { useAppDispatch } from "../../store/hooks";
import { logInUserActionCreator } from "../../store/features/userSlice/userSlice";

const useToken = (): UseTokenStructure => {
  const dispatch = useAppDispatch();

  const getToken = useCallback(() => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");

    if (token && username) {
      dispatch(
        logInUserActionCreator({
          token,
          username,
          isLogged: true,
        })
      );
    }
  }, [dispatch]);

  const removeToken = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
  };

  return {
    getToken,
    removeToken,
  };
};

export default useToken;
