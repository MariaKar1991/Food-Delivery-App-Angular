import { Component, OnInit } from "@angular/core";
import { Store } from "../../interfaces/store";
import { StoreService } from "../../service/store.service";
import { RouterLink, RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-coffee-stores",
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: "./coffee-stores.component.html",
  styleUrl: "./coffee-stores.component.css",
})
export class CoffeeStoresComponent implements OnInit {
  stores: Store[] = [];

  constructor(private storeService: StoreService) {}

  ngOnInit() {
    this.storeService.getCoffeeStores().subscribe({
      next: (data) => {
        // console.log(data);
        this.stores = data;
      },
    });
  }
}
