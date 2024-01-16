import { Component, OnInit } from "@angular/core";
import { Store } from "../../interfaces/store";
import { StoreService } from "../../service/store.service";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-top-stores-coffee",
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: "./top-stores-coffee.component.html",
  styleUrl: "./top-stores-coffee.component.css",
})
export class TopStoresCoffeeComponent implements OnInit {
  stores: Store[] = [];

  constructor(private storeService: StoreService) {}

  ngOnInit() {
    this.storeService.getTop8StoresByCoffeeCategory().subscribe({
      next: (data) => {
        this.stores = data;
      },
    });
  }
}
