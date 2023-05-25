import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import {
  selectErrMsg,
  selectFlightsBack,
  selectFlightsTo,
  selectIsLoading,
} from 'src/app/redux/selectors/flights.selectors';
import { SearchFlightsParams } from 'src/app/redux/state.model';
import * as FlightsActions from '../../../redux/actions/flights.actions';

@Component({
  selector: 'app-flights-page',
  templateUrl: './flights-page.component.html',
  styleUrls: ['./flights-page.component.scss'],
})
export class FlightsComponent implements OnInit, OnDestroy {
  flightsTo$ = this.store.select(selectFlightsTo);

  flightsBack$ = this.store.select(selectFlightsBack);

  isLoading$ = this.store.select(selectIsLoading);

  errMsg$ = this.store.select(selectErrMsg);

  subscription: Subscription;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscription = this.route.queryParams.subscribe((params) => {
      this.store.dispatch(
        FlightsActions.fetchFlightsStart({ searchFlightsParams: params as SearchFlightsParams }),
      );
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
