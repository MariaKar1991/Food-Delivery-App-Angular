import { Component, OnInit } from "@angular/core";
import { StoreService } from "../../service/store.service";
import { RouterLink, RouterOutlet } from "@angular/router";
import { Store } from "../../interfaces/store";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-topStores",
  standalone: true,
  imports: [RouterLink, CommonModule, RouterOutlet],
  templateUrl: "./topStores.component.html",
  styleUrl: "./topStores.component.css",
})
export class TopStoresComponent implements OnInit {
  stores: Store[] = [];

  constructor(private storeService: StoreService) {}

  ngOnInit() {
    this.storeService.getTop8Stores().subscribe({
      next: (response: any) => {
        console.log(response);
        this.stores = response;
      },
    });
  }
}
