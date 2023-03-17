interface Routes {
  logIn: string;
  myGames: string;
  root: string;
  notFound: string;
  apiGames: string;
  apiLogIn: string;
}

const endpoints: Routes = {
  logIn: "login",
  myGames: "my-games",
  root: "/",
  notFound: "*",
  apiGames: "/games",
  apiLogIn: "/users/login",
};

export default endpoints;
