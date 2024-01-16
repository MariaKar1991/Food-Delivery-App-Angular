import { ProductComponent } from "./../product/product.component";
import { CartComponent } from "./../cart/cart.component";
import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { OrderComponent } from "../order/order.component";
import { SendOrderButtonComponent } from "../send-order-button/send-order-button.component";
import { Product } from "../../interfaces/product";
import { CartOrderPageService } from "../../service/cart-order-page.service";

@Component({
  selector: "app-order-page",
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    OrderComponent,
    CartComponent,
    SendOrderButtonComponent,
    ProductComponent,
  ],
  templateUrl: "./order-page.component.html",
  styleUrl: "./order-page.component.css",
})
export class OrderPageComponent implements OnInit {
  cartProducts: Product[] = [];

  constructor(private cart_order_page: CartOrderPageService) {}

  ngOnInit() {
    // Subscribe to changes in the cart
    this.cart_order_page.cart$.subscribe((cart) => {
      this.cartProducts = cart;
    });
  }
}
