import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from 'src/app/products-service/products.service';
import { ProductsService } from '../../products-service/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  displayedColumns: string[] = [
    'identifier',
    'name',
    'description',
    'state',
    'type',
    'price',
    'quantity',
    'delete-button'
  ]

  @Input("productList") productList: Product[] = [];
  @Input("totalElements") totalElements: number = 0;
  @Input("loadingList") loadingList: boolean = false;

  @Output() loadProductsEvent = new EventEmitter<PageEvent>();

  constructor() {
  }

  ngOnInit(): void {
    this.loadProductsEvent.emit({
      pageSize: 3,
      pageIndex: 0,
      length: 0
    });
  }

  deleteProduct(id: number): void {
  //   this.productService.deleteFromBackend(id)
  //     .subscribe({
  //       next: (_) => {
  //         this.snackBar.open('Product has been deleted', undefined, {
  //           verticalPosition: 'top',
  //           horizontalPosition: 'start',
  //           duration: 5000
  //         })
  //         // this.productService.refreshProductList()
  //       },
  //       error: (error) => {
  //         console.log(error)
  //         // this.productService.refreshProductList()
  //       }
  //     })
  }

  loadProducts(event?: PageEvent) {
    console.log(event)
    this.loadProductsEvent.emit(event);
  }
}
