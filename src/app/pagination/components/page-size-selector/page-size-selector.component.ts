import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'sgcib-page-size-selector',
  templateUrl: './page-size-selector.component.html',
  styleUrls: ['./page-size-selector.component.css']
})
export class PageSizeSelectorComponent implements OnInit {

  @Input('pageSize') pageSizeValue;
  @Output() pageSizeChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  get pageSize() {
    return this.pageSizeValue;
  }

  set pageSize(value: string) {
    this.pageSizeValue = value;
    this.pageSizeChange.emit(this.pageSizeValue);
  }
}
