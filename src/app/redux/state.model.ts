export interface AppState {
  flights: FlightsState;
}

export interface FlightsState {
  airports: Array<Airport>;
}

export interface Airport {
  key: string;
  name: string;
  city: string;
  gmt: string;
  country: string;
}
