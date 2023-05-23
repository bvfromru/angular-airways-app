import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Currencies, DateFormats } from 'src/app/core/models/settings.model';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private currentDateFormat$$ = new BehaviorSubject<DateFormats>(DateFormats.mdy);

  private currentCurrency$$ = new BehaviorSubject<Currencies>(Currencies.eur);

  public currentDateFormat$ = this.currentDateFormat$$.asObservable();

  public currentCurrency$ = this.currentCurrency$$.asObservable();

  setCurrentDateFormat(val: DateFormats) {
    this.currentDateFormat$$.next(val);
  }

  setCurrentCurrency(val: Currencies) {
    this.currentCurrency$$.next(val);
  }
}
