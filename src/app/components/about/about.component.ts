import { NavigationComponent } from "../../core/navigation/navigation.component";
import { Component, Inject } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { FooterComponent } from "../../core/footer/footer.component";
import { CommonModule, DOCUMENT } from "@angular/common";

@Component({
  selector: "app-about",
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationComponent,
    FooterComponent,
    RouterLink,
    CommonModule,
  ],
  templateUrl: "../about/about.component.html",
  styleUrl: "./about.component.css",
})
export class AboutComponent {
  // Constructor injecting DOCUMENT to access DOM-related functionality
  constructor(@Inject(DOCUMENT) private document: Document) {}

  // Method to scroll to the top of the page
  scrollToTop() {
    // Setting scrollTop for both body and documentElement to 0
    this.document.body.scrollTop = 0;
    this.document.documentElement.scrollTop = 0;
  }
}
