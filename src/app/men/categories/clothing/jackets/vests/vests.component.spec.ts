import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VestsComponent } from './vests.component';

describe('VestsComponent', () => {
  let component: VestsComponent;
  let fixture: ComponentFixture<VestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
