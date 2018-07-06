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

  currency: Currency;

  constructor(private currenciesService: CurrenciesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadCurrency();
  }

  private loadCurrency() {
    const id = this.route.snapshot.paramMap.get('id');
    this.currenciesService.getCurrency(id).subscribe(currency => this.currency = currency);
  }
}
