import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { AuthEffects, LoadingEffects } from "../../management/effects";
import { environment } from "../../../environments/environment";

@NgModule({
  imports: [
    EffectsModule.forRoot([AuthEffects, LoadingEffects]),
    StoreDevtoolsModule.instrument({
      name: "Ngrx {Event Manager}",
      logOnly: environment.production
    })
  ],
  exports: [EffectsModule]
})
export class NgrxModule {}
