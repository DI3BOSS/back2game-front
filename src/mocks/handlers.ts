import { rest } from "msw";
import mockedGames from "./mockedGames";
import RoutesStructure from "./types";

const routes: RoutesStructure = {
  users: "/users",
  login: "/login",
  games: "/games",
};
const mockedStatusCodeOk = 200;
const mockedStatusCode404 = 404;
const mockedStatusServerError = 500;

const mockedToken = "Whoah!legendofdragoon";

const apiUrl = process.env.REACT_APP_API_URL!;

export const handlers = [
  rest.post(
    `${apiUrl}${routes.users}${routes.login}`,
    async (request, response, ctx) => {
      return response(
        ctx.status(mockedStatusCodeOk),
        ctx.json({
          token: mockedToken,
        })
      );
    }
  ),

  rest.get(`${apiUrl}${routes.games}`, async (req, res, ctx) => {
    return res(
      ctx.status(mockedStatusCodeOk),

      ctx.json({
        games: mockedGames,
      })
    );
  }),
];

export const errorHandlers = [
  rest.post(
    `${apiUrl}${routes.users}${routes.login}`,
    async (req, res, ctx) => {
      return res(ctx.status(mockedStatusCode404));
    }
  ),
  rest.get(`${apiUrl}${routes.games}`, async (req, res, ctx) => {
    return res(ctx.status(mockedStatusServerError));
  }),
];
