import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {CurrencyModule} from './currency/currency.module';
import {AppRoutingModule} from './app-routing.module';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CurrencyModule, AppRoutingModule],
      declarations: [
        AppComponent,
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
