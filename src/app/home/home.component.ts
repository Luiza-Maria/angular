import { Component, HostListener, OnInit } from '@angular/core';
import { Product } from '../clothes';
import { ShoppingService } from '../shopping.service';
import {ActivatedRoute, Router} from '@angular/router';
import { DetailProdService } from '../products/detail-prod.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  popularItems = [];
  popularItems1 = [];
  popularItems2 = [];
  popularItems3 = [];
  firstFivePopular = [];
  ifMore: boolean = true;
  allFeaturedProd = [];
  featuredProd1 = [];
  nbOfClick: number = 0;
  activRoute;
  smView: boolean = false;
  screenWidth: number;
  screenHeight: number;

  constructor(private route:ActivatedRoute, private prodServ: ShoppingService,private detailProd: DetailProdService , private router: Router) {}

  ngOnInit() {
    this.prodServ.getPopular().subscribe(product => this.popularItems = product);
    this.prodServ.getPopular().subscribe(product => this.popularItems1 = product.slice(0, 4));
    this.prodServ.getPopular().subscribe(product => this.popularItems2 = product.slice(4, 8));
    this.prodServ.getPopular().subscribe(product => this.popularItems3 = product.slice(8, 12));

    this.prodServ.getPopular().subscribe(product => this.firstFivePopular = product.slice(0, 5));

    this.prodServ.getFeatured().subscribe(prod => this. allFeaturedProd = prod);
    this.prodServ.getFeatured().subscribe(prod => this.featuredProd1 = prod.slice(0, 4));
    
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    if (this.screenWidth < 600) {
      this.smView = true;
    } else this.smView = false;
  }

  // ngAfterViewInit(){
  //   $('#carouselExampleCaptions').carousel()
  // }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    if (this.screenWidth < 600) {
      this.smView = true;
    } else this.smView = false;
  }

  loadMore() {
    this.ifMore = false;
  }

  moreDetails(prod) {
    this.detailProd.sendProduct(prod);
    this.router.navigate(['/prod-details']);
  }

  prevProd(event) {
    this.nbOfClick = this.nbOfClick + 1;
    this.featuredProd1 = this.allFeaturedProd.slice(this.allFeaturedProd.length - (4 * this.nbOfClick), this.allFeaturedProd.length - (4 * (this.nbOfClick - 1)));
    if (this.allFeaturedProd.length - (4 * this.nbOfClick) == 0) {
      this.nbOfClick = 0;
    }  
  }

  nextProd(event: any) {
    this.nbOfClick = this.nbOfClick + 1;
    this.featuredProd1 = this.allFeaturedProd.slice(4 * this.nbOfClick, 4 * (this.nbOfClick + 1));
    if (4 * (this.nbOfClick + 1) == this.allFeaturedProd.length ) {
      this.nbOfClick = -1;
    }
  }
 
}
