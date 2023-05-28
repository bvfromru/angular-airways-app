import { DateInputFormats } from 'src/app/core/models/settings.model';

export const FLIGHT_TYPES = ['Round Trip', 'One Way'];

export const PASSENGERS_CONFIG = {
  adults: {
    key: 'adults',
    title: 'Adult',
    age: '14+ years',
  },
  children: {
    key: 'children',
    title: 'Child',
    age: '2-14 years',
  },
  infants: {
    key: 'infants',
    title: 'Infant',
    age: '0-2 years',
  },
};

export const DATE_INPUT_DEFAULT_FORMAT: DateInputFormats = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD.MM.YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

export const CURRENCIES = {
  eur: { name: 'eur', sign: '€' },
  usd: { name: 'usd', sign: '$' },
  rub: { name: 'rub', sign: '₽' },
  pln: { name: 'pln', sign: 'zł' },
};

export const SEATS_COLOR_RANGE = {
  low: 100,
  high: 200,
};

export const APP_ROUTES = {
  mainPage: '',
  flightsModule: 'flights',
  step1: 'step1',
  step2: 'step2',
  step3: 'step3',
  notFound: '404',
};

export const API_ENDPOINTS = {
  baseUrl: 'https://api.air-ways.online/',
  flightsSearch: 'search/flight',
};
