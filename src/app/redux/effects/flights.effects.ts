import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as moment from 'moment';
import { catchError, map, of, switchMap } from 'rxjs';
import { API_ENDPOINTS } from 'src/app/shared/constants/constants';
import * as FlightsActions from '../actions/flights.actions';
import {
  ErrorMessageResponse,
  FlightsData,
  SearchFlightsResponse,
  SearchFlightsTransformedResponse,
} from '../state.model';

const handleError = (errorResp: ErrorMessageResponse | Error) => {
  const errorMessage = 'An unknown error occurred!';
  if (!errorResp.message) {
    return of(FlightsActions.fetchFlightsError({ errMessage: errorMessage }));
  }
  return of(FlightsActions.fetchFlightsError({ errMessage: errorResp.message }));
};

const addDaysToDate = (date: Date, days: number) => {
  return moment(date).add(days, 'days').toDate();
};

// I know this code is terrible, I intend to refactor this part when I'll create my own backend for Airways
const transformSearchFlightsResponse = (
  respArr: SearchFlightsResponse,
): SearchFlightsTransformedResponse => {
  const transformedResponseArr: SearchFlightsTransformedResponse = [];
  for (let i = 0; i < respArr.length; i++) {
    const resp = respArr[i];
    if (resp) {
      const tempData = { ...resp };
      const centerDate = new Date(resp.takeoffDate);
      delete tempData.otherFlights;

      const transformedResponse: FlightsData = [
        {
          date: addDaysToDate(centerDate, -5),
          flights: resp.otherFlights?.['-5'] ?? null,
        },
        {
          date: addDaysToDate(centerDate, -4),
          flights: resp.otherFlights?.['-4'] ?? null,
        },
        {
          date: addDaysToDate(centerDate, -3),
          flights: resp.otherFlights?.['-3'] ?? null,
        },
        {
          date: addDaysToDate(centerDate, -2),
          flights: resp.otherFlights?.['-2'] ?? null,
        },
        {
          date: addDaysToDate(centerDate, -1),
          flights: resp.otherFlights?.['-1'] ?? null,
        },
        { date: addDaysToDate(centerDate, 0), flights: tempData },
        {
          date: addDaysToDate(centerDate, 1),
          flights: resp.otherFlights?.['1'] ?? null,
        },
        {
          date: addDaysToDate(centerDate, 2),
          flights: resp.otherFlights?.['2'] ?? null,
        },
        {
          date: addDaysToDate(centerDate, 3),
          flights: resp.otherFlights?.['3'] ?? null,
        },
        {
          date: addDaysToDate(centerDate, 4),
          flights: resp.otherFlights?.['4'] ?? null,
        },
        {
          date: addDaysToDate(centerDate, 5),
          flights: resp.otherFlights?.['5'] ?? null,
        },
      ];
      transformedResponseArr.push(transformedResponse);
    }
  }
  return transformedResponseArr;
};

@Injectable()
export class FlightsEffects {
  fetchFlights$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(FlightsActions.fetchFlightsStart),
      switchMap((searchFlightsData) => {
        const { searchFlightsParams } = searchFlightsData;
        return this.http
          .post<SearchFlightsResponse>(
            API_ENDPOINTS.baseUrl + API_ENDPOINTS.flightsSearch,
            searchFlightsParams,
          )
          .pipe(
            map((response) =>
              FlightsActions.fetchFlightsSuccess({
                searchFlightsResp: transformSearchFlightsResponse(response),
              }),
            ),
            catchError((errResp) => handleError(errResp)),
          );
      }),
    );
  });

  constructor(private actions$: Actions, private http: HttpClient, private router: Router) {}
}
