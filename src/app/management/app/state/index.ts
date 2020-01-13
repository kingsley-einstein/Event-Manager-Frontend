import { AuthState, LoadingState } from "../../states";

export interface AppState {
  auth: AuthState;
  loading: LoadingState;
}
