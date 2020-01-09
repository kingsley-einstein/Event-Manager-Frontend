import { LoadingState, initialLoadingState } from "../states";
import { LoadActionType, LoadingConstants } from "../actions";

export default (state: LoadingState = initialLoadingState, action: LoadActionType): LoadingState => {
  switch (action.type) {
    case LoadingConstants.LOAD_FINISHED:
      return { isLoading: action.payload };
    default:
      return state;
  }
};
