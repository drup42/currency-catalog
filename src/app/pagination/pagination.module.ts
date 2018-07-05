import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageSizeSelectorComponent} from './components/page-size-selector/page-size-selector.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [PageSizeSelectorComponent],
  exports: [PageSizeSelectorComponent]
})
export class PaginationModule { }
