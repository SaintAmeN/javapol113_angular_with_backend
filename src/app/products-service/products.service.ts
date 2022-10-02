import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BACKEND_BASE_URL, TMP_USER_ID } from '../model/constants';
import { ProductDetails } from '../model/productDetails';

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
    } else {
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

  public getDefautProductDetails(): ProductDetails {
    return {
      product: {
        id: null,
        name: '',
        state: ProductState.BRAND_NEW,
        ownerId: 0,
        createDateTime: '',
        updateDateTime: '',
      },
      owner: {
        id: null,
        login: '',
        name: '',
        surname: '',
        roles: []
      },
      auctions: [],
      offers: []
    }
  }

  public sendProductToBackend(request: CreateProductRequest): Observable<Object> {
    return this.http.post(BACKEND_BASE_URL + "product/" + TMP_USER_ID, request);
  }

  public deleteFromBackend(productId: number): Observable<Object> {
    return this.http.delete('http://localhost:8080/api/product/' + productId)
  }

  public getProductDetails(productId: number): Observable<ProductDetails> {
    return this.http.get<ProductDetails>(BACKEND_BASE_URL + "product/" + productId);
  }
}
