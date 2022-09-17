import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

export enum ProductState {
  BRAND_NEW = "BRAND_NEW",
  USED = "USED"
}

export type Product = {
  id: number | null,
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

  public getProductList(page?: number | null, size?: number | null, user?: number | null): Observable<Object> {
    this.loadingList = true;

    let params;
    if (user) {
      params = {
        userId: (user ? user : 0),
        page: (page /* !== undefined */ ? page : 0),
        size: (size /* !== undefined */ ? size : 10),
      }
    }else{
      params = {
        page: (page /* !== undefined */ ? page : 0),
        size: (size /* !== undefined */ ? size : 10),
      }
    }

    return this.http.get('http://localhost:8080/api/product', {
      params: params
    });
  }

  public getDefautProductRequest(): CreateProductRequest {
    return {
      name: '',
      state: ProductState.BRAND_NEW,
    }
  }

  public sendProductToBackend(request: CreateProductRequest): Observable<Object> {
    return this.http.post('http://localhost:8080/api/product', request);
  }

  public deleteFromBackend(productId: number): Observable<Object> {
    // TODO: fix
    return this.http.delete('http://localhost:8080/products/' + productId)
  }
}
