import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { ClarityModule } from "@clr/angular";

import { RoutingModule, NgrxModule } from "./modules";

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
    RoutingModule,
    HttpClientModule,
    NgrxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
