import { Component, OnInit } from "@angular/core";

@Component({
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"],
  selector: "app-registration"
})
export class RegistrationComponent implements OnInit {
  ngOnInit() {
    console.log("{Registration} initialized");
  }
}
