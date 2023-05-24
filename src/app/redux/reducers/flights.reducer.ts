import { createReducer, on } from '@ngrx/store';
import * as FlightsActions from '../actions/flights.actions';
import { airportsList } from '../mocks/airports-list';
import { FlightsState } from '../state.model';

const initialState: FlightsState = {
  airports: airportsList,
  isLoading: false,
  errorMsg: '',
  flightsTo: null,
  flightsBack: null,
};

export const flightsReducer = createReducer(
  initialState,
  on(FlightsActions.fetchFlightsStart, (state): FlightsState => {
    return { ...state, isLoading: true, errorMsg: '' };
  }),
  on(FlightsActions.fetchFlightsSuccess, (state, action): FlightsState => {
    console.log(state, action);
    return {
      ...state,
      isLoading: false,
      errorMsg: '',
      flightsTo: action.searchFlightsResp[0],
      flightsBack: action.searchFlightsResp[1] ?? null,
    };
  }),
  on(FlightsActions.fetchFlightsStart, (state, action): FlightsState => {
    return { ...state, isLoading: false, errorMsg: 'error', flightsTo: null, flightsBack: null };
  }),
);
