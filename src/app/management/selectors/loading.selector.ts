import { createSelector } from "@ngrx/store";
import { AppState } from "../app/state";

const selectLoadingState = (state: AppState) => state.loading;

export const loadingSelector = createSelector(selectLoadingState, loadingState => loadingState.isLoading);
