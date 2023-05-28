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
  passengers: null,
};

export const flightsReducer = createReducer(
  initialState,
  on(FlightsActions.fetchFlightsStart, (state, action): FlightsState => {
    return {
      ...state,
      isLoading: true,
      errorMsg: null,
      passengers: {
        adults: action.searchFlightsParams.adultCount,
        children: action.searchFlightsParams.childCount,
        infants: action.searchFlightsParams.infantCount,
      },
    };
  }),
  on(FlightsActions.fetchFlightsSuccess, (state, action): FlightsState => {
    return {
      ...state,
      isLoading: false,
      errorMsg: null,
      flightsTo: action.searchFlightsResp[0] ?? null,
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
      passengers: null,
    };
  }),
);
