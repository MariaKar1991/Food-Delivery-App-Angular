import { AllPlacedOrdersComponent } from "./../all-placed-orders/all-placed-orders.component";
import { ProductComponent } from "./../product/product.component";
import { ProductService } from "./../../service/product.service";

import { NavigationComponent } from "./../../core/navigation/navigation.component";
import { HeaderComponent } from "./../../core/header/header.component";
import { Component, OnInit, inject } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { FooterComponent } from "./../../core/footer/footer.component";
import { Product } from "../../interfaces/product";
import { OrderService } from "../../service/order.service";
import { Order } from "../../interfaces/order";
import { CommonModule } from "@angular/common";
import { Store } from "../../interfaces/store";
import { CartService } from "../../service/cart.service";
import { StoreService } from "../../service/store.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-order",
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    CommonModule,
    ProductComponent,
    RouterLink,
    AllPlacedOrdersComponent,
  ],
  templateUrl: "./order.component.html",
  styleUrl: "./order.component.css",
})
export class OrderComponent implements OnInit {
  product: Product[] = [];
  order: Order[] = [];
  store: Store | undefined;
  cart: Product[] = [];
  private orderSubscription: Subscription | undefined;
  private storeSubscription: Subscription | undefined;

  constructor(
    private orderService: OrderService,
    private productService: ProductService,
    private cartService: CartService,
    private storeService: StoreService
  ) {}

  ngOnInit(): void {
    // Subscribe to order changes
    this.orderSubscription = this.orderService.getOrder().subscribe({
      next: (response: Order[]) => {
        this.order = response;

        // Check if there are orders and retrieve associated store details
        if (this.order && this.order.length > 0) {
          const orderStoreId = this.order[0]?.storeId;

          if (orderStoreId) {
            // Subscribe to store details
            this.storeSubscription = this.storeService
              .getStoreById(orderStoreId)
              .subscribe({
                next: (storeResponse: Store) => {
                  this.store = storeResponse;
                },
              });
          }
        }
      },
      error: (error: any) => {
        console.error("Error fetching order:", error);
      },
    });

    // Retrieve cart items
    this.cart = this.cartService.getCart();
  }

  // Retrieve product details by ID
  getProduct(ProductId: number): void {
    this.productService
      .getProductById(ProductId)
      .subscribe((retrievedProduct: any) => {
        this.product = retrievedProduct;
      });
  }

  // Create a new order
  createOrder(order: Order): void {
    if (this.product) {
      this.orderService.createOrder(order).subscribe({
        next: (createdOrder: any) => {
          console.log("Order created successfully:", createdOrder);
        },
        error: (error: any) => {
          console.error("Error creating order:", error);
        },
      });
    } else {
      console.error("Product details not available. Unable to create order.");
    }
  }

  // Submit the order and clear the cart
  submitOrder(): void {
    this.cartService.clearCart();
  }

  ngOnDestroy(): void {
    // Unsubscribe from subscriptions to avoid memory leaks
    if (this.orderSubscription) {
      this.orderSubscription.unsubscribe();
    }

    if (this.storeSubscription) {
      this.storeSubscription.unsubscribe();
    }
  }
}
