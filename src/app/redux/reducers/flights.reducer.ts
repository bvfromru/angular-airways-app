import { createReducer, on } from '@ngrx/store';
import * as FlightsActions from '../actions/flights.actions';
import { airportsList } from '../mocks/airports-list';
import { FlightsState } from '../state.model';

const initialState: FlightsState = {
  airports: airportsList,
  isLoading: false,
  errorMsg: null,
  flightsTo: null,
  flightsBack: null,
};

export const flightsReducer = createReducer(
  initialState,
  on(FlightsActions.fetchFlightsStart, (state): FlightsState => {
    return { ...state, isLoading: true, errorMsg: null };
  }),
  on(FlightsActions.fetchFlightsSuccess, (state, action): FlightsState => {
    return {
      ...state,
      isLoading: false,
      errorMsg: null,
      flightsTo: action.searchFlightsResp[0],
      flightsBack: action.searchFlightsResp[1] ?? null,
    };
  }),
  on(FlightsActions.fetchFlightsError, (state, action): FlightsState => {
    return {
      ...state,
      isLoading: false,
      errorMsg: action.errMessage,
      flightsTo: null,
      flightsBack: null,
    };
  }),
);
