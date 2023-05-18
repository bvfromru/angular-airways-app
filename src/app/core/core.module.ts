import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { Page404Component } from './pages/page404/page404.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, Page404Component],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
