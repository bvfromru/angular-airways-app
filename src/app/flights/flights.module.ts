import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { FlightSelectionComponent } from './components/flight-selection/flight-selection.component';
import { FlightsRoutingModule } from './flights-routing.module';
import { FlightsComponent } from './flights.component';
import { BookingPageComponent } from './pages/booking-page/booking-page.component';
import { FlightsPageComponent } from './pages/flights-page/flights-page.component';

@NgModule({
  declarations: [FlightsComponent, BookingPageComponent, FlightsPageComponent],
  imports: [CommonModule, FlightsRoutingModule, FlightSelectionComponent, SharedModule],
})
export class FlightsModule {}
