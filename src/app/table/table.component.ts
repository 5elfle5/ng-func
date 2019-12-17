import { Component, OnInit, Input } from '@angular/core';
import { TableColumn, SortFn } from './models/table-models';
import * as Fn from './functions/table-functions';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() rows: any[];
  @Input() columns: TableColumn[];

  sortCol: string;
  isAscDirection = true;
  getSortFn: SortFn;
  constructor() {
      this.getSortFn = Fn.getSortFn(Fn.getAscComparer, Fn.getDescComparer, Fn.bothString);
  }

  ngOnInit() {    
  }

  toggleSorting(columnName: string) {
    this.isAscDirection = columnName === this.sortCol
      ? !this.isAscDirection
      : true;
    const sortFn = this.getSortFn(columnName, this.isAscDirection);
    this.rows = this.rows.sort(sortFn);    
    this.sortCol = columnName;
  }

  getThClass(columnName: string) {
    return {
      'sort-asc': this.sortCol === columnName && this.isAscDirection,
      'sort-desc': this.sortCol === columnName && !this.isAscDirection,
    }
  }
}