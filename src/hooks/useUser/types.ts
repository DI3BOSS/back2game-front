import { type JwtPayload } from "jwt-decode";
import { UserLoginCredentials } from "../../types";

export interface LogInUserResponse {
  token: string;
}

export interface CustomTokenPayload extends JwtPayload {
  id: string;
  username: string;
  email: string;
}

export interface UseUserStructure {
  logInUser: (userLoginCredentials: UserLoginCredentials) => Promise<void>;
}
