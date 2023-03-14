interface Routes {
  logIn: string;
  myGames: string;
  root: string;
  notFound: string;
}

const endpoints: Routes = {
  logIn: "users/login",
  myGames: "users/my-games",
  root: "/",
  notFound: "*",
};

export default endpoints;
