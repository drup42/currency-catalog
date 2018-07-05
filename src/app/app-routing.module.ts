import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {currencyRoutes} from './currency/currency.routes';

const routes: Routes = [
  { path: '', redirectTo: '/currencies', pathMatch: 'full' },
  ...currencyRoutes
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
