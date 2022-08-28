import { HttpClient } from '@angular/common/http';
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
  loadingList: boolean = false;

  constructor(private http: HttpClient) { }

  public refreshProductList(): void {
    this.loadingList = true;

    this.http.get('http://localhost:8080/products')
      .subscribe((data) => { // promise
        this.loadingList = false
        console.log(data)

        let receivedProductList = data as Product[];
        this.productList = receivedProductList;
      })
  }
}
