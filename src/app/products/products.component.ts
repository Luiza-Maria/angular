import { Component, OnInit } from '@angular/core';
import { Product } from '../clothes';
import { ShoppingService } from '../shopping.service';
import {ActivatedRoute, Router,NavigationStart, NavigationEnd} from '@angular/router';
import { QuantityProd } from '../qantity';
import { Subscription } from 'rxjs';
import { WishServiceService } from '../wishlist/wish-service.service';
import { CartServiceService } from '../cart-page/cart-service.service';
import { DetailProdService } from './detail-prod.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[]=[];
  selectedProduct = [];
  myWishList: QuantityProd[] = [];
  subscription: Subscription;
  mySearchList;
  lastSearch: Product[];
  activeRoute = [];

  constructor(private route: ActivatedRoute, private prodServ: ShoppingService, private wishServ: WishServiceService, private cartServ: CartServiceService, private detailServ: DetailProdService, private router: Router) {
    
  }

  ngOnInit() {
    this.prodServ.getProd().subscribe(prod => this.products = prod);
    this.wishServ.getWish().subscribe(product => this.myWishList = product); 
    // this.prodServ.addRoute(this.route.snapshot.url[0].path);
  }

  ngDoCheck() {
    this.mySearchList = this.prodServ.getSearchValue();
    // this.activeRoute = this.prodServ.routeChange;
    // for (var i = 0; i < this.activeRoute.length; i++) {
    //   if ((this.activeRoute.length > 2) && (this.activeRoute[i+1] !== this.activeRoute[i]) && !this.prodServ.getSearchValue) {
    //     this.mySearchList.length === 0;
    //   }
    // }

  }

  getDetails(product) {
    const prod = {
      id: product.id,
      name: product.name,
      price: product.price,
      photo: product.photo,
      color: product.color
    }
 
    this.detailServ.sendProduct(prod);
   
    this.router.navigate(['/prod-details']);

  }
  addWishlist(product) {
    if (this.myWishList.length > 0) {
      for (var i = 0; i < this.myWishList.length; i++) {
        console.log(this.myWishList.length)
        if (product.id === this.myWishList[i].id) {
          alert('Already added this product');
        } else {
          this.wishServ.addToWishlist(product).subscribe();
        }
      }
    } else {
      this.wishServ.addToWishlist(product).subscribe();
    }
  }
}
