import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FlightsState } from '../state.model';

export const selectFlights = createFeatureSelector<FlightsState>('flights');

export const selectAllAirports = createSelector(selectFlights, (flights) => flights.airports);

export const selectFlightsTo = createSelector(selectFlights, (flights) => flights.flightsTo);

export const selectFlightsBack = createSelector(selectFlights, (flights) => flights.flightsBack);

export const selectIsLoading = createSelector(selectFlights, (flights) => flights.isLoading);

export const selectErrMsg = createSelector(selectFlights, (flights) => flights.errorMsg);
