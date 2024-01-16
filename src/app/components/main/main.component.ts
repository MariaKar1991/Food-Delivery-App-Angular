import { TopStoresComponent } from "./../topStores/topStores.component";
import { NavigationComponent } from "./../../core/navigation/navigation.component";
import { HeaderComponent } from "./../../core/header/header.component";
import { Component, Inject } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { FooterComponent } from "./../../core/footer/footer.component";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-main",
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    RouterLink,
    TopStoresComponent,
  ],
  templateUrl: "./main.component.html",
  styleUrl: "./main.component.css",
})
export class MainComponent {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  // Method to scroll to the top of the page when called.
  scrollToTop() {
    this.document.body.scrollTop = 0;
    this.document.documentElement.scrollTop = 0;
  }
}
