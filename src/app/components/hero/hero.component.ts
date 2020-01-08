import { Component, OnInit } from "@angular/core";

@Component({
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.css"],
  selector: "app-hero"
})
export class HeroComponent implements OnInit {
  ngOnInit() {
    console.log("{Hero} initialized");
  }
}
