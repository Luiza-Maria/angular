import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';



@Component({
  selector: 'app-tienda-online',
  templateUrl: './tienda-online.component.html',
  styleUrls: ['./tienda-online.component.scss']
})
export class TiendaOnlineComponent implements OnInit {
  // @ViewChild("circle", { static: false }) number: ElementRef;
  nb;
  wasSelected: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  getNumber(elem) {
    this.nb = elem;
    this.nb = +this.nb;
    console.log(typeof this.nb);

    if (this.nb === 3) {
      alert('Corect!!!');
    } else alert('Mai incearca odata!!!');
  }
  
  selectNb() {
    this.wasSelected = true;
  }

}
