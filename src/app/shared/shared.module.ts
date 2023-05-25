import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DurationTimePipe } from './pipes/duration-time.pipe';

@NgModule({
  declarations: [DurationTimePipe],
  imports: [CommonModule],
  exports: [DurationTimePipe],
})
export class SharedModule {}
