import { IOpenBoxDataResponse, IOpenBoxInput } from './../models/open-box-data.model';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { catchError, map, Observable, of } from 'rxjs';
import { IBoxData, IBoxesDataResponse } from '../models/box-data.model';

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

  public openBox(boxId: string | null): Observable<IOpenBoxDataResponse | null> {

    if (!boxId) {
      return of(null);
    }

    const input: IOpenBoxInput = {
      boxId,
      amount: 1
    };
    return this.apollo.mutate<IOpenBoxDataResponse>({
      mutation: gql`
      mutation OpenBox($input: OpenBoxInput!) {
        openBox(input: $input) {
          boxOpenings {
            id
            itemVariant {
              id
              name
              value
              iconUrl
            }
          }
        }
      }
      `,
      variables: {
        input
      }
    }).pipe(
      map(resp => resp.data || { openBox: null }),
      catchError(() => of({ openBox: null }))
    );
  }

  public getBox(boxId: string | null): Observable<IBoxData | null> {
    return boxId
      ? this.getBoxesObservable().pipe(map(boxes => boxes.find(box => box.id === boxId) || null), catchError(() => of(null)))
      : of(null);
  }
}
