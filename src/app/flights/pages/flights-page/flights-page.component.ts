import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { selectFlightsTo } from 'src/app/redux/selectors/flights.selectors';
import { FlightsData, SearchFlightsParams } from 'src/app/redux/state.model';
import * as FlightsActions from '../../../redux/actions/flights.actions';

const addDaysToDate = (date: Date, days: number) => {
  return moment(date).add(days, 'days').toDate();
};

@Component({
  selector: 'app-flights-page',
  templateUrl: './flights-page.component.html',
  styleUrls: ['./flights-page.component.scss'],
})
export class FlightsComponent implements OnInit, OnDestroy {
  flightsTo$ = this.store.select(selectFlightsTo);

  flightsTo: FlightsData | null = null;

  subscriptions: Subscription;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      this.store.dispatch(
        FlightsActions.fetchFlightsStart({ searchFlightsParams: params as SearchFlightsParams }),
      );
    });

    this.subscriptions = this.flightsTo$.subscribe((flightsData) => {
      if (flightsData) {
        const tempData = { ...flightsData };
        const centerDate = new Date(flightsData.takeoffDate);
        delete tempData.otherFlights;

        this.flightsTo = [
          {
            date: addDaysToDate(centerDate, -5),
            flights: flightsData.otherFlights?.['-5'] ?? null,
          },
          {
            date: addDaysToDate(centerDate, -4),
            flights: flightsData.otherFlights?.['-4'] ?? null,
          },
          {
            date: addDaysToDate(centerDate, -3),
            flights: flightsData.otherFlights?.['-3'] ?? null,
          },
          {
            date: addDaysToDate(centerDate, -2),
            flights: flightsData.otherFlights?.['-2'] ?? null,
          },
          {
            date: addDaysToDate(centerDate, -1),
            flights: flightsData.otherFlights?.['-1'] ?? null,
          },
          { date: addDaysToDate(centerDate, 0), flights: tempData },
          {
            date: addDaysToDate(centerDate, 1),
            flights: flightsData.otherFlights?.['1'] ?? null,
          },
          {
            date: addDaysToDate(centerDate, 2),
            flights: flightsData.otherFlights?.['2'] ?? null,
          },
          {
            date: addDaysToDate(centerDate, 3),
            flights: flightsData.otherFlights?.['3'] ?? null,
          },
          {
            date: addDaysToDate(centerDate, 4),
            flights: flightsData.otherFlights?.['4'] ?? null,
          },
          {
            date: addDaysToDate(centerDate, 5),
            flights: flightsData.otherFlights?.['5'] ?? null,
          },
        ];
        console.log(this.flightsTo);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
