import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products-service/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  displayedColumns : string[] = [
    'identifier',
    'name',
    'description',
    'state',
    'type',
    'price',
    'quantity'
  ]

  constructor(protected productService : ProductsService) {

  }

  // Component Lifecycle
  ngOnInit(): void {
    // Po załadowaniu komponentu pobieramy ponownie elementy z backendu (refresh)
    this.productService.refreshProductList()
  }

}
