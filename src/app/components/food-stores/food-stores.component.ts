import { Component, OnInit } from "@angular/core";
import { Store } from "../../interfaces/store";
import { StoreService } from "../../service/store.service";
import { RouterLink, RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-food-stores",
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: "./food-stores.component.html",
  styleUrl: "./food-stores.component.css",
})
export class FoodStoresComponent implements OnInit {
  stores: Store[] = [];

  constructor(private storeService: StoreService) {}

  ngOnInit() {
    this.storeService.getFoodStores().subscribe({
      next: (data) => {
        // console.log(data);
        this.stores = data;
      },
    });
  }
}
