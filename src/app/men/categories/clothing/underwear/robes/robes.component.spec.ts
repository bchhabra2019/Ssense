import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobesComponent } from './robes.component';

describe('RobesComponent', () => {
  let component: RobesComponent;
  let fixture: ComponentFixture<RobesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
