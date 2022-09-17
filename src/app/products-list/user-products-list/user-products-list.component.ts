import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { PageResponse } from 'src/app/model/pagination';
import { Product, ProductsService } from 'src/app/products-service/products.service';

@Component({
  selector: 'app-user-products-list',
  templateUrl: './user-products-list.component.html',
  styleUrls: ['./user-products-list.component.css']
})
export class UserProductsListComponent implements OnInit {
  pageResponse: PageResponse<Product> = {
    content: [],
    totalElements: 0
  };
  loadingList : boolean = false;
  userId: number = 2;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }

  chanagePage(pageEvent?:PageEvent): void {
    this.loadingList = true
    this.productsService.getProductList(pageEvent?.pageIndex, pageEvent?.pageSize, this.userId)
      .subscribe({
        next: (data) => {
          this.loadingList = false
          console.log(data)

          let receivedProductPageResponse = data as PageResponse<Product>;
          this.pageResponse = receivedProductPageResponse;
        },
        error: (error) => {
          this.loadingList = false
          console.log(error)
        }
      })
  }

}
