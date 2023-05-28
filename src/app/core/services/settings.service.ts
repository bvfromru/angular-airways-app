import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Currency, DateFormats } from 'src/app/core/models/settings.model';
import { CURRENCIES } from 'src/app/shared/constants/constants';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private currentDateFormat$$ = new BehaviorSubject<DateFormats>(DateFormats.mdy);

  private currentCurrency$$ = new BehaviorSubject<Currency>(CURRENCIES.eur);

  public currentDateFormat$ = this.currentDateFormat$$.asObservable();

  public currentCurrency$ = this.currentCurrency$$.asObservable();

  setCurrentDateFormat(val: DateFormats) {
    this.currentDateFormat$$.next(val);
  }

  setCurrentCurrency(val: Currency) {
    this.currentCurrency$$.next(val);
  }
}
