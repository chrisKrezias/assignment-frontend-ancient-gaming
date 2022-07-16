import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInObservable: Observable<boolean>;

  constructor(private user: UserService) {
    this.loggedInObservable = this.user.getUserDataObservable().pipe(map(user => !!user))
  }

  public getLoggedInObservable(): Observable<boolean> {
    return this.loggedInObservable;
  }
}
