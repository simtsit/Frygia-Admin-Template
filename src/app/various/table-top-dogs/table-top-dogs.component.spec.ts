import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTopDogsComponent } from './table-top-dogs.component';

describe('TableTopDogsComponent', () => {
  let component: TableTopDogsComponent;
  let fixture: ComponentFixture<TableTopDogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableTopDogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTopDogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
