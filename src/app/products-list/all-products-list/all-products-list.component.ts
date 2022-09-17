import { Component, OnInit } from '@angular/core';
import { PageResponse } from 'src/app/model/pagination';
import { Product, ProductsService } from 'src/app/products-service/products.service';

@Component({
  selector: 'app-all-products-list',
  templateUrl: './all-products-list.component.html',
  styleUrls: ['./all-products-list.component.css']
})
export class AllProductsListComponent implements OnInit {
  pageResponse: PageResponse<Product> = {
    content: []
  };
  pageNumber: number = 0;
  pageSize: number = 10;

  constructor(private productsService: ProductsService) {
    // this.pageResponse = null;
  }

  ngOnInit(): void {
    this.chanagePage()
  }

  chanagePage(): void {
    console.log('Change page')
    this.productsService.getProductList(this.pageNumber, this.pageSize)
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

  chanagePageNext(): void {
    this.pageNumber += 1;
    this.chanagePage();
  }

  chanagePagePrevious(): void {
    this.pageNumber -= 1;
    this.chanagePage();
  }

}
