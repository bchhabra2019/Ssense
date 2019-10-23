import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeatherJacketsComponent } from './leather-jackets.component';

describe('LeatherJacketsComponent', () => {
  let component: LeatherJacketsComponent;
  let fixture: ComponentFixture<LeatherJacketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeatherJacketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeatherJacketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
