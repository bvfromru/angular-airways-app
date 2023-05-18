import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { Page404Component } from './pages/page404/page404.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, Page404Component],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
