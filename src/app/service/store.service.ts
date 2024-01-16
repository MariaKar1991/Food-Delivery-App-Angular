import { Store } from "../interfaces/store";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, of, retry } from "rxjs";
import { throwError } from "rxjs";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Router } from "@angular/router";
import { Product } from "../interfaces/product";

@Injectable({
  providedIn: "root",
})
export class StoreService {
  private endpointUrl = "assets/sample-data/store";
  private endpointGetAllStores = "assets/sample-data/all-stores.json";

  private endpointGetTop8Stores = "assets/sample-data/famousStoresGeneral.json";

  private endpointGetTop8StoresPerFoodCategory =
    "assets/sample-data/most_famous_stores_per_food_category.json";
  private endpointGetTop8StoresPerBeveragesCategory =
    "assets/sample-data/most_famous_stores_per_beverages_category.json";
  private endpointGetTop8StoresPerCoffeeCategory =
    "assets/sample-data/most_famous_stores_per_coffee_category.json";

  private endpointGetFoodStores = "assets/sample-data/foodStores.json";
  private endpointGetBeveragesStores =
    "assets/sample-data/beveragesStores.json";
  private endpointGetCoffeeStores = "assets/sample-data/coffeeStores.json";

  constructor(private http: HttpClient, private router: Router) {}

  getStore(storeId: number): Observable<Store> {
    const url = "assets/sample-data/stores.json";
    return this.http.get<Store>(url);
  }

  getStoreByName(storeName: string): Observable<Store | undefined> {
    // Header
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    });
    const url = "assets/sample-data/stores.json";
    return this.http.get<Store[]>(url, { headers }).pipe(
      map(
        (stores) =>
          (stores.find((store) => store.storeName === storeName) as Store) ||
          undefined
      ),
      catchError(this.handleError) // Apply error handling using catchError operator
    );
  }

  getStoreById(storeId: number): Observable<Store> {
    const url = "assets/sample-data/stores.json";
    return this.http.get<Store>(url);
  }

  getProductsByStoreId(storeId: number): Observable<Product[]> {
    const url = "assets/sample-data/products.json";
    return this.http.get<Product[]>(url);
  }

  getStores(): Observable<Store[]> {
    return this.http.get<Store[]>(this.endpointGetAllStores);
  }

  getTop8Stores(): Observable<Store[]> {
    return this.http.get<Store[]>(this.endpointGetTop8Stores);
  }

  getTop8StoresByFoodCategory(): Observable<Store[]> {
    // Header
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    });
    return this.http.get<Store[]>(this.endpointGetTop8StoresPerFoodCategory, {
      headers,
    });
  }

  getTop8StoresByBeveragesCategory(): Observable<Store[]> {
    // Header
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    });
    return this.http.get<Store[]>(
      this.endpointGetTop8StoresPerBeveragesCategory,
      { headers }
    );
  }

  getTop8StoresByCoffeeCategory(): Observable<Store[]> {
    // Header
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    });
    return this.http.get<Store[]>(this.endpointGetTop8StoresPerCoffeeCategory, {
      headers,
    });
  }

  deleteStore(storeId: number): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Accept: "application/json",
      }),
    };

    return this.http.delete(`${this.endpointUrl}/${storeId}`, options).pipe(
      retry(1),
      catchError((error) => this.handleError(error))
    );
  }

  getFoodStores(): Observable<Store[]> {
    return this.http.get<Store[]>(this.endpointGetFoodStores);
  }

  getBeveragesStores(): Observable<Store[]> {
    return this.http.get<Store[]>(this.endpointGetBeveragesStores);
  }

  getCoffeeStores(): Observable<Store[]> {
    return this.http.get<Store[]>(this.endpointGetCoffeeStores);
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
