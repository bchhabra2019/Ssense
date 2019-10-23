import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardigansComponent } from './cardigans.component';

describe('CardigansComponent', () => {
  let component: CardigansComponent;
  let fixture: ComponentFixture<CardigansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardigansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardigansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
