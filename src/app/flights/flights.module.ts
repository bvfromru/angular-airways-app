import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { FlightSelectionComponent } from './components/flight-selection/flight-selection.component';
import { FlightsRoutingModule } from './flights-routing.module';
import { FlightsComponent } from './pages/flights-page/flights-page.component';

@NgModule({
  declarations: [FlightsComponent],
  imports: [CommonModule, FlightsRoutingModule, FlightSelectionComponent, SharedModule],
})
export class FlightsModule {}
