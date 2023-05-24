import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, catchError, map, switchMap, tap } from 'rxjs';
import * as FlightsActions from '../actions/flights.actions';
import { SearchFlightsResponse } from '../state.model';

@Injectable()
export class FlightsEffects {
  fetchCards$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(FlightsActions.fetchFlightsStart),
      switchMap((searchFlightsData: any) => {
        const { searchFlightsParams } = searchFlightsData;
        return this.http
          .post<SearchFlightsResponse>(
            'https://api.air-ways.online/search/flight',
            searchFlightsParams,
          )
          .pipe(
            map((response) => FlightsActions.fetchFlightsSuccess({ searchFlightsResp: response })),
            catchError(() => EMPTY),
          );
      }),
    );
  });

  authRedirect = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(FlightsActions.fetchFlightsSuccess),
        tap(() => this.router.navigateByUrl('/flights')),
      );
    },
    { dispatch: false },
  );

  constructor(private actions$: Actions, private http: HttpClient, private router: Router) {}
}
