import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap, catchError } from "rxjs/operators";
import { AuthService } from "../../services";
import {
  AuthConstants,
  GetAuthenticatedUser,
  GetAuthenticatedUserFailure,
  GetAuthenticatedUserSuccess
} from '../actions';


@Injectable()
export class AuthEffects {
  constructor(private actions: Actions, private service: AuthService) {}
  @Effect()
  getAuthenticatedUser$ = this.actions.pipe(
    ofType<GetAuthenticatedUser>(AuthConstants.GET_AUTH),
    switchMap(() => this.service.getLoggedUser()),
    switchMap((value) => of(new GetAuthenticatedUserSuccess(value.body))),
    catchError(() => of(new GetAuthenticatedUserFailure("Failed to get authenticated user. Try signing in.")))
  );
}
