import { CommonModule } from "@angular/common";
import { StoreMenuComponent } from "../store-menu/store-menu.component";
import { RouterLink, RouterOutlet } from "@angular/router";

import { Store } from "../../interfaces/store";
import { StoreService } from "../../service/store.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-stores",
  standalone: true,
  imports: [RouterLink, RouterOutlet, StoreMenuComponent, CommonModule],
  templateUrl: "./stores.component.html",
  styleUrl: "./stores.component.css",
})
export class StoresComponent implements OnInit {
  stores: Store[] = [];

  constructor(private storeService: StoreService) {}

  ngOnInit() {
    this.storeService.getStores().subscribe({
      next: (data) => {
        // console.log(data);
        this.stores = data;
      },
    });
  }
}
