export enum DateFormats {
  mdy = 'MM/DD/YYYY',
  dmy = 'DD/MM/YYYY',
  ydm = 'YYYY-DD-MM',
  ymd = 'YYYY-MM-DD',
}

export enum Currencies {
  eur = 'EUR',
  usd = 'USD',
  rub = 'RUB',
  pln = 'PLN',
}

export interface DateInputFormats {
  parse: {
    dateInput: string;
  };
  display: {
    dateInput: string;
    monthYearLabel: string;
    dateA11yLabel: string;
    monthYearA11yLabel: string;
  };
}
