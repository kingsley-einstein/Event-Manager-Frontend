import { Action } from "@ngrx/store";
import { AuthModel } from "../../api";

export enum AuthConstants {
  GET_AUTH = "{Auth} Ping to get logged in user",
  GET_AUTH_SUCCESS = "{Auth} Successfully got logged in user",
  GET_AUTH_FAILURE = "{Auth} Failed in getting logged in user"
}

export class GetAuthenticatedUser implements Action {
  public readonly type = AuthConstants.GET_AUTH;
}

export class GetAuthenticatedUserSuccess implements Action {
  public readonly type = AuthConstants.GET_AUTH_SUCCESS;
  constructor(public payload: AuthModel) {}
}

export class GetAuthenticatedUserFailure implements Action {
  public readonly type = AuthConstants.GET_AUTH_FAILURE;
  constructor(public payload: string) {}
}

export type AuthActionType = GetAuthenticatedUser | GetAuthenticatedUserSuccess | GetAuthenticatedUserFailure;
