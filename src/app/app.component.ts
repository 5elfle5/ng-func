import { Component } from '@angular/core';
import { items, columns } from './table/data/sample-table-data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  items = items;
  columns = columns;
}

