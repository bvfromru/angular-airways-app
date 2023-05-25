import { Component } from '@angular/core';
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

  constructor(public settingsService: SettingsService) {}

  onDateFormatsChanged(newDateFormat: DateFormats) {
    this.settingsService.setCurrentDateFormat(newDateFormat);
  }

  onCurrencyChanged(newCurrency: Currency) {
    this.settingsService.setCurrentCurrency(newCurrency);
  }
}
