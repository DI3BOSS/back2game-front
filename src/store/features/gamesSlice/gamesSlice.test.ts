import mockedGames from "../../../mocks/mockedGames";
import {
  deleteGameActionCreator,
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

  describe("When it receives the action of delete a game", () => {
    test("Then it should return the deleted game", () => {
      const deleteGameAction = deleteGameActionCreator(mockedGames[0].id);
      const expectedNewArray = [mockedGames[1]];

      const deletedGame = gamesReducer(mockedGames, deleteGameAction);

      expect(deletedGame).toStrictEqual(expectedNewArray);
    });
  });
});
