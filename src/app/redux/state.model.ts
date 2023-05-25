export interface AppState {
  flights: FlightsState;
}

export interface FlightsState {
  airports: Array<Airport>;
  isLoading: boolean;
  errorMsg: string | null;
  flightsTo: FlightsDataRaw | null;
  flightsBack: FlightsDataRaw | null;
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
  passengersNumber?: number;
}

export type SearchFlightsResponse = [FlightsDataRaw, FlightsDataRaw?];

export type FlightsData = [
  SwiperItem,
  SwiperItem,
  SwiperItem,
  SwiperItem,
  SwiperItem,
  { date: Date; flights: FlightData },
  SwiperItem,
  SwiperItem,
  SwiperItem,
  SwiperItem,
  SwiperItem,
];

export interface SwiperItem {
  date: Date;
  flights: FlightData | null;
}
export interface FlightsDataRaw extends FlightData {
  otherFlights?: {
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

export interface ErrorMessageResponse {
  statusCode: number;
  message: string;
}

export interface FlightData {
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
