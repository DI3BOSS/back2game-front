import { renderHook } from "@testing-library/react";
import { errorHandlers } from "../../mocks/handlers";
import mockedGames from "../../mocks/mockedGames";
import { server } from "../../mocks/server";
import Wrapper from "../../mocks/Wrapper";
import { store } from "../../store";
import { loadGamesActionCreator } from "../../store/features/gamesSlice/gamesSlice";
import { loaderOffActionCreator } from "../../store/features/uiSlice/uiSlice";
import useGames from "./useGames";

const spiedDispatch = jest.spyOn(store, "dispatch");

describe("Give the useGames custom hook", () => {
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
      const {
        result: {
          current: { getGames },
        },
      } = renderHook(() => useGames(), { wrapper: Wrapper });

      await getGames();

      server.use(...errorHandlers);

      expect(spiedDispatch).toHaveBeenCalledWith(loaderOffActionCreator());
      expect(spiedDispatch).not.toHaveBeenCalledWith(mockedGames);
    });
  });
});
