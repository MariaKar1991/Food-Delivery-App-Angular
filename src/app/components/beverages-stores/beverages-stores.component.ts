import { Component, OnInit } from "@angular/core";
import { Store } from "../../interfaces/store";
import { StoreService } from "../../service/store.service";
import { RouterLink, RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-beverages-stores",
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: "./beverages-stores.component.html",
  styleUrl: "./beverages-stores.component.css",
})
export class BeveragesStoresComponent implements OnInit {
  stores: Store[] = [];

  constructor(private storeService: StoreService) {}

  ngOnInit() {
    this.storeService.getBeveragesStores().subscribe({
      next: (data) => {
        this.stores = data;
      },
    });
  }
}
