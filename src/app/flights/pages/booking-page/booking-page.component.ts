import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss'],
})
export class BookingPageComponent {
  constructor(private location: Location) {}

  onBackClicked() {
    this.location.back();
  }
}
