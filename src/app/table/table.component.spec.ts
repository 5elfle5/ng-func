import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { columns } from './data/sample-table-data';

const people = [
    { user: 'Antory Joshua', age: 28 },
    { user: 'Deontey Wilder', age: 31 },
    { user: 'Genadiy Golovkin', age: 40 },
    { user: 'Saul Alvarez', age: 36 },
    { user: 'Vasyl Lomachenko', age: 32 },
];
describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should sort', () => {
    component.columns = columns;
    component.toggleSorting('user');
    let areEqual = true;
    component.rows.forEach((val, index) => {
      if (val.user !== people[index].user) {
        areEqual = false;
      }
    })
    expect(areEqual).toBeTruthy();
  });
});
