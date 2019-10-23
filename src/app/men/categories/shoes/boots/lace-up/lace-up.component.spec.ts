import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaceUpComponent } from './lace-up.component';

describe('LaceUpComponent', () => {
  let component: LaceUpComponent;
  let fixture: ComponentFixture<LaceUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaceUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaceUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
