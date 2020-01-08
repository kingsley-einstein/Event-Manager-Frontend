import { Component, OnInit } from "@angular/core";

@Component({
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  selector: "app-login"
})
export class LoginComponent implements OnInit {
  ngOnInit() {
    console.log("{Login} initialized");
  }
}
