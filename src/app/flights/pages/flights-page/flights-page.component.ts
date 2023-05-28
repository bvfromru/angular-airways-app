import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import {
  selectErrMsg,
  selectFlightsBack,
  selectFlightsTo,
  selectIsLoading,
} from 'src/app/redux/selectors/flights.selectors';
import { SearchFlightsParams } from 'src/app/redux/state.model';
import { APP_ROUTES } from 'src/app/shared/constants/constants';
import * as FlightsActions from '../../../redux/actions/flights.actions';

@Component({
  selector: 'app-flights-page',
  templateUrl: './flights-page.component.html',
  styleUrls: ['./flights-page.component.scss'],
})
export class FlightsPageComponent implements OnInit, OnDestroy {
  flightsTo$ = this.store.select(selectFlightsTo);

  flightsBack$ = this.store.select(selectFlightsBack);

  isLoading$ = this.store.select(selectIsLoading);

  errMsg$ = this.store.select(selectErrMsg);

  subscription: Subscription;

  constructor(private store: Store, private route: ActivatedRoute, private router: Router) {}

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

  onSubmit() {
    this.router.navigate([APP_ROUTES.flightsModule, APP_ROUTES.step2]);
  }
}
