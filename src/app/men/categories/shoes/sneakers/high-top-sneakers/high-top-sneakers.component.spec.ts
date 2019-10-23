import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighTopSneakersComponent } from './high-top-sneakers.component';

describe('HighTopSneakersComponent', () => {
  let component: HighTopSneakersComponent;
  let fixture: ComponentFixture<HighTopSneakersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighTopSneakersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighTopSneakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
