import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CurrencyDetailsComponent} from './currency-details.component';
import {environment} from '../../../../environments/environment';
import {ActivatedRoute} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {CurrenciesService} from '../../services/currencies.service';

describe('CurrencyDetailsComponent', () => {
  let component: CurrencyDetailsComponent;
  let fixture: ComponentFixture<CurrencyDetailsComponent>;
  let httpTestingController: HttpTestingController;
  let activatedRoute: ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      declarations: [ CurrencyDetailsComponent ],
      providers: [ CurrenciesService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    activatedRoute = TestBed.get(ActivatedRoute);
    httpTestingController = TestBed.get(HttpTestingController);
    fixture = TestBed.createComponent(CurrencyDetailsComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  /*TODO : FIX TEST ( httpTestingController.expectOne(...) is not called) */
  xit('should display data of the selected currency', () => {

    /*given*/
    const expectedId = 'expectedId';
    const expectedCode = 'expectedCode';
    const expectedName = 'expectedName';
    const expectedType = 'expectedType';
    const expectedCodeIsoNumeric3 = 'expectedCodeIsoNumeric3';
    const expectedCodeIsoAlpha3 = 'expectedCodeIsoAlpha3';
    const expectedSymbol = 'expectedSymbol';
    const expectedNativeSymbol = 'expectedNativeSymbol';
    const expectedCategory = 'expectedCategory';
    const expectedDataResponse = {
      data: {
        id: expectedId,
        attributes: {
          code: expectedCode,
          name: expectedName,
          currency_type: expectedType,
          code_iso_numeric3: expectedCodeIsoNumeric3,
          code_iso_alpha3: expectedCodeIsoAlpha3,
          symbol: expectedSymbol,
          native_symbol: expectedNativeSymbol,
          category: expectedCategory
        }
      }
    };
    const expectedUrl = environment.openfintechUrl + '/currencies/' + expectedId;
    spyOn(activatedRoute.snapshot.paramMap, 'get').and.returnValue(expectedId);

    /*when*/
    fixture.detectChanges();
    httpTestingController.expectOne({url: expectedUrl, method: 'GET'}).flush(expectedDataResponse);

    /*then*/
    expect(component.getCurrencyId()).toBe(expectedId);
    expect(component.getCurrencyName()).toBe(expectedName);
    expect(component.getCurrencyCode()).toBe(expectedCode);
    expect(component.getCurrencyType()).toBe(expectedType);
    expect(component.getCurrencyCodeIsoNumeric3()).toBe(expectedCodeIsoNumeric3);
    expect(component.getCurrencyCodeIsoAlpha3()).toBe(expectedCodeIsoAlpha3);
    expect(component.getCurrencySymbol()).toBe(expectedSymbol);
    expect(component.getCurrencyNativeSymbol()).toBe(expectedNativeSymbol);
    expect(component.getCurrencyCategory()).toBe(expectedCategory);
  });
});
