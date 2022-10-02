import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuctionService } from '../auction-service/auction.service';
import { CreateAuctionRequest } from '../model/auction';
import { TMP_USER_ID } from '../model/constants';
import { PageResponse } from '../model/pagination';
import { Product, ProductsService } from '../products-service/products.service';

@Component({
  selector: 'app-auction-form',
  templateUrl: './auction-form.component.html',
  styleUrls: ['./auction-form.component.css']
})
export class AuctionFormComponent implements OnInit {
  // Produkt który ktoś może przesłać do formularza przed uruchomieniem formularza
  product: Product | null = null;
  selectedProduct: Product | null = null;
  productListToSelect: PageResponse<Product> = {
    content: [],
    totalElements: 0
  };

  auctionRequest: CreateAuctionRequest;

  constructor(
    private productsService: ProductsService,
    private auctionService: AuctionService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.auctionRequest = {
      productId: 0,
      title: "",
      initialPrice: 20.0,
      startDateTime: "2022-03-03T13:30:00",
      durationInDays: 3
    }

    // productId
    this.route.params.subscribe({
      next: (params) => {
        console.log(params);
        const paramProductId = params['productId']
        if (paramProductId == undefined) {
          this.getAllUserProducts();
        } else {
          this.productsService.getProductDetails(paramProductId)
            .subscribe({
              next: (productDetails) => {
                console.log(productDetails);
                this.product = productDetails.product;
              },
              error: (error) => {
                console.log(error);
                this.getAllUserProducts();
              }
            })
        }
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  ngOnInit(): void {
    // this.getAllUserProducts();
  }

  sendAuction(): void {
    if (this.product == null && this.selectedProduct == null) {
      console.log("You have to select product")
    } else if (this.product != null) {
      this.auctionRequest.productId = this.product.id!;
    } else if (this.selectedProduct != null) {
      this.auctionRequest.productId = this.selectedProduct.id!;
    }

    this.auctionService.sendAuctionToBackend(this.auctionRequest)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['product/details/' + this.auctionRequest.productId])
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

  clearForm(): void {

  }

  getAllUserProducts(): void {
    this.productsService.getProductList(0, 100, TMP_USER_ID)
      .subscribe({
        next: (data) => {
          console.log(data)
          this.productListToSelect = data as PageResponse<Product>;
        },
        error: (error) => {
          console.log(error)
        }
      })
  }
}
