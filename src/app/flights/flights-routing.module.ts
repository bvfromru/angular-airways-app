import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from '../shared/constants/constants';
import { FlightsComponent } from './flights.component';
import { BookingPageComponent } from './pages/booking-page/booking-page.component';
import { FlightsPageComponent } from './pages/flights-page/flights-page.component';

const routes: Routes = [
  {
    path: '',
    component: FlightsComponent,
    children: [
      { path: APP_ROUTES.step1, component: FlightsPageComponent },
      { path: APP_ROUTES.step2, component: BookingPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlightsRoutingModule {}
