import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { register } from 'swiper/element/bundle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainModule } from './main/main.module';
import { DATE_INPUT_DEFAULT_FORMAT } from './shared/constants/constants';

register();

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    MainModule,
    MatDatepickerModule,
    MatMomentDateModule,
  ],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: DATE_INPUT_DEFAULT_FORMAT }],
  bootstrap: [AppComponent],
})
export class AppModule {}
