import { type JwtPayload } from "jwt-decode";
import { UserLoginCredentials } from "../../types";

export interface LoginUserResponse {
  token: string;
}

export interface CustomTokenPayload extends JwtPayload {
  id: string;
  username: string;
  email: string;
}

export interface UseUserStructure {
  loginUser: (userLoginCredentials: UserLoginCredentials) => Promise<void>;
}
