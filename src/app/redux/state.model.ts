export interface AppState {
  flights: FlightsState;
}

export interface FlightsState {
  airports: Array<Airport>;
  isLoading: boolean;
  errorMsg: string | null;
  flightsTo: FlightsData | null;
  flightsBack: FlightsData | null;
  passengers: Passengers | null;
}

export interface CurrentFlight {
  from: string;
  to: string;
  takeoffDate: string;
  backDate?: string;
  passengers: Passengers | null;
}

export interface Passengers {
  adults: number;
  children: number;
  infants: number;
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
  adultCount: number;
  childCount: number;
  infantCount: number;
}

export type SearchFlightsResponse = [FlightsDataRaw, FlightsDataRaw?];

export type SearchFlightsTransformedResponse = [FlightsData?, FlightsData?];

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
  price: Price;
}

interface Price {
  eur: number;
  usd: number;
  rub: number;
  pln: number;
}

interface Destination {
  key: string;
  name: string;
  city: string;
  gmt: string;
  country: string;
}
