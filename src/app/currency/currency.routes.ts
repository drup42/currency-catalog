import {Routes} from '@angular/router';
import {CurrenciesComponent} from './components/currencies/currencies.component';
import {CurrencyDetailsComponent} from './components/currency-details/currency-details.component';

export const currencyRoutes: Routes = [
  { path: '', redirectTo: '/currencies', pathMatch: 'full' },
  { path: 'currencies', component: CurrenciesComponent},
  { path: 'currency/:id', component: CurrencyDetailsComponent}
];
