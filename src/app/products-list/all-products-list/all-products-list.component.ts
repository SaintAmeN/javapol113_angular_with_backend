import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { PageResponse } from 'src/app/model/pagination';
import { Product, ProductsService } from 'src/app/products-service/products.service';

@Component({
  selector: 'app-all-products-list',
  templateUrl: './all-products-list.component.html',
  styleUrls: ['./all-products-list.component.css']
})
export class AllProductsListComponent implements OnInit {
  pageResponse: PageResponse<Product> = {
    content: [],
    totalElements: 0
  };
  pageNumber: number = 0;
  pageSize: number = 10;

  constructor(private productsService: ProductsService) {
    // this.pageResponse = null;
  }

  ngOnInit(): void {
    
  }

  chanagePage(pageEvent?:PageEvent): void {
    console.log('Change page all')
    this.productsService.getProductList(pageEvent?.pageIndex, pageEvent?.pageSize)
      .subscribe({
        next: (data) => {
          // this.loadingList = false
          console.log(data)

          let receivedProductPageResponse = data as PageResponse<Product>;
          this.pageResponse = receivedProductPageResponse;
        },
        error: (error) => {
          console.log(error)
        }
      })
  }

}
