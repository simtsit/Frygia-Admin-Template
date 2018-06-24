import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapglobalComponent } from './mapglobal.component';

describe('MapglobalComponent', () => {
  let component: MapglobalComponent;
  let fixture: ComponentFixture<MapglobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapglobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapglobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
