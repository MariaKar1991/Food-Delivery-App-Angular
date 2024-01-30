import { SearchComponent } from "./../../components/search/search.component";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterOutlet } from "@angular/router";
import { Component, HostListener, OnInit } from "@angular/core";
import { RegistrationService } from "../../service/registration.service";
import { Router, NavigationEnd, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-navigation",
  standalone: true,
  imports: [RouterLink, CommonModule, RouterOutlet, SearchComponent],
  templateUrl: "./navigation.component.html",
  styleUrl: "./navigation.component.css",
})
export class NavigationComponent implements OnInit {
  isDropdownOpen: { [key: string]: boolean } = {};
  isRegistrationPage: boolean | undefined;
  isMobileScreen = false;

  @HostListener("window:resize", ["$event"])
  onResize(event: any): void {
    this.isMobileScreen = window.innerWidth <= 1199.99;
  }

  constructor(
    private registrationService: RegistrationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  isRegistered: boolean = false;

  toggleDropdown(key: string, isOpen?: boolean) {
    this.isDropdownOpen[key] =
      isOpen !== undefined ? isOpen : !this.isDropdownOpen[key];
  }

 ngOnInit() {
    this.registrationService.isRegistered().subscribe((isRegistered: any) => {
      this.isRegistered = isRegistered;
    });

    this.isRegistered = this.registrationService.isUserRegistered();

    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        // Check if the current route is the registration page
        this.isRegistrationPage = event.url === "/register";
      }
    }); 
    this.activatedRoute.url.subscribe((urlSegments: any) => {
      // Check if the last segment of the URL is 'register'
      this.isRegistrationPage =
        urlSegments[urlSegments.length - 1].path === "register";
    });
  }
}
