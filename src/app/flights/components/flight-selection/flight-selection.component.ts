import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Currency } from 'src/app/core/models/settings.model';
import { SettingsService } from 'src/app/core/services/settings.service';
import { FlightData, FlightsData, SwiperItem } from 'src/app/redux/state.model';
import { SharedModule } from 'src/app/shared/shared.module';
import { A11y, Navigation, SwiperOptions } from 'swiper';
import { ColormarkDirective } from '../../directives/colormark.directive';
import { SwiperDirective } from '../../directives/swiper.directive';
import { Direction } from '../../models/flight.models';

@Component({
  selector: 'app-flight-selection',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [SwiperDirective, CommonModule, SharedModule, ColormarkDirective],
  templateUrl: './flight-selection.component.html',
  styleUrls: ['./flight-selection.component.scss'],
})
export class FlightSelectionComponent implements OnInit {
  @Input() direction: Direction = 'forward';

  @Input() flights: FlightsData;

  currentFlight: FlightData;

  currentCurrency: Currency;

  subscriptions: Subscription;

  public config: SwiperOptions = {
    modules: [Navigation, A11y],
    autoHeight: false,
    spaceBetween: 0,
    centeredSlides: true,
    // centeredSlidesBounds: true,
    initialSlide: 5,
    slidesPerView: 3,
    slideToClickedSlide: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      600: {
        slidesPerView: 5,
      },
    },
  };

  constructor(public settingsService: SettingsService) {}

  ngOnInit(): void {
    this.currentFlight = this.flights[5].flights;

    this.subscriptions = this.settingsService.currentCurrency$.subscribe(
      (currentCurrencyObj) => (this.currentCurrency = currentCurrencyObj),
    );
  }

  onFlightClick(flight: SwiperItem) {
    if (flight.flights) {
      this.currentFlight = flight.flights;
    }
  }

  from = 'Dublin';

  to = 'Warsaw Modlin';
}
