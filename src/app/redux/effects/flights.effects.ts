import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import * as FlightsActions from '../actions/flights.actions';
import { ErrorMessageResponse, SearchFlightsResponse } from '../state.model';

const handleError = (errorResp: ErrorMessageResponse | Error) => {
  const errorMessage = 'An unknown error occurred!';
  if (!errorResp.message) {
    return of(FlightsActions.fetchFlightsError({ errMessage: errorMessage }));
  }
  return of(FlightsActions.fetchFlightsError({ errMessage: errorResp.message }));
};

@Injectable()
export class FlightsEffects {
  fetchCards$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(FlightsActions.fetchFlightsStart),
      switchMap((searchFlightsData) => {
        const { searchFlightsParams } = searchFlightsData;
        return this.http
          .post<SearchFlightsResponse>(
            'https://api.air-ways.online/search/flight',
            searchFlightsParams,
          )
          .pipe(
            map((response) => FlightsActions.fetchFlightsSuccess({ searchFlightsResp: response })),
            catchError((errResp) => handleError(errResp)),
          );
      }),
    );
  });

  constructor(private actions$: Actions, private http: HttpClient, private router: Router) {}
}
