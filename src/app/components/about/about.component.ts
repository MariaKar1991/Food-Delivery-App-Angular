import { RegistrationService } from "./../../service/registration.service";
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
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private registration: RegistrationService
  ) {}

  scrollToTop() {
    this.document.body.scrollTop = 0;
    this.document.documentElement.scrollTop = 0;
  }
}
