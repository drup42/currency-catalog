import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CurrenciesComponent} from './components/currencies/currencies.component';
import {CurrenciesService} from './services/currencies.service';
import {CurrencyDetailsComponent} from './components/currency-details/currency-details.component';
import {AppRoutingModule} from '../app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {PaginationModule} from '../pagination/pagination.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    PaginationModule
  ],
  providers: [CurrenciesService],
  declarations: [CurrenciesComponent, CurrencyDetailsComponent],
  exports: [CurrenciesComponent]
})
export class CurrencyModule { }
