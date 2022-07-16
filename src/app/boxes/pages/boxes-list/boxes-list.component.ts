import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBoxData } from '../../models/boxes-data.model';
import { BoxesService } from '../../services/boxes.service';

@Component({
  templateUrl: './boxes-list.component.html',
  styleUrls: ['./boxes-list.component.scss']
})
export class BoxesListComponent implements OnInit {
  public boxesList$: Observable<IBoxData[]>;

  constructor(private boxes: BoxesService) {
    this.boxesList$ = this.boxes.getBoxesObservable();
  }

  ngOnInit(): void {
  }

}
