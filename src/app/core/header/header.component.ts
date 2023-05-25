import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Currency, DateFormats } from 'src/app/core/models/settings.model';
import { APP_ROUTES, CURRENCIES } from 'src/app/shared/constants/constants';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  currentDateFormat = DateFormats.mdy;

  dateFormats = Object.values(DateFormats);

  currencies = Object.values(CURRENCIES);

  isMainPage: boolean;

  step: number;

  constructor(public settingsService: SettingsService, private router: Router) {
    router.events.subscribe((v) => {
      if (v instanceof NavigationEnd) {
        this.isMainPage = v.url === '/';
        if (v.url.includes(APP_ROUTES.booking)) {
          this.step = 1;
        }
      }
    });
  }

  onDateFormatsChanged(newDateFormat: DateFormats) {
    this.settingsService.setCurrentDateFormat(newDateFormat);
  }

  onCurrencyChanged(newCurrency: Currency) {
    this.settingsService.setCurrentCurrency(newCurrency);
  }
}
