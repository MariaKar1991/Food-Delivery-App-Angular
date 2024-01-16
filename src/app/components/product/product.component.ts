import { CounterComponent } from "./../counter/counter.component";
import { Product } from "../../interfaces/product";
import { StoreMenuComponent } from "./../store-menu/store-menu.component";
import { FooterComponent } from "./../../core/footer/footer.component";
import { Error404Component } from "./../error404/error404.component";
import { NavigationComponent } from "./../../core/navigation/navigation.component";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { HeaderComponent } from "./../../core/header/header.component";
import { RouterLink, RouterOutlet } from "@angular/router";
import { ProductService } from "../../service/product.service";
import { CommonModule } from "@angular/common";
import { PublisherService } from "../../service/publisher.service";

@Component({
  selector: "app-product",
  standalone: true,
  imports: [
    FooterComponent,
    Error404Component,
    NavigationComponent,
    HeaderComponent,
    StoreMenuComponent,
    RouterOutlet,
    RouterLink,
    CommonModule,
    CounterComponent,
  ],
  templateUrl: "./product.component.html",
  styleUrl: "./product.component.css",
})
export class ProductComponent implements OnInit {
  @Input() products: Product[] = [];
  @Input() isOrderPage: boolean = false;
  @Input() isOrder: boolean = false;

  constructor(
    private productService: ProductService,
    private publisherService: PublisherService
  ) {}

  ngOnInit() {
    // Fetch products when the component initializes
    this.fetchProducts();
  }

  // Fetch products from the ProductService
  fetchProducts(): void {
    this.productService.getProduct().subscribe({
      next: (response: Product[]) => {
        // Display a limited set of products (first 6 in this case)
        console.log("Fetched Products:", response);
        this.products = response.slice(0, 6);
      },
      error: (error) => {
        console.error("Error fetching products:", error);
      },
    });
  }

  // Handle the count change event from the CounterComponent
  onCounterChange(
    product: Product,
    event: { productId: number; count: number }
  ): void {
    // Update the count of the specific product and publish the changes
    product.count = event.count;
    this.publisherService.publishProduct(product);
  }
}
