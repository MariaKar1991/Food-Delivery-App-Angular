import { Component, OnInit } from "@angular/core";
import { Store } from "../../interfaces/store";
import { StoreService } from "../../service/store.service";
import { RouterLink, RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-top-stores-beverages",
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: "./top-stores-beverages.component.html",
  styleUrl: "./top-stores-beverages.component.css",
})
export class TopStoresBeveragesComponent implements OnInit {
  stores: Store[] = [];

  constructor(private storeService: StoreService) {}

  ngOnInit() {
    this.storeService.getTop8StoresByBeveragesCategory().subscribe({
      next: (data) => {
        // console.log(data);
        this.stores = data;
      },
    });
  }
}
