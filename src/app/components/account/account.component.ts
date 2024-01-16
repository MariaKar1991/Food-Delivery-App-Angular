import { CommonModule } from "@angular/common";
import { UserService } from "./../../service/user.service";
import { Component, OnInit } from "@angular/core";
import { NavigationComponent } from "./../../core/navigation/navigation.component";
import { HeaderComponent } from "./../../core/header/header.component";
import { RouterOutlet } from "@angular/router";
import { FooterComponent } from "./../../core/footer/footer.component";
import { User } from "../../interfaces/user";
import { Order } from "../../interfaces/order";

@Component({
  selector: "app-account",
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    CommonModule,
  ],
  templateUrl: "./account.component.html",
  styleUrl: "./account.component.css",
})
export class AccountComponent implements OnInit {
  user: User[] = [];
  hasLoaded: boolean = false;
  order: Order[] = [];
  userId: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUser().subscribe({
      next: (response: User[]) => {
        console.log("User:", response);
        this.user = response;
        this.hasLoaded = true;
      },
    });
  }
}
