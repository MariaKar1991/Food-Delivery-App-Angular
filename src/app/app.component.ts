import { SendOrderButtonComponent } from "./components/send-order-button/send-order-button.component";
import { BeveragesStoresComponent } from "./components/beverages-stores/beverages-stores.component";
import { FoodStoresComponent } from "./components/food-stores/food-stores.component";
import { CoffeeStoresComponent } from "./components/coffee-stores/coffee-stores.component";
import { Error403Component } from "./components/error403/error403.component";
import { ContactComponent } from "./components/contact/contact.component";
import { TopStoresComponent } from "./components/topStores/topStores.component";
import { AllPlacedOrdersComponent } from "./components/all-placed-orders/all-placed-orders.component";
import { RegisterComponent } from "./components/register/register.component";
import { StoreMenuComponent } from "./components/store-menu/store-menu.component";
import { OrderComponent } from "./components/order/order.component";
import { StoresComponent } from "./components/stores/stores.component";
import { AccountComponent } from "./components/account/account.component";
import { Error404Component } from "./components/error404/error404.component";
import { AboutComponent } from "./components/about/about.component";
import { ProductComponent } from "./components/product/product.component";
import { MainComponent } from "./components/main/main.component";
import { FooterComponent } from "./core/footer/footer.component";
import { HeaderComponent } from "./core/header/header.component";
import { NavigationComponent } from "./core/navigation/navigation.component";
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { TopStoresCoffeeComponent } from "./components/top-stores-coffee/top-stores-coffee.component";
import { TopStoresFoodComponent } from "./components/top-stores-food/top-stores-food.component";
import { TopStoresBeveragesComponent } from "./components/top-stores-beverages/top-stores-beverages.component";
import { OrderPageComponent } from "./components/order-page/order-page.component";
import { CounterComponent } from "./components/counter/counter.component";
import { CartComponent } from "./components/cart/cart.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavigationComponent,
    HeaderComponent,
    MainComponent,
    ProductComponent,
    AboutComponent,
    Error404Component,
    Error403Component,
    FooterComponent,
    AccountComponent,
    StoresComponent,
    OrderComponent,
    StoreMenuComponent,
    RegisterComponent,
    AllPlacedOrdersComponent,
    TopStoresComponent,
    ContactComponent,
    CoffeeStoresComponent,
    FoodStoresComponent,
    BeveragesStoresComponent,
    TopStoresBeveragesComponent,
    TopStoresCoffeeComponent,
    TopStoresFoodComponent,
    OrderPageComponent,
    CounterComponent,
    CartComponent,
    StoreMenuComponent,
    SendOrderButtonComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {}
