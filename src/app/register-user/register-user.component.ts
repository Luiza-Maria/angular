import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../users/user-tpe';
import { UsersServiceService } from '../users/users-service.service';
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  
  states = [
    "Austria",
    "Belgia",
    "Cehia",
    "Danemarca",
    "Elveția",
    "Estonia",
    "Finlanda",
    "Franța",
    "Germania",
    "Grecia",
    "Islanda",
    "Italia",
    "Letonia"
  ];
  personalData: FormGroup;
  isLogin = false;
 
  constructor( private router: Router,private userServ: UsersServiceService) { }

  ngOnInit() {
    this.personalData = new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      adress: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    });
  }
 
  registerForm() {
     const newUser: User = {
      id: this.personalData.get("zip").value + this.personalData.get("state").value,
      firstname: this.personalData.get("firstname").value,
      lastname:this.personalData.get("lastname").value,
      email: this.personalData.get("email").value,
      password: this.personalData.get("password").value,
      adress: this.personalData.get("adress").value,
      city: this.personalData.get("city").value,
      state: this.personalData.get("state").value,
      zip: this.personalData.get("zip").value
     }
     this.userServ.registerUser(newUser).subscribe();
    // this.router.navigate(['./products']);

    this.isLogin = true;
    this.userServ.sendLog(this.isLogin);
     this.router.navigate(['./home']);
  }


  
}
