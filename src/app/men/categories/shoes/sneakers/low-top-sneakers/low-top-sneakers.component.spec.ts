import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowTopSneakersComponent } from './low-top-sneakers.component';

describe('LowTopSneakersComponent', () => {
  let component: LowTopSneakersComponent;
  let fixture: ComponentFixture<LowTopSneakersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowTopSneakersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowTopSneakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
