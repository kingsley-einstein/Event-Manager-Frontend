import { Action } from "@ngrx/store";

export enum LoadingConstants {
  LOAD = "{Loading} Start loading",
  LOAD_FINISHED = "{Loading} Done loading. Work done or error occurred"
}

export class Load implements Action {
  public readonly type = LoadingConstants.LOAD;
  constructor(public payload: 0 | 1) {}
}

export class LoadDone implements Action {
  public readonly type = LoadingConstants.LOAD_FINISHED;
  constructor(public payload: boolean) {}
}

export type LoadActionType = Load | LoadDone;
