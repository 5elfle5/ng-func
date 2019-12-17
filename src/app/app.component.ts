import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  items = [
    { user: 'Genadiy Golovkin', age: 40 },
    { user: 'Deontey Wilder', age: 31 },
    { user: 'Saul Alvarez', age: 36 },
    { user: 'Antory Joshua', age: 28 },
    { user: 'Vasyl Lomachenko', age: 32 },
  ];
  columns = [
    { name: 'user', displayName: 'Name' },
    { name: 'age', displayName: 'Age' },
  ]
}

