import { DateInputFormats } from 'src/app/core/models/settings.model';

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
  booking: 'flights',
  notFound: '404',
};

export const API_ENDPOINTS = {
  baseUrl: 'https://api.air-ways.online/',
  flightsSearch: 'search/flight',
};
