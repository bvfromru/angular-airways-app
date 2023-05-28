export enum DateFormats {
  mdy = 'MM/DD/YYYY',
  dmy = 'DD/MM/YYYY',
  ydm = 'YYYY-DD-MM',
  ymd = 'YYYY-MM-DD',
}
export interface Currency {
  name: string;
  sign: string;
}
export interface Currencies {
  eur: Currency;
  usd: Currency;
  rub: Currency;
  pln: Currency;
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
