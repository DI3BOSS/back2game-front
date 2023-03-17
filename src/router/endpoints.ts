import { Routes } from "./types";

const endpoints: Routes = {
  logIn: "login",
  myGames: "my-games",
  root: "/",
  notFound: "*",
  apiGames: "/games",
  apiLogIn: "/users/login",
  apiDelete: "/games/delete",
};

export default endpoints;
