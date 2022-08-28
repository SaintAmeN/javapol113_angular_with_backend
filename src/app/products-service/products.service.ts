import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

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
  id: number|null,
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

  public getDefautProductModel(): Product {
    return {
      id: null,
      name: '',
      description: '',
      state: ProductState.NEW,
      type: ProductType.FOOD,
      price: 1.0,
      quantity: 1
    }
  }

  public sendProductToBackend(product: Product): Observable<Object>{
    return this.http.post('http://localhost:8080/products', product);
  }

  public deleteFromBackend(productId: number): Observable<Object>{
    return this.http.delete('http://localhost:8080/products/'+productId)
  }
}
