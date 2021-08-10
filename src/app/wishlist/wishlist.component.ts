import { Component, OnInit } from '@angular/core';

import { ShoppingService } from '../shopping.service';
import { QuantityProd } from '../qantity';
import { WishServiceService } from './wish-service.service';
import { CartServiceService } from '../cart-page/cart-service.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  myWishList: QuantityProd[] = [];
  shoppList= [];

  constructor( private cartServ: ShoppingService, private wishServ:WishServiceService, private cartService: CartServiceService ) { }

  ngOnInit() {
    // get products from wishlist
    this.wishServ.getWish().subscribe(prod => this.myWishList = prod);
    //get products from cart
    this.cartService.getProdCart().subscribe(product => this.shoppList = product);
  }

  removeProduct(wish) {
    alert("Vreti sa stergeti produsul selectat? ")
    this.wishServ.deleteFromWish(wish.id).subscribe();
    window.location.reload();
  }

  addToCart(wish) {
    console.log(this.shoppList.length);
    const prod = {
      id: wish.id,
      quantity: 1,
      name: wish.name,
      price: wish.price,
      photo: wish.photo,
      color: wish.color[0]
    };

    if (this.shoppList.length > 0) {
      for (var j = 0; j < this.shoppList.length; j++) {
        if (wish.id !== this.shoppList[j].id) {
          this.cartService.addToList(prod).subscribe();    
        }       
      }
    } else {
      this.cartService.addToList(prod).subscribe();
    }
  } 
}

  
