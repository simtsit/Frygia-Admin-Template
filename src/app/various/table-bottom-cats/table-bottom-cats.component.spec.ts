import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBottomCatsComponent } from './table-bottom-cats.component';

describe('TableBottomCatsComponent', () => {
  let component: TableBottomCatsComponent;
  let fixture: ComponentFixture<TableBottomCatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableBottomCatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBottomCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
