import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WalletService } from '../../services/wallet.service';

@Component({
  selector: 'app-wallet-info',
  templateUrl: './wallet-info.component.html',
  styleUrls: ['./wallet-info.component.scss']
})
export class WalletInfoComponent implements OnInit {
  public wallet$: Observable<any>;

  constructor(private wallet: WalletService) {
    this.wallet$ = this.wallet.getWalletObservable();
  }

  ngOnInit(): void {
  }

}
