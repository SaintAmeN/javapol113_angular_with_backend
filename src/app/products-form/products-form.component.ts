import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from '../products-service/products.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent implements OnInit {
  product: Product;
  constructor(private productsService : ProductsService) {
    this.product = productsService.getDefautProductModel()
   }

  ngOnInit(): void {
  }

}
