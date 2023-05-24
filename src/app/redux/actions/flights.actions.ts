import { createAction, props } from '@ngrx/store';
import { SearchFlightsParams, SearchFlightsResponse } from '../state.model';

export const getAllAirports = createAction('[FLIGHTS] Get All Airports');

export const fetchFlightsStart = createAction(
  '[FLIGHTS] Fetch Flights Start',
  props<{ searchFlightsParams: SearchFlightsParams }>(),
);

export const fetchFlightsSuccess = createAction(
  '[FLIGHTS] Fetch Flights Success',
  props<{ searchFlightsResp: SearchFlightsResponse }>(),
);

export const fetchFlightsError = createAction(
  '[FLIGHTS] Fetch Flights Error',
  props<{ errMessage: string }>(),
);
