import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSizeSelectorComponent } from './page-size-selector.component';
import {FormsModule} from '@angular/forms';

describe('PageSizeSelectorComponent', () => {
  let component: PageSizeSelectorComponent;
  let fixture: ComponentFixture<PageSizeSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ PageSizeSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSizeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should enable to select a new page size', () => {

    /*given*/
    const newPageSize = '50';
    spyOn(component.pageSizeChange, 'emit');

    /*when*/
    component.pageSize = newPageSize;

    /*then*/
    expect(component.pageSizeChange.emit).toHaveBeenCalledWith(newPageSize);
  });
});
