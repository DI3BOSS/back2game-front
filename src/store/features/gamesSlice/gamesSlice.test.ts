import mockedGames from "../../../mocks/mockedGames";
import {
  gamesIntialState,
  gamesReducer,
  loadGamesActionCreator,
} from "./gamesSlice";

describe("Given the gamesReducer", () => {
  describe("When it is called given it a list of games", () => {
    test("Then the store should contain the list of games", () => {
      const loadGamesAction = loadGamesActionCreator(mockedGames);

      const newGamesState = gamesReducer(gamesIntialState, loadGamesAction);

      expect(newGamesState).toStrictEqual(mockedGames);
    });
  });
});
