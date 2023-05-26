import { Component, Input } from '@angular/core';
import { CurrentFlight } from 'src/app/redux/state.model';

@Component({
  selector: 'app-info-row',
  templateUrl: './info-row.component.html',
  styleUrls: ['./info-row.component.scss'],
})
export class InfoRowComponent {
  @Input() currentFlight: CurrentFlight;
}
