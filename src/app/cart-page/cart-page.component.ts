import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { Product } from '../clothes';
import { Subscription } from 'rxjs';
import { QuantityProd } from '../qantity';
import * as $ from 'jquery';
import { CartServiceService } from './cart-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  
  myList = [];
  nbProduct;
  activRoute;
 
  constructor(private route:ActivatedRoute, private prodServ: ShoppingService, private cartProd: CartServiceService) {}

  ngOnInit() {
    this.cartProd.getProdCart().subscribe(prod => this.myList = prod);
    // this.activRoute = this.prodServ.addRoute(this.route.snapshot.url[0].path);  
  }

  deleteProd(id: number) {
    this.cartProd.deleteProdCart(id).subscribe();
    window.location.reload();
  };

  updateProd(product, quantity) {
    const prodUpdate = {
      id: product.id,
      name: product.name,
      quantity: quantity,
      price: product.price,
      photo: product.photo,
      color: product.color
    };
    this.cartProd.updateProd(prodUpdate,product.id).subscribe( prod => this.myList = prod)
    window.location.reload();
  }
  
  getSum() {
    var summ = 0;
    for (var i = 0; i < this.myList.length; i++) {
      summ += parseInt(this.myList[i].quantity);
    }
    return summ;
  }

  getTotal() {
    var total = 0;
    for (var i = 0; i < this.myList.length; i++) {
      total += +(this.myList[i].price) * parseInt(this.myList[i].quantity);
    }
    return total;
  }
}


  


