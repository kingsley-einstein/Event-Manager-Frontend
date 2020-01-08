import { AuthModel } from "../../api";

export interface AuthState {
  data: AuthModel;
  error?: string;
}

export const initialAuthState: AuthState = {
  data: null
};
