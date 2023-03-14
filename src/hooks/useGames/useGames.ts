import { useCallback } from "react";
import { loadGamesActionCreator } from "../../store/features/gamesSlice/gamesSlice";
import { GetGamesApiResponse } from "../../store/features/gamesSlice/types";
import {
  loaderOffActionCreator,
  loaderOnActionCreator,
} from "../../store/features/uiSlice/uiSlice";
import { useAppDispatch } from "../../store/hooks";

const useGames = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const getGamesEndpoint = "/games";

  const dispatch = useAppDispatch();

  const getGames = useCallback(async () => {
    try {
      dispatch(loaderOnActionCreator());

      const response = await fetch(`${apiUrl}${getGamesEndpoint}`, {
        method: "GET",
        headers: { "Content-type": "application/json" },
      });

      const games = (await response.json()) as GetGamesApiResponse;

      dispatch(loadGamesActionCreator(games.games));

      dispatch(loaderOffActionCreator());
    } catch (error) {
      dispatch(loaderOffActionCreator());
      return (error as Error).message;
    }
  }, [apiUrl, dispatch]);

  return { getGames };
};

export default useGames;
