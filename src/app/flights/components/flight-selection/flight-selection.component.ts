import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { A11y, Navigation, SwiperOptions } from 'swiper';
import { SwiperDirective } from '../../directives/swiper.directive';
import { flightData } from '../../pages/flights-page/mockFlights';

@Component({
  selector: 'app-flight-selection',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [SwiperDirective, CommonModule],
  templateUrl: './flight-selection.component.html',
  styleUrls: ['./flight-selection.component.scss'],
})
export class FlightSelectionComponent {
  flights = flightData;

  public config: SwiperOptions = {
    modules: [Navigation, A11y],
    autoHeight: false,
    spaceBetween: 0,
    centeredSlides: true,
    // centeredSlidesBounds: true,
    initialSlide: 2,
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

  from = 'Dublin';

  to = 'Warsaw Modlin';

  sliderItems = flightData;
}
