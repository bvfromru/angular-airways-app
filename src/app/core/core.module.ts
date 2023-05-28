import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { StepperComponent } from './header/stepper/stepper.component';
import { Page404Component } from './pages/page404/page404.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, Page404Component, StepperComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    HttpClientModule,
    SharedModule,
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
