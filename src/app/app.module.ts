import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { ClarityModule } from "@clr/angular";

import { RoutingModule } from "./modules";

import {
  HeroComponent,
  HomePageComponent,
  LoginComponent,
  RegistrationComponent
} from "./components";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HomePageComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
