import { CookieNames } from './../configs/cookie-names.config';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, ReplaySubject, startWith } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInSubject = new ReplaySubject<boolean>(1);
  private loggedInObservable: Observable<boolean>;

  constructor(private cookieService: CookieService) {
    this.loggedInObservable = this.loggedInSubject.asObservable().pipe(
      startWith(this.cookieService.check(CookieNames.session))
    )
  }

  public login(): void {
    const sessionCookie = prompt("Please enter your session cookie");
    if (sessionCookie) {
      this.cookieService.set(CookieNames.session, sessionCookie);
      this.loggedInSubject.next(true);
    }
  }

  public logout(): void {
    this.cookieService.delete(CookieNames.session);
    this.loggedInSubject.next(false);
  }

  public getLoggedInObservable(): Observable<boolean> {
    return this.loggedInObservable;
  }
}
