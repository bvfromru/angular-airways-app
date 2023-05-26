import { Component, Input, OnInit } from '@angular/core';
import { CurrentFlight } from 'src/app/redux/state.model';

@Component({
  selector: 'app-info-row',
  templateUrl: './info-row.component.html',
  styleUrls: ['./info-row.component.scss'],
})
export class InfoRowComponent implements OnInit {
  @Input() currentFlight: CurrentFlight;

  totalCount = 0;

  ngOnInit(): void {
    if (this.currentFlight && this.currentFlight.passengers) {
      this.totalCount =
        +this.currentFlight.passengers.adults +
        +this.currentFlight.passengers.children +
        +this.currentFlight.passengers.infants;
    }
  }
}
