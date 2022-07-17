import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IOpenBoxData } from '../../models/open-box-data.model';

@Component({
  selector: 'app-item-details-card',
  templateUrl: './item-details-card.component.html',
  styleUrls: ['./item-details-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemDetailsCardComponent implements OnInit {
  @Input() itemData!: IOpenBoxData;

  constructor() { }

  ngOnInit(): void {
  }

}
