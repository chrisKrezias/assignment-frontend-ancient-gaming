import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, Observable, tap } from 'rxjs';
import { IUserData, IUserDataResponse } from '../models/user-data.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userDataObservable: Observable<IUserData>;

  constructor(private apollo: Apollo) {
    this.userDataObservable = this.apollo
      .watchQuery<IUserDataResponse>({
        query: gql`
      {
        currentUser {
          id
          name
          wallets {
            id
            amount
            currency
          }
        }
      }
      `
      }).valueChanges.pipe(
        map(resp => resp.data.currentUser)
      );
  }

  public getUserDataObservable(): Observable<IUserData> {
    return this.userDataObservable;
  }
}
