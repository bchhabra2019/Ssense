import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurtlenecksComponent } from './turtlenecks.component';

describe('TurtlenecksComponent', () => {
  let component: TurtlenecksComponent;
  let fixture: ComponentFixture<TurtlenecksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurtlenecksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurtlenecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
