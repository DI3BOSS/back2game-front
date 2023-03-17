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
      action: PayloadAction<GameStructure>
    ): GamesStructure => {
      const gameToDelete = currentGamesState.filter(
        (game) => game.id !== action.payload.id
      );

      return gameToDelete;
    },
  },
});

export const gamesReducer = gamesSlice.reducer;
export const { loadGames: loadGamesActionCreator } = gamesSlice.actions;
