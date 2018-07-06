import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CurrenciesComponent} from './currencies.component';
import {DebugElement} from '@angular/core';
import {CurrenciesService} from '../../services/currencies.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {environment} from '../../../../environments/environment';
import {Router} from '@angular/router';
import {PaginationModule} from '../../../pagination/pagination.module';
import {By} from '@angular/platform-browser';

describe('CurrenciesComponent', () => {
  let component: CurrenciesComponent;
  let fixture: ComponentFixture<CurrenciesComponent>;
  let debugElement: DebugElement;
  let httpTestingController: HttpTestingController;
  let router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PaginationModule, HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      declarations: [ CurrenciesComponent],
      providers: [CurrenciesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    httpTestingController = TestBed.get(HttpTestingController);
    fixture = TestBed.createComponent(CurrenciesComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title "Available currencies" on the main page', () => {

    /*given*/
    const expectedUrl = encodeURI(environment.openfintechUrl + '/currencies?page[size]=10');
    debugElement = fixture.debugElement;

    /*when*/
    fixture.detectChanges();

    /*then*/
    httpTestingController.expectOne({url: expectedUrl, method: 'GET'});
    expect(debugElement.nativeElement.querySelector('h1').textContent).toContain('Available currencies');
  });

  it('must display 150 first currencies on main page', async(() => {

    /*given*/
    fixture.detectChanges();
    httpTestingController.expectOne({method: 'GET'}).flush({});

    const expectedCurrencyId1 = 'expectedCurrencyId1';
    const expectedCurrencyType1 = 'expectedCurrencyType1';
    const expectedCurrencySymbol1 = 'expectedCurrencySymbol1';
    const expectedCurrencyId2 = 'expectedCurrencyId2';
    const expectedCurrencyType2 = 'expectedCurrencyType2';
    const expectedCurrencySymbol2 = 'expectedCurrencySymbol2';
    const expectedDataResponse = {
       data: [
          {
            id: expectedCurrencyId1,
            attributes: {
              currency_type: expectedCurrencyType1,
              symbol: expectedCurrencySymbol1,
            }
          },
          {
              id: 'expectedCurrencyId2',
              attributes: {
                currency_type: expectedCurrencyType2,
                symbol: expectedCurrencySymbol2,
              }
          }
       ]
    };
    const expectedUrl = encodeURI(environment.openfintechUrl + '/currencies?page[size]=150');

    /*when*/
    component.changePageSize('150');
    fixture.detectChanges();

    /*then*/
    httpTestingController.expectOne({url: expectedUrl, method: 'GET'}).flush(expectedDataResponse);
    expect(component.currencies.length).toBe(2);

    fixture.detectChanges();
    debugElement = fixture.debugElement;
    const currencyIndex1 = 0;
    expect(debugElement.queryAll(By.css('.currency-id'))[currencyIndex1].nativeElement.textContent).toBe(expectedCurrencyId1);
    expect(debugElement.queryAll(By.css('.currency-type'))[currencyIndex1].nativeElement.textContent).toBe(expectedCurrencyType1);
    expect(debugElement.queryAll(By.css('.currency-symbol'))[currencyIndex1].nativeElement.textContent).toBe(expectedCurrencySymbol1);
    const currencyIndex2 = 1;
    expect(debugElement.queryAll(By.css('.currency-id'))[currencyIndex2].nativeElement.textContent).toBe(expectedCurrencyId2);
    expect(debugElement.queryAll(By.css('.currency-type'))[currencyIndex2].nativeElement.textContent).toBe(expectedCurrencyType2);
    expect(debugElement.queryAll(By.css('.currency-symbol'))[currencyIndex2].nativeElement.textContent).toBe(expectedCurrencySymbol2);
  }));

  it('should change route to go to currency details when click on a currency', () => {

    /*given*/
    const expectedCurrencyId1 = 'expectedCurrencyId1';
    const expectedDataResponse = { data: [ {id: expectedCurrencyId1} ] };
    fixture.detectChanges();
    const expectedUrl = encodeURI(environment.openfintechUrl + '/currencies?page[size]=10');
    httpTestingController.expectOne({url: expectedUrl, method: 'GET'}).flush(expectedDataResponse);
    spyOn(router, 'navigate');

    /*when*/
    component.goToCurrencyDetails(component.currencies[0]);

    /*then*/
    expect(router.navigate).toHaveBeenCalledWith([ '/currency', expectedCurrencyId1 ]);
  });
});
