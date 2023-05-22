import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './core/pages/page404/page404.component';
import { MainPageComponent } from './main/pages/main-page/main-page.component';

const routes: Routes = [
  {
    path: '404',
    component: Page404Component,
  },
  { path: '', component: MainPageComponent },
  {
    path: 'flights',
    loadChildren: () => import('./flights/flights.module').then((m) => m.FlightsModule),
  },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
