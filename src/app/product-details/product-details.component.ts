import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TMP_PRODUCT_ID } from '../model/constants';
import { ProductDetails } from '../model/productDetails';
import { ProductsService } from '../products-service/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productDetails: ProductDetails;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router) {

    this.productDetails = this.productsService.getDefautProductDetails()

    // productId
    this.route.params.subscribe((params) => {
      console.log(params);
      const paramProductId = params['productId']

      this.productsService.getProductDetails(paramProductId)
        .subscribe({
          next: (product) => {
            console.log(product);
            this.productDetails = product;
          },
          error: (error) => {
            console.log(error);
          }
        })
    })
  }

  ngOnInit(): void {
  }

  openAuctionForm(productId : number|null) : void {
    this.router.navigate(['/auction/form/' + productId])
  }
}
