import { Component, OnInit } from '@angular/core';
import {CurrenciesService} from '../../services/currencies.service';
import {Currency} from '../../models/currency';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'sgcib-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.css']
})
export class CurrencyDetailsComponent implements OnInit {

  private currency: Currency;

  constructor(private currenciesService: CurrenciesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadCurrency();
  }

  private loadCurrency() {
    const id = this.route.snapshot.paramMap.get('id');
    this.currenciesService.getCurrency(id).subscribe(currency => this.currency = currency);
  }

  getCurrencyId(): string {
    return this.currency.id;
  }

  getCurrencyCode(): string {
    return this.currency.attributes.code;
  }

  getCurrencyName(): string {
    return this.currency.attributes.name;
  }

  getCurrencyType(): string {
    return this.currency.attributes.currency_type;
  }

  getCurrencySymbol(): string {
    return this.currency.attributes.symbol;
  }

  getCurrencyNativeSymbol(): string {
    return this.currency.attributes.native_symbol;
  }

  getCurrencyCodeIsoNumeric3(): string {
    return this.currency.attributes.code_iso_numeric3;
  }

  getCurrencyCodeIsoAlpha3(): string {
    return this.currency.attributes.code_iso_alpha3;
  }

  getCurrencyCategory(): string {
    return this.currency.attributes.category;
  }
}
