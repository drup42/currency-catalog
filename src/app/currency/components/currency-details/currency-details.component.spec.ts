import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CurrencyDetailsComponent} from './currency-details.component';
import {environment} from '../../../../environments/environment';
import {ActivatedRoute} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {CurrenciesService} from '../../services/currencies.service';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

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

  it('should display data of the selected currency', () => {

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

    /*then*/
    httpTestingController.expectOne({url: expectedUrl, method: 'GET'}).flush(expectedDataResponse);
    fixture.detectChanges();

    const debugElement = fixture.debugElement;
    expect(debugElement.query(By.css('h1')).nativeElement.textContent).toBe(expectedId);
    expect(debugElement.query(By.css('.currency-code')).nativeElement.textContent).toBe(expectedCode);
    expect(debugElement.query(By.css('.currency-name')).nativeElement.textContent).toBe(expectedName);
    expect(debugElement.query(By.css('.currency-type')).nativeElement.textContent).toBe(expectedType);
    expect(debugElement.query(By.css('.currency-code-iso-numeric3')).nativeElement.textContent).toBe(expectedCodeIsoNumeric3);
    expect(debugElement.query(By.css('.currency-code-iso-alpha3')).nativeElement.textContent).toBe(expectedCodeIsoAlpha3);
    expect(debugElement.query(By.css('.currency-symbol')).nativeElement.textContent).toBe(expectedSymbol);
    expect(debugElement.query(By.css('.currency-native-symbol')).nativeElement.textContent).toBe(expectedNativeSymbol);
    expect(debugElement.query(By.css('.currency-category')).nativeElement.textContent).toBe(expectedCategory);
  });
});
