import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import { IBoxData, IBoxesDataResponse } from '../models/boxes-data.model';

@Injectable()
export class BoxesService {
  private boxesObservable: Observable<IBoxData[]>;

  constructor(private apollo: Apollo) {
    this.boxesObservable = this.apollo
      .watchQuery<IBoxesDataResponse>({
        query: gql`
      {
        boxes(free:false,purchasable:true,openable:true){
          edges{
            node{
              id
              name
              iconUrl
              cost
            }
          }
        }
      }
      `
      }).valueChanges.pipe(
        map(resp => resp.data.boxes.edges.map(edge => edge.node))
      );
  }

  public getBoxesObservable(): Observable<IBoxData[]> {
    return this.boxesObservable;
  }
}
