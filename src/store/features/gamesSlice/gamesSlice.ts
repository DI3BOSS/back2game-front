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
  },
});

export const gamesReducer = gamesSlice.reducer;
export const { loadGames: loadGamesActionCreator } = gamesSlice.actions;
