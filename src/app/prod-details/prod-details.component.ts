import { Component, OnInit } from '@angular/core';
import { Product } from '../clothes';
import { ShoppingService } from '../shopping.service';
import { QuantityProd } from '../qantity';
import { CartServiceService } from '../cart-page/cart-service.service';
import { DetailProdService } from '../products/detail-prod.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prod-details',
  templateUrl: './prod-details.component.html',
  styleUrls: ['./prod-details.component.scss']
})
export class ProdDetailsComponent implements OnInit {
  // prodDetails: Product[]=[];
  details: Product[]=[];
  number: number = 0;
  // cartValue: number;
  readMore: string = "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem";
  initialParag: string;
  paragrafExpand: string;
  ifExpand: boolean = false;
  image;
  // imgThumb1;
  // products;
  shoppList = [];
  // red = "red";
  // blue = "blue";
  // green = "green";
  selectedColor: string;
  colorBoolean: boolean = false;
  subscription: Subscription;
  activeRoute;
  constructor( private route:ActivatedRoute,private servShopp: ShoppingService, private cartServ: CartServiceService, private detailServ: DetailProdService) { }

  ngOnInit() {

    this.cartServ.getProdCart().subscribe( prod => this.shoppList = prod);
    // this.subscription = this.detailServ.getProduct().subscribe(prod => this.details = prod);
    this.details = this.detailServ.getProduct();

    this.ifExpand = false;
    this.initialParag = this.readMore.substring(0,100);

    // this.activeRoute = this.servShopp.addRoute(this.route.snapshot.url[0].path);
  }

  decrementVal() {
    this.number--;
 }

 incrementVal() {
    this.number++;
 }
  
  getColor(colorName) {  
    this.colorBoolean = true;
    this.selectedColor = colorName;
    console.log(this.selectedColor);
  } 

  addToCart(id, name, price, photo, color, nb) {
    if (this.colorBoolean == true) {
      const quantityProd: QuantityProd = {
        id: id,
        quantity: nb,
        name: name,
        price: price,
        photo: photo,
        color: this.selectedColor

      }
      // check if the cart contains products
      if (this.shoppList.length > 0) {
        for (var j = 0; j < this.shoppList.length; j++) {
          if (this.shoppList[j].id == quantityProd.id) {
       
            this.cartServ.updateProd(quantityProd,id).subscribe();
          } else {
            this.cartServ.addToList(quantityProd).subscribe();
          }
        }
      } else {
        this.cartServ.addToList(quantityProd).subscribe();
      }
    } else alert("Please select a color");
  }

   read() {
    this.ifExpand = true;
    this.paragrafExpand = this.readMore;
  }

  viewFullScreen() {
    this.image = document.getElementById('prod-image');
    if (this.image.requestFullscreen) {
      this.image.requestFullscreen();
    }
  }
  
  changeImage(photo) {
    this.image = document.getElementById('prod-image');
    this.image.src = photo;
  }

 

}
