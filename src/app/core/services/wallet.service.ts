import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class WalletService {
  private walletObservable: Observable<any>;

  constructor(private apollo: Apollo) {
    this.walletObservable = this.apollo.subscribe({
      query: gql`
      subscription OnUpdateWallet {
        updateWallet {
          wallet {
            id
            amount
            name
          }
        }
      }
    `
    })
  }

  public getWalletObservable(): Observable<any> {
    return this.walletObservable;
  }
}
