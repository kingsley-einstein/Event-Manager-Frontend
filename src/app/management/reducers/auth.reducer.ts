import { AuthActionType, AuthConstants } from "../actions";
import { AuthState, initialAuthState } from "../states";

export default (state: AuthState = initialAuthState, action: AuthActionType): AuthState => {
  switch (action.type) {
    case AuthConstants.GET_AUTH_SUCCESS:
      return { ...state, data: action.payload };
    case AuthConstants.GET_AUTH_FAILURE:
      return { data: null, error: action.payload };
    default:
      return state;
  }
};
