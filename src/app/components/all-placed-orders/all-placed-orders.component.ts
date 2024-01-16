import { CommonModule } from "@angular/common";
import { OrderList } from "./../../interfaces/order";
import { OrderService } from "./../../service/order.service";
import { Component, OnInit, inject } from "@angular/core";
import { NavigationComponent } from "./../../core/navigation/navigation.component";
import { HeaderComponent } from "./../../core/header/header.component";

import { FooterComponent } from "./../../core/footer/footer.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-all-placed-orders",
  standalone: true,
  imports: [
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    CommonModule,
  ],
  templateUrl: "./all-placed-orders.component.html",
  styleUrl: "./all-placed-orders.component.css",
})
export class AllPlacedOrdersComponent implements OnInit {
  orders: OrderList[] = [];
  hasLoaded: boolean = false;
  router: Router = inject(Router);

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.orderService.getOrders().subscribe({
      next: (response: OrderList[]) => {
        console.log("Orders: ", response);
        this.orders = response;
        this.hasLoaded = true;
      },
      error: (error) => {
        console.error("Error fetching orders:", error);
      },
    });
  }

  viewOrderDetails(OrderId: number) {
    this.router.navigate(["/order", OrderId]);
  }
}
