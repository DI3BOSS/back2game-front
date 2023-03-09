import { rest } from "msw";
import RoutesStructure from "./types";

const routes: RoutesStructure = {
  users: "/users",
  login: "/login",
};
const mockedStatusCodeOk = 200;
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
];
