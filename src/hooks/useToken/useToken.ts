import { UseTokenStructure } from "./types";
import { useCallback } from "react";
import { useAppDispatch } from "../../store/hooks";
import { logInUserActionCreator } from "../../store/features/userSlice/userSlice";

const useToken = (): UseTokenStructure => {
  const dispatch = useAppDispatch();

  const getToken = useCallback(() => {
    const token = localStorage.getItem("token");

    if (token) {
      dispatch(
        logInUserActionCreator({
          token,
          isLogged: true,
        })
      );
    }
  }, [dispatch]);

  const removeToken = () => {
    localStorage.removeItem("token");
  };

  return {
    getToken,
    removeToken,
  };
};

export default useToken;
