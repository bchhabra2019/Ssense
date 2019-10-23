import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeatherPantsComponent } from './leather-pants.component';

describe('LeatherPantsComponent', () => {
  let component: LeatherPantsComponent;
  let fixture: ComponentFixture<LeatherPantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeatherPantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeatherPantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
