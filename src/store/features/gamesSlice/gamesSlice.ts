import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GamesStructure } from "./types";

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
  },
});

export const gamesReducer = gamesSlice.reducer;
export const {
  loadGames: loadGamesActionCreator,
  deleteGame: deleteGameActionCreator,
} = gamesSlice.actions;
