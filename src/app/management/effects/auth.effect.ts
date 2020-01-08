import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap } from "rxjs/operators";
import { AuthService } from "../../services";
import { AuthConstants, GetAuthenticatedUser, GetAuthenticatedUserFailure, GetAuthenticatedUserSuccess } from '../actions';

@Injectable()
export class AuthEffects {
  constructor(private actions: Actions, private service: AuthService) {}
  @Effect()
  getAuthenticatedUser$ = this.actions.pipe(
    ofType<GetAuthenticatedUser>(AuthConstants.GET_AUTH),
    switchMap(() => this.service.getLoggedUser()),
    switchMap((value) => {
      if (typeof value.body === "string") {
        return of(
          new GetAuthenticatedUserFailure(value.body)
        );
      } else {
        return of(
          new GetAuthenticatedUserSuccess(value.body)
        );
      }
    })
  );
}
