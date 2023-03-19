import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import GameStructure, { GamesStructure } from "./types";

export const gamesIntialState: GamesStructure = [];

const gamesSlice = createSlice({
  name: "games",
  initialState: gamesIntialState,
  reducers: {
    loadGames: (
      currentGamesState,
      action: PayloadAction<GamesStructure>
    ): GamesStructure => [...action.payload],

    deleteGame: (
      currentGamesState,
      { payload: gameId }: PayloadAction<string>
    ): GamesStructure => {
      const gameToDelete = currentGamesState.filter(
        (game) => game.id !== gameId
      );

      return gameToDelete;
    },

    createGame: (
      currentGamesState,
      action: PayloadAction<GameStructure>
    ): GamesStructure => [...currentGamesState, action.payload],
  },
});

export const gamesReducer = gamesSlice.reducer;
export const {
  loadGames: loadGamesActionCreator,
  deleteGame: deleteGameActionCreator,
  createGame: createGameActionCreator,
} = gamesSlice.actions;
