export interface AppState {
  flights: FlightsState;
}

export interface FlightsState {
  airports: Array<Airport>;
  isLoading: boolean;
  errorMsg: string;
  flightsTo: FlightsData | null;
  flightsBack: FlightsData | null;
}

export interface Airport {
  key: string;
  name: string;
  city: string;
  gmt: string;
  country: string;
}

export interface SearchFlightsParams {
  fromKey: string;
  toKey: string;
  forwardDate: string;
  backDate?: string;
}

export type SearchFlightsResponse = [FlightsData, FlightsData?];
export interface FlightsData extends FlightData {
  otherFlights: {
    '1'?: FlightData;
    '2'?: FlightData;
    '3'?: FlightData;
    '4'?: FlightData;
    '5'?: FlightData;
    '-5'?: FlightData;
    '-4'?: FlightData;
    '-3'?: FlightData;
    '-2'?: FlightData;
    '-1'?: FlightData;
  };
}

interface FlightData {
  seats: {
    total: number;
    avaible: number;
  };
  flightNumber: string;
  timeMins: number;
  form: Destination;
  to: Destination;
  takeoffDate: string;
  landingDate: string;
  price: {
    eur: number;
    usd: number;
    rub: number;
    pln: number;
  };
}

interface Destination {
  key: string;
  name: string;
  city: string;
  gmt: string;
  country: string;
}
