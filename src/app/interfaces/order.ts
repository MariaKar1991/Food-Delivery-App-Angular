export interface Order {
  OrderId: number;
  customerId: number;
  orderDate: string;
  price: number;
  statusOfOrder: string;
  ingredients: string;
  paymentInfo: string;
  products: string;
  photo: string;
  storeName: string;
  storeId: number;
}

export interface OrderList {
  orders: Order[];
  OrderId: number;
  customerId: number;
  orderDate: string;
  price: number;
  statusOfOrder: string;
  ingredients: string;
  paymentInfo: string;
  products: string;
  photo: string;
  store: string;
  storeId: number;
}
