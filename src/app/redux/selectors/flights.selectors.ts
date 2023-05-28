import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FlightsState } from '../state.model';

export const selectFlights = createFeatureSelector<FlightsState>('flights');

export const selectAllAirports = createSelector(selectFlights, (flights) => flights.airports);

export const selectFlightsTo = createSelector(selectFlights, (flights) => flights.flightsTo);

export const selectFlightsBack = createSelector(selectFlights, (flights) => flights.flightsBack);

export const selectCurrentFlight = createSelector(selectFlights, (flights) => {
  if (flights.flightsTo && flights.flightsTo[5].flights) {
    const currentFlight = flights.flightsTo[5].flights;
    const backFlight = flights.flightsBack ? flights.flightsBack[5].flights : undefined;
    return {
      from: currentFlight.form.city,
      to: currentFlight.to.city,
      takeoffDate: currentFlight.takeoffDate,
      backDate: backFlight?.landingDate,
      passengers: flights.passengers,
    };
  }
  return null;
});

export const selectIsLoading = createSelector(selectFlights, (flights) => flights.isLoading);

export const selectErrMsg = createSelector(selectFlights, (flights) => flights.errorMsg);
