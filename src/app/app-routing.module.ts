import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './core/pages/page404/page404.component';
import { MainPageComponent } from './main/pages/main-page/main-page.component';
import { APP_ROUTES } from './shared/constants/constants';

const routes: Routes = [
  {
    path: APP_ROUTES.notFound,
    component: Page404Component,
  },
  { path: APP_ROUTES.mainPage, component: MainPageComponent },
  {
    path: APP_ROUTES.flightsModule,
    loadChildren: () => import('./flights/flights.module').then((m) => m.FlightsModule),
  },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
