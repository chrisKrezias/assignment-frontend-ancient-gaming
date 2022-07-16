import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserData } from '../../models/user-data.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  public userData$: Observable<IUserData>;

  constructor(private user: UserService) {
    this.userData$ = this.user.getUserDataObservable();
  }

  ngOnInit(): void { }

}
