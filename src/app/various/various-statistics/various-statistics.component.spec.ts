import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariousStatisticsComponent } from './various-statistics.component';

describe('VariousStatisticsComponent', () => {
  let component: VariousStatisticsComponent;
  let fixture: ComponentFixture<VariousStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariousStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariousStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
