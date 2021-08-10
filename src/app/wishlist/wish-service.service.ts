import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../clothes';
import { Observable, Subject,BehaviorSubject } from 'rxjs';
import { QuantityProd } from '../qantity';
import { CartServiceService } from '../cart-page/cart-service.service';

const urlWish:string = "http://localhost:7000/wishList";

@Injectable({
  providedIn: 'root'
})
export class WishServiceService {

  constructor(private http: HttpClient ,private cartServ: CartServiceService ) { }
  
   //CRUD wishlist
   getWish(): Observable<QuantityProd[]> {
    return this.http.get<QuantityProd[]>(urlWish);
  }
  addToWishlist(prod): Observable<QuantityProd[]> {
    return this.http.post<QuantityProd[]>(urlWish, prod);
  }
  deleteFromWish(id: number): Observable<{}> {
    const urlDelete = `${urlWish}/${id}`
    return this.http.delete(urlDelete);
  }
  //

  // addToCart(prodQ) {
  //   this.cartServ.addToList(prodQ);
  // }
  
}
