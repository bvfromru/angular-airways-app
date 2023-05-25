import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Currency, DateFormats } from 'src/app/core/models/settings.model';
import { CURRENCIES } from 'src/app/shared/constants/constants';
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

  currentRoute: string;

  constructor(public settingsService: SettingsService, private router: Router) {
    router.events.subscribe((v) => {
      if (v instanceof NavigationEnd) {
        this.currentRoute = v.url;
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
