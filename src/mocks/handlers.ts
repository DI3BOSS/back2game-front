import { rest } from "msw";
import mockedGames from "./mockedGames";
import RoutesStructure from "./types";

const routes: RoutesStructure = {
  users: "/users",
  login: "/login",
  games: "/games",
  delete: "/games/delete/",
  create: "/games/upload",
};
const StatusCodeOk = 200;
const statusCodeCreated = 201;
const StatusCode404 = 404;
const StatusServerError = 500;
const StatusCode400 = 400;

const mockedToken = "Whoah!legendofdragoon";

const apiUrl = process.env.REACT_APP_API_URL!;

export const handlers = [
  rest.post(
    `${apiUrl}${routes.users}${routes.login}`,
    async (request, response, ctx) => {
      return response(
        ctx.status(StatusCodeOk),
        ctx.json({
          token: mockedToken,
        })
      );
    }
  ),

  rest.get(`${apiUrl}${routes.games}`, async (req, res, ctx) => {
    return res(
      ctx.status(StatusCodeOk),

      ctx.json({
        games: mockedGames,
      })
    );
  }),

  rest.delete(`${apiUrl}${routes.delete}1`, (req, res, ctx) =>
    res(
      ctx.status(StatusCodeOk),
      ctx.json({
        payload: undefined,
        type: "ui/loaderOn",
      })
    )
  ),

  rest.post(`${apiUrl}${routes.create}`, (req, res, ctx) =>
    res(ctx.status(statusCodeCreated))
  ),
];

export const errorHandlers = [
  rest.post(
    `${apiUrl}${routes.users}${routes.login}`,
    async (req, res, ctx) => {
      return res(ctx.status(StatusCode404));
    }
  ),
  rest.get(`${apiUrl}${routes.games}`, async (req, res, ctx) => {
    return res(ctx.status(StatusServerError));
  }),

  rest.delete(`${apiUrl}${routes.delete}3`, (req, res, ctx) =>
    res(
      ctx.status(StatusCode400),
      ctx.json({ error: "Internal Server Error: Something went wrong." })
    )
  ),

  rest.post(`${apiUrl}${routes.create}`, (req, res, ctx) =>
    res(
      ctx.status(StatusServerError),
      ctx.json({ error: "Internal Server Error: Something went wrong." })
    )
  ),
];
