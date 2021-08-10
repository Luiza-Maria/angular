import { Component, OnInit } from '@angular/core';
import { User } from './user-tpe';
import { UsersServiceService } from './users-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[]=[];

  constructor(private userServ: UsersServiceService) { }

  ngOnInit() {
    this.userServ.getUser().subscribe(user => this.users = user);
  }
}
