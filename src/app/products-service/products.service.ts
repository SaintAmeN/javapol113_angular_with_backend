import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

export enum ProductState {
  BRAND_NEW = "BRAND_NEW",
  USED = "USED"
}

export type Product = {
  id: number|null,
  name: string,
  state: ProductState,
  ownerId: number,
  createDateTime: string,
  updateDateTime: string,
}

export type CreateProductRequest = {
  name: string,
  state: ProductState,
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

    this.http.get('http://localhost:8080/api/product')
      .subscribe((data) => { // promise
        this.loadingList = false
        console.log(data)

        let receivedProductList = data as Product[];
        this.productList = receivedProductList;
      })
  }

  public getDefautProductRequest(): CreateProductRequest {
    return {
      name: '',
      state: ProductState.BRAND_NEW,
    }
  }

  public sendProductToBackend(request: CreateProductRequest): Observable<Object>{
    return this.http.post('http://localhost:8080/api/product', request);
  }

  public deleteFromBackend(productId: number): Observable<Object>{
    // TODO: fix
    return this.http.delete('http://localhost:8080/products/'+productId)
  }
}
