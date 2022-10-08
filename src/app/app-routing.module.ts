import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuctionFormComponent } from './auction-form/auction-form.component';
import { AllAuctionListComponent } from './auction-list/all-auction-list/all-auction-list.component';
import { AdminRoleGuard } from './authentication-service/admin-role.guard';
import { AuthenticationGuard } from './authentication-service/authentication.guard';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsFormComponent } from './products-form/products-form.component';
import { UserProductsListComponent } from './products-list/user-products-list/user-products-list.component';
import { ProductsComponent } from './products/products.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { TestComponent } from './test/test.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "test", component: TestComponent },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginFormComponent },
  { path: "register", component: RegistrationFormComponent },
  { path: "users", component: UserListComponent, canActivate: [AuthenticationGuard, AdminRoleGuard] },
  { path: "products", component: ProductsComponent, canActivate: [AuthenticationGuard] },
  { path: "auction", component: AllAuctionListComponent, canActivate: [AuthenticationGuard] },
  { path: "auction/form", component: AuctionFormComponent, canActivate: [AuthenticationGuard] },
  { path: "products/form", component: ProductsFormComponent, canActivate: [AuthenticationGuard] },
  { path: "products/user", component: UserProductsListComponent, canActivate: [AuthenticationGuard] },
  { path: "auction/form/:productId", component: AuctionFormComponent, canActivate: [AuthenticationGuard] },
  { path: "product/details/:productId", component: ProductDetailsComponent, canActivate: [AuthenticationGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
