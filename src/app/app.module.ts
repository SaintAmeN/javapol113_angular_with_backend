import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { ProductsListComponent } from './products-list/list-container/products-list.component';
import { ProductsService } from './products-service/products.service';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ProductsFormComponent } from './products-form/products-form.component';
import {MatPaginatorModule} from '@angular/material/paginator';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserServiceService } from './user-service/user-service.service';
import { AllProductsListComponent } from './products-list/all-products-list/all-products-list.component';
import { UserProductsListComponent } from './products-list/user-products-list/user-products-list.component';
import { AuctionListComponent } from './auction-list/list-container/auction-list.component';
import { AllAuctionListComponent } from './auction-list/all-auction-list/all-auction-list.component';
import { AuctionService } from './auction-service/auction.service';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AuctionFormComponent } from './auction-form/auction-form.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ProductsListComponent,
    ProductsFormComponent,
    RegistrationFormComponent,
    UserListComponent,
    AllProductsListComponent,
    UserProductsListComponent,
    AuctionListComponent,
    AllAuctionListComponent,
    ProductDetailsComponent,
    AuctionFormComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatPaginatorModule
  ],
  providers: [
    ProductsService,
    UserServiceService,
    AuctionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
