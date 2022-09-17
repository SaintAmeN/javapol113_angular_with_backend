import { Component, Input, OnInit } from '@angular/core';
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

  @Input("productList") productList : Product[] = [];

  constructor(private snackBar: MatSnackBar, protected productService: ProductsService) {
    console.log('a')
  }

  // Component Lifecycle
  ngOnInit(): void {
    // Po załadowaniu komponentu pobieramy ponownie elementy z backendu (refresh)
  }

  deleteProduct(id: number): void {
    this.productService.deleteFromBackend(id)
      .subscribe({
        next: (_) => {
          this.snackBar.open('Product has been deleted', undefined, {
            verticalPosition: 'top',
            horizontalPosition: 'start',
            duration: 5000
          })
          // this.productService.refreshProductList()
        },
        error: (error) => {
          console.log(error)
          // this.productService.refreshProductList()
        }
      })
  }
}
