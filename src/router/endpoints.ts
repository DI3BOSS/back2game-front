import Routes from "./types";

const endpoints: Routes = {
  logIn: "login",
  uploadGame: "/games/upload",
  root: "/",
  notFound: "*",
  apiGames: "/games",
  apiLogIn: "/users/login",
  apiDelete: "/games/delete/",
  apiCreate: "/games/upload",
};

export default endpoints;
