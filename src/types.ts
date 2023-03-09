export interface UserStateStructure extends UserStructure {
  isLogged: boolean;
}
export interface UserStructure {
  username: string;
  token: string;
}
export interface UserLoginCredentials {
  username: string;
  password: string;
}
