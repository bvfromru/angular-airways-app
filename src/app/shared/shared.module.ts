import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoaderComponent } from './components/loader/loader.component';
import { DurationTimePipe } from './pipes/duration-time.pipe';

@NgModule({
  declarations: [DurationTimePipe, LoaderComponent],
  imports: [CommonModule],
  exports: [DurationTimePipe, LoaderComponent],
})
export class SharedModule {}
