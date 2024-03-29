import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { Product } from "../interfaces/product";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class CartOrderPageService {
  // Subject to manage the state of the shopping cart
  private cartSubject = new BehaviorSubject<Product[]>([]);
  // Observable exposed for components to subscribe to changes in the cart
  public cart$: Observable<Product[]> = this.cartSubject.asObservable();

  constructor(private router: Router) {}

  // Getter function to retrieve the current state of the cart
  getCart(): Product[] {
    return this.cartSubject.getValue();
  }

  // Function to update the cart state and notify subscribers
  updateCart(cart: Product[]): void {
    this.cartSubject.next(cart);
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = "Something went wrong";

    if (error.status) {
      switch (error.status) {
        // Successful responses
        case 200:
          console.log("Request successful:", error.url);
          break;
        case 201:
          console.log("Resource created successfully:", error.url);
          break;
        case 202:
          console.log("Request accepted:", error.url);
          break;
        case 204:
          console.log("Request successful with no content:", error.url);
          break;

        // Client errors
        case 400:
          errorMessage = "Bad Request";
          break;
        case 401:
          errorMessage = "Unauthorized";
          // Redirect to the login page
          this.router.navigate(["/register"]);
          break;
        case 403:
          errorMessage = "Forbidden";
          // Redirect to the Error403 component
          this.router.navigate(["/error403"]);
          break;
        case 404:
          errorMessage = "Not Found";
          // Redirect to the error404 page
          this.router.navigate(["/error404"]);
          break;

        // Server error
        case 500:
          errorMessage = "Internal Server Error";
          break;

        // Default case for other status codes
        default:
          errorMessage = `Error ${error.status}`;
          break;
      }
    }
    // Logs the detailed error for debugging purposes
    console.error(error);

    // Pass the error message to the caller
    return throwError(() => new Error(errorMessage));
  }
}
