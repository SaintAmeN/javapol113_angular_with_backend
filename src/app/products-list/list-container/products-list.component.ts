import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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
    // 'description',
    'state',
    // 'type',
    // 'price',
    // 'quantity',
    'product-create-time',
    'product-update-time',
    'delete-button',
    'product-details-button'
  ]

  @Input("productList") productList: Product[] = [];
  @Input("totalElements") totalElements: number = 0;
  @Input("loadingList") loadingList: boolean = false;

  @Output() loadProductsEvent = new EventEmitter<PageEvent>();
  @Output() productDeleteEvent = new EventEmitter<number>();

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.loadProductsEvent.emit({
      pageSize: 3,
      pageIndex: 0,
      length: 0
    });
  }

  deleteProduct(id: number): void {
    console.log('Product delete clicked: ' + id)
    this.productDeleteEvent.emit(id)
  }

  loadProducts(event?: PageEvent) {
    console.log(event)
    this.loadProductsEvent.emit(event);
  }

  showProductDetails(productId: number): void {
    this.router.navigate([`/product/details/${productId}`])
  }
}
