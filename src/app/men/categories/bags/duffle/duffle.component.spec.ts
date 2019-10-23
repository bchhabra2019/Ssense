import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuffleComponent } from './duffle.component';

describe('DuffleComponent', () => {
  let component: DuffleComponent;
  let fixture: ComponentFixture<DuffleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuffleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuffleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
