import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  loadingList: boolean = false;
  pageEvent?: PageEvent;

  constructor(
    private productsService: ProductsService,
    private snackBar: MatSnackBar) {
  }

  chanagePage(pageEvent?: PageEvent): void {
    this.pageEvent = pageEvent;

    this.loadingList = true
    this.productsService.getProductList(pageEvent?.pageIndex, pageEvent?.pageSize)
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

  deleteProduct(deletedProductId: number): void {
    this.productsService.deleteFromBackend(deletedProductId)
      .subscribe({
        next: (_) => {
          this.snackBar.open('Product has been deleted', undefined, {
            verticalPosition: 'top',
            horizontalPosition: 'start',
            duration: 5000
          })
          this.chanagePage(this.pageEvent)
        },
        error: (error) => {
          this.snackBar.open(`Error: ${error.message}`, undefined, {
            verticalPosition: 'top',
            horizontalPosition: 'start',
            duration: 5000,
            panelClass: "error-snackbar",
          })
          console.log(error)
        }
      })
  }

  ngOnInit(): void {
  }

}
