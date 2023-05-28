import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-passenger-form',
  templateUrl: './passenger-form.component.html',
  styleUrls: ['./passenger-form.component.scss'],
})
export class PassengerFormComponent {
  @Input() passengerType: string;

  tooltipMessage =
    "Add the passenger's name as it is written on their documents (passport or ID). Do not use any accents or special characters. Do not use a nickname. ";
}
