import { CartComponent } from "./../cart/cart.component";
import { StoresComponent } from "../stores/stores.component";
import { Component, OnInit } from "@angular/core";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterOutlet,
} from "@angular/router";

import { Store } from "../../interfaces/store";
import { StoreService } from "../../service/store.service";
import { StoreMenuComponent } from "../store-menu/store-menu.component";
import { CommonModule } from "@angular/common";
import { CartService } from "../../service/cart.service";

@Component({
  selector: "app-store-main",
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    StoresComponent,
    StoreMenuComponent,
    CommonModule,
    CartComponent,
  ],
  templateUrl: "./store-main.component.html",
  styleUrl: "./store-main.component.css",
})
export class StoreMainComponent implements OnInit {
  store: Store | undefined;

  storeId: number | undefined;
  stores: Store[] = [];
  cartCountFromStoreMenu: number = 0;

  constructor(
    private storeService: StoreService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    // Extract the storeId from the route parameters
    this.route.params.subscribe((params: any) => {
      this.storeId = +params["storeId"];

      // Fetch store details based on storeId
      if (this.storeId) {
        this.storeService.getStoreById(this.storeId).subscribe({
          next: (storeResponse: Store) => {
            this.store = storeResponse;
          },
        });
      }
    });

    // Subscribe to changes in the cart count from the store menu
    this.cartService.cartCount$.subscribe((count: any) => {
      this.cartCountFromStoreMenu = count;
    });
  }

  // Navigate to the order page
  goToOrderPage(): void {
    this.router.navigate(["/order-page"]);
  }
}
