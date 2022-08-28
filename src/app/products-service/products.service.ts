import { Injectable } from '@angular/core';

export enum ProductState {
  NEW = "NEW",
  USED = "USED"
}

export enum ProductType {
  ELECTRONICS = "ELECTRONICS",
  FOOD = "FOOD",
  LIQUOR = "LIQUOR",
}

export type Product = {
  id: number,
  name: string,
  description: string,
  state: ProductState,
  type: ProductType,
  price: number,
  quantity: number
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productList: Product[] = []

  constructor() { }
}
