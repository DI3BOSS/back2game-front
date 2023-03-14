import {
  gamesIntialState,
  gamesReducer,
  loadGamesActionCreator,
} from "./gamesSlice";

describe("Given the gamesReducer", () => {
  const MockedListOfGames = [
    {
      title: "Mario the Codemaster",
      platform: "PlayStation 5",
      genre: "RPG",
      description: "short description.",
      price: "69.95",
      cover: "image.jpg",
    },
    {
      title: "Suicide Squad: Kill the Justice League",
      platform: "PlayStation 5",
      genre: "Action",
      description: "short description",
      price: "54.95",
      cover: "image2.jpg",
    },
  ];

  describe("When it is called given it a list of games", () => {
    test("Then the store should contain the list of games", () => {
      const loadGamesAction = loadGamesActionCreator(MockedListOfGames);

      const newGamesState = gamesReducer(gamesIntialState, loadGamesAction);

      expect(newGamesState).toStrictEqual(MockedListOfGames);
    });
  });
});
