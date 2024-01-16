import { Product } from './product';

export interface Store {
  storeName: string;
  storeId: number;
  storeLocation: string;
  menu: string;
  status: boolean;
  rate: number;
  storeCategory: string;
  photo: string;
  products: Product[];
}
