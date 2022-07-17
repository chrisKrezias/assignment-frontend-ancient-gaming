import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IBoxData } from '../../models/box-data.model';

@Component({
  selector: 'app-box-details-card',
  templateUrl: './box-details-card.component.html',
  styleUrls: ['./box-details-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoxDetailsCardComponent implements OnInit {
  @Input() boxData!: IBoxData;

  constructor() { }

  ngOnInit(): void {
  }

}
