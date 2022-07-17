import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, of, switchMap } from 'rxjs';
import { IBoxData } from '../../models/box-data.model';
import { IOpenBoxDataResponse } from '../../models/open-box-data.model';
import { BoxesService } from '../../services/boxes.service';

@Component({
  templateUrl: './box-details.component.html',
  styleUrls: ['./box-details.component.scss']
})
export class BoxDetailsComponent implements OnInit {
  public boxData$: Observable<IBoxData | null>;
  public wonItemData$: Observable<IOpenBoxDataResponse | null>;
  public showWonItem = false;

  constructor(private boxes: BoxesService, private route: ActivatedRoute) {
    const boxId$ = this.route.paramMap.pipe(map(paramMap => paramMap.get("id")));

    this.boxData$ = boxId$.pipe(
      switchMap(boxId => this.boxes.getBox(boxId))
    )

    this.wonItemData$ = boxId$.pipe(
      switchMap(boxId => this.boxes.openBox(boxId))
    )
  }

  ngOnInit(): void {
  }
}
