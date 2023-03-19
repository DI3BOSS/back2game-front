import { useCallback } from "react";
import endpoints from "../../router/endpoints";
import {
  deleteGameActionCreator,
  loadGamesActionCreator,
} from "../../store/features/gamesSlice/gamesSlice";
import GameStructure, {
  GamesApiResponse,
} from "../../store/features/gamesSlice/types";
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
  const createGameEndpoint = endpoints.apiCreate;

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

  const deleteGame = useCallback(
    async (gameId: string) => {
      try {
        dispatch(loaderOnActionCreator());

        const response = await fetch(
          `${apiUrl}${deleteGameEndpoint}${gameId}`,
          {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (!response.ok) {
          throw new Error("Deleting game error");
        }
        dispatch(loaderOffActionCreator());
        dispatch(deleteGameActionCreator(gameId));
      } catch (error) {
        dispatch(loaderOffActionCreator());
        dispatch(
          showFeedbackActionCreator({
            title: "Opps...",
            message: "Couldn't delete the game. Please, try again",
            isSuccess: false,
            isWrong: true,
          })
        );
      }
    },
    [apiUrl, deleteGameEndpoint, dispatch, token]
  );

  const createGame = useCallback(
    async (game: GameStructure) => {
      try {
        dispatch(loaderOnActionCreator());

        const response = await fetch(`${apiUrl}${createGameEndpoint}`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(game),
        });

        if (!response.ok) {
          throw new Error("Creating game error");
        }
        dispatch(loaderOffActionCreator());
      } catch (error) {
        dispatch(loaderOffActionCreator());
        dispatch(
          showFeedbackActionCreator({
            title: "Opps...",
            message: "Couldn't create the game. Please, try again",
            isSuccess: false,
            isWrong: true,
          })
        );
      }
    },
    [apiUrl, createGameEndpoint, dispatch, token]
  );

  return { getGames, deleteGame, createGame };
};

export default useGames;
