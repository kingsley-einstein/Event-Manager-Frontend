import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { LoadingConstants, LoadDone, Load } from "../actions";
import { switchMap } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class LoadingEffects {
  constructor(private actions: Actions) {}
  @Effect()
  getLoadingState$ = this.actions.pipe(
    ofType<Load>(LoadingConstants.LOAD),
    switchMap((load) => of(new LoadDone(
      load.payload === 1 ? true : false
    )))
  );
}
