import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-page',
  templateUrl: './footer-page.component.html',
  styleUrls: ['./footer-page.component.scss']
})
export class FooterPageComponent implements OnInit {
  year: number;
 now: Date;
 

  constructor() { }

  ngOnInit() {
    this.now = new Date();
    this.year = this.now.getFullYear();
  }

}
