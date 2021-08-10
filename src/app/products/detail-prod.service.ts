import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../clothes';

@Injectable({
  providedIn: 'root'
})
export class DetailProdService {

  prodDetail: Product[];
  constructor() { }

  sendProduct(prod) {
    this.prodDetail = prod;
  }

  getProduct() {
    return this.prodDetail;
  }
  
}
