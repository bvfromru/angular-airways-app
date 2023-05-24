import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FlightsState } from '../state.model';

export const selectFlights = createFeatureSelector<FlightsState>('flights');

export const selectAllAirports = createSelector(selectFlights, (flights) => flights.airports);
