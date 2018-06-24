import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiechartsimpleComponent } from './piechartsimple.component';

describe('PiechartsimpleComponent', () => {
  let component: PiechartsimpleComponent;
  let fixture: ComponentFixture<PiechartsimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiechartsimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiechartsimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
