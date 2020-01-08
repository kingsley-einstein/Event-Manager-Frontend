import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
  HeroComponent,
  HomePageComponent,
  LoginComponent,
  RegistrationComponent
} from "../../components";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomePageComponent, children: [
    { path: "hero", component: HeroComponent },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegistrationComponent },
    { path: "", redirectTo: "hero", pathMatch: "full" }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
