import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { catchError, Observable, of, tap } from 'rxjs';
import { Product, ProductsService } from '../products-service/products.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent implements OnInit {
  @ViewChild('ref') child: ElementRef|any;

  product: Product;
  sendingProduct: boolean = false;

  notification: string|null = null;

  constructor(private renderer: Renderer2,
              private router: Router,
              private productsService: ProductsService,
              private snackBar: MatSnackBar) {
    this.product = productsService.getDefautProductModel()
  }

  ngOnInit(): void {
  }

  sendProduct(): void {
    this.sendingProduct = true;

    this.productsService.sendProductToBackend(this.product)
      .subscribe({ // promise
        next: (data) => {
          this.sendingProduct = false;
          this.snackBar.open('Product has been added', undefined, {
            verticalPosition: 'top',
            horizontalPosition: 'start',
            duration: 5000
          })

          // po dodaniu obiektu przekieruj na listę
          this.router.navigate(['/products'])
          console.log(data)
        },
        error: (error) => {
          this.sendingProduct = false;
          this.notification = error.message

          setTimeout(() => {
            this.renderer.addClass(this.child.nativeElement, 'hidden');
            setTimeout(() => {
              // po 5 sekundach wyczyść powiadomienie o błędzie
              this.notification = null;
            }, 1000)
          }, 3000)

        }
      })
  }

  clearForm(): void {
    this.product = this.productsService.getDefautProductModel()
  }
}
