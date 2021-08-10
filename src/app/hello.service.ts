import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  position: string[] = [];

  constructor() { }

  addPosition(pos) {
    this.position.push(pos);
  }
}
