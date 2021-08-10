import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuantityProd } from '../qantity';


const url: string = "http://localhost:5000/clothesShopp";


@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor(private http: HttpClient) { }
  
  getProdCart(): Observable<QuantityProd[]> {
    return this.http.get<QuantityProd[]>(url);
  }

  deleteProdCart(id: number): Observable<QuantityProd[]> {
    const urlProd = `${url}/${id}`;
    return this.http.delete<QuantityProd[]>(urlProd);
  }
  
  updateProd(product: QuantityProd, id: number): Observable<QuantityProd[]> {
    const urlUpdate = `${url}/${id}`;
    return this.http.put<QuantityProd[]>(urlUpdate, product);
  }

  addToList(prodQ): Observable<QuantityProd[]> {
    return this.http.post<QuantityProd[]>(url, prodQ);
  }
}
