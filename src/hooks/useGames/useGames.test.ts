import { renderHook } from "@testing-library/react";
import { errorHandlers } from "../../mocks/handlers";
import mockedGames from "../../mocks/mockedGames";
import { server } from "../../mocks/server";
import Wrapper from "../../mocks/Wrapper";
import { store } from "../../store";
import {
  deleteGameActionCreator,
  loadGamesActionCreator,
} from "../../store/features/gamesSlice/gamesSlice";
import {
  loaderOffActionCreator,
  loaderOnActionCreator,
  showFeedbackActionCreator,
} from "../../store/features/uiSlice/uiSlice";
import useGames from "./useGames";

const spiedDispatch = jest.spyOn(store, "dispatch");

beforeEach(() => jest.clearAllMocks());

describe("Give the useGames custom hook and the getGames function", () => {
  describe("When its 'getGames' function is called", () => {
    test("Then it should dispatch the action of load games", async () => {
      const {
        result: {
          current: { getGames },
        },
      } = renderHook(() => useGames(), { wrapper: Wrapper });

      await getGames();
      expect(spiedDispatch).toHaveBeenNthCalledWith(
        2,
        loadGamesActionCreator(mockedGames)
      );
    });
    test("Then it should dispatch the action of toogle loader to 'off'", async () => {
      const {
        result: {
          current: { getGames },
        },
      } = renderHook(() => useGames(), { wrapper: Wrapper });

      await getGames().catch();
    });

    expect(spiedDispatch).not.toHaveBeenCalledWith({
      type: "ui/loaderOn",
      payload: undefined,
    });
  });

  describe("When its 'getGames' function and the server fails", () => {
    test("Then it should dispatch the corrects actions", async () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { getGames },
        },
      } = renderHook(() => useGames(), { wrapper: Wrapper });

      await getGames();

      expect(spiedDispatch).toHaveBeenCalledWith(loaderOffActionCreator());
      expect(spiedDispatch).not.toHaveBeenCalledWith(mockedGames);
    });
  });
});

describe("Give the useGames custom hook and the deleteGames function", () => {
  describe("When te deleteGame function is called", () => {
    test("Then it should call the loaderOnActionCreator", async () => {
      const {
        result: {
          current: { deleteGame },
        },
      } = renderHook(() => useGames(), { wrapper: Wrapper });

      await deleteGame(mockedGames[0].id);

      expect(spiedDispatch).toHaveBeenCalledWith(loaderOnActionCreator());
    });

    test("Then it should call the loaderOffActionCreator", async () => {
      const {
        result: {
          current: { deleteGame },
        },
      } = renderHook(() => useGames(), { wrapper: Wrapper });

      await deleteGame(mockedGames[0].id);

      expect(spiedDispatch).toHaveBeenCalledWith(loaderOffActionCreator());
    });

    test("Then it should call the deleteActionCreator", async () => {
      const {
        result: {
          current: { deleteGame },
        },
      } = renderHook(() => useGames(), { wrapper: Wrapper });

      await deleteGame(mockedGames[0].id);

      expect(spiedDispatch).toHaveBeenCalledWith(
        deleteGameActionCreator(mockedGames[0].id)
      );
    });

    describe("When the delete action fails by wrong ID", () => {
      test("Then it should call the showFeedbackActionCreator", async () => {
        server.resetHandlers(...errorHandlers);

        const {
          result: {
            current: { deleteGame },
          },
        } = renderHook(() => useGames(), { wrapper: Wrapper });

        const wrongGameId = "3";

        await deleteGame(wrongGameId);

        expect(spiedDispatch).toHaveBeenCalledWith(
          showFeedbackActionCreator({
            title: "Opps...",
            message: "Couldn't delete the game. Please, try again",
            isSuccess: false,
            isWrong: true,
          })
        );
      });
    });
  });
});
