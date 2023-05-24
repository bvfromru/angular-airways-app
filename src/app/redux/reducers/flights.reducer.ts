import { createReducer, on } from '@ngrx/store';
import * as FlightsActions from '../actions/flights.actions';
import { airportsList } from '../mocks/airports-list';
import { FlightsState } from '../state.model';

const initialState: FlightsState = {
  airports: airportsList,
};

export const flightsReducer = createReducer(
  initialState,
  on(FlightsActions.getAllAirports, (state: FlightsState): FlightsState => {
    return { ...state };
  }),
);
