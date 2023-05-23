import { Component } from '@angular/core';
import { Currencies, DateFormats } from 'src/app/core/models/settings.model';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  currentDateFormat = DateFormats.mdy;

  currentCurrency = Currencies.eur;

  dateFormats = Object.values(DateFormats);

  currencies = Object.values(Currencies);

  constructor(public settingsService: SettingsService) {}

  onDateFormatsChanged(newDateFormat: DateFormats) {
    this.settingsService.setCurrentDateFormat(newDateFormat);
  }

  onCurrencyChanged(newCurrency: Currencies) {
    this.settingsService.setCurrentCurrency(newCurrency);
  }
}
