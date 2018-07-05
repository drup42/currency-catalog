import {Component, OnInit, SimpleChanges} from '@angular/core';
import {CurrenciesService} from '../../services/currencies.service';
import {Currency} from '../../models/currency';
import {Router} from '@angular/router';

@Component({
  selector: 'sgcib-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {

  currencies: Currency[];
  pageSize = '10';

  constructor(private currenciesService: CurrenciesService, private router: Router) { }

  ngOnInit() {
    this.loadCurrencies();
  }

  changePageSize(newPageSize) {
    this.pageSize = newPageSize;
    this.loadCurrencies();
  }

  private loadCurrencies() {
     this.currenciesService.getCurrencies(this.pageSize).subscribe(currencies => this.currencies = currencies);
  }

  goToCurrencyDetails(currency: Currency) {
    this.router.navigate(['/currency', currency.id]);
  }

  getCurrencyId(currency: Currency): string {
    return currency.id;
  }

  getCurrencyType(currency: Currency): string {
    return currency.attributes.currency_type;
  }

  getCurrencySymbol(currency: Currency): string {
    return currency.attributes.symbol;
  }
}
