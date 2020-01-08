import { Component, OnInit } from "@angular/core";

@Component({
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"],
  selector: "app-homepage"
})
export class HomePageComponent implements OnInit {
  ngOnInit() {
    console.log("{Homepage} initialized");
  }
}
