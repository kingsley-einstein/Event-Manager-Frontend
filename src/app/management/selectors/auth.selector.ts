import { createSelector } from "@ngrx/store";
import { AppState } from "../app/state";

const selectAuthState = (state: AppState) => state.auth;

export const authSelector = createSelector(selectAuthState, authState => authState.data);
export const authErrorSelector = createSelector(selectAuthState, authState => authState.error);
