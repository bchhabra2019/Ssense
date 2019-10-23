import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SweatpantsComponent } from './sweatpants.component';

describe('SweatpantsComponent', () => {
  let component: SweatpantsComponent;
  let fixture: ComponentFixture<SweatpantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SweatpantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SweatpantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
