import { CounterComponent } from "./../counter/counter.component";
import { ProductComponent } from "./../product/product.component";
import { Store } from "../../interfaces/store";
import { Component, Input, ViewChild } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { Product } from "../../interfaces/product";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-store-menu",
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    ProductComponent,
    CommonModule,
    CounterComponent,
  ],
  templateUrl: "./store-menu.component.html",
  styleUrl: "./store-menu.component.css",
})
export class StoreMenuComponent {
  products: Product[] = [];
  private _store: Store | undefined;

  // View child to access ProductComponent
  @ViewChild(ProductComponent) productComponent!: ProductComponent;

  // Input property for receiving the store object
  @Input() set store(value: Store | undefined) {
    if (value) {
      this._store = value;
    }
  }

  // Getter for the store property
  get store(): Store | undefined {
    return this._store;
  }
}
