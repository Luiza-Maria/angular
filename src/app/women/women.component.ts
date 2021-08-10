import { Component, OnInit } from '@angular/core';
import { Product } from '../clothes';
import { ShoppingService } from '../shopping.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.scss']
})
export class WomenComponent implements OnInit {
  number: number = 0;
  cartValue: number;
  readMore: string = "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem";
  initialParag: string;
  paragrafExpand: string;
  ifExpand: boolean = false;
  image;
  imgThumb1;
  products;
  namedenim = "Bluza denim"
  pricedenim = 50.99;
  photosrc = "assets/bluza1.jpg";
  selectedProducts = [];
  subscription: Subscription;
  myProducts = [];
  constructor(private prodServ: ShoppingService) {
    this.subscription = this.prodServ.getSelectedProd().subscribe(prod => this.myProducts.push(prod));
   }

  ngOnInit() {
    this.ifExpand = false;
    this.initialParag = this.readMore.substring(0,100);
  }

  decrementVal() {
     this.number--;
  }

  incrementVal() {
     this.number++;
  }

  addCart(id, name, price, photo,nb) {
    
    //Send an Input to Navigation Comp
    if (this.number > 0) {
      this.cartValue = this.number;
    }
     //Send to Cart the selected Prod and number
    // const newProd = {
    //   id: 1,
    //   name: this.namedenim,
    //   price: this.pricedenim,
    //   photo: this.photosrc,
    //   nb:this.number
    // };
   
    // this.selectedProducts.push(newProd);

    // this.prodServ.sendProd(newProd);
    // console.log(newProd);

    
  }

read() {
    this.ifExpand = true;
    this.paragrafExpand = this.readMore;
    // document.getElementById("read-more").innerHTML = "Read Less";
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

  // getPr() {
  //   this.prodServ.getProd().subscribe( prod=> this.products = prod);
  // }
}
