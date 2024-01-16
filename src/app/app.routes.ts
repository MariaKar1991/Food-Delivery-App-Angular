import { CoffeeStoresComponent } from "./components/coffee-stores/coffee-stores.component";
import { BeveragesStoresComponent } from "./components/beverages-stores/beverages-stores.component";
import { FoodStoresComponent } from "./components/food-stores/food-stores.component";
import { StoreMenuComponent } from "./components/store-menu/store-menu.component";
import { StoreMainComponent } from "./components/store-main/store-main.component";
import { Component } from "@angular/core";
import { ContactComponent } from "./components/contact/contact.component";
import { StoresComponent } from "./components/stores/stores.component";
import { RegisterComponent } from "./components/register/register.component";
import { OrderComponent } from "./components/order/order.component";
import { AboutComponent } from "./components/about/about.component";
import { Error404Component } from "./components/error404/error404.component";
import { Routes } from "@angular/router";
import { MainComponent } from "./components/main/main.component";
import { AccountComponent } from "./components/account/account.component";
import { AppComponent } from "./app.component";
import { TopStoresComponent } from "./components/topStores/topStores.component";
import { Error403Component } from "./components/error403/error403.component";
import { AllPlacedOrdersComponent } from "./components/all-placed-orders/all-placed-orders.component";
import { TopStoresFoodComponent } from "./components/top-stores-food/top-stores-food.component";
import { TopStoresCoffeeComponent } from "./components/top-stores-coffee/top-stores-coffee.component";
import { TopStoresBeveragesComponent } from "./components/top-stores-beverages/top-stores-beverages.component";
import { OrderPageComponent } from "./components/order-page/order-page.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    component: MainComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "account",
    component: AccountComponent,
  },
  {
    path: "user/:id",
    component: AccountComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "order/:OrderId",
    component: OrderComponent,
  },
  {
    path: "order-page",
    component: OrderPageComponent,
  },
  {
    path: "order",
    component: OrderComponent,
  },
  { path: "store-menu", component: StoreMenuComponent },
  {
    path: "stores",
    component: StoresComponent,
  },
  {
    path: "contact",
    component: ContactComponent,
  },
  {
    path: "topStoresFood",
    component: TopStoresFoodComponent,
  },
  {
    path: "topStoresBeverages",
    component: TopStoresBeveragesComponent,
  },
  {
    path: "topStoresCoffee",
    component: TopStoresCoffeeComponent,
  },
  { path: "topStores", component: TopStoresComponent },
  {
    path: "order/1/all-placed-orders",
    component: AllPlacedOrdersComponent,
  },
  {
    path: "order/2/all-placed-orders",
    component: AllPlacedOrdersComponent,
  },
  {
    path: "order/3/all-placed-orders",
    component: AllPlacedOrdersComponent,
  },
  {
    path: "all-placed-orders",
    component: AllPlacedOrdersComponent,
  },
  {
    path: "error403",
    component: Error403Component,
  },
  { path: "error404/:storeName", component: Error404Component },
  {
    path: "error404",
    component: Error404Component,
  },
  {
    path: "store-main/:storeId",
    component: StoreMainComponent,
  },
  {
    path: "store-main",
    component: StoreMainComponent,
  },
  {
    path: "foodStores",
    component: FoodStoresComponent,
  },
  {
    path: "beveragesStores",
    component: BeveragesStoresComponent,
  },
  {
    path: "coffeeStores",
    component: CoffeeStoresComponent,
  },
  {
    path: "**",
    component: Error404Component,
  },
];
