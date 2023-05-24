import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription, map, startWith } from 'rxjs';
import { DateInputFormats } from 'src/app/core/models/settings.model';
import { SettingsService } from 'src/app/core/services/settings.service';
import { selectAllAirports } from 'src/app/redux/selectors/flights.selectors';
import { Airport, SearchFlightsParams } from 'src/app/redux/state.model';
import * as FlightsActions from '../../../redux/actions/flights.actions';

@Component({
  selector: 'app-flights-selection',
  templateUrl: './flights-selection.component.html',
  styleUrls: ['./flights-selection.component.scss'],
})
export class FlightsSelectionComponent implements OnInit, OnDestroy {
  minDate = new Date();

  trigger: string;

  flightTypes = ['Round Trip', 'One Way'];

  flightSearchForm: FormGroup = new FormGroup({});

  airports$ = this.store.select(selectAllAirports);

  options: Array<Airport>;

  filteredOptions: Observable<Airport[]>;

  subscriptions: Subscription;

  passengersConfig = {
    adults: {
      key: 'adults',
      title: 'Adult',
      age: '14+ years',
    },
    children: {
      key: 'children',
      title: 'Child',
      age: '2-14 years',
    },
    infants: {
      key: 'infants',
      title: 'Infant',
      age: '0-2 years',
    },
  };

  public passengers = {
    adults: 1,
    children: 0,
    infants: 0,
    sum: 1,
  };

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DATE_FORMATS) public dateInputFormat: DateInputFormats,
    private settingsService: SettingsService,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.subscriptions = this.settingsService.currentDateFormat$.subscribe((dateFormat) => {
      this.trigger = dateFormat;
      this.dateInputFormat.display.dateInput = dateFormat;
    });

    this.subscriptions.add(this.airports$.subscribe((airports) => (this.options = airports)));

    this.flightSearchForm = this.formBuilder.group({
      type: [this.flightTypes[0], [Validators.required]],
      from: ['', [Validators.required]],
      to: ['', [Validators.required]],
      dateFrom: ['', [Validators.required]],
      dateTo: [''],
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

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  displayFn(airport: Airport): string {
    return airport && airport.city && airport.key ? `${airport.city} ${airport.key}` : '';
  }

  onSubmitForm(): void {
    const formData = this.flightSearchForm.value;
    const searchFlightsParams: SearchFlightsParams = {
      fromKey: formData.from.key,
      toKey: formData.to.key,
      forwardDate: formData.dateFrom.toISOString(),
    };
    if (formData.dateTo) {
      searchFlightsParams.backDate = formData.dateTo.toISOString();
    }
    this.store.dispatch(FlightsActions.fetchFlightsStart({ searchFlightsParams }));
  }

  onPassengersCountChange(newPassengers: any) {
    this.passengers = { ...newPassengers };
    // this.trigger = JSON.stringify(newPassengers);
  }

  get isRoundTrip() {
    return this.flightSearchForm.get('type')?.value === this.flightTypes[0];
  }

  public onReverseBtnClick(): void {
    const tempValue = this.flightSearchForm.get('from')?.value;
    this.flightSearchForm.get('from')?.setValue(this.flightSearchForm.get('to')?.value);
    this.flightSearchForm.get('to')?.setValue(tempValue);
  }

  private _filter(city: string): Airport[] {
    const filterValue = city.toLowerCase();
    return this.options.filter((option) => option.city.toLowerCase().includes(filterValue));
  }
}
