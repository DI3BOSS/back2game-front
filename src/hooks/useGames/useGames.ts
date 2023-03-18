import { useCallback } from "react";
import endpoints from "../../router/endpoints";
import {
  deleteGameActionCreator,
  loadGamesActionCreator,
} from "../../store/features/gamesSlice/gamesSlice";
import { GamesApiResponse } from "../../store/features/gamesSlice/types";
import {
  loaderOffActionCreator,
  loaderOnActionCreator,
  showFeedbackActionCreator,
} from "../../store/features/uiSlice/uiSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const useGames = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const getGamesEndpoint = endpoints.apiGames;
  const deleteGameEndpoint = endpoints.apiDelete;

  const { token } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const getGames = useCallback(async () => {
    try {
      dispatch(loaderOnActionCreator());

      const response = await fetch(`${apiUrl}${getGamesEndpoint}`, {
        method: "GET",
        headers: { "Content-type": "application/json" },
      });

      const games = (await response.json()) as GamesApiResponse;

      dispatch(loadGamesActionCreator(games.games));

      dispatch(loaderOffActionCreator());
    } catch (error) {
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
  }, [apiUrl, dispatch, getGamesEndpoint]);

  const deleteGame = async (gameId: string) => {
    try {
      dispatch(loaderOnActionCreator());

      const response = await fetch(`${apiUrl}${deleteGameEndpoint}${gameId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) {
        throw new Error("flamita");
      }
      dispatch(loaderOffActionCreator());
      dispatch(deleteGameActionCreator(gameId));
    } catch (error) {
      dispatch(loaderOffActionCreator());
      dispatch(
        showFeedbackActionCreator({
          title: "Opps...",
          message: "Couldn't delete de game. Please, try again",
          isSuccess: false,
          isWrong: true,
        })
      );
    }
  };

  return { getGames, deleteGame };
};

export default useGames;
