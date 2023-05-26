import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-passengers-count',
  templateUrl: './passengers-count.component.html',
  styleUrls: ['./passengers-count.component.scss'],
})
export class PassengersCountComponent {
  @Input() public config!: any;

  @Output() public passengersEvent = new EventEmitter<any>();

  @Input() public passengers!: any;

  public changePassengers(passenger: 'Adult' | 'Child' | 'Infant', action: 'add' | 'remove') {
    if (action === 'add') {
      switch (passenger) {
        case 'Adult':
          this.passengers.adults += 1;
          break;
        case 'Child':
          this.passengers.children += 1;
          break;
        default:
          this.passengers.infants += 1;
      }
    } else if (action === 'remove') {
      switch (passenger) {
        case 'Adult':
          if (this.passengers.adults > 1) {
            this.passengers.adults -= 1;
          }
          break;
        case 'Child':
          if (this.passengers.children > 0) {
            this.passengers.children -= 1;
          }
          break;
        default:
          if (this.passengers.infants > 0) {
            this.passengers.infants -= 1;
          }
      }
    }
    this.passengers.sum =
      this.passengers.adults + this.passengers.children + this.passengers.infants;
    this.passengersEvent.emit(this.passengers);
  }
}
