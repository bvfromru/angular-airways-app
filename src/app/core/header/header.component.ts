import { Component } from '@angular/core';
import { Currencies, DateFormats } from 'src/app/shared/constants/settings';

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
}
