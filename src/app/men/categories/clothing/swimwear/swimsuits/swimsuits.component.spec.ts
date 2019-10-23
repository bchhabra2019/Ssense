import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwimsuitsComponent } from './swimsuits.component';

describe('SwimsuitsComponent', () => {
  let component: SwimsuitsComponent;
  let fixture: ComponentFixture<SwimsuitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwimsuitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwimsuitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
