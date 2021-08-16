import { Component, OnInit, Input, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ShoppingService } from '../shopping.service';
import { QuantityProd } from '../qantity';
import { Subscription, Subject } from 'rxjs';
import { CartServiceService } from '../cart-page/cart-service.service';
import { WishServiceService } from '../wishlist/wish-service.service';
import { Product } from '../clothes';
import { User } from '../users/user-tpe';
import { UsersServiceService } from '../users/users-service.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() nameInput;
  myList = [];
  @ViewChild("modal") modal: ElementRef;
  @ViewChild("password") password: ElementRef;
  @ViewChild("name") name: ElementRef;
  @ViewChild("email") email: ElementRef;
  showPassword: boolean = false;
  showContent: boolean = false;
  productsWishlist: QuantityProd[] = [];
  popularClothes: Product[] = [];
  machesClothes: Product[] = [];
  users: User[]=[] ;
  nameUser = '';
  isLogin: boolean = false;
  subs: Subscription;
  isLog;
  screenWidth: number;
  screenHeight: number;
  menuToggler: boolean = false;
  
  constructor(private router: Router,private userServ: UsersServiceService, private servProd: ShoppingService, private cartServ: CartServiceService , private wishServ: WishServiceService) { }


  ngOnInit() {   
    this.servProd.getPopular().subscribe(products => this.popularClothes = products);
    this.userServ.getUser().subscribe(user => this.users = user);  

    this.subs = this.userServ.getLog().subscribe(log => this.isLog = log);

    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    if (this.screenWidth > 480) {
      this.menuToggler = true;
    } else this.menuToggler = false;
  }

  ngDoCheck() {
    this.cartServ.getProdCart().subscribe(prod => this.myList = prod); 
    this.wishServ.getWish().subscribe(product => this.productsWishlist = product);
  }


  showMenu() {
    this.showContent = !this.showContent;
  }
  searchClothes(name: string) {
    this.servProd.sendSearchProd(name);
    this.router.navigate(['./products']);
  }

  showCartProd() {
    this.router.navigate(['./cart']);
  }

  goToWish() {
    this.router.navigate(['./wish']);
  }

  togglePass() {
    this.showPassword = !this.showPassword;
    if (this.showPassword) {
      this.password.nativeElement.setAttribute("type", "text");
    } else { this.password.nativeElement.setAttribute("type","password")}
  }

  registerUs() { 
    this.modal.nativeElement.click();
    this.router.navigate(['./register-user']);
    
  }

  loginUser(email, password) {
    for (var i = 0; i < this.users.length;i++) {
      if (this.users[i].email !== email || this.users[i].password !== password) {
        this.modal.nativeElement.click();
        this.router.navigate(['./register-user']);
      }
      else {
        this.modal.nativeElement.click();
        this.isLogin = true;
        if (this.isLogin) {
          this.router.navigate(['./home']);
        }     
      }
    }   
  }

  logOut() {
    this.isLogin = false;
    this.router.navigate(['./register-user']);
  }

  getNb() {
    var summ = 0;
    for (var i = 0; i < this.myList.length; i++) {
      summ += parseInt(this.myList[i].quantity);
    }
    return summ;
  }

  getTotal() {  
    return this.productsWishlist.length;
  }
    @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.screenWidth = window.innerWidth;
      this.screenHeight = window.innerHeight;
      if (this.screenWidth > 480) {
        this.menuToggler = true;
      } else this.menuToggler = false;
    }
}

