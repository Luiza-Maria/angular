import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { User } from './user-tpe';

const urlUsers :string = "http://localhost:9000/users";

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  private log = new Subject();

   expiresDate: number = 5;

  sendLog(logMessage) {
    return this.log.next(logMessage);

  }

  getLog() {
    return this.log.asObservable();
  }

  constructor(private http: HttpClient) { }
   
  registerUser(User: User): Observable<User>{
    return this.http.post<User>(urlUsers, User);

  }

  getUser(): Observable<User[]>{
    return this.http.get<User[]>(urlUsers);
  }

  // autoLogin() {

  // }

  autoLogout() {

  }


}
