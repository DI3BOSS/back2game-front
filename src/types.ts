export interface UserStructure {
  username: string;
  token: string;
}

export interface UserStateStructure extends UserStructure {
  isLogged: boolean;
}
