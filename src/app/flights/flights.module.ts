import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from '../shared/shared.module';
import { FlightSelectionComponent } from './components/flight-selection/flight-selection.component';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';
import { FlightsRoutingModule } from './flights-routing.module';
import { FlightsComponent } from './flights.component';
import { BookingPageComponent } from './pages/booking-page/booking-page.component';
import { FlightsPageComponent } from './pages/flights-page/flights-page.component';

@NgModule({
  declarations: [
    FlightsComponent,
    BookingPageComponent,
    FlightsPageComponent,
    PassengerFormComponent,
  ],
  imports: [
    CommonModule,
    FlightsRoutingModule,
    FlightSelectionComponent,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
  ],
})
export class FlightsModule {}
