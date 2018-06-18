import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartsimpleComponent } from './barchartsimple.component';

describe('BarchartsimpleComponent', () => {
  let component: BarchartsimpleComponent;
  let fixture: ComponentFixture<BarchartsimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarchartsimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarchartsimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
