import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { Airport, airportsList } from '../../pages/main-page/airports-list';

@Component({
  selector: 'app-flights-selection',
  templateUrl: './flights-selection.component.html',
  styleUrls: ['./flights-selection.component.scss'],
})
export class FlightsSelectionComponent implements OnInit {
  flightTypes = ['Round Trip', 'One Way'];

  flightSearchForm: FormGroup = new FormGroup({});

  options = airportsList;

  filteredOptions: Observable<Airport[]>;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.flightSearchForm = this.formBuilder.group({
      type: [this.flightTypes[0], [Validators.required]],
      from: ['', [Validators.required]],
      to: ['', [Validators.required]],
    });
    const formControlFrom = this.flightSearchForm.get('from');
    this.filteredOptions = formControlFrom!.valueChanges.pipe(
      startWith(''),
      map((value) => {
        const city = typeof value === 'string' ? value : value?.city;
        return city ? this._filter(city as string) : this.options.slice();
      }),
    );
    const formControlTo = this.flightSearchForm.get('to');
    this.filteredOptions = formControlTo!.valueChanges.pipe(
      startWith(''),
      map((value) => {
        const city = typeof value === 'string' ? value : value?.city;
        return city ? this._filter(city as string) : this.options.slice();
      }),
    );
  }

  displayFn(airport: Airport): string {
    return airport && airport.city && airport.key ? `${airport.city} ${airport.key}` : '';
  }

  onSubmitForm(): void {
    console.log(this.flightSearchForm.value);
  }

  private _filter(city: string): Airport[] {
    const filterValue = city.toLowerCase();
    return this.options.filter((option) => option.city.toLowerCase().includes(filterValue));
  }
}
