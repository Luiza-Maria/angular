import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TiendaOnlineComponent } from './tienda-online/tienda-online.component';
import { NavigationComponent } from './navigation/navigation.component';
import { WomenComponent } from './women/women.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ShoppingService } from './shopping.service';
import { ProductsComponent } from './products/products.component';
import { StorageModule } from '@ngx-pwa/local-storage';
import { ProdDetailsComponent } from './prod-details/prod-details.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { HomeComponent } from './home/home.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { WishServiceService } from './wishlist/wish-service.service';
import { CartServiceService } from './cart-page/cart-service.service';
import { FilterPipe } from './filter.pipe';
import { DetailProdService } from './products/detail-prod.service';
import { UsersComponent } from './users/users.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { OneComponent } from './tienda-online/one/one.component';
import { TwoComponent } from './tienda-online/two/two.component';
import { ThreeComponent } from './tienda-online/three/three.component';
import { FourComponent } from './tienda-online/four/four.component';
import { FiveComponent } from './tienda-online/five/five.component';



@NgModule({
  declarations: [
    AppComponent,
  

    TiendaOnlineComponent,
    NavigationComponent,
    WomenComponent,
    CartPageComponent,
    ProductsComponent,
    ProdDetailsComponent,
    WishlistComponent,
    HomeComponent,
    FooterPageComponent,
    FilterPipe,
    UsersComponent,
    RegisterUserComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FourComponent,
    FiveComponent,
    


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StorageModule.forRoot({ IDBNoWrap: true }),
    RouterModule
  ],
  providers: [ShoppingService, CartServiceService, WishServiceService,DetailProdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
