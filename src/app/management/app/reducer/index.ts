import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "../state";
import { auth } from "../../reducers";

export const appReducers: ActionReducerMap<AppState> = {
  auth
};
