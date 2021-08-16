import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavigationComponent } from './navigation/navigation.component';
import { WomenComponent } from './women/women.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ProductsComponent } from './products/products.component';
import { ProdDetailsComponent } from './prod-details/prod-details.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { HomeComponent } from './home/home.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { UsersComponent } from './users/users.component';
import { RegisterUserComponent } from './register-user/register-user.component';


const routes: Routes = [

  { path: 'navigation', component: NavigationComponent },
  { path: 'women', component: WomenComponent },
  { path: 'cart', component: CartPageComponent },
  {path: 'products', component: ProductsComponent},
  { path: 'prod-details', component: ProdDetailsComponent },
  { path: 'wish', component: WishlistComponent },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'register-user', component: RegisterUserComponent },
  { path: 'footer', component: FooterPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
