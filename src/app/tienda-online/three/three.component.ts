import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss']
})
export class ThreeComponent implements OnInit {
  // @ViewChild("circle", { static: false }) number: ElementRef;
  nb;
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

}
