import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "../state";
import { auth, loading } from "../../reducers";

export const appReducers: ActionReducerMap<AppState> = {
  auth,
  loading
};
