import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HenleysComponent } from './henleys.component';

describe('HenleysComponent', () => {
  let component: HenleysComponent;
  let fixture: ComponentFixture<HenleysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HenleysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HenleysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
