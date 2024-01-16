import { CounterComponent } from "./../counter/counter.component";
import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { PublisherService } from "../../service/publisher.service";
import { Product } from "../../interfaces/product";
import { CartOrderPageService } from "../../service/cart-order-page.service";

@Component({
  selector: "app-cart",
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, CounterComponent],
  templateUrl: "./cart.component.html",
  styleUrl: "./cart.component.css",
})
export class CartComponent implements OnInit {
  @Input() isOrderPage: boolean = false;
  cartProducts: Product[] = [];
  totalPrice: number = 0;

  constructor(
    private publisherService: PublisherService,
    private cartorderpage: CartOrderPageService
  ) {}

  ngOnInit() {
    this.cartorderpage.cart$.subscribe((cart) => {
      this.cartProducts = cart;
      this.calculateTotalPrice();
    });

    this.publisherService.listenForProduct().subscribe((product) => {
      this.defineProductAction(product);
    });
  }

  private defineProductAction(product: Product) {
    let productIndex = this.findIndexOfProductInCart(product);
    if (productIndex >= 0) {
      let existingProduct = this.cartProducts[productIndex];
      existingProduct.count = product.count;
      if (existingProduct.count === 0) {
        // remove product from array
        this.cartProducts.splice(productIndex, 1);
      }
    } else {
      this.cartProducts.push(product);
    }
    this.calculateTotalPrice();

    // Update the service only after modifying the array
    this.cartorderpage.updateCart(this.cartProducts);
  }

  private findIndexOfProductInCart(product: Product): number {
    for (let i = 0; i < this.cartProducts.length; i++) {
      let cartProduct = this.cartProducts[i];
      if (cartProduct.ProductId === product.ProductId) {
        return i;
      }
    }
    return -1; //does not exist
  }

  calculateTotalPrice() {
    let price = 0;
    for (let cartProduct of this.cartProducts) {
      price += cartProduct.price * cartProduct.count;
    }
    this.totalPrice = price;
  }
}
