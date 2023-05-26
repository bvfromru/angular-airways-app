import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InfoRowComponent } from './components/info-row/info-row.component';
import { LoaderComponent } from './components/loader/loader.component';
import { DurationTimePipe } from './pipes/duration-time.pipe';

@NgModule({
  declarations: [DurationTimePipe, LoaderComponent, InfoRowComponent],
  imports: [CommonModule],
  exports: [DurationTimePipe, LoaderComponent, InfoRowComponent],
})
export class SharedModule {}
