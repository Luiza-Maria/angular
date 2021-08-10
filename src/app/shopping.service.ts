import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Product } from './clothes';
import { Observable, Subject,BehaviorSubject } from 'rxjs';
import { QuantityProd } from './qantity';
import { CartServiceService } from './cart-page/cart-service.service';

const url: string = "http://localhost:3000/clothes";

const urlList: string = "http://localhost:5000/clothesShopp";

const urlWish:string = "http://localhost:7000/wishList";

const urlPopular: string = "http://localhost:8000/popularclothes";

const urlFeatured:string = "http://localhost:2000/featured";


@Injectable({
  providedIn: 'root'
})


export class ShoppingService {
  
  prodDetails;
  searchProd: string = '';
  routeChange = [];

  private valueProd = new Subject();
  private searchProduct = new Subject();
  private routeValue = new Subject();

  constructor(private http: HttpClient,private cartServ: CartServiceService  ) { }
  
  // getSearchValue() {
  //   return this.searchProduct.asObservable();
  // }

  // sendSearchProd(prod) {
  //   this.searchProduct.next(prod);
  // }

  // addRoute(route) {
  //   this.routeChange.push(route);
  //   alert(this.routeChange);
  // }

  getSearchValue() {
    return this.searchProd;
  }

  sendSearchProd(prod) {
    this.searchProd = prod;
  }
///////////////////////////////////////
  getProd(): Observable<Product[]> {
    return this.http.get<Product[]>(url);
  }
  ////////////////////////////////////

  updateList(product: QuantityProd, id: number): Observable<QuantityProd[]> {
    const urlUpdate = `${url}/${id}`;
    return this.http.put<QuantityProd[]>(urlUpdate, product);
  }
  //Send NBProducts
  sendNbProd(numberProd) {
    this.valueProd.next(numberProd);
  }

  getSelectedProd() {
    return this.valueProd.asObservable();
  }

////////////////////////////////////////////
  // CRUD POPULAR (GET)

  getPopular(): Observable<Product[]> {
    return this.http.get<Product[]>(urlPopular);
  }

  // CRUD FEATURED PROD

  getFeatured(): Observable<Product[]> {
    return this.http.get<Product[]>(urlFeatured);
  }

}