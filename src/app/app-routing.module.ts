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
import { TiendaOnlineComponent } from './tienda-online/tienda-online.component';
import { OneComponent } from './tienda-online/one/one.component';
import { TwoComponent } from './tienda-online/two/two.component';
import { ThreeComponent } from './tienda-online/three/three.component';
import { FourComponent } from './tienda-online/four/four.component';
import { FiveComponent } from './tienda-online/five/five.component';



const routes: Routes = [
  // { path: '', redirectTo:'/home' , pathMatch:'full'},

  { path: 'navigation', component: NavigationComponent },
  { path: 'women', component: WomenComponent },
  { path: 'cart', component: CartPageComponent },
  {
    path: 'products', component: ProductsComponent},
  { path: 'prod-details', component: ProdDetailsComponent },
  { path: 'wish', component: WishlistComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'games', component: TiendaOnlineComponent,
    children: [
      { path: 'nb1', component: OneComponent },
      { path: 'nb2', component: TwoComponent },
      { path: 'nb3', component: ThreeComponent },
      { path: 'nb4', component: FourComponent },
      { path: 'nb5', component: FiveComponent }
        ]
  },
  { path: 'users', component: UsersComponent },
  { path: 'register-user', component: RegisterUserComponent },
  { path: 'footer', component: FooterPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
