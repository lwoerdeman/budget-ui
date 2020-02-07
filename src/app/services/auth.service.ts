import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { User } from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject = new BehaviorSubject<User>(null);
  user$ = this.userSubject.asObservable();

  constructor() { }

  set user(user: User) {
    this.userSubject.next(user);
  }

  get user(): User {
    return this.userSubject.value;
  }
}
